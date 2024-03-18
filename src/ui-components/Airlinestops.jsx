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
export default function Airlinestops(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Airlinestops: {
          paths: [
            {
              d: "M16.21 4.21C13.93 5.78 11.45 8.3 11 12L13 12L13 14L7 14L7 12L9 12C8.5 7.5 4.63 4 0 4L0 2C4.39 2 8.22 4.55 10 8.3C11.13 5.87 12.99 4.05 14.78 2.78L12 0L19 0L19 7L16.21 4.21Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Airlinestops: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Airlinestops: {
          paths: [
            {
              d: "M13 13C13 13.55 12.55 14 12 14L8 14C7.45 14 7 13.55 7 13C7 12.45 7.45 12 8 12L9 12C8.53 7.79 5.11 4.45 0.88 4.04C0.37 3.99 0 3.56 0 3.05C0 2.46 0.52 1.99 1.11 2.05C5.03 2.44 8.37 4.87 10 8.3C11.13 5.87 12.99 4.05 14.78 2.78L12.86 0.86C12.54 0.54 12.76 0 13.21 0L18.5 0C18.78 0 19 0.22 19 0.5L19 5.79C19 6.24 18.46 6.46 18.15 6.14L16.21 4.2C13.93 5.78 11.45 8.3 11 12L12 12C12.55 12 13 12.45 13 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Airlinestops: {
          paths: [
            {
              d: "M16.21 4.21C13.93 5.78 11.45 8.3 11 12L13 12L13 14L7 14L7 12L9 12C8.5 7.5 4.63 4 0 4L0 2C4.39 2 8.22 4.55 10 8.3C11.13 5.87 12.99 4.05 14.78 2.78L12 0L19 0L19 7L16.21 4.21Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Airlinestops: {
          paths: [
            {
              d: "M16.21 4.21C13.93 5.78 11.45 8.3 11 12L13 12L13 14L7 14L7 12L9 12C8.5 7.5 4.63 4 0 4L0 2C4.39 2 8.22 4.55 10 8.3C11.13 5.87 12.99 4.05 14.78 2.78L12 0L19 0L19 7L16.21 4.21Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 20.83%)" },
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
          d: "M17 3.7C14.54 5.2 11.5 7.87 11 12L13 12L13 14L7 14L7 12L9 12C8.5 7.5 4.63 4 0 4L0 2C4.39 2 8.22 4.55 10 8.3C11.38 5.33 13.86 3.27 15.96 1.99L12 2L12 0L19 0L19 7L17 7L17 3.7Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(10.42%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Airlinestops")}
      {...rest}
    ></Icon>
  );
}
