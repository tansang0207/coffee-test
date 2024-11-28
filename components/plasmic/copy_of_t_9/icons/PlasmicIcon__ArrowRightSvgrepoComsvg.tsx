// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightSvgrepoComsvgIcon(
  props: ArrowRightSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.373 13.546a2 2 0 00-2.746 2.908L42.087 32l-16.46 15.546a2 2 0 002.746 2.908l18-17a2.001 2.001 0 000-2.908l-18-17z"
        }
      ></path>

      <path
        d={
          "M32 0C23.453 0 15.417 3.329 9.374 9.373 3.329 15.417 0 23.453 0 32s3.33 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64s16.583-3.329 22.626-9.373C60.671 48.583 64 40.547 64 32s-3.33-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0zm19.797 51.798C46.509 57.087 39.479 60 32 60s-14.509-2.913-19.798-8.202C6.913 46.51 4 39.479 4 32s2.913-14.51 8.203-19.798C17.491 6.913 24.521 4 32 4s14.509 2.913 19.798 8.202C57.087 17.49 60 24.521 60 32s-2.913 14.51-8.203 19.798z"
        }
      ></path>
    </svg>
  );
}

export default ArrowRightSvgrepoComsvgIcon;
/* prettier-ignore-end */
