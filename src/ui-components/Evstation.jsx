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
export default function Evstation(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Evstation: {
          paths: [
            {
              d: "M15.77 4.23L15.78 4.22L12.06 0.5L11 1.56L13.11 3.67C12.17 4.03 11.5 4.93 11.5 6C11.5 7.38 12.62 8.5 14 8.5C14.36 8.5 14.69 8.42 15 8.29L15 15.5C15 16.05 14.55 16.5 14 16.5C13.45 16.5 13 16.05 13 15.5L13 11C13 9.9 12.1 9 11 9L10 9L10 2C10 0.9 9.1 0 8 0L2 0C0.9 0 0 0.9 0 2L0 18L10 18L10 10.5L11.5 10.5L11.5 15.5C11.5 16.88 12.62 18 14 18C15.38 18 16.5 16.88 16.5 15.5L16.5 6C16.5 5.31 16.22 4.68 15.77 4.23ZM14 7C13.45 7 13 6.55 13 6C13 5.45 13.45 5 14 5C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7ZM4 15L4 10.5L2 10.5L6 3L6 8L8 8L4 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(15.63%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Evstation: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Evstation: {
          paths: [
            {
              d: "M15.77 4.23L15.78 4.22L12.59 1.03C12.3 0.74 11.82 0.74 11.53 1.03C11.24 1.32 11.24 1.8 11.53 2.09L13.11 3.67C12.06 4.07 11.35 5.14 11.53 6.38C11.69 7.48 12.63 8.37 13.73 8.49C14.2 8.54 14.61 8.46 15 8.29L15 15.5C15 16.05 14.55 16.5 14 16.5C13.45 16.5 13 16.05 13 15.5L13 11C13 9.9 12.1 9 11 9L10 9L10 2C10 0.9 9.1 0 8 0L2 0C0.9 0 0 0.9 0 2L0 17C0 17.55 0.45 18 1 18L9 18C9.55 18 10 17.55 10 17L10 10.5L11.5 10.5L11.5 15.36C11.5 16.67 12.44 17.86 13.74 17.99C15.24 18.14 16.5 16.97 16.5 15.5L16.5 6C16.5 5.31 16.22 4.68 15.77 4.23ZM14 7C13.45 7 13 6.55 13 6C13 5.45 13.45 5 14 5C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7ZM4 13.12L4 10.5L2.83 10.5C2.45 10.5 2.21 10.1 2.39 9.76L5.06 4.76C5.3 4.31 6 4.48 6 5L6 8L7.14 8C7.52 8 7.76 8.41 7.57 8.75L4.93 13.37C4.68 13.81 4 13.63 4 13.12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(15.63%, 12.49%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Evstation: {
          paths: [
            {
              d: "M15.77 4.23L15.78 4.22L12.06 0.5L11 1.56L13.11 3.67C12.06 4.07 11.35 5.14 11.53 6.38C11.69 7.48 12.63 8.37 13.73 8.49C14.2 8.54 14.61 8.46 15 8.29L15 16.5L13 16.5L13 9L10 9L10 0L0 0L0 18L10 18L10 10.5L11.5 10.5L11.5 18L16.5 18L16.5 6C16.5 5.31 16.22 4.68 15.77 4.23ZM14 7C13.45 7 13 6.55 13 6C13 5.45 13.45 5 14 5C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7ZM4 15L4 10.5L2 10.5L6 3L6 8L8 8L4 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(15.63%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Evstation: {
          paths: [
            {
              d: "M2 8.5L0 8.5L0 14L6 14L6 6L2 13L2 8.5ZM0 8.5L4 1L4 6L6 6L6 0L0 0L0 8.5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 20.83%)" },
            },
            {
              d: "M8 0L2 0C0.9 0 0 0.9 0 2L0 18L10 18L10 10.5L11.5 10.5L11.5 15.5C11.5 16.88 12.62 18 14 18C15.38 18 16.5 16.88 16.5 15.5L16.5 6C16.5 5.31 16.22 4.68 15.77 4.23L15.78 4.22L12.06 0.5L11 1.56L13.11 3.67C12.17 4.03 11.5 4.93 11.5 6C11.5 7.38 12.62 8.5 14 8.5C14.36 8.5 14.69 8.42 15 8.29L15 15.5C15 16.05 14.55 16.5 14 16.5C13.45 16.5 13 16.05 13 15.5L13 11C13 9.9 12.1 9 11 9L10 9L10 2C10 0.9 9.1 0 8 0ZM8 8L8 16L2 16L2 2L8 2L8 8ZM14 7C13.45 7 13 6.55 13 6C13 5.45 13.45 5 14 5C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7ZM6 3L2 10.5L4 10.5L4 15L8 8L6 8L6 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 12.5%)" },
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
          d: "M15.77 4.23L15.78 4.22L12.06 0.5L11 1.56L13.11 3.67C12.17 4.03 11.5 4.93 11.5 6C11.5 7.38 12.62 8.5 14 8.5C14.36 8.5 14.69 8.42 15 8.29L15 15.5C15 16.05 14.55 16.5 14 16.5C13.45 16.5 13 16.05 13 15.5L13 11C13 9.9 12.1 9 11 9L10 9L10 2C10 0.9 9.1 0 8 0L2 0C0.9 0 0 0.9 0 2L0 18L10 18L10 10.5L11.5 10.5L11.5 15.5C11.5 16.88 12.62 18 14 18C15.38 18 16.5 16.88 16.5 15.5L16.5 6C16.5 5.31 16.22 4.68 15.77 4.23ZM8 8L8 16L2 16L2 2L8 2L8 8ZM14 7C13.45 7 13 6.55 13 6C13 5.45 13.45 5 14 5C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7ZM6 3L2 10.5L4 10.5L4 15L8 8L6 8L6 3Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(15.63%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Evstation")}
      {...rest}
    ></Icon>
  );
}
