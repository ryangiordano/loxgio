import React from "react";
import { theme } from "Styles/theme";

const LogoMobile = ({ boxRef, firstWordRef, secondWordRef, thirdWordRef }) => {
  return (
    <div>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="100%"
        viewBox="0 0 552 497"
      >
        <g
          className="logo-word"
          ref={firstWordRef}
          style={{
            transformOrigin: "50% 50%",
          }}
        >
          <path
            fill={theme.backgroundColor.white}
            d="M93.948,182.275V87.723h78.793v47.276h-15.758v-31.517h-47.276v31.517h47.276v15.759h-47.276v31.517H93.948z
		 M156.983,182.275v-31.517h15.758v31.517H156.983z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M220.017,182.275v-15.759H188.5v-63.034h15.759v47.276h47.276v-47.276h15.758v63.034h-31.517v15.759H220.017z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M283.052,182.275v-78.793h78.793v78.793h-15.758v-15.759h-47.276v15.759H283.052z M346.086,150.758V119.24h-47.276v31.518
		H346.086z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M377.604,182.275v-78.793h78.793v78.793h-15.758V119.24h-47.276v63.035H377.604z"
          />
        </g>
        <g
          className="logo-word"
          ref={secondWordRef}
          style={{
            transformOrigin: "50% 50%",
          }}
        >
          <path
            fill={theme.backgroundColor.white}
            d="M141.224,291.615v-78.793h78.793v78.793h-15.759v-15.758h-47.275v15.758H141.224z M204.258,260.099v-31.518h-47.275v31.518
		H204.258z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M235.774,291.615v-78.793h78.793v78.793h-15.759v-63.034h-47.276v63.034H235.774z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M330.328,291.615v-78.793h63.034v15.759h-47.275v47.276h47.275v15.758H330.328z M393.362,275.857v-47.276h15.759v47.276
		H393.362z"
          />
        </g>
        <g
          className="logo-word"
          ref={thirdWordRef}
          style={{
            transformOrigin: "50% 50%",
          }}
        >
          <path
            fill={theme.backgroundColor.white}
            d="M188.5,409.275v-94.553h15.759v78.793h63.034v15.76H188.5z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M283.052,409.275v-78.793h78.793v78.793H283.052z M346.086,393.516V346.24h-47.275v47.275H346.086z"
          />
        </g>
        <g
          id="box"
          className="logo-box"
          ref={boxRef}
          overflow="visible"
          style={{
            transformOrigin: "50% 50%",
          }}
        >
          <g>
            <rect
              fill={theme.backgroundColor.white}
              x="46.172"
              y="55.5"
              width="14"
              height="386"
            />
          </g>
          <g>
            <rect
              fill={theme.backgroundColor.white}
              x="60.167"
              y="41.5"
              width="430.005"
              height="14"
            />
          </g>
          <g>
            <rect
              fill={theme.backgroundColor.white}
              x="60.167"
              y="441.5"
              width="430.005"
              height="13.999"
            />
          </g>
          <g>
            <rect
              fill={theme.backgroundColor.white}
              x="490.172"
              y="55.5"
              width="14"
              height="386"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
export default LogoMobile;
