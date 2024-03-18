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
export default function Corporatefare(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Corporatefare: {} }, variantValues: { style: "Filled" } },
    { overrides: { Corporatefare: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Corporatefare: {
          paths: [
            {
              d: "M10 4L10 2C10 0.9 9.1 0 8 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L18 18C19.1 18 20 17.1 20 16L20 6C20 4.9 19.1 4 18 4L10 4ZM8 16L2 16L2 14L8 14L8 16ZM8 12L2 12L2 10L8 10L8 12ZM8 8L2 8L2 6L8 6L8 8ZM8 4L2 4L2 2L8 2L8 4ZM18 16L10 16L10 6L18 6L18 16ZM16 8L12 8L12 10L16 10L16 8ZM16 12L12 12L12 14L16 14L16 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Corporatefare: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Corporatefare: {
          paths: [
            {
              d: "M6 14L0 14L0 12L6 12L6 14ZM6 10L0 10L0 8L6 8L6 10ZM6 6L0 6L0 4L6 4L6 6ZM6 2L0 2L0 0L6 0L6 2ZM16 14L8 14L8 4L16 4L16 14ZM14 6L10 6L10 8L14 8L14 6ZM14 10L10 10L10 12L14 12L14 10Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 20.83%)" },
            },
            {
              d: "M10 4L10 0L0 0L0 18L20 18L20 4L10 4ZM8 16L2 16L2 14L8 14L8 16ZM8 12L2 12L2 10L8 10L8 12ZM8 8L2 8L2 6L8 6L8 8ZM8 4L2 4L2 2L8 2L8 4ZM18 16L10 16L10 6L18 6L18 16ZM16 8L12 8L12 10L16 10L16 8ZM16 12L12 12L12 14L16 14L16 12Z",
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
          d: "M10 4L10 0L0 0L0 18L20 18L20 4L10 4ZM8 16L2 16L2 14L8 14L8 16ZM8 12L2 12L2 10L8 10L8 12ZM8 8L2 8L2 6L8 6L8 8ZM8 4L2 4L2 2L8 2L8 4ZM18 16L10 16L10 6L18 6L18 16ZM16 8L12 8L12 10L16 10L16 8ZM16 12L12 12L12 14L16 14L16 12Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Corporatefare")}
      {...rest}
    ></Icon>
  );
}
