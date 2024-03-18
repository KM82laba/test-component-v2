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
export default function Partymode(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Partymode: {
          paths: [
            {
              d: "M18 2L14.83 2L13 0L7 0L5.17 2L2 2C0.9 2 0 2.9 0 4L0 16C0 17.1 0.9 18 2 18L18 18C19.1 18 20 17.1 20 16L20 4C20 2.9 19.1 2 18 2ZM10 5C11.63 5 13.06 5.79 13.98 7L10 7C8.34 7 7 8.34 7 10C7 10.35 7.07 10.69 7.18 11L5.1 11C5.04 10.68 5 10.34 5 10C5 7.24 7.24 5 10 5ZM10 15C8.37 15 6.94 14.21 6.02 13L10 13C11.66 13 13 11.66 13 10C13 9.65 12.93 9.31 12.82 9L14.9 9C14.97 9.32 15 9.66 15 10C15 12.76 12.76 15 10 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Partymode: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Partymode: {
          paths: [
            {
              d: "M18 2L14.83 2L13.59 0.65C13.22 0.24 12.68 0 12.12 0L7.88 0C7.32 0 6.78 0.24 6.4 0.65L5.17 2L2 2C0.9 2 0 2.9 0 4L0 16C0 17.1 0.9 18 2 18L18 18C19.1 18 20 17.1 20 16L20 4C20 2.9 19.1 2 18 2ZM10 5C11.63 5 13.06 5.79 13.98 7L10 7C8.34 7 7 8.34 7 10C7 10.35 7.07 10.69 7.18 11L5.1 11C5.04 10.68 5 10.34 5 10C5 7.24 7.24 5 10 5ZM10 15C8.37 15 6.94 14.21 6.02 13L10 13C11.66 13 13 11.66 13 10C13 9.65 12.93 9.31 12.82 9L14.9 9C14.97 9.32 15 9.66 15 10C15 12.76 12.76 15 10 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Partymode: {
          paths: [
            {
              d: "M20 2L14.83 2L13 0L7 0L5.17 2L0 2L0 18L20 18L20 2ZM10 5C11.63 5 13.06 5.79 13.98 7L10 7C8.34 7 7 8.34 7 10C7 10.35 7.07 10.69 7.18 11L5.1 11C5.04 10.68 5 10.34 5 10C5 7.24 7.24 5 10 5ZM10 15C8.37 15 6.94 14.21 6.02 13L10 13C11.66 13 13 11.66 13 10C13 9.65 12.93 9.31 12.82 9L14.9 9C14.97 9.32 15 9.66 15 10C15 12.76 12.76 15 10 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Partymode: {
          paths: [
            {
              d: "M11.95 2L11.36 1.35L10.12 0L5.88 0L4.65 1.35L4.05 2L0 2L0 14L16 14L16 2L11.95 2ZM3 8C3 5.24 5.24 3 8 3C9.63 3 11.06 3.79 11.98 5L8 5C6.34 5 5 6.34 5 8C5 8.35 5.07 8.69 5.18 9L3.1 9C3.04 8.68 3 8.34 3 8ZM13 8C13 10.76 10.76 13 8 13C6.37 13 4.94 12.21 4.02 11L8 11C9.66 11 11 9.66 11 8C11 7.65 10.93 7.31 10.82 7L12.9 7C12.97 7.32 13 7.66 13 8Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
            {
              d: "M18 2L14.83 2L13 0L7 0L5.17 2L2 2C0.9 2 0 2.9 0 4L0 16C0 17.1 0.9 18 2 18L18 18C19.1 18 20 17.1 20 16L20 4C20 2.9 19.1 2 18 2ZM18 16L2 16L2 4L6.05 4L6.64 3.35L7.88 2L12.12 2L13.36 3.35L13.95 4L18 4L18 16ZM7 10C7 8.34 8.34 7 10 7L13.98 7C13.06 5.79 11.63 5 10 5C7.24 5 5 7.24 5 10C5 10.34 5.04 10.68 5.1 11L7.18 11C7.07 10.69 7 10.35 7 10ZM13 10C13 11.66 11.66 13 10 13L6.02 13C6.94 14.21 8.37 15 10 15C12.76 15 15 12.76 15 10C15 9.66 14.97 9.32 14.9 9L12.82 9C12.93 9.31 13 9.65 13 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
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
          d: "M18 2L14.83 2L13 0L7 0L5.17 2L2 2C0.9 2 0 2.9 0 4L0 16C0 17.1 0.9 18 2 18L18 18C19.1 18 20 17.1 20 16L20 4C20 2.9 19.1 2 18 2ZM18 16L2 16L2 4L6.05 4L6.64 3.35L7.88 2L12.12 2L13.36 3.35L13.95 4L18 4L18 16ZM7 10C7 8.34 8.34 7 10 7L13.98 7C13.06 5.79 11.63 5 10 5C7.24 5 5 7.24 5 10C5 10.34 5.04 10.68 5.1 11L7.18 11C7.07 10.69 7 10.35 7 10ZM13 10C13 11.66 11.66 13 10 13L6.02 13C6.94 14.21 8.37 15 10 15C12.76 15 15 12.76 15 10C15 9.66 14.97 9.32 14.9 9L12.82 9C12.93 9.31 13 9.65 13 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Partymode")}
      {...rest}
    ></Icon>
  );
}
