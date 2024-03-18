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
export default function Workspacepremium(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Workspacepremium: {
          paths: [
            {
              d: "M5.68 11.69L8 9.93L10.31 11.69L9.43 8.84L11.75 7L8.91 7L8 4.19L7.09 7L4.25 7L6.56 8.84L5.68 11.69ZM16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 10.03 0.76 11.87 2 13.28L2 21L8 19L14 21L14 13.28C15.24 11.87 16 10.03 16 8ZM8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 6.25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Workspacepremium: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Workspacepremium: {
          paths: [
            {
              d: "M6.92 10.75L8 9.93L9.07 10.74C9.46 11.03 9.99 10.66 9.85 10.19L9.43 8.83L10.63 7.88C11 7.6 10.79 7 10.31 7L8.91 7L8.48 5.66C8.33 5.2 7.68 5.2 7.53 5.66L7.09 7L5.68 7C5.21 7 5 7.6 5.37 7.89L6.56 8.84L6.14 10.2C6 10.67 6.53 11.04 6.92 10.75ZM2 19.61C2 20.29 2.67 20.77 3.32 20.56L8 19L12.68 20.56C13.33 20.78 14 20.3 14 19.61L14 13.28C15.24 11.87 16 10.03 16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 10.03 0.76 11.87 2 13.28L2 19.61ZM8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 7.05%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Workspacepremium: {
          paths: [
            {
              d: "M5.68 11.69L8 9.93L10.31 11.69L9.43 8.84L11.75 7L8.91 7L8 4.19L7.09 7L4.25 7L6.56 8.84L5.68 11.69ZM16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 10.03 0.76 11.87 2 13.28L2 21L8 19L14 21L14 13.28C15.24 11.87 16 10.03 16 8ZM8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 6.25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Workspacepremium: {
          paths: [
            {
              d: "M6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12C9.31 12 12 9.31 12 6C12 2.69 9.31 0 6 0ZM8.31 9.69L6 7.93L3.68 9.69L4.56 6.84L2.25 5L5.09 5L6 2.19L6.91 5L9.75 5L7.43 6.84L8.31 9.69ZM6 15L2 16.02L2 12.92C3.18 13.6 4.54 14 6 14C7.46 14 8.82 13.6 10 12.92L10 16.02L6 15Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 16.67%)" },
            },
            {
              d: "M5.68 11.69L8 9.93L10.31 11.69L9.43 8.84L11.75 7L8.91 7L8 4.19L7.09 7L4.25 7L6.56 8.84L5.68 11.69ZM16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 10.03 0.76 11.87 2 13.28L2 21L8 19L14 21L14 13.28C15.24 11.87 16 10.03 16 8ZM8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2ZM8 17L4 18.02L4 14.92C5.18 15.6 6.54 16 8 16C9.46 16 10.82 15.6 12 14.92L12 18.02L8 17Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
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
          d: "M5.68 11.69L8 9.93L10.31 11.69L9.43 8.84L11.75 7L8.91 7L8 4.19L7.09 7L4.25 7L6.56 8.84L5.68 11.69ZM16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 10.03 0.76 11.87 2 13.28L2 21L8 19L14 21L14 13.28C15.24 11.87 16 10.03 16 8ZM8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2ZM8 17L4 18.02L4 14.92C5.18 15.6 6.54 16 8 16C9.46 16 10.82 15.6 12 14.92L12 18.02L8 17Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 6.25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Workspacepremium")}
      {...rest}
    ></Icon>
  );
}
