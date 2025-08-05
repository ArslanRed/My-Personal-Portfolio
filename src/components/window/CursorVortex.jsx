// import React, { useEffect, useState } from 'react';
// import './vortex.css';

// const CursorVortex = () => {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', move);
//     return () => window.removeEventListener('mousemove', move);
//   }, []);

//   return (
//     <>
//       <div
//         className="cursor-lighto"
//         style={{ left: pos.x, top: pos.y }}
//       >
//         <div className="vortex"></div>
//         <div className="cloud"></div>
//       </div>
//     </>
//   );
// };

// export default CursorVortex;
