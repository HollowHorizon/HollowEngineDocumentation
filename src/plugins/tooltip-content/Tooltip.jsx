import React, {useState} from "react";
import "./style.css";

const Tooltip = ({ tooltip, children }) => {
    const [visible, setVisible] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    return (
        <span className="tooltip-wrapper">
            <span
                onMouseEnter={ _ => setVisible(true) }
                onMouseLeave={ _ => setVisible(false) }
                onMouseMove={ e => setCoords({ x: e.clientX, y: e.clientY }) }
            >{ children }</span>
            {visible && tooltip && (
                <div
                    className="tooltip-content"
                    style={{
                        position: "fixed",
                        left: coords.x + 8,
                        top: coords.y + 8,
                        maxWidth: "25%",
                        transform: 'translate(-50%, 0%)',
                        zIndex: 1000,
                        pointerEvents: "none"
                    }}
                >
                    { tooltip }
                </div>
            )}
        </span>
    );
};

export default Tooltip;