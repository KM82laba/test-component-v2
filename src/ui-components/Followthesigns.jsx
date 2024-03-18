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
export default function Followthesigns(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Followthesigns: {} }, variantValues: { style: "Filled" } },
    { overrides: { Followthesigns: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Followthesigns: {
          paths: [
            {
              d: "M7.5 4C8.6 4 9.5 3.1 9.5 2C9.5 0.9 8.6 0 7.5 0C6.4 0 5.5 0.9 5.5 2C5.5 3.1 6.4 4 7.5 4ZM3.75 7.4L1.23 20.31C1.11 20.93 1.58 21.5 2.21 21.5L2.3 21.5C2.77 21.5 3.18 21.17 3.28 20.71L4.85 13.5L7 15.5L7 20.5C7 21.05 7.45 21.5 8 21.5C8.55 21.5 9 21.05 9 20.5L9 14.36C9 14.09 8.89 13.84 8.71 13.65L6.95 11.9L7.55 8.9C8.62 10.22 10.13 11.13 11.86 11.41C12.46 11.51 13 11.02 13 10.41C13 9.92 12.64 9.51 12.16 9.43C10.67 9.18 9.41 8.28 8.65 7.05L7.7 5.45C7.35 4.85 6.7 4.5 6 4.5C5.75 4.5 5.5 4.55 5.25 4.65L0.62 6.55C0.25 6.7 0 7.07 0 7.47L0 10.5C0 11.05 0.45 11.5 1 11.5C1.55 11.5 2 11.05 2 10.5L2 8.15L3.75 7.4ZM19 0.5L12 0.5C11.45 0.5 11 0.95 11 1.5L11 6.5C11 7.05 11.45 7.5 12 7.5L14.75 7.5L14.75 20.75C14.75 21.16 15.09 21.5 15.5 21.5C15.91 21.5 16.25 21.16 16.25 20.75L16.25 7.5L19 7.5C19.55 7.5 20 7.05 20 6.5L20 1.5C20 0.95 19.55 0.5 19 0.5ZM18.15 4.35L16.87 5.64C16.56 5.96 16.02 5.73 16.02 5.29L16.02 4.75L13.26 4.75C12.85 4.75 12.51 4.41 12.51 4C12.51 3.59 12.85 3.25 13.26 3.25L16.02 3.25L16.02 2.71C16.02 2.26 16.56 2.04 16.87 2.36L18.15 3.65C18.34 3.84 18.34 4.16 18.15 4.35Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 5.21%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Followthesigns: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Followthesigns: {
          paths: [
            {
              d: "M3.51 5L3.51 3.25L0 3.25L0 1.75L3.51 1.75L3.51 0L6 2.5L3.51 5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(58.88%, 11.46%)" },
            },
            {
              d: "M7.5 4C8.6 4 9.5 3.1 9.5 2C9.5 0.9 8.6 0 7.5 0C6.4 0 5.5 0.9 5.5 2C5.5 3.1 6.4 4 7.5 4ZM3.76 7.4L1.01 21.5L3.11 21.5L4.86 13.5L7.01 15.5L7.01 21.5L9.01 21.5L9.01 13.95L6.96 11.9L7.56 8.9C8.86 10.5 10.81 11.5 13.01 11.5L13.01 9.5C11.16 9.5 9.56 8.5 8.66 7.05L7.7 5.45C7.35 4.85 6.7 4.5 6 4.5C5.75 4.5 5.5 4.55 5.25 4.65L0 6.8L0 11.5L2 11.5L2 8.15L3.76 7.4ZM11 0.5L11 7.5L14.75 7.5L14.75 21.5L16.25 21.5L16.25 7.5L20 7.5L20 0.5L11 0.5ZM16.02 6.5L16.02 4.75L12.51 4.75L12.51 3.25L16.02 3.25L16.02 1.5L18.51 4L16.02 6.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.75%, 5.21%)" },
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
          d: "M7.5 4C8.6 4 9.5 3.1 9.5 2C9.5 0.9 8.6 0 7.5 0C6.4 0 5.5 0.9 5.5 2C5.5 3.1 6.4 4 7.5 4ZM3.75 7.4L1 21.5L3.1 21.5L4.85 13.5L7 15.5L7 21.5L9 21.5L9 13.95L6.95 11.9L7.55 8.9C8.85 10.5 10.8 11.5 13 11.5L13 9.5C11.15 9.5 9.55 8.5 8.65 7.05L7.7 5.45C7.35 4.85 6.7 4.5 6 4.5C5.75 4.5 5.5 4.55 5.25 4.65L0 6.8L0 11.5L2 11.5L2 8.15L3.75 7.4ZM11 0.5L11 7.5L14.75 7.5L14.75 21.5L16.25 21.5L16.25 7.5L20 7.5L20 0.5L11 0.5ZM16.01 6.5L16.01 4.75L12.5 4.75L12.5 3.25L16.01 3.25L16.01 1.5L18.5 4L16.01 6.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 5.21%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Followthesigns")}
      {...rest}
    ></Icon>
  );
}
