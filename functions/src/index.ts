import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import { Storage } from "@google-cloud/storage";
const gcs = new Storage();

import { tmpdir } from "os";
import { join, dirname } from "path";

import * as sharp from "sharp";
import * as fs from "fs-extra";
import { connect } from "http2";
const req = require("request-promise");

admin.initializeApp(functions.config().firebase);

export * from "./requests";
export * from "./userData";
export * from "./messages";
export * from "./providers";

//PROD URL FOR API http://tareazosapi.azurewebsites.net/TareazosService.svc/
// DEV URL FOR API http://tareazosapi-des.azurewebsites.net/TareazosService.svc/
export const AzureUrl =
    "http://tareazosapi-des.azurewebsites.net/TareazosService.svc/";

//UPDATE DEL USERDATA

//NOTIFICACIONES AL CREAR NUEVA OFERTA
export const sendNewOfferNotification = functions.firestore
    .document("Requests/{docId}/Offers/{offerId}")
    .onCreate(async (snapshot, context) => {
        var message;
        const ref = snapshot.ref;
        const taskref = ref.parent.parent;
        const offerAuthor = snapshot.get("authorname");
        const offervalue = snapshot.get("rate");
        const task = await (await taskref.get()).data();
        const authorid = task.authorid;
        const title = task.title;
        const requestId = task.docId;
        const requestcategory = task.category;
        const requestsSubcategory = task.subcategory ?? " ";
        let userData = await admin
            .firestore()
            .doc("userData/" + authorid)
            .get();
        let clientToken = userData.get("fcMessagingToken");
        if (clientToken) {
            message = {
                notification: {
                    title: `${offerAuthor} te ha hecho una oferta`,
                    body: `${offerAuthor} ha hecho una oferta sobre tu tarea ${title} por $ ${offervalue}`,
                },
                token: clientToken,
                data: {
                    click_action: "FLUTTER_NOTIFICATION_CLICK",
                    screen: "Bidders",
                    requestId: requestId,
                    category: requestcategory,
                    subcategory: requestsSubcategory,
                    uid: authorid,
                    isClient: "true",
                },
            };
        }
        let response;
        if (message) {
            response = await admin.messaging().send(message);
            console.log(response);
            const url = AzureUrl + "AddNotifications";
            let savePush = [];
            savePush.push({
                category: message["data"]["requestcategory"],
                description: message["notification"]["body"] ?? "",
                requestID: message["data"]["requestId"] ?? "",
                screen: message["data"]["screen"] ?? "",
                title: message["notification"]["title"] ?? "",
                uid: message.data.uid ?? "test",
                id: 0,
                isTasker: message.data.isTasker == "true" ? true : false,
                isClient: message.data.isClient == "true" ? true : false,
            });
            console.log(savePush);
            //SAVE NOTIFICACTIONS ON WEBAPI
            let options = {
                method: "POST",
                url: url,
                headers: {
                    "content-type": "application/json",
                },
                body: { criteria: savePush },
                json: true,
            };

            req(options).then(async function (body) {
                console.log(body);
            });
        } else console.log("No se encontraron tokens");
    });

//NOTIFICACIONES EN EL UPDATE DE UNA OFERTA
export const sendOfferUpdateNotification = functions.firestore
    .document("Requests/{docId}/Offers/{offerId}")
    .onUpdate(async (snapshot, context) => {
        var messages = [];
        const ref = snapshot.after.ref;
        const offerAuthor = snapshot.after.get("authorname");
        const offerAuthoruid = snapshot.after.get("authoruid");
        const awared = snapshot.after.get("awarded");
        const prevawarded = snapshot.before.get("awarded");
        const taskref = ref.parent.parent;
        const task = await (await taskref.get()).data();
        const authorid = task.authorid;
        const title = task.title;
        const requestId = task.docId;
        const requestcategory = task.category;
        const requestsSubcategory = task.subcategory ?? " ";
        const offerRate = snapshot.after.get("rate");
        let userData = await admin
            .firestore()
            .doc("userData/" + authorid)
            .get();
        let clientToken = userData.get("fcMessagingToken");
        console.log(clientToken);
        console.log(offerAuthoruid);
        console.log(context.auth?.uid);
        if (awared == prevawarded)
            if (clientToken) {
                // cuando no es el awarded que cambia enviar notificacion/ cuando cambia el awarded no enviar.
                messages.push({
                    notification: {
                        title: `${offerAuthor} modificó su oferta`,
                        body: `${offerAuthor} actualizó su oferta en tu tarea ${title} por $ ${offerRate}`,
                    },
                    token: clientToken,
                    data: {
                        click_action: "FLUTTER_NOTIFICATION_CLICK",
                        screen: "Bidders",
                        requestId: requestId,
                        category: requestcategory,
                        subcategory: requestsSubcategory,
                        uid: authorid,
                        isClient: "true",
                    },
                });
            }
        let response;
        if (messages.length > 0) {
            response = await admin.messaging().sendAll(messages);
            console.log(response);
            const url = AzureUrl + "AddNotifications";
            let savePush = [];
            messages.forEach((message) => {
                savePush.push({
                    category: message["data"]["requestcategory"],
                    description: message["notification"]["body"] ?? "",
                    requestID: message["data"]["requestId"] ?? "",
                    screen: message["data"]["screen"] ?? "",
                    title: message["notification"]["title"] ?? "",
                    uid: message.data.uid ?? "test",
                    id: 0,
                    isTasker: message.data.isTasker == "true" ? true : false,
                    isClient: message.data.isClient == "true" ? true : false,
                });
            });
            console.log(savePush);
            //SAVE NOTIFICACTIONS ON WEBAPI
            let options = {
                method: "POST",
                url: url,
                headers: {
                    "content-type": "application/json",
                },
                body: { criteria: savePush },
                json: true,
            };

            req(options).then(async function (body) {
                console.log(body);
            });
        } else console.log("No se encontraron tokens");
    });

