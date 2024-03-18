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
export default function Domain(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Domain: {} }, variantValues: { style: "Filled" } },
    { overrides: { Domain: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Domain: {
          paths: [
            {
              d: "M10 4L10 2C10 0.9 9.1 0 8 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L18 18C19.1 18 20 17.1 20 16L20 6C20 4.9 19.1 4 18 4L10 4ZM4 16L2 16L2 14L4 14L4 16ZM4 12L2 12L2 10L4 10L4 12ZM4 8L2 8L2 6L4 6L4 8ZM4 4L2 4L2 2L4 2L4 4ZM8 16L6 16L6 14L8 14L8 16ZM8 12L6 12L6 10L8 10L8 12ZM8 8L6 8L6 6L8 6L8 8ZM8 4L6 4L6 2L8 2L8 4ZM17 16L10 16L10 14L12 14L12 12L10 12L10 10L12 10L12 8L10 8L10 6L17 6C17.55 6 18 6.45 18 7L18 15C18 15.55 17.55 16 17 16ZM16 8L14 8L14 10L16 10L16 8ZM16 12L14 12L14 14L16 14L16 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Domain: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Domain: {
          paths: [
            {
              d: "M0 2L2 2L2 4L0 4L0 6L2 6L2 8L0 8L0 10L8 10L8 0L0 0L0 2ZM4 2L6 2L6 4L4 4L4 2ZM4 6L6 6L6 8L4 8L4 6Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(50%, 37.5%)" },
            },
            {
              d: "M10 4L10 0L0 0L0 18L20 18L20 4L10 4ZM4 16L2 16L2 14L4 14L4 16ZM4 12L2 12L2 10L4 10L4 12ZM4 8L2 8L2 6L4 6L4 8ZM4 4L2 4L2 2L4 2L4 4ZM8 16L6 16L6 14L8 14L8 16ZM8 12L6 12L6 10L8 10L8 12ZM8 8L6 8L6 6L8 6L8 8ZM8 4L6 4L6 2L8 2L8 4ZM18 16L10 16L10 14L12 14L12 12L10 12L10 10L12 10L12 8L10 8L10 6L18 6L18 16ZM14 8L16 8L16 10L14 10L14 8ZM14 12L16 12L16 14L14 14L14 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
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
          d: "M10 4L10 0L0 0L0 18L20 18L20 4L10 4ZM4 16L2 16L2 14L4 14L4 16ZM4 12L2 12L2 10L4 10L4 12ZM4 8L2 8L2 6L4 6L4 8ZM4 4L2 4L2 2L4 2L4 4ZM8 16L6 16L6 14L8 14L8 16ZM8 12L6 12L6 10L8 10L8 12ZM8 8L6 8L6 6L8 6L8 8ZM8 4L6 4L6 2L8 2L8 4ZM18 16L10 16L10 14L12 14L12 12L10 12L10 10L12 10L12 8L10 8L10 6L18 6L18 16ZM16 8L14 8L14 10L16 10L16 8ZM16 12L14 12L14 14L16 14L16 12Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Domain")}
      {...rest}
    ></Icon>
  );
}
