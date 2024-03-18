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
export default function Flightclass(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Flightclass: {
          paths: [
            {
              d: "M11 0L9 0C7.9 0 7 0.9 7 2L7 7C7 8.1 7.9 9 9 9L11 9C12.1 9 13 8.1 13 7L13 2C13 0.9 12.1 0 11 0ZM4.5 12L13 12L13 14L4.49 14C3.61 14 2.83 13.42 2.57 12.57L0 4L0 0L2 0L2 4L4.5 12ZM3 15L13 15L13 17L3 17L3 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(22.92%, 14.58%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Flightclass: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Flightclass: {
          paths: [
            {
              d: "M11 0L9 0C7.9 0 7 0.9 7 2L7 7C7 8.1 7.9 9 9 9L11 9C12.1 9 13 8.1 13 7L13 2C13 0.9 12.1 0 11 0ZM1 0C1.55 0 2 0.45 2 1L2 4L4.5 12L12 12C12.55 12 13 12.45 13 13C13 13.55 12.55 14 12 14L4.49 14C3.61 14 2.83 13.42 2.57 12.57L0.0799999 4.28C0.0299999 4.09 0 3.9 0 3.71L0 1C0 0.45 0.45 0 1 0ZM13 16C13 16.55 12.55 17 12 17L4 17C3.45 17 3 16.55 3 16C3 15.45 3.45 15 4 15L12 15C12.55 15 13 15.45 13 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(22.92%, 14.58%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Flightclass: {
          paths: [
            {
              d: "M13 0L7 0L7 9L13 9L13 0ZM4.5 12L13 12L13 14L3 14L0 4L0 0L2 0L2 4L4.5 12ZM3 15L13 15L13 17L3 17L3 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(22.92%, 14.58%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Flightclass: {
          paths: [
            {
              d: "M2 0L0 0L0 5L2 5L2 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(58.33%, 25%)" },
            },
            {
              d: "M11 0L9 0C7.9 0 7 0.9 7 2L7 7C7 8.1 7.9 9 9 9L11 9C12.1 9 13 8.1 13 7L13 2C13 0.9 12.1 0 11 0ZM11 7L9 7L9 2L11 2L11 7ZM4.5 12L13 12L13 14L4.49 14C3.61 14 2.83 13.42 2.57 12.57L0 4L0 0L2 0L2 4L4.5 12ZM3 15L13 15L13 17L3 17L3 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 16.67%)" },
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
          d: "M11 0L9 0C7.9 0 7 0.9 7 2L7 7C7 8.1 7.9 9 9 9L11 9C12.1 9 13 8.1 13 7L13 2C13 0.9 12.1 0 11 0ZM11 7L9 7L9 2L11 2L11 7ZM4.5 12L13 12L13 14L4.49 14C3.61 14 2.83 13.42 2.57 12.57L0 4L0 0L2 0L2 4L4.5 12ZM3 15L13 15L13 17L3 17L3 15Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(22.92%, 14.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Flightclass")}
      {...rest}
    ></Icon>
  );
}