//ENVIO DE CORREOS
export const GMailService = functions.https.onCall((data, context) => {
    const email = data["to"];
    var subject = data["subject"];
    var body = data["body"];
    const template = data["template"];
    const currentRole = data["currentRole"];
    var emailContent =
        "<strong>Hola,</strong>\
          <br>\
          <br>\
          Gracias por registrate como Tareador. ¡Qué bueno que podemos contar contigo!  \
          <br>\
          <br>\
          Tu perfil será activado en breve; te notificaremos mediante un correo de confirmación, en el que podrás encontrar información relevante sobre el uso de nuestra plataforma.<br>\
          Para algunas de nuestras categorías de tareas necesitamos validar y corroborar cierta información, dependiendo de esto se te podría asignar una breve entrevista en línea o pedir documentación adicional antes de habilitar tu perfil en la plataforma.\
          <br>\
          <br>\
          <br>\
          Hasta pronto,\
          <br>\
          Equipo Tareazos.";

    if (!email) {
        return JSON.parse("email en blanco");
    }
    if (!subject) {
        return JSON.parse("subject en blanco");
    }
    if (!body && !template) {
        console.log("body y template en blanco");
        return JSON.parse("body y template en blanco");
    }
    if (currentRole == "isClient") {
        emailContent =
            "<strong>Hola,</strong>\
          <br>\
          <br>\
          Gracias por unirte a Tareazos. Ya puedes publicar tareas y empezar a recibir ofertas de nuestros Tareadores. Si tienes alguna duda o comentario, no dudes en contactarnos a info@tareazos.com o en la opción de menú Contáctanos dentro del app.\
          <br>\
          <br>\
          <br>\
          Hasta pronto,\
          <br>\
          Equipo Tareazos.";
    }
    //ESTA ES UNA CONTRASEÑA DE APLICACIONES, SE GENERA EN MYACCOUNT.GOOGLE.COM / SEGURIDAD / CONTRASEÑAS DE APLICACIONES
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "info@tareazos.com",
                pass: "kcszedunqbhcmrfd",
            },
        });

        var options = {};
        if (body) {
            options = {
                from: "info@tareazos.com",
                to: email,
                subject: subject,
                html: body,
            };
        }

        if (template) {
            if (template == "Registro") {
                subject = "Bienvenido a Tareazos";
                body = getTemplate(emailContent);
            }

            options = {
                from: "info@tareazos.com",
                to: email,
                subject: subject,
                html: body,
            };
        }

        transporter.sendMail(options, (error, info) => {
            if (error) {
                console.log(error);
                return { data: { error: "error:" + error } };
            }
            console.log(info.response);
            return { data: { message: "Message Sent" + info.response } };
        });
    } catch (e) {
        console.log(e);
        return { data: { error: "error:" + e } };
    }
});

