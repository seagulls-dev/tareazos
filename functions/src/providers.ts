import { SSL_OP_NO_QUERY_MTU } from 'constants';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
const req = require("request-promise");
import * as nodemailer from 'nodemailer';
import * as index from './index';


export const providersOnCreate = functions.firestore.document('Providers/{docId}').onCreate(async (snapshot, context) => {
  const id = snapshot.id;
  await admin
  .firestore()
  .collection("Providers")
  .doc(id)
  .update({
      location:{
        lat: 9.0388702,
        lng: -79.571215
      }
  });
/* 
  const url = index.AzureUrl + "AddProvider";

  //SAVE NOTIFICACTIONS ON WEBAPI
  let options = {
    method: 'POST',
    url: url,
    headers: {
      "content-type": 'application/json'
    },
    body: { criteria: snapshot.data(), token: 'S3nWtDtcsmfGPKXk82Y7XRJWos52' },
    json: true,
  };

  req(options).then(async function (body) {
    console.log(body);
  }); */
});

export const providersOnUpdate = functions.firestore.document('Providers/{docId}').onUpdate(async (snapshot, context) => {

  const url = index.AzureUrl + "UpdateProvider";

  //SAVE NOTIFICACTIONS ON WEBAPI
  let options = {
    method: 'POST',
    url: url,
    headers: {
      "content-type": 'application/json'
    },
    body: { criteria: snapshot.after.data(), token: 'S3nWtDtcsmfGPKXk82Y7XRJWos52' },
    json: true,
  };

  req(options).then(async function (body) {
    console.log(body);
  });
});

export const providersForExplore = functions.https.onCall(
  async (data, context) => {
    let destacado = [];
    let recent = [];
    let maxLat = data["maxLat"];
    let minLat = data["minLat"];
    try {
      await admin
        .firestore()
        .collection("Providers").orderBy("location.lat","desc").where('highlighted', "==", true).limit(15)
        .get().then((querySnapshot) => {
          querySnapshot.docs.forEach((element) => { destacado.push(element.data()) })
        });
    }
    catch (err) {
      console.log('destacado error' + err);
    }

    try {
      await admin.firestore().collection("Providers").where("taskerStatus", "==", "Approved").orderBy("createDate", "desc")
        .limit(15).get().then((querySnapshot) => {
          querySnapshot.docs.forEach((element) => {
            recent.push(element.data())
          })
        });
    } catch (error) {
      console.log('recent error' + error)
    }

    return { highlighted: destacado, recent: recent };

  });

export const requestTemplatesHome = functions.https.onCall(async (data, context) => {
  let requestemplates = [];
  let maxLat = data["maxLat"];
  let minLat = data["minLat"];
  try {
    await admin.firestore().collection('requestTemplates')
    //.where("lat", "<=", maxLat).where("lat", ">=", minLat)
    .orderBy("lat","desc").get().then((querySnapshot) => {
      querySnapshot.docs.forEach((element) => {
        requestemplates.push(element.data())
      })
    })

  } catch (error) {
    console.log(error);
  }
  return { requestTemplates: requestemplates }
})