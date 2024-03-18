/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Tapandplay(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Tapandplay: {} }, variantValues: { style: "Filled" } },
    { overrides: { Tapandplay: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Tapandplay: {
          paths: [
            {
              d: "M1.14 15.09C0.54 14.99 0 15.48 0 16.09C0 16.58 0.36 16.99 0.85 17.07C2.93 17.43 4.57 19.07 4.93 21.15C5.01 21.64 5.42 22 5.91 22C6.52 22 7 21.46 6.91 20.86C6.43 17.91 4.1 15.57 1.14 15.09ZM0 19L0 22L3 22C3 20.34 1.66 19 0 19ZM1.11 11.06C0.52 11 0 11.46 0 12.05C0 12.55 0.37 12.99 0.87 13.04C5.14 13.45 8.54 16.85 8.95 21.12C9 21.62 9.43 22 9.94 22C10.53 22 11 21.49 10.94 20.9C10.43 15.7 6.31 11.58 1.11 11.06ZM15 0.00999999L5 0C3.9 0 3 0.9 3 2L3 9.37C3.69 9.53 4.36 9.74 5 10.01L5 4L15 4L15 17L11.97 17C12.49 18.25 12.81 19.59 12.92 21L15 21C16.1 21 17 20.1 17 19L17 2C17 0.9 16.1 0.00999999 15 0.00999999Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.58%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Tapandplay: {
          paths: [
            {
              d: "M0 15L0 17C2.76 17 5 19.24 5 22L7 22C7 18.13 3.87 15 0 15ZM0 19L0 22L3 22C3 20.34 1.66 19 0 19ZM0 11L0 13C4.97 13 9 17.03 9 22L11 22C11 15.92 6.08 11 0 11ZM3 0L3 9.37C3.69 9.53 4.36 9.74 5 10.01L5 4L15 4L15 17L11.97 17C12.49 18.25 12.81 19.59 12.92 21L17 21L17 0L3 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.58%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Tapandplay: {
          paths: [
            {
              d: "M0 15L0 17C2.76 17 5 19.24 5 22L7 22C7 18.13 3.87 15 0 15ZM0 19L0 22L3 22C3 20.34 1.66 19 0 19ZM0 11L0 13C4.97 13 9 17.03 9 22L11 22C11 15.92 6.08 11 0 11ZM15 0.00999999L5 0C3.9 0 3 0.9 3 2L3 9.37C3.69 9.53 4.36 9.74 5 10.01L5 4L15 4L15 17L11.97 17C12.49 18.25 12.81 19.59 12.92 21L15 21C16.1 21 17 20.1 17 19L17 2C17 0.9 16.1 0.00999999 15 0.00999999Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Two Tone" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M0 15L0 17C2.76 17 5 19.24 5 22L7 22C7 18.13 3.87 15 0 15ZM0 19L0 22L3 22C3 20.34 1.66 19 0 19ZM0 11L0 13C4.97 13 9 17.03 9 22L11 22C11 15.92 6.08 11 0 11ZM15 0.00999999L5 0C3.9 0 3 0.9 3 2L3 9.37C3.69 9.53 4.36 9.74 5 10.01L5 4L15 4L15 17L11.97 17C12.49 18.25 12.81 19.59 12.92 21L15 21C16.1 21 17 20.1 17 19L17 2C17 0.9 16.1 0.00999999 15 0.00999999Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(14.58%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Tapandplay")}
      {...rest}
    ></Icon>
  );
}
