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
export default function Directionsrun(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Directionsrun: {} }, variantValues: { style: "Filled" } },
    { overrides: { Directionsrun: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Directionsrun: {
          paths: [
            {
              d: "M10.4202 4C11.5202 4 12.4202 3.1 12.4202 2C12.4202 0.9 11.5202 0 10.4202 0C9.32022 0 8.42022 0.9 8.42022 2C8.42022 3.1 9.32022 4 10.4202 4ZM7.25022 16L7.82022 13.5L9.92022 15.5L9.92022 20.5C9.92022 21.05 10.3702 21.5 10.9202 21.5C11.4702 21.5 11.9202 21.05 11.9202 20.5L11.9202 14.86C11.9202 14.31 11.7002 13.79 11.3002 13.41L9.82022 12L10.4202 9C11.4902 10.24 13.0402 11.13 14.7802 11.41C15.3802 11.5 15.9202 11.02 15.9202 10.41C15.9202 9.92 15.5602 9.51 15.0702 9.43C13.5502 9.18 12.2902 8.28 11.6202 7.1L10.6202 5.5C10.2202 4.9 9.62022 4.5 8.92022 4.5C8.62022 4.5 8.42022 4.6 8.12022 4.6L4.14022 6.28C3.40022 6.6 2.92022 7.32 2.92022 8.13L2.92022 10.5C2.92022 11.05 3.37022 11.5 3.92022 11.5C4.47022 11.5 4.92022 11.05 4.92022 10.5L4.92022 8.1L6.72022 7.4L5.12022 15.5L1.20022 14.7C0.660216 14.59 0.130216 14.94 0.0202159 15.48L0.0202159 15.52C-0.0897841 16.06 0.260216 16.59 0.800216 16.7L4.91022 17.52C5.97022 17.73 7.01022 17.06 7.25022 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.83%, 5.21%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Directionsrun: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Directionsrun: {
          paths: [
            {
              d: "M8.6 2C8.6 3.1 9.5 4 10.6 4C11.7 4 12.6 3.1 12.6 2C12.6 0.9 11.7 0 10.6 0C9.5 0 8.6 0.9 8.6 2ZM8 13.5L10.1 15.5L10.1 21.5L12.1 21.5L12.1 14L10 12L10.6 9C11.9 10.5 13.9 11.5 16.1 11.5L16.1 9.5C14.2 9.5 12.6 8.5 11.8 7.1L10.8 5.5C10.4 4.9 9.8 4.5 9.1 4.5C8.8 4.5 8.6 4.6 8.3 4.6L3.1 6.8L3.1 11.5L5.1 11.5L5.1 8.1L6.9 7.4L5.3 15.5L0.4 14.5L0 16.5L7 17.9L8 13.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.04%, 6.17%)" },
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
          d: "M10.6 4C11.7 4 12.6 3.1 12.6 2C12.6 0.9 11.7 0 10.6 0C9.5 0 8.6 0.9 8.6 2C8.6 3.1 9.5 4 10.6 4ZM7 17.9L8 13.5L10.1 15.5L10.1 21.5L12.1 21.5L12.1 14L10 12L10.6 9C11.9 10.5 13.9 11.5 16.1 11.5L16.1 9.5C14.2 9.5 12.6 8.5 11.8 7.1L10.8 5.5C10.4 4.9 9.8 4.5 9.1 4.5C8.8 4.5 8.6 4.6 8.3 4.6L3.1 6.8L3.1 11.5L5.1 11.5L5.1 8.1L6.9 7.4L5.3 15.5L0.4 14.5L0 16.5L7 17.9Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.46%, 5.21%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Directionsrun")}
      {...rest}
    ></Icon>
  );
}
