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
export default function Elderly(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Elderly: {} }, variantValues: { style: "Filled" } },
    { overrides: { Elderly: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Elderly: {
          paths: [
            {
              d: "M5.5 2C5.5 0.9 6.4 0 7.5 0C8.6 0 9.5 0.9 9.5 2C9.5 3.1 8.6 4 7.5 4C6.4 4 5.5 3.1 5.5 2ZM12.53 9.5C10.96 9.51 9.59 8.6 8.93 7.29L8.14 5.62C7.97 5.27 7.7 4.97 7.34 4.77C6.72 4.41 5.99 4.43 5.4 4.74L5.4 4.73L1.01 7.23C0.39 7.58 0 8.24 0 8.96L0 11.5C0 12.05 0.45 12.5 1 12.5C1.55 12.5 2 12.05 2 11.5L2 8.96L3.5 8.11C3.18 9.21 3 10.35 3 11.5L3 16.83L1 19.5C0.67 19.94 0.76 20.57 1.2 20.9C1.64 21.23 2.27 21.14 2.6 20.7L4.64 17.98C4.87 17.67 5.01 17.29 5.04 16.9L5.22 13.96L7 16.5L7 20.5C7 21.05 7.45 21.5 8 21.5C8.55 21.5 9 21.05 9 20.5L9 15.63C9 15.22 8.87 14.82 8.64 14.48L7.04 12.19C7.04 12.19 7.04 12.19 7.04 12.18C6.93 11.02 7.11 9.86 7.5 8.78C8.31 10.01 9.55 10.92 11.01 11.3L11.01 11.5C11.01 11.78 11.23 12 11.51 12C11.79 12 12 11.78 12 11.5L12 11C12 10.72 12.22 10.5 12.5 10.5C12.78 10.5 13 10.72 13 11L13 21C13 21.28 13.22 21.5 13.5 21.5C13.78 21.5 14 21.28 14 21L14 11C14 10.18 13.34 9.49 12.53 9.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 5.21%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Elderly: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Elderly: {
          paths: [
            {
              d: "M7.5 4C8.6 4 9.5 3.1 9.5 2C9.5 0.9 8.6 0 7.5 0C6.4 0 5.5 0.9 5.5 2C5.5 3.1 6.4 4 7.5 4ZM14 11L14 21.5L13 21.5L13 11C13 10.72 12.78 10.5 12.5 10.5C12.22 10.5 12 10.72 12 11L12 12L11 12L11 11.31C9.54 10.93 8.3 10.02 7.49 8.79C7.18 9.66 7 10.57 7 11.5C7 11.73 7.02 11.96 7.03 12.19L9 15L9 21.5L7 21.5L7 16.5L5.22 13.96L5 17.5L2 21.5L0.4 20.3L3 16.83L3 11.5C3 10.35 3.18 9.21 3.5 8.11L2 8.96L2 12.5L0 12.5L0 7.8L5.4 4.73L5.4 4.74C5.99 4.43 6.72 4.41 7.34 4.77C7.7 4.98 7.97 5.28 8.14 5.62L8.93 7.29C9.58 8.6 10.94 9.5 12.5 9.5C13.33 9.5 14 10.17 14 11Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 6.25%)" },
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
          d: "M7.5 4C8.6 4 9.5 3.1 9.5 2C9.5 0.9 8.6 0 7.5 0C6.4 0 5.5 0.9 5.5 2C5.5 3.1 6.4 4 7.5 4ZM14 11L14 21.5L13 21.5L13 11C13 10.72 12.78 10.5 12.5 10.5C12.22 10.5 12 10.72 12 11L12 12L11 12L11 11.31C9.54 10.93 8.3 10.02 7.49 8.79C7.18 9.66 7 10.57 7 11.5C7 11.73 7.02 11.96 7.03 12.19L9 15L9 21.5L7 21.5L7 16.5L5.22 13.96L5 17.5L2 21.5L0.4 20.3L3 16.83L3 11.5C3 10.35 3.18 9.21 3.5 8.11L2 8.96L2 12.5L0 12.5L0 7.8L5.4 4.73L5.4 4.74C5.99 4.43 6.72 4.41 7.34 4.77C7.7 4.98 7.97 5.28 8.14 5.62L8.93 7.29C9.58 8.6 10.94 9.5 12.5 9.5C13.33 9.5 14 10.17 14 11Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 5.21%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Elderly")}
      {...rest}
    ></Icon>
  );
}