export const ProcessTransaction = functions.https.onCall(
    async (data, context) => {
        if (!context.auth) {
            return;
        }
        let newCard = true;
        const requestID = data["docId"];
        const totalPrice = data["totalPrice"];
        const fee = data["fee"];
        const offerPrice = data["offerPrice"];
        const tax = data["tax"];
        const amount = data["amount"]; //OFFERPRICE + FEE
        const codOperation = data["codOperation"];
        const cardNumber = data["cardnumber"];
        const cardHolderName = data["cardHolderName"];
        let expMonth = data["expirationMonth"];
        if (expMonth) {
            if (expMonth.toString().length == 1) expMonth = "0" + expMonth;
        }
        const expYear = data["expirationYear"];
        const last4digits = data["last4digits"];
        const cardType = data["creditCardType"];
        let concept = data["concept"];
        let description;
        if (concept) {
            description = "Contratación servicios profesionales de " + concept;
            concept = "Servicio de " + concept;
        }
        const cvv = data["cvv"];
        const userUid = data["uid"];
        const email = data["email"];
        const phone = data["phone"];
        const address = data["address"];
        const firstName = data["firstName"];
        const lastName = data["lastName"];
        let url;
        console.log(expMonth + "/" + expYear);

        // DESARROLLO https://sandbox.paguelofacil.com/
        // PRODUCCION https://secure.paguelofacil.com/rest/processTx/AUTH_CAPTURE
        if (codOperation)
            url = "https://secure.paguelofacil.com/rest/processTx/RECURRENT";
        else
            url = "https://secure.paguelofacil.com/rest/processTx/AUTH_CAPTURE";
        //D75B8A31662CB407E63CF3848986FA46A5BE243EBA5B1F5FE46714DC833D553E98E3641604282373BC0BE91022C122B76547780C3A2494215DC64766AC2A72FE  DESARROLLO
        // 63342FC3E3341FC06B8E2C8DFF8792C4100AF506D0BAAC433070F4C6406DFA77B890AAC4E940D1C98D52A998BE28295F185A20A0759A4E6CA41E7D00E520A4B3   PRODUCCION
        let payload;
        if (codOperation) {
            payload = {
                cclw:
                    "63342FC3E3341FC06B8E2C8DFF8792C4100AF506D0BAAC433070F4C6406DFA77B890AAC4E940D1C98D52A998BE28295F185A20A0759A4E6CA41E7D00E520A4B3",
                amount: amount, //El monto o valor total de la transacción a realizar. NO PONER
                taxAmount: 0.0,
                email: email, //String MaxLength:100 Email del
                phone: phone ?? "68329942", //Numeric MaxLength:16 Teléfono del Tarjeta habiente,
                address: address, //String MaxLength:100 Dirección del Tarjeta,
                concept: concept, //MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
                description: description, //MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
                codOper: codOperation,
                lang: "ES",
            };
            newCard = false;
        } else
            payload = {
                cclw:
                    "63342FC3E3341FC06B8E2C8DFF8792C4100AF506D0BAAC433070F4C6406DFA77B890AAC4E940D1C98D52A998BE28295F185A20A0759A4E6CA41E7D00E520A4B3",
                amount: amount, //El monto o valor total de la transacción a realizar. NO PONER
                taxAmount: tax,
                email: email, //String MaxLength:100 Email del
                phone: phone ?? "6000000", //Numeric MaxLength:16 Teléfono del Tarjeta habiente,
                address: address, //String MaxLength:100 Dirección del Tarjeta,
                concept: concept, //MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
                description: description, //MaxLength:150 ;Es la descripción o el motivo de la transacción en proceso
                lang: "ES",
                cardInformation: {
                    cardNumber: cardNumber,
                    expMonth: expMonth, //Mes de expiración de la tarjeta, siempre 2 dígitos
                    expYear: expYear, //Numeric Ej.:02 Año de expiración de la tarjeta.
                    cvv: cvv, //Código de Seguridad de la tarjeta Numeric MaxLength:3
                    firstName: firstName, //String MaxLength:25 Nombre del tarjeta habiente
                    lastName: lastName, //String MaxLength:25 Apellido del Tarjeta habiente
                    cardType: cardType,
                },
            };

        //SlLmEttBcJBgyYjIq4CasgIEsOtrFaZm|DIRrSx1mBY1DscRJDvs5D95qA PRODUCCIÓN
        //brEyQRSzMm2UwQa5v0NsobRa3U8nH5xT|DIReQuJZXcCQWDmJDjYgHHxxf DESAROLLO
        let options = {
            method: "POST",
            url: url,
            headers: {
                authorization:
                    "SlLmEttBcJBgyYjIq4CasgIEsOtrFaZm|DIRrSx1mBY1DscRJDvs5D95qA",
                "content-type": "application/json",
            },
            body: payload,
            json: true,
        };

        return req(options)
            .then(async function (body) {
                // TO - DO : NOT SUCCESS HANDLE.
                console.log(body);
                console.log("process status");
                console.log(body.success);
                console.log("payment status");
                console.log(body.data.status);
                if (body.success && body.data.status == 1) {
                    console.log("This is success+++++++++++++++++++++++++++++");
                    if (newCard) {
                        await admin
                            .firestore()
                            .collection("userData")
                            .doc(userUid)
                            .collection("creditCards")
                            .add({
                                last4digits: last4digits,
                                cardType: cardType,
                                codOper: body.data.codOper,
                                expirationMonth: expMonth,
                                expirationYear: expYear,
                            });
                        console.log("savedCreditCard");
                    }

                    //TO-DO: pasar a WebAPI
                    const transactionId = admin
                        .firestore()
                        .collection("transactions")
                        .doc().id;
                    await admin
                        .firestore()
                        .collection("transactions")
                        .doc(transactionId)
                        .set({
                            requestId: requestID,
                            totalPrice: totalPrice,
                            processingFee: fee,
                            offerPrice: offerPrice,
                            chargedAmount: amount, // offerprice + fee, TODO: if(itmbs tax APPLIES, ADD ITBMS)
                            tax: tax, //chargeAmount *ITBMS
                            codOper: body.data.codOper,
                            createDate: admin.firestore.Timestamp.now(),
                            idtxPF: body.data.idtx,
                            authoruid: userUid,
                            docId: transactionId,
                            concept: concept,
                            invoiceUrl: body.data.returnUrl,
                        });
                    console.log("saved Transaction");

                    await admin
                        .firestore()
                        .collection("Requests")
                        .doc(requestID)
                        .update({
                            paid: true,
                            transactionId: transactionId,
                            codOper: body.data.codOper,
                            actualPrice: amount,
                        });
                    console.log("updated request");
                }

                return body;
            })
            .catch(function (err) {
                return { message: "error" };
            });
    }
);

