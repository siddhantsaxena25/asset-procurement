// /**
//  * Import function triggers from their respective submodules:
//  *
//  * import {onCall} from "firebase-functions/v2/https";
//  * import {onDocumentWritten} from "firebase-functions/v2/firestore";
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// // import {onRequest} from "firebase-functions/v2/https";
// // import * as logger from "firebase-functions/logger";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

// // export const helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import * as nodemailer from 'nodemailer';

// admin.initializeApp();
// //const db = admin.database();

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'sid2507@gmail.com',
//         pass: '7052Siddhant!'
//     }
// });

// export const sendConfirmationEmail = functions.database
//   .ref('/deliveryConfirmationEmailsToOwners/{docId}')
//   .onCreate((snapshot, context) => {
//     const data = snapshot.val();

//     const emailContent = `
//         Hello,

//         Here is the data:
//         Field 1: ${data.newAssetCode}
//         Field 2: ${data.assetOwnerFirstName}
//         // Add more fields as needed
//     `;

//     const mailOptions = {
//         from: 'sid2507@gmail.com',
//         to: 'sdsxna@gmail.com.com',
//         subject: 'Subject of the Email',
//         text: emailContent
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.error('Error:', error);
//         }
//         console.log('Email sent:', info.response);
//     });

//     return null;
//   });
