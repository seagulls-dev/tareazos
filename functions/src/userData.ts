import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
const req = require("request-promise");
import * as nodemailer from "nodemailer";
import * as index from "./index";

export const userDataChanged = functions.firestore
    .document("userData/{uid}")
    .onUpdate(async (snapshot, context) => {
        var messages = [];
        var content = "";
        const prevstatus = snapshot.before.get("taskerStatus");
        const newstatus = snapshot.after.get("taskerStatus");
        const token = snapshot.after.get("fcMessagingToken");
        const email = snapshot.after.get("email");
        const isTasker = snapshot.after.get("isTasker");
        const prevIsTasker = snapshot.before.get("isTasker");
        const name = snapshot.after.get("name");

        const uid = snapshot.after.get("uid");
        if (isTasker == true && prevIsTasker != true) {
            content = "";
            content = index.getTemplate(
                "<strong>Hola " +
                name +
                ",</strong>\
    <br>\
    <br>\
    Gracias por registrate como Tareador. ¡Qué bueno que podemos contar contigo!  \
    <br>\
    <br>\
    Tu perfil será activado en breve; te notificaremos mediante un correo de confirmación, en el que podrás encontrar información relevante sobre el uso de nuestra plataforma.<br>\
    Para algunas de nuestras categorías de tareas necesitamos validar y corroborar cierta información, dependiendo de esto se te podría asignar una breve entrevista en línea o pedir documentación adicional antes de habilitar tu perfil en la plataforma.\
    <br>\
    <br>\
    Hasta pronto,\
    <br>\
    Equipo Tareazos."
            );
            sendEmail(email, "Actualización de perfil", content, null);
        }

        if (prevstatus != newstatus && newstatus == "Approved") {
            content = "";
            content = index.getTemplate(
                "<strong>¡Felicidades, " +
                name +
                "!,</strong>\
    <br>\
    <br>\
    Ya eres parte de la comunidad de Tareadores y estamos muy felices de tenerte con nosotros.  🥳\
    <br>\
    <br>\
    En Tareazos estamos comprometidos con entregar un servicio excepcional a nuestros clientes. Antes de comenzar, hay un par de cosas que debes saber: <br>\
    <ul>\
    <li>Debes ser puntual y cumplir con tus citas agendadas. Si no puedes, debes avisarle a tu cliente 24 horas antes de la fecha y hora pactada.</li>\
    <li>Debes comprometerte a realizar las tareas que aceptes de la mejor forma posible. Si tienes algún inconveniente, no dudes en contactarte con nosotros.</li>\
    <li>¡Haz un trabajo impecable! De esta forma te volverán a contratar. Cuando termines, marca la tarea completada y deja tus comentarios.</li>\
    </ul>\
    Tareazos es una comunidad donde todas y todos son bienvenidos. Cada Tareador debe respetar las diferencias, creencias, preferencias y privacidad de nuestros clientes, compañeros y personal involucrado en la cadena de servicio. Las faltas a estos principios serán penalizadas con el cierre completo de tu cuenta Tareazos. \
    Te recomendamos leer nuestras <a href='https://www.tareazos.com/politicas'>políticas de privacidad</a> y <a href='https://www.tareazos.com/terminos-condiciones'>términos y condiciones</a>, y si tienes alguna duda comunícate con nosotros al <a href='tel:6832-9942'>6832-9942</a> o a esta dirección de correo.\
    <br>\
    <br>\
     A partir de este momento puedes descargar nuestra aplicación móvil, donde podrás ver las solicitudes o tareas que estén disponibles para hacer. Es normal que en este momento no encuentres muchas tareas abiertas, a medida que más usuarios se registren, te notificaremos sobre nuevas oportunidades.\
     <br><br> Encuéntranos en Play Store o App Store como Tareazos o dando click al siguiente enlace desde tu celular. Recuerda iniciar sesión con este correo y la contraseña que configuraste durante el registro, sino la recuerdas utiliza la opción olvidaste tu contraseña para reiniciarla.\
     <br>\
     <br>\
     <div align='center'>\
     <a href='https://play.google.com/store/apps/details?id=com.tareazos.tareazosApp'style='margin-top: 10px;'> <img src='https://tareazosapi.azurewebsites.net/content/img/playstore.png' width='140'></a>\
     <br><a href='https://apps.apple.com/us/app/id1530751230' style='vertical-align: top;'> <img src='https://tareazosapi.azurewebsites.net/content/img/appstore.png' width='120'></a>\
     </div>\
    <br>\
    Hasta pronto,\
    <br>\
    Equipo Tareazos."
            );
            sendEmail(email, name + ", tu perfil ha sido aprobado 🙌🏽", content, null);

            if (token)
                messages.push({
                    notification: {
                        title: "Actualización del perfil",
                        body:
                            "Tu perfil como Tareador ha sido aprobado, ya puedes iniciar a hacer ofertas.",
                    },
                    token: token,
                    data: {
                        click_action: "FLUTTER_NOTIFICATION_CLICK",
                        screen: "Profile",
                        taskerStatus: "Approved",
                        uid: uid,
                        isTasker: "true",
                    },
                });
        }
        let response;
        if (messages.length > 0) {
            response = await admin.messaging().sendAll(messages);
            console.log(response);
            const url = index.AzureUrl + "AddNotifications";
            let savePush = [];
            messages.forEach((message) => {
                savePush.push({
                    category: message["data"]["requestcategory"],
                    description: message["notification"]["body"] ?? "",
                    requestID: message["data"]["requestId"] ?? "",
                    screen: message["data"]["screen"] ?? "",
                    title: message["notification"]["title"] ?? "",
                    uid: message.data.uid ?? "test",
                    isTasker: message.data.isTasker == "true" ? true : false,
                    isClient: message.data.isClient == "true" ? true : false,
                    id: 0,
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

export const userDataCreated = functions.firestore
    .document("userData/{uid}")
    .onCreate(async (snapshot, context) => {
        sendEmail(
            "customerservice@tareazos.com",
            "nuevo registro: " +
            snapshot.get("name") +
            " " +
            snapshot.get("lastname"),
            "https://www.tareazos.com/users/user/" + snapshot.get("uid"), "info@tareazos.com"
        );
    });

export const sendEmail = function (to, subject, html, cc) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "info@tareazos.com",
                pass: "qcdtpklnnozcohzv",
            },
        });

        var options = {};

        options = {
            from: "info@tareazos.com",
            to: to,
            subject: subject,
            html: html,
        };

        if (cc != null) 
        {
            options = {
                from: "info@tareazos.com",
                to: to,
                cc: cc,
                subject: subject,
                html: html,
            }
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
    return {};
}
