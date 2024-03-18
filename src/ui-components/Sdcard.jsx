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
export default function Sdcard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Sdcard: {
          paths: [
            {
              d: "M14 0L6 0L0.02 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.9 15.1 0 14 0ZM8 6L6 6L6 2L8 2L8 6ZM11 6L9 6L9 2L11 2L11 6ZM14 6L12 6L12 2L14 2L14 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Sdcard: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Sdcard: {
          paths: [
            {
              d: "M14 0L6.83 0C6.3 0 5.79 0.21 5.41 0.59L0.6 5.42C0.23 5.79 0 6.3 0 6.82L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.9 15.1 0 14 0ZM7 6C6.45 6 6 5.55 6 5L6 3C6 2.45 6.45 2 7 2C7.55 2 8 2.45 8 3L8 5C8 5.55 7.55 6 7 6ZM10 6C9.45 6 9 5.55 9 5L9 3C9 2.45 9.45 2 10 2C10.55 2 11 2.45 11 3L11 5C11 5.55 10.55 6 10 6ZM13 6C12.45 6 12 5.55 12 5L12 3C12 2.45 12.45 2 13 2C13.55 2 14 2.45 14 3L14 5C14 5.55 13.55 6 13 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Sdcard: {
          paths: [
            {
              d: "M16 0L6 0L0 6L0 20L16 20L16 0ZM8 6L6 6L6 2L8 2L8 6ZM11 6L9 6L9 2L11 2L11 6ZM14 6L12 6L12 2L14 2L14 6Z",
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
        Sdcard: {
          paths: [
            {
              d: "M0 4.83L0 16L12 16L12 0L4.83 0L0 4.83ZM9 3L11 3L11 7L9 7L9 3ZM6 3L8 3L8 7L6 7L6 3ZM5 7L3 7L3 3L5 3L5 7Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 16.67%)" },
            },
            {
              d: "M14 0L6 0L0 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.9 15.1 0 14 0ZM14 18L2 18L2 6.83L6.83 2L14 2L14 18ZM5 5L7 5L7 9L5 9L5 5ZM8 5L10 5L10 9L8 9L8 5ZM11 5L13 5L13 9L11 9L11 5Z",
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
          d: "M14 0L6 0L0 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.9 15.1 0 14 0ZM14 18L2 18L2 6.83L6.83 2L14 2L14 18ZM5 5L7 5L7 9L5 9L5 5ZM8 5L10 5L10 9L8 9L8 5ZM11 5L13 5L13 9L11 9L11 5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Sdcard")}
      {...rest}
    ></Icon>
  );
}
