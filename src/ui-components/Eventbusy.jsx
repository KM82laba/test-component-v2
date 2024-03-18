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
export default function Eventbusy(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Eventbusy: {
          paths: [
            {
              d: "M6.31 16L8.75 13.56L11.19 16L12.25 14.94L9.81 12.5L12.25 10.06L11.19 9L8.75 11.44L6.31 9L5.25 10.06L7.69 12.5L5.25 14.94L6.31 16ZM16 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM16 18L2 18L2 7L16 7L16 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Eventbusy: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Eventbusy: {
          paths: [
            {
              d: "M6.84 15.47L8.75 13.56L10.66 15.47C10.95 15.76 11.43 15.76 11.72 15.47C12.01 15.18 12.01 14.7 11.72 14.41L9.81 12.5L11.72 10.59C12.01 10.3 12.01 9.82 11.72 9.53C11.43 9.24 10.95 9.24 10.66 9.53L8.75 11.44L6.84 9.53C6.55 9.24 6.07 9.24 5.78 9.53C5.49 9.82 5.49 10.3 5.78 10.59L7.69 12.5L5.78 14.41C5.49 14.7 5.49 15.18 5.78 15.47C6.07 15.76 6.55 15.76 6.84 15.47ZM16 2L15 2L15 1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1L13 2L5 2L5 1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1L3 2L2 2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM15 18L3 18C2.45 18 2 17.55 2 17L2 7L16 7L16 17C16 17.55 15.55 18 15 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Eventbusy: {
          paths: [
            {
              d: "M6.31 16L8.75 13.56L11.19 16L12.25 14.94L9.81 12.5L12.25 10.06L11.19 9L8.75 11.44L6.31 9L5.25 10.06L7.69 12.5L5.25 14.94L6.31 16ZM18 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L0.00999999 2L0 20L18 20L18 2ZM16 18L2 18L2 7L16 7L16 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Eventbusy: {
          paths: [
            {
              d: "M0 0L14 0L14 2L0 2L0 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
            {
              d: "M16 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.9 2 0 2.9 0 4L0 18C0 19.1 0.9 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM16 18L2 18L2 8L16 8L16 18ZM16 6L2 6L2 4L16 4L16 6ZM6.29 16.47L8.73 14.03L11.17 16.47L12.23 15.41L9.79 12.97L12.23 10.53L11.17 9.47L8.73 11.91L6.29 9.47L5.23 10.53L7.67 12.97L5.23 15.41L6.29 16.47Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 4.17%)" },
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
          d: "M16 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.9 2 0 2.9 0 4L0 18C0 19.1 0.9 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM16 18L2 18L2 8L16 8L16 18ZM2 6L2 4L16 4L16 6L2 6ZM5.23 15.41L6.29 16.47L8.73 14.03L11.17 16.47L12.23 15.41L9.79 12.97L12.23 10.53L11.17 9.47L8.73 11.91L6.29 9.47L5.23 10.53L7.67 12.97L5.23 15.41Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Eventbusy")}
      {...rest}
    ></Icon>
  );
}
