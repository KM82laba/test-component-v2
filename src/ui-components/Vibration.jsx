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
export default function Vibration(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Vibration: {} }, variantValues: { style: "Filled" } },
    { overrides: { Vibration: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Vibration: {
          paths: [
            {
              d: "M1 12C1.55 12 2 11.55 2 11L2 7C2 6.45 1.55 6 1 6C0.45 6 0 6.45 0 7L0 11C0 11.55 0.45 12 1 12ZM4 14C4.55 14 5 13.55 5 13L5 5C5 4.45 4.55 4 4 4C3.45 4 3 4.45 3 5L3 13C3 13.55 3.45 14 4 14ZM22 7L22 11C22 11.55 22.45 12 23 12C23.55 12 24 11.55 24 11L24 7C24 6.45 23.55 6 23 6C22.45 6 22 6.45 22 7ZM20 14C20.55 14 21 13.55 21 13L21 5C21 4.45 20.55 4 20 4C19.45 4 19 4.45 19 5L19 13C19 13.55 19.45 14 20 14ZM16.5 0L7.5 0C6.67 0 6 0.67 6 1.5L6 16.5C6 17.33 6.67 18 7.5 18L16.5 18C17.33 18 18 17.33 18 16.5L18 1.5C18 0.67 17.33 0 16.5 0ZM16 16L8 16L8 2L16 2L16 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Vibration: {
          paths: [
            {
              d: "M0 12L2 12L2 6L0 6L0 12ZM3 14L5 14L5 4L3 4L3 14ZM22 6L22 12L24 12L24 6L22 6ZM19 14L21 14L21 4L19 4L19 14ZM18 0L6 0L6 18L18 18L18 0ZM16 16L8 16L8 2L16 2L16 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Vibration: {
          paths: [
            {
              d: "M0 0L8 0L8 14L0 14L0 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 20.83%)" },
            },
            {
              d: "M19 4L21 4L21 14L19 14L19 4ZM22 6L24 6L24 12L22 12L22 6ZM0 6L2 6L2 12L0 12L0 6ZM16.5 0L7.5 0C6.67 0 6 0.67 6 1.5L6 16.5C6 17.33 6.67 18 7.5 18L16.5 18C17.33 18 18 17.33 18 16.5L18 1.5C18 0.67 17.33 0 16.5 0ZM16 16L8 16L8 2L16 2L16 16ZM3 4L5 4L5 14L3 14L3 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 12.5%)" },
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
          d: "M0 12L2 12L2 6L0 6L0 12ZM3 14L5 14L5 4L3 4L3 14ZM22 6L22 12L24 12L24 6L22 6ZM19 14L21 14L21 4L19 4L19 14ZM16.5 0L7.5 0C6.67 0 6 0.67 6 1.5L6 16.5C6 17.33 6.67 18 7.5 18L16.5 18C17.33 18 18 17.33 18 16.5L18 1.5C18 0.67 17.33 0 16.5 0ZM16 16L8 16L8 2L16 2L16 16Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Vibration")}
      {...rest}
    ></Icon>
  );
}
