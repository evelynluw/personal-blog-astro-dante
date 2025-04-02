// import * as React from "react"
// import { useEffect } from "react"
// import { XMarkIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from "@heroicons/react/20/solid"

// const Tile = ({ state }: { state: number }) => {
//     // TODO: just use css classes -- inline styles renders really ugly
//     return (
//         <div
//             style={{
//                 border: '1px solid gray',
//                 width: '20px',
//                 height: '20px',
//                 backgroundColor: state == 1 ? 'black' : 'none',
//                 display: 'flex'
//             }}>
//             {state == 0 &&
//                 <XMarkIcon style={{ color: 'gray' }} />
//             }
//         </div>
//     )
// }

// const PicrossRow = () => {
//     const row = [1, -1, -1, 1, 0, 1, 1, 1, -1, 0]
//     return (
//         <div style={{ display: 'flex' }}>
//             {row.map(f => <Tile state={f} />)}
//         </div>
//     )
// }

// const PicrossMatrix = () => {
//     const rows = Array(10).fill(1)
//     return (
//         <div style={{
//             border: '1px solid skyblue',
//             borderRadius: '2px',
//             display: 'flex',
//             flexFlow: 'column wrap',
//             maxWidth: 'min-content'
//         }}>
//             {rows.map(r => <PicrossRow />)}
//         </div>
//     )
// }

// const MegaControlTile = ({ state }: { state: number }) => {
//     if (state != -1) {
//         return (
//             <div
//                 style={{
//                     border: '1px solid gray',
//                     width: state ? '41.5px' : '20px',
//                     height: '15px',
//                     backgroundColor: state ? 'lightgreen' : 'none',
//                     justifyContent: 'center',
//                 }}>
//                 <div style={{ margin: 'auto', width: 'min-content', height: '15px' }}>
//                     {state == 0 ? <ChevronDoubleRightIcon style={{ color: 'gray', height: '15px' }} />
//                         : <ChevronDoubleLeftIcon style={{ color: 'gray', height: '15px' }} />
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// const MegaColumnControl = ({ megaColumnControlVals }: { megaColumnControlVals: Array<number> }) => {
//     return (
//         <div
//             style={{
//                 border: '1px solid lightgreen',
//                 display: "flex",
//                 maxWidth: 'min-content',
//                 maxHeight: 'min-content',
//                 marginBottom: '5px'
//             }}>
//             {megaColumnControlVals.map(mc => <MegaControlTile state={mc} />)}
//         </div>
//     )
// }

// const Picross = () => {
//     const megaColumnControlVals = [0, 1, -1, 0, 0, 1, -1, 0, 0, 0]
//     return (
//         <main>
//             <h1>Picross component</h1>
//             <div>
//                 <MegaColumnControl megaColumnControlVals={megaColumnControlVals} />
//                 <PicrossMatrix />
//             </div>
//         </main>
//     )
// }

// // Step 3: Export your component
// export default Picross