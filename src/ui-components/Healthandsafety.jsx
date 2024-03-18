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
export default function Healthandsafety(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Healthandsafety: {
          paths: [
            {
              d: "M6.5 11L4 11L4 8L6.5 8L6.5 5.5L9.5 5.5L9.5 8L12 8L12 11L9.5 11L9.5 13.5L6.5 13.5L6.5 11ZM8 0L0 3L0 9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09L16 3L8 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Healthandsafety: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Healthandsafety: {
          paths: [
            {
              d: "M6.5 10.8663L5.5 10.8663C4.67 10.8663 4 10.1963 4 9.36628C4 8.53628 4.67 7.86628 5.5 7.86628L6.5 7.86628L6.5 6.86628C6.5 6.03628 7.17 5.36628 8 5.36628C8.83 5.36628 9.5 6.03628 9.5 6.86628L9.5 7.86628L10.5 7.86628C11.33 7.86628 12 8.53628 12 9.36628C12 10.1963 11.33 10.8663 10.5 10.8663L9.5 10.8663L9.5 11.8663C9.5 12.6963 8.83 13.3663 8 13.3663C7.17 13.3663 6.5 12.6963 6.5 11.8663L6.5 10.8663ZM7.3 0.126277L1.3 2.37628C0.52 2.67628 0 3.41628 0 4.25628L0 8.95628C0 14.0063 3.41 18.7163 8 19.8663C12.59 18.7163 16 14.0063 16 8.95628L16 4.25628C16 3.42628 15.48 2.67628 14.7 2.38628L8.7 0.136277C8.25 -0.0437232 7.75 -0.0437232 7.3 0.126277Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.61%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Healthandsafety: {
          paths: [
            {
              d: "M6.5 11L4 11L4 8L6.5 8L6.5 5.5L9.5 5.5L9.5 8L12 8L12 11L9.5 11L9.5 13.5L6.5 13.5L6.5 11ZM8 0L0 3L0 9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09L16 3L8 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Healthandsafety: {
          paths: [
            {
              d: "M6 0L0 2.25L0 6.95C0 10.95 2.55 14.65 6 15.78C9.45 14.65 12 10.96 12 6.95L12 2.25L6 0ZM10 8.86L7.5 8.86L7.5 11.36L4.5 11.36L4.5 8.86L2 8.86L2 5.86L4.5 5.86L4.5 3.36L7.5 3.36L7.5 5.86L10 5.86L10 8.86Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 17.25%)" },
            },
            {
              d: "M6.5 11L4 11L4 8L6.5 8L6.5 5.5L9.5 5.5L9.5 8L12 8L12 11L9.5 11L9.5 13.5L6.5 13.5L6.5 11ZM8 0L0 3L0 9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09L16 3L8 0ZM14 9.09C14 13.09 11.45 16.79 8 17.92C4.55 16.79 2 13.1 2 9.09L2 4.39L8 2.14L14 4.39L14 9.09Z",
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
          d: "M6.5 11L4 11L4 8L6.5 8L6.5 5.5L9.5 5.5L9.5 8L12 8L12 11L9.5 11L9.5 13.5L6.5 13.5L6.5 11ZM8 0L0 3L0 9.09C0 14.14 3.41 18.85 8 20C12.59 18.85 16 14.14 16 9.09L16 3L8 0ZM14 9.09C14 13.09 11.45 16.79 8 17.92C4.55 16.79 2 13.1 2 9.09L2 4.39L8 2.14L14 4.39L14 9.09Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Healthandsafety")}
      {...rest}
    ></Icon>
  );
}
