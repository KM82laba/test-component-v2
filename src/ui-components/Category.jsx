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
export default function Category(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Category: {
          paths: [
            {
              d: "M9 0L3.5 9L14.5 9L9 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 8.33%)" },
            },
            {
              d: "M14.5 20C16.9853 20 19 17.9853 19 15.5C19 13.0147 16.9853 11 14.5 11C12.0147 11 10 13.0147 10 15.5C10 17.9853 12.0147 20 14.5 20Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 8.33%)" },
            },
            {
              d: "M0 11.5L8 11.5L8 19.5L0 19.5L0 11.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Category: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Category: {
          paths: [
            {
              d: "M8.15 0.48L4.43 6.56C4.02 7.22 4.5 8.08 5.28 8.08L12.71 8.08C13.49 8.08 13.97 7.22 13.56 6.56L9.85 0.48C9.46 -0.16 8.54 -0.16 8.15 0.48Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 10.25%)" },
            },
            {
              d: "M14.5 19.08C16.9853 19.08 19 17.0653 19 14.58C19 12.0947 16.9853 10.08 14.5 10.08C12.0147 10.08 10 12.0947 10 14.58C10 17.0653 12.0147 19.08 14.5 19.08Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 10.25%)" },
            },
            {
              d: "M1 18.58L7 18.58C7.55 18.58 8 18.13 8 17.58L8 11.58C8 11.03 7.55 10.58 7 10.58L1 10.58C0.45 10.58 0 11.03 0 11.58L0 17.58C0 18.13 0.45 18.58 1 18.58Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 10.25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Category: {
          paths: [
            {
              d: "M9 0L3.5 9L14.5 9L9 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 8.33%)" },
            },
            {
              d: "M14.5 20C16.9853 20 19 17.9853 19 15.5C19 13.0147 16.9853 11 14.5 11C12.0147 11 10 13.0147 10 15.5C10 17.9853 12.0147 20 14.5 20Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 8.33%)" },
            },
            {
              d: "M0 11.5L8 11.5L8 19.5L0 19.5L0 11.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Category: {
          paths: [
            {
              d: "M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(62.5%, 62.5%)" },
            },
            {
              d: "M0 9.66L4 9.66L4 13.66L0 13.66L0 9.66ZM7 0L5.07 3.16L8.93 3.16L7 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 24.33%)" },
            },
            {
              d: "M9 0L3.5 9L14.5 9L9 0ZM9 3.84L10.93 7L7.06 7L9 3.84ZM14.5 11C12.01 11 10 13.01 10 15.5C10 17.99 12.01 20 14.5 20C16.99 20 19 17.99 19 15.5C19 13.01 16.99 11 14.5 11ZM14.5 18C13.12 18 12 16.88 12 15.5C12 14.12 13.12 13 14.5 13C15.88 13 17 14.12 17 15.5C17 16.88 15.88 18 14.5 18ZM8 11.5L0 11.5L0 19.5L8 19.5L8 11.5ZM6 17.5L2 17.5L2 13.5L6 13.5L6 17.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
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
          d: "M9 0L3.5 9L14.5 9L9 0ZM9 3.84L10.93 7L7.06 7L9 3.84ZM14.5 11C12.01 11 10 13.01 10 15.5C10 17.99 12.01 20 14.5 20C16.99 20 19 17.99 19 15.5C19 13.01 16.99 11 14.5 11ZM14.5 18C13.12 18 12 16.88 12 15.5C12 14.12 13.12 13 14.5 13C15.88 13 17 14.12 17 15.5C17 16.88 15.88 18 14.5 18ZM0 19.5L8 19.5L8 11.5L0 11.5L0 19.5ZM2 13.5L6 13.5L6 17.5L2 17.5L2 13.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(10.42%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Category")}
      {...rest}
    ></Icon>
  );
}
