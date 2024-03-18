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
export default function Localcafe(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Localcafe: {
          paths: [
            {
              d: "M16 0L0 0L0 10C0 12.21 1.79 14 4 14L10 14C12.21 14 14 12.21 14 10L14 7L16 7C17.11 7 18 6.1 18 5L18 2C18 0.89 17.11 0 16 0ZM16 5L14 5L14 2L16 2L16 5ZM0 16L16 16L16 18L0 18L0 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Localcafe: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Localcafe: {
          paths: [
            {
              d: "M18 0L4 0C2.9 0 2 0.9 2 2L2 10C2 12.21 3.79 14 6 14L12 14C14.21 14 16 12.21 16 10L16 7L18 7C19.1 7 20 6.1 20 5L20 2C20 0.9 19.1 0 18 0ZM18 5L16 5L16 2L18 2L18 5ZM1 18L17 18C17.55 18 18 17.55 18 17C18 16.45 17.55 16 17 16L1 16C0.45 16 0 16.45 0 17C0 17.55 0.45 18 1 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Localcafe: {
          paths: [
            {
              d: "M18 0L2 0L2 14L16 14L16 7L18 7C19.1 7 20 6.1 20 5L20 2C20 0.9 19.1 0 18 0ZM18 5L16 5L16 2L18 2L18 5ZM0 18L18 18L18 16L0 16L0 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Localcafe: {
          paths: [
            {
              d: "M2 10L8 10C9.1 10 10 9.1 10 8L10 0L0 0L0 8C0 9.1 0.9 10 2 10Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 20.83%)" },
            },
            {
              d: "M0 16L18 16L18 18L0 18L0 16ZM2 10C2 12.21 3.79 14 6 14L12 14C14.21 14 16 12.21 16 10L16 7L18 7C19.11 7 20 6.11 20 5L20 2C20 0.89 19.11 0 18 0L2 0L2 10ZM16 2L18 2L18 5L16 5L16 2ZM4 2L14 2L14 10C14 11.1 13.1 12 12 12L6 12C4.9 12 4 11.1 4 10L4 2Z",
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
          d: "M14 2L14 10C14 11.1 13.1 12 12 12L6 12C4.9 12 4 11.1 4 10L4 2L14 2ZM18 0L2 0L2 10C2 12.21 3.79 14 6 14L12 14C14.21 14 16 12.21 16 10L16 7L18 7C19.11 7 20 6.11 20 5L20 2C20 0.89 19.11 0 18 0ZM16 5L16 2L18 2L18 5L16 5ZM18 16L0 16L0 18L18 18L18 16Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Localcafe")}
      {...rest}
    ></Icon>
  );
}