export const onTransactionUpdate = functions.firestore
    .document("transactions/{docId}")
    .onUpdate(async (snapshot, context) => {
        const credited = snapshot.after.get("credited");
        const prevcredite = snapshot.before.get("credited");
        const authoruid = snapshot.after.get("authoruid");
        const chargeAmount = snapshot.after.get("chargedAmount");
        const requestId = snapshot.after.get("requestId");
        const tax = snapshot.after.get("tax");
        const concept = snapshot.after.get("concept");
        const offerprice = snapshot.after.get("offerPrice");
        const processingfee = snapshot.after.get("processingFee");
        if (prevcredite != credited && credited == true) {
            const userdata = await admin
                .firestore()
                .collection("userData")
                .doc(authoruid)
                .get();
            let currentbalance = userdata.get("currentBalance");
            if (currentbalance && chargeAmount)
                currentbalance =
                    Number.parseFloat(currentbalance) +
                    Number.parseFloat(chargeAmount);
            else currentbalance = Number.parseFloat(chargeAmount);

            console.log(currentbalance);
            await admin
                .firestore()
                .collection("userData")
                .doc(authoruid)
                .update({ currentBalance: currentbalance });

            const transactionId = admin
                .firestore()
                .collection("accountMovements")
                .doc().id;
            await admin
                .firestore()
                .collection("accountMovements")
                .doc(transactionId)
                .set({
                    requestId: requestId,
                    chargedAmount: chargeAmount,
                    processingFee: processingfee,
                    tax: 0.0,
                    comissionFee: 0.0,
                    creditTotal: chargeAmount,
                    uid: authoruid,
                    asTasker: false,
                    asClient: true,
                    movementDate: admin.firestore.Timestamp.now(),
                    authoruid: authoruid,
                    docId: transactionId,
                    concept: "Crédito por tarea: " + concept,
                    movementType: "creditFromCancellation",
                });
        }
    });

export const onMovementUpdate = functions.firestore
    .document("accountMovements/{docId}")
    .onUpdate(async (snapshot, context) => {
        const credited = snapshot.after.get("credited");
        const prevcredite = snapshot.before.get("credited");
        const authoruid = snapshot.after.get("authoruid");
        const chargeAmount = snapshot.after.get("chargedAmount");
        const requestId = snapshot.after.get("requestId");
        const tax = snapshot.after.get("tax");
        const concept = snapshot.after.get("concept");

        if (prevcredite != credited && credited == true) {
            const userdata = await admin
                .firestore()
                .collection("userData")
                .doc(authoruid)
                .get();
            let currentbalance = userdata.get("currentBalance");
            if (currentbalance && chargeAmount)
                currentbalance =
                    Number.parseFloat(currentbalance) +
                    Number.parseFloat(chargeAmount);
            else currentbalance = Number.parseFloat(chargeAmount);

            console.log(currentbalance);
            await admin
                .firestore()
                .collection("userData")
                .doc(authoruid)
                .update({ currentBalance: currentbalance });
            const transactionId = admin
                .firestore()
                .collection("accountMovements")
                .doc().id;
            await admin
                .firestore()
                .collection("accountMovements")
                .doc(transactionId)
                .set({
                    requestId: requestId,
                    chargedAmount: chargeAmount,
                    processingFee: 0.0,
                    tax: 0.0,
                    comissionFee: 0.0,
                    creditTotal: chargeAmount,
                    uid: authoruid,
                    asTasker: false,
                    asClient: true,
                    movementDate: admin.firestore.Timestamp.now(),
                    authoruid: authoruid,
                    docId: transactionId,
                    concept: "Crédito por Tarea: " + concept,
                    movementType: "creditFromCancellation",
                });
        }
    });

