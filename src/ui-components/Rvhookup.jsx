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
export default function Rvhookup(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Rvhookup: {} }, variantValues: { style: "Filled" } },
    { overrides: { Rvhookup: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Rvhookup: {
          paths: [
            {
              d: "M17 14.2653L16 14.2653L16 8.26528C16 7.16528 15.1 6.26529 14 6.26529L3 6.26529L3 5.52529C3 5.06529 2.44 4.82528 2.11 5.15528L0.37 6.89529C0.17 7.09528 0.17 7.42528 0.37 7.63528L2.11 9.37528C2.44 9.70528 3 9.47528 3 9.00528L3 8.26528L7 8.26528L7 11.2653L1 11.2653C0.45 11.2653 0 11.7153 0 12.2653L0 14.2653C0 15.3653 0.9 16.2653 2 16.2653L4 16.2653C4 17.9253 5.34 19.2653 7 19.2653C8.66 19.2653 10 17.9253 10 16.2653L17 16.2653C17.55 16.2653 18 15.8153 18 15.2653C18 14.7153 17.55 14.2653 17 14.2653ZM7 17.2653C6.45 17.2653 6 16.8153 6 16.2653C6 15.7153 6.45 15.2653 7 15.2653C7.55 15.2653 8 15.7153 8 16.2653C8 16.8153 7.55 17.2653 7 17.2653ZM14 11.2653L10 11.2653L10 8.26528L13 8.26528C13.55 8.26528 14 8.71528 14 9.26528L14 11.2653ZM6 3.26529L13 3.26529L13 4.00528C13 4.46528 13.56 4.70529 13.89 4.37529L15.63 2.63528C15.83 2.43528 15.83 2.10529 15.63 1.89529L13.89 0.155285C13.56 -0.174715 13 0.055285 13 0.525285L13 1.26529L6 1.26529C5.45 1.26529 5 1.71529 5 2.26529C5 2.81528 5.45 3.26529 6 3.26529Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 9.86%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Rvhookup: {
          paths: [
            {
              d: "M16 15L16 7L3 7L3 5L0 8L3 11L3 9L7 9L7 12L0 12L0 17L4 17C4 18.66 5.34 20 7 20C8.66 20 10 18.66 10 17L18 17L18 15L16 15ZM7 18C6.45 18 6 17.55 6 17C6 16.45 6.45 16 7 16C7.55 16 8 16.45 8 17C8 17.55 7.55 18 7 18ZM14 12L10 12L10 9L14 9L14 12ZM13 0L13 2L5 2L5 4L13 4L13 6L16 3L13 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Rvhookup: {
          paths: [
            {
              d: "M16 15L16 9C16 7.9 15.1 7 14 7L3 7L3 5L0 8L3 11L3 9L7 9L7 12L0 12L0 15C0 16.1 0.9 17 2 17L4 17C4 18.66 5.34 20 7 20C8.66 20 10 18.66 10 17L18 17L18 15L16 15ZM7 18C6.45 18 6 17.55 6 17C6 16.45 6.45 16 7 16C7.55 16 8 16.45 8 17C8 17.55 7.55 18 7 18ZM14 12L10 12L10 9L14 9L14 12ZM13 0L13 2L5 2L5 4L13 4L13 6L16 3L13 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
            {
              d: "M16 15L16 9C16 7.9 15.1 7 14 7L3 7L3 5L0 8L3 11L3 9L7 9L7 12L0 12L0 15C0 16.1 0.9 17 2 17L4 17C4 18.66 5.34 20 7 20C8.66 20 10 18.66 10 17L18 17L18 15L16 15ZM7 18C6.45 18 6 17.55 6 17C6 16.45 6.45 16 7 16C7.55 16 8 16.45 8 17C8 17.55 7.55 18 7 18ZM14 12L10 12L10 9L14 9L14 12ZM13 0L13 2L5 2L5 4L13 4L13 6L16 3L13 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
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
          d: "M16 15L16 9C16 7.9 15.1 7 14 7L3 7L3 5L0 8L3 11L3 9L7 9L7 12L0 12L0 15C0 16.1 0.9 17 2 17L4 17C4 18.66 5.34 20 7 20C8.66 20 10 18.66 10 17L18 17L18 15L16 15ZM7 18C6.45 18 6 17.55 6 17C6 16.45 6.45 16 7 16C7.55 16 8 16.45 8 17C8 17.55 7.55 18 7 18ZM14 12L10 12L10 9L14 9L14 12ZM13 0L13 2L5 2L5 4L13 4L13 6L16 3L13 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Rvhookup")}
      {...rest}
    ></Icon>
  );
}
