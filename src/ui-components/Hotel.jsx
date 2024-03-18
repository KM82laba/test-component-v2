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
export default function Hotel(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Hotel: {
          paths: [
            {
              d: "M6 8C7.66 8 9 6.66 9 5C9 3.34 7.66 2 6 2C4.34 2 3 3.34 3 5C3 6.66 4.34 8 6 8ZM18 2L10 2L10 9L2 9L2 0L0 0L0 15L2 15L2 12L20 12L20 15L22 15L22 6C22 3.79 20.21 2 18 2Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 18.75%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Hotel: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Hotel: {
          paths: [
            {
              d: "M6 8C7.66 8 9 6.66 9 5C9 3.34 7.66 2 6 2C4.34 2 3 3.34 3 5C3 6.66 4.34 8 6 8ZM18 2L12 2C10.9 2 10 2.9 10 4L10 9L2 9L2 1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1L0 14C0 14.55 0.45 15 1 15C1.55 15 2 14.55 2 14L2 12L20 12L20 14C20 14.55 20.45 15 21 15C21.55 15 22 14.55 22 14L22 6C22 3.79 20.21 2 18 2Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 18.75%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Hotel: {
          paths: [
            {
              d: "M6 8C7.66 8 9 6.66 9 5C9 3.34 7.66 2 6 2C4.34 2 3 3.34 3 5C3 6.66 4.34 8 6 8ZM22 2L10 2L10 9L2 9L2 0L0 0L0 15L2 15L2 12L20 12L20 15L22 15L22 2Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 18.75%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Hotel: {
          paths: [
            {
              d: "M6 0L0 0L0 6L8 6L8 2C8 0.9 7.1 0 6 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(54.17%, 37.5%)" },
            },
            {
              d: "M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 41.67%)" },
            },
            {
              d: "M3 6C3 7.66 4.34 9 6 9C7.66 9 9 7.66 9 6C9 4.34 7.66 3 6 3C4.34 3 3 4.34 3 6ZM7 6C7 6.55 6.55 7 6 7C5.45 7 5 6.55 5 6C5 5.45 5.45 5 6 5C6.55 5 7 5.45 7 6ZM18 2L10 2L10 10L2 10L2 0L0 0L0 15L2 15L2 12L20 12L20 15L22 15L22 6C22 3.79 20.21 2 18 2ZM20 10L12 10L12 4L18 4C19.1 4 20 4.9 20 6L20 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 20.83%)" },
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
          d: "M6 9C7.66 9 9 7.66 9 6C9 4.34 7.66 3 6 3C4.34 3 3 4.34 3 6C3 7.66 4.34 9 6 9ZM6 5C6.55 5 7 5.45 7 6C7 6.55 6.55 7 6 7C5.45 7 5 6.55 5 6C5 5.45 5.45 5 6 5ZM18 2L10 2L10 10L2 10L2 0L0 0L0 15L2 15L2 12L20 12L20 15L22 15L22 6C22 3.79 20.21 2 18 2ZM20 10L12 10L12 4L18 4C19.1 4 20 4.9 20 6L20 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 18.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Hotel")}
      {...rest}
    ></Icon>
  );
}