export const processMovement = functions.https.onCall(async (data, context) => {
    const clientUid = data["clientUid"];
    const chargedAmount = data["chargedAmount"];
    const requestId = data["requestId"];
    const concept = data["concept"];

    try {
        const userdata = await admin
            .firestore()
            .collection("userData")
            .doc(clientUid)
            .get();
        let currentbalance = userdata.get("currentBalance");

        console.log(currentbalance);
        console.log(chargedAmount);
        if (currentbalance && currentbalance >= chargedAmount)
            currentbalance = Number.parseFloat(currentbalance) - chargedAmount;
        else
            return {
                message: "No se encontró crédito disponibe",
                success: false,
                data: { status: 0 },
            };

        console.log(currentbalance);
        await admin
            .firestore()
            .collection("userData")
            .doc(clientUid)
            .update({ currentBalance: currentbalance });

        const transactionId = admin
            .firestore()
            .collection("accountMovements")
            .doc().id;
        await admin
            .firestore()
            .collection("accountMovements")
            .doc(transactionId)
            .set({
                requestId: requestId,
                chargedAmount: chargedAmount,
                tax: 0.0,
                comissionFee: 0.0,
                creditTotal: -1 * chargedAmount,
                uid: clientUid,
                asTasker: false,
                asClient: true,
                movementDate: admin.firestore.Timestamp.now(),
                authoruid: clientUid,
                docId: transactionId,
                concept: concept,
                movementType: "TaskPayment",
            });
        console.log("saved accountMovement");

        //ACTUALIZAR TAREA COMO PAGA.
        await admin.firestore().collection("Requests").doc(requestId).update({
            paid: true,
            movementId: transactionId,
            codOper: "Internal",
            actualPrice: chargedAmount,
        });

        return { message: "success", success: true, data: { status: 1 } };
    } catch (error) {
        return { message: error, success: false, data: { status: 0 } };
    }
});

//CAMBIAR TAMAÑO A LAS IMAGENES AL SUBIRLAS
export const generateThumbs = functions.storage
    .object()
    .onFinalize(async (object) => {
        const bucket = gcs.bucket(object.bucket);
        const filePath = object.name;
        const contentType = object.contentType;
        const fileName = filePath.split("/").pop();

        const bucketDir = dirname(filePath);

        const workingDir = join(tmpdir(), "thumbs");
        const timestamp = Math.floor(Date.now() / 1000);
        const tmpFilePath = join(workingDir, "source_" + timestamp + ".png");

        // CONTINUE WITH ACTUAL PROCESS
        if (
            (object.metadata && object.metadata.resizedImage === "true") ||
            fileName.includes("thumb@") ||
            !object.contentType.includes("image")
        ) {
            console.log("exiting function");
            return false;
        } else {
            console.log("continuing function");
        }

        // 1. Ensure thumbnail dir exists
        await fs.ensureDir(workingDir);

        // 2. Download Source File
        await bucket.file(filePath).download({
            destination: tmpFilePath,
        });

        // 3. Resize the images and define an array of upload promises
        // - this is the actual place where we can define the thumbnail size.
        const sizes = [256];

        const uploadPromises = sizes.map(async (size) => {
            const thumbName = `thumb@${size}_${fileName}`;
            const thumbPath = join(workingDir, thumbName);

            // Resize source image
            await sharp(tmpFilePath).resize(size, null).toFile(thumbPath);

            const metadata: { [key: string]: any } = {
                contentDisposition: object.contentDisposition,
                contentEncoding: object.contentEncoding,
                contentLanguage: object.contentLanguage,
                contentType: contentType,
                metadata: object.metadata || {},
            };

            metadata.metadata.resizedImage = true;

            // Upload to GCS
            return bucket.upload(thumbPath, {
                destination: join(bucketDir, fileName),
                metadata,
            });
        });

        // 4. Run the upload operations
        await Promise.all(uploadPromises);

        // 5. Cleanup remove the tmp/thumbs from the filesystem
        return fs.remove(workingDir);
    });

