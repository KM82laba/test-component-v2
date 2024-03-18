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
export default function Iron(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Iron: {
          paths: [
            {
              d: "M19 0C17.34 0 16 1.34 16 3L16 7C16 7.55 15.55 8 15 8L15 4C15 2.34 13.66 1 12 1L8 1C6.34 1 5 2.34 5 4L7 4C7 3.45 7.45 3 8 3L12 3C12.55 3 13 3.45 13 4L13 5L4 5C1.79 5 0 6.79 0 9L0 12L15 12L15 10C16.66 10 18 8.66 18 7L18 3C18 2.45 18.45 2 19 2L20 2L20 0L19 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Iron: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Iron: {
          paths: [
            {
              d: "M6.27 4C6.61 4 6.95 3.84 7.11 3.53C7.28 3.22 7.62 3 8 3L12 3C12.55 3 13 3.45 13 4L13 5L4 5C1.79 5 0 6.79 0 9L0 11C0 11.55 0.45 12 1 12L14 12C14.55 12 15 11.55 15 11L15 10C16.66 10 18 8.66 18 7L18 3C18 2.45 18.45 2 19 2C19.55 2 20 1.55 20 1C20 0.45 19.55 0 19 0C17.34 0 16 1.34 16 3L16 7C16 7.55 15.55 8 15 8L15 4C15 2.34 13.66 1 12 1L8 1C6.87 1 5.89 1.62 5.37 2.55C5.01 3.2 5.53 4 6.27 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Iron: {
          paths: [
            {
              d: "M16 0L16 8L15 8L15 1L5 1L5 4L7 4L7 3L13 3L13 5L4 5C1.79 5 0 6.79 0 9L0 12L15 12L15 10L18 10L18 2L20 2L20 0L16 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Iron: {
          paths: [
            {
              d: "M11 3L0 3L0 2C0 0.9 0.9 0 2 0L11 0L11 3Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 54.17%)" },
            },
            {
              d: "M19 0C17.34 0 16 1.34 16 3L16 7C16 7.55 15.55 8 15 8L15 4C15 2.34 13.66 1 12 1L8 1C6.34 1 5 2.34 5 4L7 4C7 3.45 7.45 3 8 3L12 3C12.55 3 13 3.45 13 4L13 5L4 5C1.79 5 0 6.79 0 9L0 12L15 12L15 10C16.66 10 18 8.66 18 7L18 3C18 2.45 18.45 2 19 2L20 2L20 0L19 0ZM13 10L2 10L2 9C2 7.9 2.9 7 4 7L13 7L13 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 25%)" },
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
          d: "M19 0C17.34 0 16 1.34 16 3L16 7C16 7.55 15.55 8 15 8L15 4C15 2.34 13.66 1 12 1L8 1C6.34 1 5 2.34 5 4L7 4C7 3.45 7.45 3 8 3L12 3C12.55 3 13 3.45 13 4L13 5L4 5C1.79 5 0 6.79 0 9L0 12L15 12L15 10C16.66 10 18 8.66 18 7L18 3C18 2.45 18.45 2 19 2L20 2L20 0L19 0ZM13 10L2 10L2 9C2 7.9 2.9 7 4 7L13 7L13 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Iron")}
      {...rest}
    ></Icon>
  );
}
