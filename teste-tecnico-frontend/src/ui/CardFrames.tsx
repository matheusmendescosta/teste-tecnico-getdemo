// import React from "react";
// import Container from "./Container";
// import { FrameDTO } from "@/dto/FrameDto";

// type CardFramesProps = {
//   frames: FrameDTO[];
//   onFrameSelect: (frame: FrameDTO) => void;
// };

// export const CardFrames = ({ frames, onFrameSelect }: CardFramesProps) => {
//   return (
//     <Container>
//       <div className="mt-8 mb-4 h-96">
//         <div className="grid grid-cols-3 gap-4">
//           {frames.map((frame, index) => {
//             const blob = new Blob([frame.html], { type: "text/html" });
//             const url = URL.createObjectURL(blob);

//             return (
//               <div className="px-2" key={frame.id} onClick={() => onFrameSelect(frame)}>
//                 <iframe
//                   id="frame-preview"
//                   key={index}
//                   src={url}
//                   width="100%"
//                   height="300"
//                   className="overflow-hidden"
//                   style={{
//                     border: "none",
//                     overflow: "hidden",
//                     height: "950px",
//                     width: "100%",
//                   }}
//                 />
//                 <a className="text-center py-3 w-full block bg-gray-500 rounded-md cursor-pointer mt-2">Editar Frame</a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </Container>
//   );
// };
