import React from "react";
import { theme } from "Styles/theme";

const Logo = ({ boxRef, firstWordRef, secondWordRef, thirdWordRef }) => {
  return (
    <div>
      <svg
        x="0px"
        y="0px"
        width="100%"
        // height="411px"
        viewBox="0 0 1000 200"
        // height="180px"
        // height="100%"
        overflow="visible"
        clip="auto"
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
            d="M46,141.451V46.899h78.793v47.276h-15.758V62.658H61.758v31.517h47.276v15.759H61.758v31.517H46z M109.034,141.451v-31.517
		h15.758v31.517H109.034z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M172.068,141.451v-15.759h-31.517V62.658h15.759v47.276h47.276V62.658h15.758v63.034h-31.517v15.759H172.068z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M235.103,141.451V62.658h78.793v78.793h-15.758v-15.759h-47.276v15.759H235.103z M298.138,109.934V78.417h-47.276v31.518
		H298.138z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M329.655,141.451V62.658h78.793v78.793h-15.758V78.417h-47.276v63.035H329.655z"
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
            d="M455.724,141.451V62.658h78.793v78.793h-15.759v-15.759h-47.275v15.759H455.724z M518.758,109.934V78.417h-47.275v31.518
		H518.758z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M550.275,141.451V62.658h78.793v78.793H613.31V78.417h-47.276v63.035H550.275z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M644.828,141.451V62.658h63.034v15.758h-47.275v47.276h47.275v15.759H644.828z M707.862,125.692V78.417h15.759v47.276
		H707.862z"
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
            d="M770.896,141.451V46.899h15.759v78.793h63.034v15.759H770.896z"
          />
          <path
            fill={theme.backgroundColor.white}
            d="M865.448,141.451V62.658h78.793v78.793H865.448z M928.482,125.692V78.417h-47.275v47.276H928.482z"
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
          <g className="logo-rect">
            <rect
              fill={theme.backgroundColor.white}
              y="14.001"
              width="14"
              height="151.5"
            />
          </g>
          <g className="logo-rect">
            <rect
              fill={theme.backgroundColor.white}
              x="13.995"
              width="960"
              height="14"
            />
          </g>
          <g className="logo-rect">
            <rect
              fill={theme.backgroundColor.white}
              x="13.995"
              y="166"
              width="960"
              height="14"
            />
          </g>
          <g className="logo-rect">
            <rect
              fill={theme.backgroundColor.white}
              x="973.995"
              y="14.001"
              width="14"
              height="151.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
export default Logo;
