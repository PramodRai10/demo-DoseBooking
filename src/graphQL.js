// import React from "react"
// import { graphql } from "gatsby"

// const Index = ({ data }) => {
//     // <pre>{JSON.stringify(data, null, 4)}</pre> 
//     // console.log(JSON.stringify(data, null, 4));
//     console.log(data.allGoogleSpreadsheetSheet1);
//     return (
//       <h1>Hello</h1>
//     )
// }

// export const query = graphql`
//   {
//     allGoogleSpreadsheetSheet1 {
//       edges {
//         node {
//           aadharId
//           email
//           id
//           vaccinationHospital
//           vaccinationDate
//           status
//           phone
//         }
//       }
//     }
//   }
// `

// export default Index;

// import React from "react"
// import { StaticQuery, graphql } from "gatsby"

// const Index = () => (
//   <StaticQuery
//     query={graphql`
//       {
//         allGoogleSpreadsheetSheet1 {
//           edges {
//             node {
//               email
//               id
//               dob
//               vaccinationDate
//               status
//               phone
//               name
//               vaccinationHospital
//             }
//           }
//         }
//       }
//     `}
//     render={data => 
           
//            <pre>{JSON.stringify(data, null, 4)}</pre>
//            }
//   ></StaticQuery>
// )

// export default Index;

