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
export default function Hiking(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Hiking: {} }, variantValues: { style: "Filled" } },
    { overrides: { Hiking: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Hiking: {
          paths: [
            {
              d: "M8.9998 4C10.0998 4 10.9998 3.1 10.9998 2C10.9998 0.9 10.0998 0 8.9998 0C7.8998 0 6.9998 0.9 6.9998 2C6.9998 3.1 7.8998 4 8.9998 4ZM13.7498 7.5C13.3398 7.5 12.9998 7.84 12.9998 8.25L12.9998 9.28C11.7698 8.91 10.7798 8.11 10.1998 7.1L9.1998 5.5C8.7898 4.85 8.0898 4.5 7.3598 4.5C6.5798 4.5 5.7698 5 5.5798 5.94L2.7498 20.26C2.6198 20.9 3.1098 21.5 3.7698 21.5C4.2598 21.5 4.6798 21.16 4.7898 20.69L6.3998 13.5L8.4998 15.5L8.4998 20.5C8.4998 21.05 8.9498 21.5 9.4998 21.5C10.0498 21.5 10.4998 21.05 10.4998 20.5L10.4998 14.86C10.4998 14.31 10.2798 13.79 9.8798 13.41L8.3998 12L8.9998 9C9.9998 10.15 11.4098 11.01 12.9998 11.34L12.9998 20.75C12.9998 21.16 13.3398 21.5 13.7498 21.5C14.1598 21.5 14.4998 21.16 14.4998 20.75L14.4998 8.25C14.4998 7.84 14.1598 7.5 13.7498 7.5ZM2.9298 11.63L0.8098 11.22C0.2698 11.11 -0.0901996 10.59 0.0198004 10.05L0.779801 6.12C0.989801 5.04 2.0398 4.33 3.1198 4.54L4.2798 4.77L2.9298 11.63Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.79%, 5.21%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Hiking: {
          paths: [
            {
              d: "M9.17 4C10.27 4 11.17 3.1 11.17 2C11.17 0.9 10.27 0 9.17 0C8.07 0 7.17 0.9 7.17 2C7.17 3.1 8.07 4 9.17 4ZM13.17 9.28C11.94 8.91 10.95 8.11 10.37 7.1L9.37 5.5C8.96 4.85 8.26 4.5 7.53 4.5C6.75 4.5 5.94 5 5.75 5.94C5.56 6.88 2.67 21.5 2.67 21.5L4.77 21.5L6.57 13.5L8.67 15.5L8.67 21.5L10.67 21.5L10.67 14L8.57 12L9.17 9C10.17 10.15 11.58 11.01 13.17 11.34L13.17 21.5L14.67 21.5L14.67 7.5L13.17 7.5L13.17 9.28ZM3.1 11.63L0 11.03L1.34 4.16L4.47 4.77L3.1 11.63Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.44%, 5.21%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Hiking: {
          paths: [
            {
              d: "M8.9998 4C10.0998 4 10.9998 3.1 10.9998 2C10.9998 0.9 10.0998 0 8.9998 0C7.8998 0 6.9998 0.9 6.9998 2C6.9998 3.1 7.8998 4 8.9998 4ZM12.9998 9.28C11.7698 8.91 10.7798 8.11 10.1998 7.1L9.1998 5.5C8.7898 4.85 8.0898 4.5 7.3598 4.5C6.5798 4.5 5.7698 5 5.5798 5.94C5.3898 6.88 2.4998 21.5 2.4998 21.5L4.5998 21.5L6.3998 13.5L8.4998 15.5L8.4998 21.5L10.4998 21.5L10.4998 14L8.3998 12L8.9998 9C9.9998 10.15 11.4098 11.01 12.9998 11.34L12.9998 21.5L14.4998 21.5L14.4998 7.5L12.9998 7.5L12.9998 9.28ZM2.9298 11.63L0.8098 11.22C0.2698 11.11 -0.0901996 10.59 0.0198004 10.05L0.779801 6.12C0.989801 5.04 2.0398 4.33 3.1198 4.54L4.2798 4.77L2.9298 11.63Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(18.75%, 6.25%)" },
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
          d: "M8.9998 4C10.0998 4 10.9998 3.1 10.9998 2C10.9998 0.9 10.0998 0 8.9998 0C7.8998 0 6.9998 0.9 6.9998 2C6.9998 3.1 7.8998 4 8.9998 4ZM12.9998 9.28C11.7698 8.91 10.7798 8.11 10.1998 7.1L9.1998 5.5C8.7898 4.85 8.0898 4.5 7.3598 4.5C6.5798 4.5 5.7698 5 5.5798 5.94C5.3898 6.88 2.4998 21.5 2.4998 21.5L4.5998 21.5L6.3998 13.5L8.4998 15.5L8.4998 21.5L10.4998 21.5L10.4998 14L8.3998 12L8.9998 9C9.9998 10.15 11.4098 11.01 12.9998 11.34L12.9998 21.5L14.4998 21.5L14.4998 7.5L12.9998 7.5L12.9998 9.28ZM2.9298 11.63L0.8098 11.22C0.2698 11.11 -0.0901996 10.59 0.0198004 10.05L0.779801 6.12C0.989801 5.04 2.0398 4.33 3.1198 4.54L4.2798 4.77L2.9298 11.63Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(19.79%, 5.21%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Hiking")}
      {...rest}
    ></Icon>
  );
}
