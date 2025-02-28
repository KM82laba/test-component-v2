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
export default function Fitbit(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Fitbit: {} }, variantValues: { style: "Filled" } },
    { overrides: { Fitbit: {} }, variantValues: { style: "Outlined" } },
    { overrides: { Fitbit: {} }, variantValues: { style: "Round" } },
    { overrides: { Fitbit: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Fitbit: {
          paths: [
            {
              d: "M17.65 11.89C18.69 11.89 19.54 11.04 19.54 10C19.54 8.96 18.69 8.11 17.65 8.11C16.61 8.11 15.76 8.96 15.76 10C15.76 11.04 16.61 11.89 17.65 11.89ZM13.41 11.68C14.34 11.68 15.09 10.93 15.09 10C15.09 9.07 14.34 8.32 13.41 8.32C12.48 8.32 11.73 9.07 11.73 10C11.73 10.93 12.48 11.68 13.41 11.68ZM13.41 7.42C14.34 7.42 15.09 6.67 15.09 5.74C15.09 4.81 14.34 4.06 13.41 4.06C12.48 4.06 11.73 4.81 11.73 5.74C11.73 6.67 12.48 7.42 13.41 7.42ZM13.41 15.93C14.34 15.93 15.09 15.18 15.09 14.25C15.09 13.32 14.34 12.57 13.41 12.57C12.48 12.57 11.73 13.32 11.73 14.25C11.73 15.17 12.48 15.93 13.41 15.93ZM9.17 11.47C9.98 11.47 10.64 10.81 10.64 10C10.64 9.19 9.98 8.53 9.17 8.53C8.36 8.53 7.7 9.19 7.7 10C7.7 10.81 8.35 11.47 9.17 11.47ZM9.17 7.21C9.98 7.21 10.64 6.55 10.64 5.74C10.64 4.93 9.98 4.27 9.17 4.27C8.36 4.27 7.7 4.93 7.7 5.74C7.7 6.55 8.35 7.21 9.17 7.21ZM9.17 15.73C9.98 15.73 10.64 15.07 10.64 14.26C10.64 13.45 9.98 12.79 9.17 12.79C8.36 12.79 7.7 13.45 7.7 14.26C7.69 15.07 8.35 15.73 9.17 15.73ZM9.17 20C9.98 20 10.64 19.34 10.64 18.53C10.64 17.72 9.98 17.06 9.17 17.06C8.36 17.06 7.7 17.72 7.7 18.53C7.69 19.34 8.35 20 9.17 20ZM9.17 2.94C9.98 2.94 10.64 2.28 10.64 1.47C10.64 0.66 9.98 0 9.17 0C8.36 0 7.7 0.66 7.7 1.47C7.7 2.28 8.35 2.94 9.17 2.94ZM4.92 11.26C5.62 11.26 6.18 10.69 6.18 10C6.18 9.31 5.61 8.74 4.92 8.74C4.22 8.74 3.66 9.31 3.66 10C3.66 10.69 4.22 11.26 4.92 11.26ZM4.92 15.51C5.62 15.51 6.18 14.94 6.18 14.25C6.18 13.55 5.61 12.99 4.92 12.99C4.22 12.99 3.66 13.56 3.66 14.25C3.66 14.94 4.22 15.51 4.92 15.51ZM4.92 7.02C5.62 7.02 6.18 6.45 6.18 5.76C6.18 5.06 5.61 4.5 4.92 4.5C4.22 4.5 3.66 5.07 3.66 5.76C3.66 6.45 4.22 7.02 4.92 7.02ZM1.05 11.05C1.63 11.05 2.1 10.58 2.1 10C2.1 9.42 1.63 8.95 1.05 8.95C0.47 8.95 0 9.42 0 10C0 10.58 0.47 11.05 1.05 11.05Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.33%, 8.33%)" },
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
          d: "M17.65 11.89C18.69 11.89 19.54 11.04 19.54 10C19.54 8.96 18.69 8.11 17.65 8.11C16.61 8.11 15.76 8.96 15.76 10C15.76 11.04 16.61 11.89 17.65 11.89ZM13.41 11.68C14.34 11.68 15.09 10.93 15.09 10C15.09 9.07 14.34 8.32 13.41 8.32C12.48 8.32 11.73 9.07 11.73 10C11.73 10.93 12.48 11.68 13.41 11.68ZM13.41 7.42C14.34 7.42 15.09 6.67 15.09 5.74C15.09 4.81 14.34 4.06 13.41 4.06C12.48 4.06 11.73 4.81 11.73 5.74C11.73 6.67 12.48 7.42 13.41 7.42ZM13.41 15.93C14.34 15.93 15.09 15.18 15.09 14.25C15.09 13.32 14.34 12.57 13.41 12.57C12.48 12.57 11.73 13.32 11.73 14.25C11.73 15.17 12.48 15.93 13.41 15.93ZM9.17 11.47C9.98 11.47 10.64 10.81 10.64 10C10.64 9.19 9.98 8.53 9.17 8.53C8.36 8.53 7.7 9.19 7.7 10C7.7 10.81 8.35 11.47 9.17 11.47ZM9.17 7.21C9.98 7.21 10.64 6.55 10.64 5.74C10.64 4.93 9.98 4.27 9.17 4.27C8.36 4.27 7.7 4.93 7.7 5.74C7.7 6.55 8.35 7.21 9.17 7.21ZM9.17 15.73C9.98 15.73 10.64 15.07 10.64 14.26C10.64 13.45 9.98 12.79 9.17 12.79C8.36 12.79 7.7 13.45 7.7 14.26C7.69 15.07 8.35 15.73 9.17 15.73ZM9.17 20C9.98 20 10.64 19.34 10.64 18.53C10.64 17.72 9.98 17.06 9.17 17.06C8.36 17.06 7.7 17.72 7.7 18.53C7.69 19.34 8.35 20 9.17 20ZM9.17 2.94C9.98 2.94 10.64 2.28 10.64 1.47C10.64 0.66 9.98 0 9.17 0C8.36 0 7.7 0.66 7.7 1.47C7.7 2.28 8.35 2.94 9.17 2.94ZM4.92 11.26C5.62 11.26 6.18 10.69 6.18 10C6.18 9.31 5.61 8.74 4.92 8.74C4.22 8.74 3.66 9.31 3.66 10C3.66 10.69 4.22 11.26 4.92 11.26ZM4.92 15.51C5.62 15.51 6.18 14.94 6.18 14.25C6.18 13.55 5.61 12.99 4.92 12.99C4.22 12.99 3.66 13.56 3.66 14.25C3.66 14.94 4.22 15.51 4.92 15.51ZM4.92 7.02C5.62 7.02 6.18 6.45 6.18 5.76C6.18 5.06 5.61 4.5 4.92 4.5C4.22 4.5 3.66 5.07 3.66 5.76C3.66 6.45 4.22 7.02 4.92 7.02ZM1.05 11.05C1.63 11.05 2.1 10.58 2.1 10C2.1 9.42 1.63 8.95 1.05 8.95C0.47 8.95 0 9.42 0 10C0 10.58 0.47 11.05 1.05 11.05Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(9.29%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Fitbit")}
      {...rest}
    ></Icon>
  );
}
