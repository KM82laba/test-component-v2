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
export default function Livetv(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Livetv: {
          paths: [
            {
              d: "M20 4L12.41 4L15.7 0.71L15 0L11 4L7 0L6.29 0.71L9.59 4L2 4C0.9 4 0 4.89 0 6L0 18C0 19.1 0.9 20 2 20L20 20C21.1 20 22 19.1 22 18L22 6C22 4.89 21.1 4 20 4ZM20 18L2 18L2 6L20 6L20 18ZM8 8L8 16L15 12L8 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Livetv: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Livetv: {
          paths: [
            {
              d: "M9.5 14.95L13.48 12.67C14.15 12.29 14.15 11.32 13.48 10.93L9.5 8.65C8.83 8.27 8 8.76 8 9.52L8 14.07C8 14.84 8.83 15.33 9.5 14.95ZM20 3.8L12.41 3.8L15.35 0.86C15.55 0.66 15.55 0.35 15.35 0.15C15.15 -0.05 14.84 -0.05 14.64 0.15L11 3.79L7.36 0.15C7.16 -0.05 6.85 -0.05 6.65 0.15C6.45 0.35 6.45 0.66 6.65 0.86L9.59 3.8L2 3.8C0.9 3.8 0 4.69 0 5.8L0 17.8C0 18.9 0.9 19.8 2 19.8L20 19.8C21.1 19.8 22 18.9 22 17.8L22 5.8C22 4.69 21.1 3.8 20 3.8ZM19 17.8L3 17.8C2.45 17.8 2 17.35 2 16.8L2 6.8C2 6.25 2.45 5.8 3 5.8L19 5.8C19.55 5.8 20 6.25 20 6.8L20 16.8C20 17.35 19.55 17.8 19 17.8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.75%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Livetv: {
          paths: [
            {
              d: "M22 4L12.41 4L15.7 0.71L15 0L11 4L7 0L6.29 0.71L9.59 4L0 4L0 20L22 20L22 4ZM20 18L2 18L2 6L20 6L20 18ZM8 8L8 16L15 12L8 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Livetv: {
          paths: [
            {
              d: "M0 12L18 12L18 0L0 0L0 12ZM6 2L13 6L6 10L6 2Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 33.33%)" },
            },
            {
              d: "M8 8L8 16L15 12L8 8ZM20 4L12.42 4L15.71 0.71L15 0L11 4L10.97 4L6.97 0L6.28 0.71L9.56 4L2 4C0.9 4 0 4.9 0 6L0 18C0 19.1 0.9 20 2 20L20 20C21.1 20 22 19.1 22 18L22 6C22 4.9 21.1 4 20 4ZM20 18L2 18L2 6L20 6L20 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.33%)" },
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
          d: "M8 8L8 16L15 12L8 8ZM20 4L12.42 4L15.71 0.71L15 0L11 4L10.97 4L6.97 0L6.28 0.71L9.56 4L2 4C0.9 4 0 4.9 0 6L0 18C0 19.1 0.9 20 2 20L20 20C21.1 20 22 19.1 22 18L22 6C22 4.9 21.1 4 20 4ZM20 18L2 18L2 6L20 6L20 18Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Livetv")}
      {...rest}
    ></Icon>
  );
}
