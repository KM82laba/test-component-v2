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
export default function Power(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Power: {
          paths: [
            {
              d: "M10.01 4L10 0L8 0L8 4L4 4L4 0L2 0L2 4L1.99 4C1 3.99 0 4.99 0 5.99L0 11.48L3.5 15L3.5 18L8.5 18L8.5 15L12 11.49L12 5.99C12 4.99 11 3.99 10.01 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Power: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Power: {
          paths: [
            {
              d: "M10.01 4L10 1C10 0.45 9.55 0 9 0C8.45 0 8 0.45 8 1L8 4L4 4L4 1C4 0.45 3.55 0 3 0C2.45 0 2 0.45 2 1L2 4L1.99 4C0.9 4 0 4.9 0 5.99L0 10.65C0 11.18 0.21 11.69 0.58 12.06L3.5 15L3.5 17C3.5 17.55 3.95 18 4.5 18L7.5 18C8.05 18 8.5 17.55 8.5 17L8.5 15L11.42 12.08C11.79 11.7 12 11.19 12 10.66L12 5.99C12 4.89 11.11 4 10.01 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Power: {
          paths: [
            {
              d: "M10 4L10 0L8 0L8 4L4 4L4 0L2 0L2 4L0 4L0 11.5L3.5 15L3.5 18L8.5 18L8.5 15L12 11.49L12 4L10 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Power: {
          paths: [
            {
              d: "M0 4.65L3.5 8.17L3.5 10L4.5 10L4.5 8.17L8 4.66L8 0L0 0L0 4.65Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 37.5%)" },
            },
            {
              d: "M10 4L10 0L8 0L8 4L4 4L4 0L2 0L2 4L1.99 4C0.89 4 0 4.89 0 5.98L0 11.5L3.5 15L3.5 18L8.5 18L8.5 15L12 11.5L12 6C12 4.9 11.1 4 10 4ZM10 10.66L6.5 14.17L6.5 16L5.5 16L5.5 14.17L2 10.65L2 6L10 6L10 10.66Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 12.5%)" },
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
          d: "M10 6L10 10.66L6.5 14.17L6.5 16L5.5 16L5.5 14.17L2 10.65L2 6L10 6ZM10 0L8 0L8 4L4 4L4 0L2 0L2 4L1.99 4C0.9 3.99 0 4.89 0 5.98L0 11.5L3.5 15L3.5 18L8.5 18L8.5 15L12 11.49L12 6C12 4.9 11.1 4 10 4L10 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(25%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Power")}
      {...rest}
    ></Icon>
  );
}
