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
export default function Freebreakfast(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Freebreakfast: {
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
    { overrides: { Freebreakfast: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Freebreakfast: {
          paths: [
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 10C0 12.21 1.79 14 4 14L10 14C12.21 14 14 12.21 14 10L14 7L16 7C17.11 7 18 6.1 18 5L18 2C18 0.9 17.1 0 16 0ZM16 5L14 5L14 2L16 2L16 5ZM1 16L15 16C15.55 16 16 16.45 16 17C16 17.55 15.55 18 15 18L1 18C0.45 18 0 17.55 0 17C0 16.45 0.45 16 1 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Freebreakfast: {
          paths: [
            {
              d: "M16 0L0 0L0 14L14 14L14 7L16 7C17.11 7 18 6.1 18 5L18 2C18 0.9 17.1 0 16 0ZM16 5L14 5L14 2L16 2L16 5ZM0 16L16 16L16 18L0 18L0 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Freebreakfast: {
          paths: [
            {
              d: "M0 8C0 9.1 0.9 10 2 10L8 10C9.1 10 10 9.1 10 8L10 0L0 0L0 8Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 20.83%)" },
            },
            {
              d: "M0 16L16 16L16 18L0 18L0 16ZM16 0L0 0L0 10C0 12.21 1.79 14 4 14L10 14C12.21 14 14 12.21 14 10L14 7L16 7C17.11 7 18 6.1 18 5L18 2C18 0.89 17.11 0 16 0ZM12 10C12 11.1 11.1 12 10 12L4 12C2.9 12 2 11.1 2 10L2 2L12 2L12 10ZM16 5L14 5L14 2L16 2L16 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 12.5%)" },
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
          d: "M0 16L16 16L16 18L0 18L0 16ZM16 0L0 0L0 10C0 12.21 1.79 14 4 14L10 14C12.21 14 14 12.21 14 10L14 7L16 7C17.11 7 18 6.1 18 5L18 2C18 0.89 17.11 0 16 0ZM12 10C12 11.1 11.1 12 10 12L4 12C2.9 12 2 11.1 2 10L2 2L12 2L12 10ZM16 5L14 5L14 2L16 2L16 5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Freebreakfast")}
      {...rest}
    ></Icon>
  );
}
