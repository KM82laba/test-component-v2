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
export default function Snowshoeing(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Snowshoeing: {} }, variantValues: { style: "Filled" } },
    { overrides: { Snowshoeing: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Snowshoeing: {
          paths: [
            {
              d: "M8.5 2C8.5 0.9 9.4 0 10.5 0C11.6 0 12.5 0.9 12.5 2C12.5 3.1 11.6 4 10.5 4C9.4 4 8.5 3.1 8.5 2ZM16 10.41C16 9.92 15.64 9.51 15.16 9.43C13.63 9.18 12.37 8.27 11.69 7.08L10.69 5.5C10.29 4.9 9.69 4.5 8.99 4.5C8.31 4.5 7.71 4.78 4.22 6.26C3.49 6.57 3 7.3 3 8.1L3 10.5C3 11.05 3.45 11.5 4 11.5C4.55 11.5 5 11.05 5 10.5L5 8.08L6.79 7.38L5.2 15.5L2.32 17.53L1.18 16.06L0 17L2.38 20.04C2.89 20.69 3.54 21.19 4.26 21.45C4.54 21.55 4.79 21.49 4.98 21.34C5.28 21.11 5.4 20.64 5.1 20.27C5.02 20.17 4.9 20.1 4.79 20.05C4.36 19.87 3.97 19.6 3.65 19.22L3.57 19.12L6.42 17.11C6.8 16.84 7.07 16.45 7.19 16.01L7.89 13.48L10 15.48L10 20L8 20L8 21.5L11.87 21.5C12.69 21.5 13.48 21.29 14.13 20.89C14.39 20.73 14.5 20.5 14.5 20.25C14.5 19.87 14.2 19.5 13.73 19.5C13.6 19.5 13.47 19.54 13.36 19.6C12.96 19.83 12.49 19.97 12 20L12 14.84C12 14.29 11.77 13.77 11.38 13.39L9.89 11.98L10.49 8.98C11.56 10.22 13.12 11.13 14.86 11.41C15.46 11.51 16 11.02 16 10.41Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 5.21%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Snowshoeing: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Snowshoeing: {
          paths: [
            {
              d: "M8.5 2C8.5 0.9 9.4 0 10.5 0C11.6 0 12.5 0.9 12.5 2C12.5 3.1 11.6 4 10.5 4C9.4 4 8.5 3.1 8.5 2ZM2.32 17.53L1.18 16.06L0 17L2.38 20.04C2.89 20.69 3.54 21.19 4.26 21.45C4.54 21.55 4.79 21.49 4.98 21.34C5.28 21.11 5.4 20.64 5.1 20.27C5.02 20.17 4.9 20.1 4.79 20.05C4.36 19.87 3.97 19.6 3.65 19.22L3.57 19.12L7 16.7L7.89 13.48L10 15.48L10 20L8 20L8 21.5L11.87 21.5C12.69 21.5 13.48 21.29 14.13 20.89C14.39 20.73 14.5 20.5 14.5 20.25C14.5 19.87 14.2 19.5 13.73 19.5C13.6 19.5 13.47 19.54 13.36 19.6C12.96 19.83 12.49 19.97 12 20L12 13.98L9.89 11.98L10.49 8.98C11.79 10.48 13.8 11.5 16 11.5L16 9.5C14.1 9.5 12.49 8.48 11.69 7.08L10.69 5.5C10.29 4.9 9.69 4.5 8.99 4.5C8.24 4.5 7.58 4.84 3 6.78L3 11.5L5 11.5L5 8.08L6.79 7.38L5.2 15.5L2.32 17.53Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 6.25%)" },
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
          d: "M8.5 2C8.5 0.9 9.4 0 10.5 0C11.6 0 12.5 0.9 12.5 2C12.5 3.1 11.6 4 10.5 4C9.4 4 8.5 3.1 8.5 2ZM2.32 17.53L1.18 16.06L0 17L2.38 20.04C2.89 20.69 3.54 21.19 4.26 21.45C4.54 21.55 4.79 21.49 4.98 21.34C5.28 21.11 5.4 20.64 5.1 20.27C5.02 20.17 4.9 20.1 4.79 20.05C4.36 19.87 3.97 19.6 3.65 19.22L3.57 19.12L7 16.7L7.89 13.48L10 15.48L10 20L8 20L8 21.5L11.87 21.5C12.69 21.5 13.48 21.29 14.13 20.89C14.39 20.73 14.5 20.5 14.5 20.25C14.5 19.87 14.2 19.5 13.73 19.5C13.6 19.5 13.47 19.54 13.36 19.6C12.96 19.83 12.49 19.97 12 20L12 13.98L9.89 11.98L10.49 8.98C11.79 10.48 13.8 11.5 16 11.5L16 9.5C14.1 9.5 12.49 8.48 11.69 7.08L10.69 5.5C10.29 4.9 9.69 4.5 8.99 4.5C8.24 4.5 7.58 4.84 3 6.78L3 11.5L5 11.5L5 8.08L6.79 7.38L5.2 15.5L2.32 17.53Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 5.21%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Snowshoeing")}
      {...rest}
    ></Icon>
  );
}