export function getTemplate(content: string) {
    var template =
        "<html>" +
        "" +
        "<head>" +
        '  <meta http-equiv="Content-type" content="text/html; charset=utf-8">' +
        '  <meta http-equiv="X-UA-Compatible" content="IE=Edge">' +
        '  <meta http-equiv="Content-Security-Policy"' +
        "    content=\"default-src 'none';style-src 'unsafe-inline';img-src * blob: data:;font-src * data:\">" +
        '  <base target="_blank">' +
        '  <style class="icloud-message-base-styles">' +
        "    @font-face {" +
        "      font-family: 'SFNSText';" +
        "      src: local(\".SFNSText-Light\"), url('/fonts/SFNSText-Light.woff') format('woff');" +
        "      font-weight: 300;" +
        "    }" +
        "" +
        "    @font-face {" +
        "      font-family: 'SFNSText';" +
        "      src: local(\".SFNSText-Medium\"), url('/fonts/SFNSText-Medium.woff') format('woff');" +
        "      font-weight: 500;" +
        "    }" +
        "" +
        "    body {" +
        "      background-color: #ffffff;" +
        "      padding: 13px 20px 0px 20px;" +
        "      font: 15px 'SFNSText', 'Helvetica Neue', Helvetica, sans-serif;" +
        "      font-weight: 300;" +
        "      line-height: 1.4;" +
        "      margin: 0px;" +
        "      overflow: hidden;" +
        "      word-wrap: break-word;" +
        "    }" +
        "" +
        "    blockquote[type=cite].quoted-plain-text {" +
        "      line-height: 1.5;" +
        "      padding-bottom: 0px;" +
        "      white-space: normal;" +
        "    }" +
        "" +
        "    blockquote[type=cite] {" +
        "      border-left: 2px solid #003399;" +
        "      margin: 0;" +
        "      padding: 0 12px 0 12px;" +
        "      font-size: 15px;" +
        "      color: #003399;" +
        "    }" +
        "" +
        "    blockquote[type=cite] blockquote[type=cite] {" +
        "      border-left: 2px solid #006600;" +
        "      margin: 0;" +
        "      padding: 0 12px 0 12px;" +
        "      font-size: 15px;" +
        "      color: #006600" +
        "    }" +
        "" +
        "    blockquote[type=cite] blockquote[type=cite] blockquote[type=cite] {" +
        "      border-left: 2px solid #660000;" +
        "      margin: 0;" +
        "      padding: 0 12px 0 12px;" +
        "      font-size: 15px;" +
        "      color: #660000" +
        "    }" +
        "" +
        "    pre {" +
        "      white-space: pre-wrap;" +
        "      white-space: -moz-pre-wrap;" +
        "      white-space: -pre-wrap;" +
        "      white-space: -o-pre-wrap;" +
        "      word-wrap: break-word;" +
        "      white-space: pre-wrap !important;" +
        "      word-wrap: normal !important;" +
        "      font-size: 15px;" +
        "    }" +
        "" +
        "    .pre-a7224ff8-47e9-44c0-9ae2-41e1f7f4cd74-orientation-2 {" +
        "      transform: scaleX(-1);" +
        "      -webkit-transform: scaleX(-1);" +
        "      -ms-transform: scaleX(-1);" +
        "    }" +
        "" +
        "    .pre-a7224ff8-47e9-44c0-9ae2-41e1f7f4cd74-orientation-3 {" +
        "      transform: rotate(180deg);" +
        "      -webkit-transform: rotate(180deg);" +
        "      -ms-transform: rotate(180deg);" +
        "    }" +
        "" +
        "    .pre-a7224ff8-47e9-44c0-9ae2-41e1f7f4cd74-orientation-4 {" +
        "      transform: rotate(180deg) scaleX(-1);" +
        "      -webkit-transform: rotate(180deg) scaleX(-1);" +
        "      -ms-transform: rotate(180deg) scaleX(-1);" +
        "    }" +
        "" +
        "    .pre-a7224ff8-47e9-44c0-9ae2-41e1f7f4cd74-orientation-5 {" +
        "      transform: rotate(270deg) scaleX(-1);" +
        "      -webkit-transform: rotate(270deg) scaleX(-1);" +
        "      -ms-transform: rotate(270deg) scaleX(-1);" +
        "    }" +
        "" +
        "    .pre-a7224ff8-47e9-44c0-9ae2-41e1f7f4cd74-orientation-6 {" +
        "      transform: rotate(90deg);" +
        "      -webkit-transform: rotate(90deg);" +
        "      -ms-transform: rotate(90deg);" +
        "    }" +
        "" +
        "    .pre-a7224ff8-47e9-44c0-9ae2-41e1f7f4cd74-orientation-7 {" +
        "      transform: rotate(90deg) scaleX(-1);" +
        "      -webkit-transform: rotate(90deg) scaleX(-1);" +
        "      -ms-transform: rotate(90deg) scaleX(-1);" +
        "    }" +
        "" +
        "    .pre-a7224ff8-47e9-44c0-9ae2-41e1f7f4cd74-orientation-8 {" +
        "      transform: rotate(270deg);" +
        "      -webkit-transform: rotate(270deg);" +
        "      -ms-transform: rotate(270deg);" +
        "    }" +
        "" +
        "    .x-apple-maildropbanner {" +
        "      margin-top: -13px;" +
        "    }" +
        "" +
        "    a.view-message-icloud-share," +
        "    a.view-message-icloud-share:visited {" +
        "      cursor: pointer;" +
        "      color: #0000EE;" +
        "      text-decoration: underline;" +
        "    }" +
        "" +
        "    a.view-message-icloud-share:hover {" +
        "      text-decoration: underline;" +
        "    }" +
        "  </style>" +
        '  <style type="text/css" class="existing-message-styles">' +
        "    a:hover {" +
        "      color: #0088cc;" +
        "      text-decoration: underline !important;" +
        "    }" +
        "" +
        "    a:active {" +
        "      color: #0088cc !important;" +
        "    }" +
        "" +
        "    a:visited {" +
        "      color: #0088cc !important;" +
        "    }" +
        "" +
        "    body {" +
        "      font-family: system, -apple-system, -webkit-system-font, SFNSText, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;" +
        "    }" +
        "" +
        "    p {" +
        "      font-family: system, -apple-system, -webkit-system-font, SFNSText, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;" +
        "    }" +
        "" +
        "    @media only screen and (max-width: 620px) {" +
        '      table[class="body"] .container {' +
        "        width: 90% !important;" +
        "        min-width: 400px;" +
        "      }" +
        "    }" +
        "" +
        "    @media only screen and (max-device-width:514px) {" +
        '      table[class="body"] .container {' +
        "        width: 90% !important;" +
        "        min-width: 280px;" +
        "      }" +
        "" +
        '      table[class="body"] .show-for-desktop {' +
        "        display: none !important;" +
        "      }" +
        "" +
        '      table[class="body"] .show-for-small {' +
        "        display: inherit !important;" +
        "      }" +
        "" +
        '      table[class="body"] .hide-for-desktop {' +
        "        display: inherit !important;" +
        "      }" +
        "" +
        '      table[class="body"] .left-align-mobile {' +
        "        text-align: left !important;" +
        "      }" +
        "" +
        '      table[class="body"] .content {' +
        "        padding-top: 12px !important;" +
        "        padding-bottom: 12px !important;" +
        "      }" +
        "    }" +
        "" +
        "    @media only screen and (min-device-pixel-ratio : 2)," +
        "    only screen and (-webkit-min-device-pixel-ratio : 2) {" +
        "        .header-logo{" +
        "   visibility: hidden;" +
        "}" +
        "" +
        "      *[id=logo] {" +
        "        background: url('https://tareazosapi.azurewebsites.net/content/img/tareazos-logo_2x.png') no-repeat 0 0;" +
        "        -webkit-background-size: 131px 27px;" +
        "      }" +
        "    }" +
        "  </style>" +
        '  <style class="icloud-message-dynamic-styles">' +
        "    img._auto-scale," +
        "    img._stretch {" +
        "      max-width: 1875px !important;" +
        "      width: auto !important;" +
        "      height: auto !important;" +
        "    }" +
        "" +
        "    span.body-text-content {" +
        "      white-space: pre-wrap;" +
        "    }" +
        "" +
        "    iframe.attachment-pdf {" +
        "      width: 1870px;" +
        "      height: 542px;" +
        "    }" +
        "" +
        "    ._stretch {" +
        "      max-width: 1875px;" +
        "    }" +
        "" +
        "    ._mail-body {" +
        "      width: 1875px;" +
        "    }" +
        "" +
        "    html {" +
        "      touch-action: none;" +
        "    }" +
        "  </style>" +
        "</head>" +
        "" +
        "<body" +
        "  style=\"width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #333333; display: block; text-align: left; line-height: 1.6em; font-size: 16px; margin: 0 auto; padding: 0; font-weight: 300; font-family:system,-apple-system,-webkit-system-font,SFNSText,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;\">" +
        '  <table class="body"' +
        '    style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; height: 100%; width: 100%; padding: 0;">' +
        "    <tbody>" +
        '      <tr style="vertical-align: top; text-align: left; padding: 0;" align="left">' +
        '        <td class="center" align="center" valign="top"' +
        '          style="border-collapse: collapse !important; vertical-align: top; text-align: center; padding: 0;">' +
        '          <center style="width: 100%;">' +
        "" +
        '            <table class="container"' +
        '              style="border-spacing: 0; border-collapse: collapse; vertical-align: top; width: 600px; margin: 0 auto; padding: 0;">' +
        "              <tbody>" +
        '                <tr style="vertical-align: top; padding: 0;" align="left">' +
        '                  <td style="border-collapse: collapse; vertical-align: top; padding: 0;" align="left" valign="top">' +
        "" +
        "" +
        '                    <table class="header"' +
        '                      style="border-spacing: 0; vertical-align: top; text-align: inherit; width: 100%; padding: 20px 9px 20px; margin: 0; border-bottom: 1px solid #e9e9e9; background-color: #f08621;">' +
        "                      <tbody>" +
        '                        <tr style="vertical-align: top; text-align: left; padding: 0;" align="left">' +
        '                          <td id="logo" width="131" height="27" align="left" valign="top" style="padding-top: 10px; padding-bottom: 10px;"><a href="https://www.tareazos.com"' +
        '                              rel="noopener noreferrer"><img class="header-logo"' +
        '                                src="https://tareazosapi.azurewebsites.net/content/img/tareazos-logo.png" width="131"' +
        '                                height="27" alt="" border="0" align="left"></a></td>' +
        "                        </tr>" +
        "                      </tbody>" +
        "                    </table>" +
        "" +
        "" +
        '                    <table class="content"' +
        '                      style="border-spacing: 0; vertical-align: top; text-align: inherit; width: 100%; padding: 44px 0; margin: 0; border-bottom: 1px solid #e9e9e9;">' +
        "                      <tbody>" +
        '                        <tr style="vertical-align: top; text-align: left; padding: 0;" align="left">' +
        "                          <td" +
        '                            style=" border-collapse: collapse !important; vertical-align: top; text-align: left; padding: 0;"' +
        '                            align="left" valign="top">' +
        "" +
        "                            <div" +
        "                              style=\"color: #333333; margin: 0; padding: 0; font-weight: 300; line-height: 1.6em; font-size: 16px; font-family:system,-apple-system,-webkit-system-font,SFNSText,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;\">" +
        "" +
        content +
        "                            </div>" +
        "                          </td>" +
        "                        </tr>" +
        "                      </tbody>" +
        "                    </table>" +
        "" +
        "" +
        '                    <table class="footer"' +
        '                      style="border-spacing: 0; border-collapse: collapse; vertical-align: top; width: 100%; margin: 25px 0 10px; padding: 0;">' +
        "                      <tbody>" +
        '                        <tr style="vertical-align: top; text-align: left; padding: 0;" align="left">' +
        '                          <td style=" border-collapse: collapse; vertical-align: top; padding: 0;" align="left"' +
        '                            valign="top">' +
        "" +
        '                            <p class="left-align-mobile"' +
        "                              style=\"color: #999999; line-height: 1.6em; margin: 0; padding: 0; font-size: 9px; font-weight: 300; font-family:system,-apple-system,-webkit-system-font,SFNSText,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;\">" +
        "" +
        '                              © 2020 Tareazos. <br> Panamá.<br><a href="https://www.tareazos.com/aviso-legal"' +
        '                                style="color: #999999; text-decoration: none;" rel="noopener noreferrer">Todos los' +
        '                                derechos reservados</a> / <a href="https://www.tareazos.com/politicas"' +
        '                                style="color: #999999; text-decoration: none;" rel="noopener noreferrer">Políticas de' +
        '                                Privacidad</a> / <a href="https://www.tareazos.com/auth/login"' +
        '                                style="color: #999999; text-decoration: none;" rel="noopener noreferrer">Cuenta</a>' +
        "" +
        "                            </p>" +
        "                          </td>" +
        "                        </tr>" +
        "                      </tbody>" +
        "                    </table>" +
        "" +
        "                  </td>" +
        "                </tr>" +
        "              </tbody>" +
        "            </table>" +
        "" +
        "          </center>" +
        "        </td>" +
        "      </tr>" +
        "    </tbody>" +
        "  </table>" +
        "</body>" +
        "" +
        "</html>";

    return template;
}
