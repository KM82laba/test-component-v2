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
export default function Fastfood(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Fastfood: {
          paths: [
            {
              d: "M17.06 21.99L18.72 21.99C19.56 21.99 20.25 21.35 20.35 20.53L22 4.05L17 4.05L17 0L15.03 0L15.03 4.05L10.06 4.05L10.36 6.39C12.07 6.86 13.67 7.71 14.63 8.65C16.07 10.07 17.06 11.54 17.06 13.94L17.06 21.99ZM0 20.99L0 20L15.03 20L15.03 20.99C15.03 21.54 14.58 21.99 14.02 21.99L1.01 21.99C0.45 21.99 0 21.54 0 20.99ZM15.03 13.99C15.03 5.99 0 5.99 0 13.99L15.03 13.99ZM0.02 16L15.02 16L15.02 18L0.02 18L0.02 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.19%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Fastfood: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Fastfood: {
          paths: [
            {
              d: "M20.9 4L17 4L17 1C17 0.45 16.55 0 16 0C15.45 0 15 0.45 15 1L15 4L11.1 4C10.51 4 10.05 4.51 10.1 5.1L10.22 6.31C13.9 7.16 17 9.77 17 14L17.02 22L18.72 22C19.56 22 20.25 21.35 20.35 20.53L21.89 5.1C21.95 4.51 21.49 4 20.9 4ZM14 20L1 20C0.45 20 0 20.45 0 21C0 21.55 0.45 22 1 22L14 22C14.55 22 15 21.55 15 21C15 20.45 14.55 20 14 20ZM1.1 14L13.9 14C14.52 14 15.01 13.44 14.89 12.84C14.24 9.61 10.87 7.99 7.5 7.99C4.13 7.99 0.77 9.61 0.11 12.84C-0.00999998 13.44 0.49 14 1.1 14ZM14 16L1 16C0.45 16 0 16.45 0 17C0 17.55 0.45 18 1 18L14 18C14.55 18 15 17.55 15 17C15 16.45 14.55 16 14 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.38%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Fastfood: {
          paths: [
            {
              d: "M17 4L17 0L15 0L15 4L10 4L10.23 6.31C13.9 7.16 17 9.77 17 14L17.02 22L20.2 22L22 4L17 4ZM0 20L15 20L15 22L0 22L0 20ZM7.5 7.99C3.75 7.99 0 10 0 14L15 14C15 10 11.25 7.99 7.5 7.99ZM0 16L15 16L15 18L0 18L0 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Fastfood: {
          paths: [
            {
              d: "M0 0.98C0 1.54 0.45 1.99 1.01 1.99L14 1.99C14.56 1.99 15.01 1.54 15.01 0.98L15.01 0L0 0L0 0.98Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 87.5%)" },
            },
            {
              d: "M4.88 0C3.46 0 1.11 0.46 0 2.01L9.77 2.01C8.65 0.46 6.3 0 4.88 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(15.08%, 45.79%)" },
            },
            {
              d: "M7.5 7.99C3.75 7.99 0 10 0 14L15 14C15 10 11.25 7.99 7.5 7.99ZM2.62 12C3.73 10.45 6.09 9.99 7.5 9.99C8.91 9.99 11.27 10.45 12.38 12L2.62 12ZM0 16L15 16L15 18L0 18L0 16ZM17 4L17 0L15 0L15 4L10 4L10.23 6L19.79 6L18.39 20L17 20L17 22L18.72 22C19.56 22 20.25 21.35 20.35 20.53L22 4L17 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.17%)" },
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
          d: "M0 20.98C0 21.54 0.45 21.99 1.01 21.99L14 21.99C14.56 21.99 15.01 21.54 15.01 20.98L15.01 20L0 20L0 20.98ZM7.5 7.99C3.75 7.99 0 10 0 14L15 14C15 10 11.25 7.99 7.5 7.99ZM2.62 12C3.73 10.45 6.09 9.99 7.5 9.99C8.91 9.99 11.27 10.45 12.38 12L2.62 12ZM0 16L15 16L15 18L0 18L0 16ZM17 4L17 0L15 0L15 4L10 4L10.23 6L19.79 6L18.39 20L17 20L17 22L18.72 22C19.56 22 20.25 21.35 20.35 20.53L22 4L17 4Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Fastfood")}
      {...rest}
    ></Icon>
  );
}
