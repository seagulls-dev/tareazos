//NOTIFICACIONES AL CREAR UN REQUEST
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { moveMessagePortToContext } from 'worker_threads';
import { normalize } from 'normalize-diacritics';
import { Console } from 'console';
const req = require("request-promise");
import { AzureUrl } from './index';
import * as userData from './userData';
export const notificationOnNewRequest = functions.firestore.document('Requests/{docId}').onCreate(async (snapshot, context) => {
    var message;
    let savePush = [];
    const ref = snapshot.ref;
    const taskref = ref.parent.parent;
    const requestAuthor = snapshot.get('authorname');
    const requestId = snapshot.get('docId');
    const requestcategory = snapshot.get('category');
    const requestsSubcategory = snapshot.get('subcategory');
    const location = snapshot.get('location');
    const title = snapshot.get('title');
    const requestToHire = snapshot.get('hireRequestUids');
    const status = snapshot.get('status');
    const authorid = snapshot.get('authorid');
    const locality = await normalize(location.locality);
    let topic;
    if (locality && status == 'Open') {

        if (requestsSubcategory)
            topic = locality + '_' + await normalize(requestsSubcategory);
        else
            topic = locality + '_' + await normalize(requestcategory);

        topic = topic.replace(/\s/g, "");
        console.log(topic);
        message = {
            notification: {
                title: `Nueva tarea de ${requestcategory}`,
                body: `Se ha creado una nueva tarea de ${requestcategory} en ${locality}`,

            },
            topic: topic,
            data: {
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                screen: "Bidders",
                requestId: requestId ?? '',
                category: requestcategory ?? '',
                subcategory: requestsSubcategory ?? ''
            }
        };
        let response1 = await admin.messaging().send(message);
        console.log(response1);

        savePush.push({
            category: requestcategory,
            description: message["notification"]["body"] ?? '',
            requestID: message["data"]["requestId"] ?? '',
            screen: message["data"]["screen"] ?? '',
            title: message["notification"]["title"] ?? '',
            uid: topic,
            id: 0
        });

    }

    if (requestToHire) {
        console.log(requestToHire);
        for (const uid in requestToHire) {
            console.log(requestToHire[uid]);
            const userDoc = await admin.firestore().doc('userData/' + requestToHire[uid]).get();
            const clientFcmToken = userDoc.get('fcMessagingToken');
            if (clientFcmToken) {
                message = {
                    notification: {
                        title: `Nueva solicitud de cotización.`,
                        body: `${requestAuthor} desea recibir una oferta para la tarea ${title}.`,

                    },
                    token: clientFcmToken,
                    data: {
                        click_action: 'FLUTTER_NOTIFICATION_CLICK',
                        screen: "Bidders",
                        requestId: requestId,
                        category: requestcategory,
                        subcategory: requestsSubcategory ?? '',
                        uid: requestToHire[uid],
                        isTasker: 'true'
                    }
                }
                let response2 = await admin.messaging().send(message);
                console.log(response2);
                savePush.push({
                    category: requestcategory,
                    description: message["notification"]["body"] ?? '',
                    requestID: message["data"]["requestId"] ?? '',
                    screen: message["data"]["screen"] ?? '',
                    title: message["notification"]["title"] ?? '',
                    uid: message.data.uid ?? 'test',
                    id: 0,
                    isTasker: message.data.isTasker == 'true' ? true : false,
                    isClient: message.data.isClient == 'true' ? true : false,
                });
            }
        }
    }

   const data =  await admin.firestore().doc('userData/'+ authorid).get();
    const authorToken = data.get('fcMessagingToken');
    let currentbalance = data.get('currentBalance');
    let postedTasks = data.get('postedTasks');
    if(postedTasks){
      postedTasks = Number.parseFloat(postedTasks) + 1.00;
        await admin.firestore().collection("userData").doc(authorid).update({ postedTasks : postedTasks });    
    }
    else
    {
        postedTasks = 1;
        //PROMOCIÓN 5 DE CRÉDITO
        if(currentbalance)
        currentbalance = Number.parseFloat(currentbalance) + 5.00;
        else 
        currentbalance = 5.00;
       await admin.firestore().collection("userData").doc(authorid).update({ currentBalance: currentbalance, postedTasks : postedTasks }); 

       const movement = {
        asClient: true,
        asTasker: false,
        authoruid: "SuJ7A4vEX8UHULDotljDO1qUJ583",
        chargedAmount: 5.00,
        comissionFee: 0,
        concept: "Crédito promocional",
        creditTotal: 5.00,
        movementDate: new Date(),
        movementType: "CreditByPromo",
        requestId: null,
        tax: 0,
        uid: authorid,
    };
        await admin.firestore().collection("accountMovements").add(movement)
    
        
        if (authorToken) {
            message = {
                notification: {
                    title: `Has recibido un crédito  de $5.00`,
                    body: `Gracias por publicar tu primera tarea, utiliza este crédito para pagar al tareador de tu elección`,

                },
                token: authorToken,
                data: {
                    click_action: 'FLUTTER_NOTIFICATION_CLICK',
                    screen: "Bidders",
                    requestId: requestId,
                    category: requestcategory,
                    subcategory: requestsSubcategory ?? '',
                    uid: authorid,
                    isClient: 'true'
                }
            }
            let response2 = await admin.messaging().send(message);
            console.log(response2);
            savePush.push({
                category: requestcategory,
                description: message["notification"]["body"] ?? '',
                requestID: message["data"]["requestId"] ?? '',
                screen: message["data"]["screen"] ?? '',
                title: message["notification"]["title"] ?? '',
                uid: message.data.uid ?? 'test',
                id: 0,
                isTasker: message.data.isTasker == 'true' ? true : false,
                isClient: message.data.isClient == 'true' ? true : false,
            });
        }
    }
    
    const url = AzureUrl + "AddNotifications";

    if (savePush.length > 0) {
        //SAVE NOTIFICACTIONS ON WEBAPI
        let options = {
            method: 'POST',
            url: url,
            headers: {
                "content-type": 'application/json'
            },
            body: { criteria: savePush },
            json: true,
        };
        console.log(savePush);
        req(options).then(async function (body) {
            console.log(body);
        });
    }
 //ACTIVAR SOLO EN PROD
      userData.sendEmail('customerservice@tareazos.com','Se ha creado una nueva tarea de '+ requestcategory, 'https://www.tareazos.com/tasks/product/'+requestId,"info@tareazos.com");
    
});
//NOTIFICACIONES EN EL UPDATE DE UN REQUESTS
export const notificationOnUpdateRequest = functions.firestore.document('Requests/{docId}').onUpdate(async (event, context) => {

    let messages: any[] = [];

    const title = event.after.get('title');
    const uid = event.after.get('authorid');
    const PrevrequestToHire = event.before.get('hireRequestUids');
    const newrequestToHire = event.after.get('hireRequestUids');
    const requestId = event.after.get('docId');
    const requestcategory = event.after.get('category');
    const requestAuthor = event.after.get('authorname');
    const requestStatus = event.after.get('status');
    const prevReqStatus = event.before.get('status');
    const released = event.after.get('released');
    const prevReleased = event.before.get('released');
    const requestsSubcategory = event.after.get('subcategory') ?? ' ';
    const userDoc = await admin.firestore().doc('userData/' + uid).get();
    const clientFcmToken = userDoc.get('fcMessagingToken');
    let taskeruid = event.after.get('awardedTasker');
    let prevtasker = event.before.get('awardedTasker');
    let taskerDoc;
    let taskerToken;
    let taskerName;
    if (taskeruid) {
        taskerDoc = await admin.firestore().doc('userData/' + taskeruid).get();
        taskerToken = taskerDoc.get('fcMessagingToken');
        taskerName = taskerDoc.get('name');
    }
    //Account movements 
    const releasedAfter = event.after.get('released');
    const releasedBefore = event.before.get('released');
    let chargedAmount = event.after.get('chargedAmount');
    const inprogress = event.after.get('inProgress');
    const inprogressPrev = event.before.get('inProgress');

    const reviewed = event.after.get('reviewed');
    const reviewedPrev = event.before.get('reviewed');

    if (inprogress != inprogressPrev && inprogress == true) {
        messages.push({
            notification: {
                title: 'Tarea Iniciada',
                body: `${taskerName} indicó que ha iniciado a trabajar en tu tarea: ` + title,

            },
            token: clientFcmToken,
            data: {
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                screen: "Bidders",
                requestId: requestId,
                category: requestcategory,
                subcategory: requestsSubcategory,
                uid: uid,
                isClient: 'true'
            }
        });
    }

    if (reviewed != reviewedPrev && reviewed == true) {
        messages.push({
            notification: {
                title: 'Nueva Reseña',
                body: `${requestAuthor} ha calificado tu tarea: ` + title,

            },
            token: taskerToken,
            data: {
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                screen: "Review",
                requestId: requestId,
                category: requestcategory,
                subcategory: requestsSubcategory,
                uid: taskeruid,
                isTasker: 'true'
            }
        });
    }


    //when fund has been released
    if (releasedAfter != releasedBefore && releasedAfter == true) {

        try {
            chargedAmount = Number.parseFloat(chargedAmount);
        } catch (err) {
            chargedAmount = 0.00;
        }
        let comissionFee = 0.00

        if (requestcategory == 'Entregas' || requestcategory == 'Viajes')
            comissionFee = (chargedAmount * 0.20);
        else
            comissionFee = (chargedAmount * 0.10);

        const taskerTotal = chargedAmount - comissionFee;

        const transactionId = admin.firestore().collection('accountMovements').doc().id;
        await admin.firestore().collection('accountMovements').doc(transactionId).set({
            requestId: requestId,
            chargedAmount: chargedAmount,
            tax: 0.00,
            comissionFee: comissionFee,
            creditTotal: taskerTotal,
            uid: taskeruid,
            asTasker: true,
            asClient: false,
            movementDate: Date.now(),
            authoruid: uid,
            docId: transactionId,
            concept: title,
            movementType: "ReleasedByClient"
        });
        console.log("saved accountMovement");

        const userdata = await admin.firestore().collection("userData").doc(taskeruid).get();
        let currentbalance = userdata.get('currentBalance');
        if (currentbalance && taskerTotal)
            currentbalance = Number.parseFloat(currentbalance) + taskerTotal;
        else
            currentbalance = taskerTotal;

        console.log(currentbalance);
        await admin.firestore().collection("userData").doc(taskeruid).update({ currentBalance: currentbalance });

        messages.push({
            notification: {
                title: 'Fondos liberados',
                body: `${requestAuthor} ha liberado los fondos de la tarea ` + title,

            },
            token: taskerToken,
            data: {
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                screen: "Bidders",
                requestId: requestId,
                category: requestcategory,
                subcategory: requestsSubcategory,
                uid: taskeruid,
                isTasker: 'true'
            }
        });
    }

    //when tasker cancel the task 
    if (clientFcmToken && requestStatus == 'Open' && prevReqStatus == 'Assigned') {
        messages.push({
            notification: {
                title: 'Tarea Anulada',
                body: `La tarea ` + title + ' ha sido anulada',

            },
            token: clientFcmToken,
            data: {
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                screen: "Bidders",
                requestId: requestId,
                category: requestcategory,
                subcategory: requestsSubcategory,
                uid: uid,
                isClient: 'true'
            }
        });
    }
    //when client cancel the task
    if (taskerToken && requestStatus == 'Open' && prevReqStatus == 'Assigned') {
        messages.push({
            notification: {
                title: 'Tarea Anulada',
                body: `La tarea ` + title + ' ha sido anulada',

            },
            token: taskerToken,
            data: {
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                screen: "Bidders",
                requestId: requestId,
                category: requestcategory,
                subcategory: requestsSubcategory,
                uid: taskeruid,
                isClient: 'true'
            }
        });
    }

    //when tasker complete the task
    if (clientFcmToken && requestStatus == 'Completed' && requestStatus != prevReqStatus) {
        messages.push({
            notification: {
                title: 'Tarea Finalizada',
                body: `El tareador ha marcado la tarea ` + title + ' como completada',

            },
            token: clientFcmToken,
            data: {
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                screen: "Bidders",
                requestId: requestId,
                category: requestcategory,
                subcategory: requestsSubcategory,
                uid: uid,
                isClient: 'true'
            }
        });


        //INCREMENT COMPLETED TASKS BY TASKERS
        const providerdata = await admin.firestore().doc('Providers/' + taskeruid).get();
        const completedTask = providerdata.get('completedTaks');
        var counter = 0;
        if (completedTask)
            counter = completedTask + 1;
        else
            counter = 1;
        await admin.firestore().doc('Providers/' + taskeruid).update({ completedTasks: counter });
    }

    if (clientFcmToken && requestStatus == 'Void' && requestStatus != prevReqStatus) {
        messages.push({
            notification: {
                title: 'Tarea Cancelada',
                body: `El cliente ha cancelado la tarea ` + title,

            },
            token: clientFcmToken,
            data: {
                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                screen: "Bidders",
                requestId: requestId,
                category: requestcategory,
                subcategory: requestsSubcategory,
                uid: taskeruid,
                isTasker: 'true'
            }
        });
    }


    //notifications when tasker is hired
    if (taskeruid && context.auth?.uid != taskeruid && taskerToken) {
        if (prevtasker != taskeruid) {
            messages.push({
                notification: {
                    title: 'Nueva contratación',
                    body: `${requestAuthor} te ha contratado para la tarea: ` + title,

                },
                token: taskerToken,
                data: {
                    click_action: 'FLUTTER_NOTIFICATION_CLICK',
                    screen: "Bidders",
                    requestId: requestId,
                    category: requestcategory,
                    subcategory: requestsSubcategory,
                    uid: taskeruid,
                    isTasker: 'true'
                }
            });
        }
    }
    //Notification when client request to hire a specific tasker.
    if (PrevrequestToHire?.length != newrequestToHire?.length)
        for (const uidtasker in newrequestToHire) {
            if (PrevrequestToHire != null) {
                if (PrevrequestToHire.indexOf(newrequestToHire[uidtasker]) == -1) {
                    console.log(newrequestToHire[uidtasker]);
                    console.log(uidtasker);
                    let taskrdta = await admin.firestore().doc('userData/' + newrequestToHire[uidtasker]).get();
                    console.log('habian previas');
                    let tskrtokn = taskrdta.get('fcMessagingToken');
                    if (tskrtokn)
                        messages.push({
                            notification: {
                                title: `Nueva solicitud de cotización.`,
                                body: `${requestAuthor} desea recibir una oferta para la tarea ${title}.`,

                            },
                            token: tskrtokn,
                            data: {
                                click_action: 'FLUTTER_NOTIFICATION_CLICK',
                                screen: "Bidders",
                                requestId: requestId,
                                category: requestcategory,
                                subcategory: requestsSubcategory ?? '',
                                uid: newrequestToHire[uidtasker],
                                isTasker: 'true'
                            }
                        });
                }
            } else {

                let taskrdta = await admin.firestore().doc('userData/' + newrequestToHire[uidtasker]).get();
                console.log(newrequestToHire[uidtasker]);
                console.log(uidtasker);
                let tskrtokn = taskrdta.get('fcMessagingToken');
                if (tskrtokn)
                    messages.push({
                        notification: {
                            title: `Nueva solicitud de cotización.`,
                            body: `${requestAuthor} desea recibir una oferta para la tarea ${title}.`,

                        },
                        token: tskrtokn,
                        data: {
                            click_action: 'FLUTTER_NOTIFICATION_CLICK',
                            screen: "Bidders",
                            requestId: requestId,
                            category: requestcategory,
                            subcategory: requestsSubcategory ?? '',
                            uid: newrequestToHire[uidtasker],
                            isTasker: 'true'
                        }
                    });
            }
        }

    //SI LA TAREA FUE MARCADA COMO COMPLETADA Y ES DE ENTREGAS O VIAJES LIBERAR EL PAGO 
    if (requestcategory == "Entregas" ||
        requestcategory == "Viajes" && (clientFcmToken && requestStatus == 'Completed' && requestStatus != prevReqStatus))
        console.log('liberar pago automatico?');


    let response
    if (messages.length > 0) {
        response = await admin.messaging().sendAll(messages);
        console.log(response);
        const url = AzureUrl + "AddNotifications";
        let savePush = [];
        messages.forEach(message => {
            savePush.push({
                category: message["data"]["category"],
                description: message["notification"]["body"] ?? '',
                requestID: message["data"]["requestId"] ?? '',
                screen: message["data"]["screen"] ?? '',
                title: message["notification"]["title"] ?? '',
                uid: message.data.uid ?? 'test',
                id: 0,
                isTasker: message.data.isTasker == 'true' ? true : false,
                isClient: message.data.isClient == 'true' ? true : false,
            });
        });
        console.log(savePush);
        //SAVE NOTIFICACTIONS ON WEBAPI
        let options = {
            method: 'POST',
            url: url,
            headers: {
                "content-type": 'application/json'
            },
            body: { criteria: savePush },
            json: true,
        };

        req(options).then(async function (body) {
            console.log(body);
        });

    }
    else
        console.log("No se encontraron tokens");
});