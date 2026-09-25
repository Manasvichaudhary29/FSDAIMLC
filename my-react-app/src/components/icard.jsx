// import React from 'react'

// function ICard(props) {
//   return (
//     <div
//       style={{
//         width: '320px',
//         minHeight: '430px',
//         border: '3px solid #333',
//         borderRadius: '12px',
//         margin: '15px',
//         backgroundColor: '#ffffff',
//         boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
//         overflow: 'hidden',
//         textAlign: 'center',
//         fontFamily: 'Arial, sans-serif'
//       }}
//     >

//       {/* College Header */}
//       <div
//         style={{
//           backgroundColor: '#7B1E1E',
//           color: 'white',
//           padding: '15px'
//         }}
//       >
//         <h2
//           style={{
//             margin: '0',
//             fontSize: '20px'
//           }}
//         >
//           ABES ENGINEERING COLLEGE
//         </h2>

//         <p
//           style={{
//             margin: '5px 0 0',
//             fontSize: '13px'
//           }}
//         >
//           STUDENT ID CARD
//         </p>
//       </div>

//       {/* Student Photo */}
//       <div style={{ marginTop: '20px' }}>
//         <img
//           src={props.pic}
//           alt="Student"
//           style={{
//             width: '140px',
//             height: '160px',
//             objectFit: 'cover',
//             border: '3px solid #7B1E1E',
//             borderRadius: '8px'
//           }}
//         />
//       </div>

//       {/* Student Details */}
//       <div
//         style={{
//           textAlign: 'left',
//           margin: '20px',
//           padding: '15px',
//           border: '1px solid #ddd',
//           borderRadius: '8px',
//           backgroundColor: '#f8f8f8'
//         }}
//       >
//         <p>
//           <b>Name:</b> {props.name}
//         </p>
//         <p>
//           <b>Roll Number:</b> {props.rollNumber}
//         </p>
//         <p>
//           <b>Branch:</b> {props.branch}
//         </p>
//       </div>
//       <div
//         style={{
//           borderTop: '1px solid #ccc',
//           padding: '10px',
//           fontSize: '12px',
//           color: '#555'
//         }}
//       >
//         ABES Engineering College, Ghaziabad
//       </div>
//     </div>
//   )
// }
// export default ICard