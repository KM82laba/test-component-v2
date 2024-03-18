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
export default function Kitchen(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Kitchen: {
          paths: [
            {
              d: "M16 7L16 2C16 0.9 15.1 0 14 0L2 0C0.9 0 0 0.9 0 2L0 7L16 7ZM4 3L6 3L6 6L4 6L4 3ZM0 9L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 9L0 9ZM6 15L4 15L4 10L6 10L6 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Kitchen: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Kitchen: {
          paths: [
            {
              d: "M14 0.00999999L2 0C1.46957 4.44089e-16 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 1.77636e-15 1.46957 0 2L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.89 15.1 0.00999999 14 0.00999999ZM13 18L3 18C2.45 18 2 17.55 2 17L2 9.98C2 9.43 2.45 8.98 3 8.98L13 8.98C13.55 8.98 14 9.43 14 9.98L14 17C14 17.55 13.55 18 13 18ZM13 7L3 7C2.45 7 2 6.55 2 6L2 3C2 2.45 2.45 2 3 2L13 2C13.55 2 14 2.45 14 3L14 6C14 6.55 13.55 7 13 7ZM5 3C5.55 3 6 3.45 6 4L6 5C6 5.55 5.55 6 5 6C4.45 6 4 5.55 4 5L4 4C4 3.45 4.45 3 5 3ZM5 10C5.55 10 6 10.45 6 11L6 14C6 14.55 5.55 15 5 15C4.45 15 4 14.55 4 14L4 11C4 10.45 4.45 10 5 10Z",
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
        Kitchen: {
          paths: [
            {
              d: "M16 0.00999999L0 0L0 20L16 20L16 0.00999999ZM14 18L2 18L2 8.98L14 8.98L14 18ZM14 7L2 7L2 2L14 2L14 7ZM4 3L6 3L6 6L4 6L4 3ZM4 10L6 10L6 15L4 15L4 10Z",
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
        Kitchen: {
          paths: [
            {
              d: "M2 1L4 1L4 4L2 4L2 1ZM2 8L4 8L4 13L2 13L2 8ZM0 16L12 16L12 6.98L0 6.98L0 16ZM2 8L4 8L4 13L2 13L2 8ZM0 5L12 5L12 0L0 0L0 5ZM2 1L4 1L4 4L2 4L2 1Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 16.67%)" },
            },
            {
              d: "M14 0.00999999L2 0C1.46957 4.44089e-16 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 1.77636e-15 1.46957 0 2L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.89 15.1 0.00999999 14 0.00999999ZM14 18L2 18L2 8.98L14 8.98L14 18ZM14 7L2 7L2 2L14 2L14 7ZM4 3L6 3L6 6L4 6L4 3ZM4 10L6 10L6 15L4 15L4 10Z",
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
          d: "M4 3L6 3L6 6L4 6L4 3ZM4 10L6 10L6 15L4 15L4 10ZM14 0.00999999L2 0C1.46957 4.44089e-16 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 1.77636e-15 1.46957 0 2L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.89 15.1 0.00999999 14 0.00999999ZM14 18L2 18L2 8.98L14 8.98L14 18ZM14 7L2 7L2 2L14 2L14 7Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Kitchen")}
      {...rest}
    ></Icon>
  );
}
