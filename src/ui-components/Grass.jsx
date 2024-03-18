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
export default function Grass(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Grass: {} }, variantValues: { style: "Filled" } },
    { overrides: { Grass: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Grass: {
          paths: [
            {
              d: "M13.64 6.1321C14.19 4.6621 15.07 3.3521 16.2 2.3021C16.58 1.9421 16.24 1.3021 15.74 1.4521C12.42 2.4321 9.99 5.5021 10 9.1421C10.95 7.8621 12.2 6.8321 13.64 6.1321ZM9.42 3.9621C8.82 2.4021 7.79 1.0521 6.46 0.0921002C6.04 -0.2079 5.5 0.2821 5.74 0.7421C6.54 2.2621 7 3.9921 7 5.8221C7 6.0321 6.97 6.2321 6.96 6.4321C7.39 6.6721 7.79 6.9521 8.18 7.2521C8.39 6.0721 8.83 4.9621 9.42 3.9621ZM10 15.1121L1 15.1121C0.45 15.1121 0 14.6621 0 14.1121C0 13.5621 0.45 13.1121 1 13.1121L5.75 13.1121C5.18 10.9221 3.71 9.0921 1.75 8.0521C1.59 7.9721 1.49 7.8021 1.49 7.6121C1.49 7.3421 1.71 7.1221 1.98 7.1121C1.99 7.1121 2 7.1121 2 7.1121C6.42 7.1121 10 10.6921 10 15.1121ZM18.26 8.0521C16.3 9.0921 14.82 10.9221 14.26 13.1121L19 13.1121C19.55 13.1121 20 13.5621 20 14.1121C20 14.6621 19.55 15.1121 19 15.1121L12 15.1121C12 14.4321 11.93 13.7621 11.8 13.1121C11.65 12.3921 11.42 11.6921 11.13 11.0421C12.52 8.6921 15.07 7.1121 18 7.1121C18.01 7.1121 18.02 7.1121 18.02 7.1121C18.29 7.1121 18.51 7.3421 18.51 7.6121C18.52 7.8021 18.41 7.9621 18.26 8.0521Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 18.52%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Grass: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Grass: {
          paths: [
            {
              d: "M10 16L0 16L0 14L5.75 14C5.02 11.19 2.81 8.99 0 8.26C0.64 8.1 1.31 8 2 8C6.42 8 10 11.58 10 16ZM20 8.26C19.36 8.1 18.69 8 18 8C15.07 8 12.52 9.58 11.12 11.93C11.41 12.59 11.65 13.28 11.79 14C11.92 14.65 11.99 15.32 11.99 16L13.99 16L19.99 16L19.99 14L14.24 14C14.98 11.19 17.19 8.99 20 8.26ZM13.64 7.02C14.42 4.93 15.87 3.18 17.73 2.02C13.44 2.16 10 5.67 10 10C10 10.01 10 10.02 10 10.02C10.95 8.75 12.2 7.72 13.64 7.02ZM9.42 4.85C8.58 2.66 6.88 0.89 4.7 0C6.14 1.86 7 4.18 7 6.71C7 6.92 6.97 7.12 6.96 7.32C7.39 7.56 7.79 7.84 8.18 8.14C8.39 6.96 8.83 5.85 9.42 4.85Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
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
          d: "M10 16L0 16L0 14L5.75 14C5.02 11.19 2.81 8.99 0 8.26C0.64 8.1 1.31 8 2 8C6.42 8 10 11.58 10 16ZM20 8.26C19.36 8.1 18.69 8 18 8C15.07 8 12.52 9.58 11.12 11.93C11.41 12.59 11.65 13.28 11.79 14C11.92 14.65 11.99 15.32 11.99 16L19.99 16L19.99 14L14.24 14C14.98 11.19 17.19 8.99 20 8.26ZM13.64 7.02C14.42 4.93 15.87 3.18 17.73 2.02C13.44 2.16 10 5.67 10 10C10 10.01 10 10.02 10 10.02C10.95 8.75 12.2 7.72 13.64 7.02ZM9.42 4.85C8.58 2.66 6.88 0.89 4.7 0C6.14 1.86 7 4.18 7 6.71C7 6.92 6.97 7.12 6.96 7.32C7.39 7.56 7.79 7.84 8.18 8.14C8.39 6.96 8.83 5.85 9.42 4.85Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Grass")}
      {...rest}
    ></Icon>
  );
}
