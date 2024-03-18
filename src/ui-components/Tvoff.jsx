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
export default function Tvoff(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Tvoff: {
          paths: [
            {
              d: "M0 2.54L1.53 4.07C0.65 4.28 0 5.06 0 6L0 18C0 19.1 0.9 20 2 20L17.46 20L19.46 22L20.72 20.73L1.27 1.27L0 2.54ZM2 18L2 6L3.46 6L15.46 18L2 18ZM20 4L12.42 4L15.71 0.7L15 0L11 4L7 0L6.3 0.7L9.58 4L6.52 4L8.52 6L20 6L20 17.48L21.65 19.13C21.87 18.81 22 18.42 22 18L22 6C22 4.89 21.11 4 20 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Tvoff: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Tvoff: {
          paths: [
            {
              d: "M20 6.8L20 16.68L21.85 18.53C21.95 18.31 22 18.06 22 17.8L22 5.8C22 4.69 21.1 3.8 20 3.8L12.41 3.8L15.35 0.86C15.55 0.66 15.55 0.35 15.35 0.15C15.15 -0.05 14.84 -0.05 14.64 0.15L11 3.79L7.36 0.15C7.16 -0.05 6.85 -0.05 6.65 0.15C6.45 0.35 6.45 0.66 6.65 0.86L9.59 3.8L7.12 3.8L9.12 5.8L19 5.8C19.55 5.8 20 6.25 20 6.8ZM2.12 1.63C1.73 1.24 1.1 1.24 0.71 1.63C0.32 2.02 0.32 2.65 0.71 3.04L1.53 3.86C0.65 4.08 0 4.86 0 5.8L0 17.8C0 18.9 0.9 19.8 2 19.8L17.46 19.8L18.75 21.09C19.14 21.48 19.77 21.48 20.16 21.09C20.52 20.73 20.53 20.17 20.23 19.78L20.26 19.78L2.12 1.63ZM2 16.8L2 6.8C2 6.25 2.45 5.8 3 5.8L3.46 5.8L15.46 17.8L3 17.8C2.45 17.8 2 17.35 2 16.8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 5.45%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Tvoff: {
          paths: [
            {
              d: "M20 6L20 16.88L22 18.88L22 4L12.42 4L15.71 0.7L15 0L11 4L7 0L6.3 0.7L9.58 4L7.12 4L9.12 6L20 6ZM1.41 1.13L0 2.54L1.53 4.07L0 4.07L0 20L17.46 20L19.45 21.99L20.86 20.58L1.41 1.13ZM2 18L2 6L3.46 6L15.46 18L2 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.19%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Tvoff: {
          paths: [
            {
              d: "M0 12L13.46 12L1.46 0L0 0L0 12ZM7.12 0L18 10.88L18 0L7.12 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 29.17%)" },
            },
            {
              d: "M20 6L20 16.88L21.85 18.73C21.94 18.5 22 18.26 22 18L22 6C22 4.89 21.11 4 20 4L12.42 4L15.71 0.7L15 0L11 4L7 0L6.3 0.7L9.58 4L7.12 4L9.12 6L20 6ZM19.46 22L20.72 20.73L19.46 21.99L19.46 22ZM1.41 1.13L1.27 1.27L0 2.54L1.53 4.07C0.65 4.28 0 5.06 0 6L0 18C0 19.1 0.9 20 2 20L17.46 20L19.45 21.99L20.71 20.73L20.86 20.58L1.41 1.13ZM2 18L2 6L3.46 6L15.46 18L2 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.17%)" },
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
          d: "M20 6L20 16.88L21.85 18.73C21.94 18.5 22 18.26 22 18L22 6C22 4.89 21.11 4 20 4L12.42 4L15.71 0.7L15 0L11 4L7 0L6.3 0.7L9.58 4L7.12 4L9.12 6L20 6ZM19.46 22L20.72 20.73L19.46 21.99L19.46 22ZM1.41 1.13L0 2.54L1.53 4.07C0.65 4.28 0 5.06 0 6L0 18C0 19.1 0.9 20 2 20L17.46 20L19.45 21.99L20.86 20.58L1.41 1.13ZM2 18L2 6L3.46 6L15.46 18L2 18Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Tvoff")}
      {...rest}
    ></Icon>
  );
}
