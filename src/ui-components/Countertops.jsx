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
export default function Countertops(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Countertops: {
          paths: [
            {
              d: "M16 6L16 3C16 1.34 14.66 0 13 0C11.34 0 10 1.34 10 3L12 3C12 2.45 12.45 2 13 2C13.55 2 14 2.45 14 3L14 6L6 6C7.1 6 8 5.1 8 4L8 0L2 0L2 4C2 5.1 2.9 6 4 6L0 6L0 8L2 8L2 16L18 16L18 8L20 8L20 6L16 6ZM11 14L9 14L9 8L11 8L11 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Countertops: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Countertops: {
          paths: [
            {
              d: "M16 6.00383L16 3.17383C16 1.55383 14.78 0.093832 13.16 0.00383198C11.95 -0.056168 10.89 0.593832 10.36 1.57383C10.01 2.22383 10.53 3.00383 11.27 3.00383L11.28 3.00383C11.62 3.00383 11.96 2.84383 12.12 2.54383C12.28 2.22383 12.62 2.00383 13 2.00383C13.55 2.00383 14 2.45383 14 3.00383L14 6.00383L6 6.00383C7.1 6.00383 8 5.10383 8 4.00383L8 1.00383C8 0.453832 7.55 0.00383198 7 0.00383198L3 0.00383198C2.45 0.00383198 2 0.453832 2 1.00383L2 4.00383C2 5.10383 2.9 6.00383 4 6.00383L1 6.00383C0.45 6.00383 0 6.45383 0 7.00383C0 7.55383 0.45 8.00383 1 8.00383L2 8.00383L2 15.0038C2 15.5538 2.45 16.0038 3 16.0038L17 16.0038C17.55 16.0038 18 15.5538 18 15.0038L18 8.00383L19 8.00383C19.55 8.00383 20 7.55383 20 7.00383C20 6.45383 19.55 6.00383 19 6.00383L16 6.00383ZM11 14.0038L9 14.0038L9 8.00383L11 8.00383L11 14.0038Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.66%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Countertops: {
          paths: [
            {
              d: "M16 6L16 3C16 1.34 14.66 0 13 0C11.34 0 10 1.34 10 3L12 3C12 2.45 12.45 2 13 2C13.55 2 14 2.45 14 3L14 6L6 6C7.1 6 8 5.1 8 4L8 0L2 0L2 4C2 5.1 2.9 6 4 6L0 6L0 8L2 8L2 16L18 16L18 8L20 8L20 6L16 6ZM11 14L9 14L9 8L11 8L11 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Countertops: {
          paths: [
            {
              d: "M0 0L2 0L2 2L0 2L0 0ZM0 12L0 6L5 6L5 12L0 12ZM12 12L7 12L7 6L12 6L12 12Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 25%)" },
            },
            {
              d: "M20 6L16 6L16 3C16 1.34 14.66 0 13 0C11.34 0 10 1.34 10 3L12 3C12 2.45 12.45 2 13 2C13.55 2 14 2.45 14 3L14 6L6 6C7.1 6 8 5.1 8 4L8 0L2 0L2 4C2 5.1 2.9 6 4 6L0 6L0 8L2 8L2 16L18 16L18 8L20 8L20 6ZM4 2L6 2L6 4L4 4L4 2ZM4 14L4 8L9 8L9 14L4 14ZM16 14L11 14L11 8L16 8L16 14Z",
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
          d: "M20 6L16 6L16 3C16 1.34 14.66 0 13 0C11.34 0 10 1.34 10 3L12 3C12 2.45 12.45 2 13 2C13.55 2 14 2.45 14 3L14 6L6 6C7.1 6 8 5.1 8 4L8 0L2 0L2 4C2 5.1 2.9 6 4 6L0 6L0 8L2 8L2 16L18 16L18 8L20 8L20 6ZM4 2L6 2L6 4L4 4L4 2ZM4 14L4 8L9 8L9 14L4 14ZM16 14L11 14L11 8L16 8L16 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Countertops")}
      {...rest}
    ></Icon>
  );
}
