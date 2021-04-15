// const { GoogleSpreadsheet } = require('google-spreadsheet')
    
//     exports.handler = async (event, context, callback) => {
//       try {
//         const doc = new GoogleSpreadsheet('some_google_document_id')
//         await doc.useServiceAccountAuth(require('./your-service-account.json'))
//         await doc.loadInfo()
//         const sheet = doc.sheetsByIndex[0]
    
//         //   const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// //   const appendSpreadsheet = async (row) => {
// //     try {
// //       await doc.useServiceAccountAuth({
// //         client_email: CLIENT_EMAIL,
// //         private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
// //       });
// //       // loads document properties and worksheets
// //       await doc.loadInfo();

// //       const sheet = doc.sheetsById[SHEET_ID];
// //       await sheet.addRow(row);
// //       setData({ ...data, Name: '', Email: '', DOB: '1940', AadharId: null, Phone: '', Vaccination_hospital: 'Starcity Hospital', Vaccination_date: '' });
// //       props.hideFn(true);

// //     } catch (e) {
// //       console.error('Error: ', e);
// //     }
// //   };

//         const data =JSON.parse(event.body)
//         const addedRow = await sheet.addRow(data)
    
     
//         return {
//           statusCode: 200,
//           body: JSON.stringify({
//             message: `row added`,
//           }),
//         }
//       } catch (e) {
//         return {
//           statusCode: 500,
//           body: e.toString(),
//         }
//       }
//     }

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
    console.log("queryStringParameters", event.queryStringParameters)
    callback(null, {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: "Hello, World! " + Math.round(Math.random() * 10),
      }),
    })
  }