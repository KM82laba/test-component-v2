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
export default function Bungalow(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Bungalow: {
          paths: [
            {
              d: "M7.8 0L0 12.5L1.7 13.56L2.8 11.8L2.8 18L6.8 18L6.8 13L8.8 13L8.8 18L12.8 18L12.8 11.79L13.9 13.56L15.6 12.5L7.8 0ZM8.8 11L6.8 11L6.8 9L8.8 9L8.8 11Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(17.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Bungalow: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Bungalow: {
          paths: [
            {
              d: "M7.42077 12.1125C7.97077 12.1125 8.42076 12.5625 8.42076 13.1125L8.42076 17.1125L11.4208 17.1125C11.9708 17.1125 12.4208 16.6625 12.4208 16.1125L12.4208 10.9025L12.9908 11.8225C13.2808 12.2925 13.9008 12.4325 14.3708 12.1425C14.8408 11.8525 14.9808 11.2325 14.6908 10.7625L8.27077 0.4725C7.88077 -0.1575 6.96076 -0.1575 6.57077 0.4725L0.150765 10.7625C-0.139235 11.2325 0.000765592 11.8525 0.470766 12.1425C0.940766 12.4325 1.55077 12.2925 1.85077 11.8225L2.42077 10.9125L2.42077 16.1125C2.42077 16.6625 2.87077 17.1125 3.42077 17.1125L6.42077 17.1125L6.42077 13.1125C6.42077 12.5625 6.87077 12.1125 7.42077 12.1125ZM8.42076 9.1125C8.42076 9.6625 7.97077 10.1125 7.42077 10.1125C6.87077 10.1125 6.42077 9.6625 6.42077 9.1125C6.42077 8.5625 6.87077 8.1125 7.42077 8.1125C7.97077 8.1125 8.42076 8.5625 8.42076 9.1125Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.08%, 14.35%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Bungalow: {
          paths: [
            {
              d: "M7.8 0L0 12.5L1.7 13.56L2.8 11.8L2.8 18L6.8 18L6.8 13L8.8 13L8.8 18L12.8 18L12.8 11.79L13.9 13.56L15.6 12.5L7.8 0ZM8.8 11L6.8 11L6.8 9L8.8 9L8.8 11Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(17.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Bungalow: {
          paths: [
            {
              d: "M3 0L0 4.8L0 12.22L2 12.22L2 9.22L4 9.22L4 12.22L6 12.22L6 4.8L3 0ZM4 7.22L2 7.22L2 5.22L4 5.22L4 7.22Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(37.5%, 28.25%)" },
            },
            {
              d: "M8.8 11L6.8 11L6.8 9L8.8 9L8.8 11ZM13.9 13.56L12.8 11.79L12.8 18L2.8 18L2.8 11.8L1.7 13.56L0 12.5L7.8 0L15.6 12.5L13.9 13.56ZM10.8 8.59L7.8 3.79L4.8 8.59L4.8 16L6.8 16L6.8 13L8.8 13L8.8 16L10.8 16L10.8 8.59Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(17.5%, 12.5%)" },
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
          d: "M8.8 11L6.8 11L6.8 9L8.8 9L8.8 11ZM13.9 13.56L12.8 11.79L12.8 18L2.8 18L2.8 11.8L1.7 13.56L0 12.5L7.8 0L15.6 12.5L13.9 13.56ZM10.8 8.59L7.8 3.79L4.8 8.59L4.8 16L6.8 16L6.8 13L8.8 13L8.8 16L10.8 16L10.8 8.59Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(17.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Bungalow")}
      {...rest}
    ></Icon>
  );
}
