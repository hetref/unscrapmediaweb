// import React, { useState, useEffect } from "react";

// const Cursor = () => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });

//     const updatePosition = (e) => {
//         setPosition({ x: e.clientX, y: e.clientY });
//     };

//     useEffect(() => {
//         document.addEventListener("mousemove", updatePosition);
//         return () => {
//             document.removeEventListener("mousemove", updatePosition);
//         };
//     }, []);

//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 top: position.y + "px",
//                 left: position.x + "px",
//                 width: "20px",
//                 height: "20px",
//                 borderRadius: "50%",
//                 backgroundColor: "#000000",
//                 zIndex: "111",
//             }}
//         ></div>
//     );
// };

// export default Cursor;

import React, { useContext } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { CursorContext } from "../../context/CursorContext";

const Cursor = () => {
    const { clientX, clientY } = useMousePosition();
    const [cursor] = useContext(CursorContext);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                pointerEvents: "none",
            }}
        >
            <svg
                width={80}
                height={80}
                viewBox="0 0 50 50"
                style={{
                    position: "absolute",
                    left: clientX,
                    top: clientY,
                    transform: `translate(-50%, -50%) scale(${
                        cursor.active ? 1.5 : 1
                    })`,
                    stroke: cursor.active ? "black" : "white",
                    strokeWidth: 2,
                    fill: cursor.active ? "rgba(255,255,255,0)" : "black",
                    transition: "transform .2s ease-in-out",
                }}
            >
                <circle cx="25" cy="25" r="8" />
            </svg>
        </div>
    );
};

export default Cursor;
