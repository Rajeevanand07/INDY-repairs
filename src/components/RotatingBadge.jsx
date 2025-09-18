import React from "react";

const RotatingBadge = ({ size = 150, duration = "14s" }) => {
    const text = " ALL-IN-ONE TRUCK SERVICING AND SOLUTIONS • SINCE 2022 • ";

    return (
        <div style={{ width: size, height: size }}>
            <svg
                viewBox="0 0 200 200"
                width={size}
                height={size}
                xmlns="http://www.w3.org/2000/svg"
            >
                <style>{`
          .rot { transform-origin: 100px 100px; animation: spin ${duration} linear infinite; }
          @keyframes spin { 100% { transform: rotate(360deg); } }
          .ring { fill: #ED202B; }
          .inner { fill: #fff; }
          .text { fill: #fff; font-family: Inter, sans-serif; font-weight: 600; font-size: 10.5px; letter-spacing: 2px; }
        `}</style>

                {/* Rotating outer ring with text */}
                <g className="rot">
                    <circle cx="100" cy="100" r="85" className="ring" />

                    <defs>
                        <path
                            id="circlePath"
                            d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                        />
                    </defs>

                    <text className="text">
                        <textPath
                            href="#circlePath"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            {text}
                        </textPath>
                    </text>
                </g>

                {/* Inner circle (white background) */}
                <circle cx="100" cy="100" r="60" className="inner" />

                {/* Wrench icon in center */}
                <g transform="translate(100,100) translate(-50,-50)">
                    <image href="/home/Wrench.svg" width="100" height="100" />
                </g>
            </svg>
        </div>
    );
};

export default RotatingBadge;