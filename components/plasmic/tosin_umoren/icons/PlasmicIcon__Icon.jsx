/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <foreignObject width={"184"} height={"184"} x={"-80"} y={"-80"}>
        <div
          xmlns={"http://www.w3.org/1999/xhtml"}
          clipPath={"url(#a)"}
          style={{
            backdropFilter: "blur(40px)",
            height: "100%",
            width: '100%"'
          }}
        ></div>
      </foreignObject>

      <path
        fill={"currentColor"}
        d={
          "M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"
        }
        data-figma-bg-blur-radius={"80"}
      ></path>

      <defs>
        <clipPath id={"a"} transform={"translate(80 80)"}>
          <path
            d={
              "M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"
            }
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
