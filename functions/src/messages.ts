//NOTIFICACIONES AL CREAR UN REQUEST
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
const accents = require('remove-accents');
const req = require("request-promise");

/* export const OnNewMessage = functions.firestore.document('chatrooms/{chatId}').onWrite(async (event, context) => {
    let messages: any[] = [];
    const taskerID = event.after.get('taskerId');
    const docId = event.after.id;
    const customerId = event.after.get('customerId');
    const customername = event.after.get('customerName');
    const taskername = event.after.get('taskername');

    console.log('author' + context.auth?.uid);
    
    if (context.auth?.uid == taskerID) {
        const userDoc = await admin.firestore().doc('userData/' + customerId).get();
        let userToken = userDoc.get('fcMessagingToken');
        console.log('tasker to customer');
        if (userToken)
            messages.push({
                notification: {
                    title: 'Nuevo Mensaje',
                    body: `tienes un nuevo mensaje de ` + taskername,

                },
                token: userToken,
                data: {
                    click_action: 'FLUTTER_NOTIFICATION_CLICK',
                    screen: "Messages",
                    chatroomId: docId,
                    requestId: ' ',
                    category: 'requestcategory',
                    subcategory: '',
                    uid: customerId
                }
            });
    }

    if (context.auth?.uid == customerId) {
        const userDoc = await admin.firestore().doc('userData/' + taskerID).get();
        let userToken = userDoc.get('fcMessagingToken');
        console.log('customer to tasker');
        if (userToken)
            messages.push({
                notification: {
                    title: 'Nuevo Mensaje',
                    body: `tienes un nuevo mensaje de ` + customername,

                },
                token: userToken,
                data: {
                    click_action: 'FLUTTER_NOTIFICATION_CLICK',
                    screen: "Messages",
                    chatroomId: docId,
                    requestId: ' ',
                    category: 'requestcategory',
                    subcategory: ' ',
                    uid: customerId
                }
            });
    }

    let response
    if (messages.length > 0) {
        response = await admin.messaging().sendAll(messages);
    }


}); */
