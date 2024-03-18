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
export default function Syncproblem(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Syncproblem: {} }, variantValues: { style: "Filled" } },
    { overrides: { Syncproblem: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Syncproblem: {
          paths: [
            {
              d: "M0 8C0 10.21 0.91 12.2 2.36 13.64L0.85 15.15C0.54 15.46 0.76 16 1.21 16L5.5 16C5.78 16 6 15.78 6 15.5L6 11.21C6 10.76 5.46 10.54 5.15 10.86L3.76 12.25C2.68 11.15 2 9.66 2 8C2 5.61 3.4 3.54 5.43 2.58C5.77 2.42 6 2.11 6 1.74L6 1.55C6 0.87 5.29 0.44 4.68 0.73C1.92 1.99 0 4.77 0 8ZM8 13L10 13L10 11L8 11L8 13ZM16.79 0L12.5 0C12.22 0 12 0.22 12 0.5L12 4.79C12 5.24 12.54 5.46 12.85 5.14L14.24 3.75C15.32 4.85 16 6.34 16 8C16 10.39 14.6 12.46 12.57 13.42C12.23 13.58 12 13.89 12 14.26L12 14.44C12 15.12 12.71 15.55 13.32 15.26C16.08 14.01 18 11.23 18 8C18 5.79 17.09 3.8 15.64 2.36L17.15 0.85C17.46 0.54 17.24 0 16.79 0ZM9 9C9.55 9 10 8.55 10 8L10 4C10 3.45 9.55 3 9 3C8.45 3 8 3.45 8 4L8 8C8 8.55 8.45 9 9 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Syncproblem: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Syncproblem: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M0 8C0 10.21 0.91 12.2 2.36 13.64L0 16L6 16L6 10L3.76 12.24C2.68 11.15 2 9.66 2 8C2 5.39 3.67 3.17 6 2.35L6 0.26C2.55 1.15 0 4.27 0 8ZM8 13L10 13L10 11L8 11L8 13ZM18 0L12 0L12 6L14.24 3.76C15.32 4.85 16 6.34 16 8C16 10.61 14.33 12.83 12 13.65L12 15.74C15.45 14.85 18 11.73 18 8C18 5.79 17.09 3.8 15.64 2.36L18 0ZM8 9L10 9L10 3L8 3L8 9Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Syncproblem")}
      {...rest}
    ></Icon>
  );
}
