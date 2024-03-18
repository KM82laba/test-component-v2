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
export default function Localbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Localbar: {
          paths: [
            {
              d: "M18 2L18 0L0 0L0 2L8 11L8 16L3 16L3 18L15 18L15 16L10 16L10 11L18 2ZM4.43 4L2.66 2L15.35 2L13.57 4L4.43 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Localbar: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Localbar: {
          paths: [
            {
              d: "M18 1.45C18 0.65 17.35 0 16.55 0L1.45 0C0.65 0 0 0.65 0 1.45C0 1.8 0.13 2.15 0.37 2.41L8 11L8 16L4 16C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18L14 18C14.55 18 15 17.55 15 17C15 16.45 14.55 16 14 16L10 16L10 11L17.63 2.41C17.87 2.15 18 1.8 18 1.45ZM4.43 4L2.66 2L15.35 2L13.57 4L4.43 4Z",
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
        Localbar: {
          paths: [
            {
              d: "M18 2L18 0L0 0L0 2L8 11L8 16L3 16L3 18L15 18L15 16L10 16L10 11L18 2ZM4.43 4L2.66 2L15.35 2L13.57 4L4.43 4Z",
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
        Localbar: {
          paths: [
            {
              d: "M0 0L2.77 3.11L5.54 0L0 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(38.46%, 37.5%)" },
            },
            {
              d: "M18 2L18 0L0 0L0 2L8 11L8 16L3 16L3 18L15 18L15 16L10 16L10 11L18 2ZM2.66 2L15.35 2L13.57 4L4.43 4L2.66 2ZM9 9.11L6.23 6L11.77 6L9 9.11Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
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
          d: "M11.77 6L9 9.11L6.23 6L11.77 6ZM18 0L0 0L0 2L8 11L8 16L3 16L3 18L15 18L15 16L10 16L10 11L18 2L18 0ZM4.43 4L2.66 2L15.35 2L13.57 4L4.43 4Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Localbar")}
      {...rest}
    ></Icon>
  );
}
