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
export default function Sdcardalert(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Sdcardalert: {
          paths: [
            {
              d: "M14 0L6 0L0.02 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.9 15.1 0 14 0ZM9 15L7 15L7 13L9 13L9 15ZM9 11L7 11L7 6L9 6L9 11Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Sdcardalert: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Sdcardalert: {
          paths: [
            {
              d: "M14 0L6.83 0C6.3 0 5.79 0.21 5.41 0.59L0.6 5.42C0.23 5.79 0.02 6.3 0.02 6.82L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.9 15.1 0 14 0ZM9 15L7 15L7 13L9 13L9 15ZM8 11C7.45 11 7 10.55 7 10L7 7C7 6.45 7.45 6 8 6C8.55 6 9 6.45 9 7L9 10C9 10.55 8.55 11 8 11Z",
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
        Sdcardalert: {
          paths: [
            {
              d: "M16 0L6 0L0 6L0 20L16 20L16 0ZM9 15L7 15L7 13L9 13L9 15ZM9 11L7 11L7 6L9 6L9 11Z",
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
        Sdcardalert: {
          paths: [
            {
              d: "M0 4.83L0 16L12 16L12 0L4.83 0L0 4.83ZM5 4L7 4L7 9L5 9L5 4ZM5 11L7 11L7 13L5 13L5 11Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 16.67%)" },
            },
            {
              d: "M14 0L6 0L0 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.9 15.1 0 14 0ZM14 18L2 18L2 6.83L6.83 2L14 2L14 18ZM7 13L9 13L9 15L7 15L7 13ZM7 6L9 6L9 11L7 11L7 6Z",
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
          d: "M14 0L6 0L0.02 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 2C16 0.9 15.1 0 14 0ZM14 18L2 18L2 6.83L6.83 2L14 2L14 18ZM7 13L9 13L9 15L7 15L7 13ZM7 6L9 6L9 11L7 11L7 6Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Sdcardalert")}
      {...rest}
    ></Icon>
  );
}
