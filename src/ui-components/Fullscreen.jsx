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
export default function Fullscreen(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Fullscreen: {} }, variantValues: { style: "Filled" } },
    { overrides: { Fullscreen: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Fullscreen: {
          paths: [
            {
              d: "M1 9C0.45 9 0 9.45 0 10L0 13C0 13.55 0.45 14 1 14L4 14C4.55 14 5 13.55 5 13C5 12.45 4.55 12 4 12L2 12L2 10C2 9.45 1.55 9 1 9ZM1 5C1.55 5 2 4.55 2 4L2 2L4 2C4.55 2 5 1.55 5 1C5 0.45 4.55 0 4 0L1 0C0.45 0 0 0.45 0 1L0 4C0 4.55 0.45 5 1 5ZM12 12L10 12C9.45 12 9 12.45 9 13C9 13.55 9.45 14 10 14L13 14C13.55 14 14 13.55 14 13L14 10C14 9.45 13.55 9 13 9C12.45 9 12 9.45 12 10L12 12ZM9 1C9 1.55 9.45 2 10 2L12 2L12 4C12 4.55 12.45 5 13 5C13.55 5 14 4.55 14 4L14 1C14 0.45 13.55 0 13 0L10 0C9.45 0 9 0.45 9 1Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Fullscreen: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Fullscreen: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M2 9L0 9L0 14L5 14L5 12L2 12L2 9ZM0 5L2 5L2 2L5 2L5 0L0 0L0 5ZM12 12L9 12L9 14L14 14L14 9L12 9L12 12ZM9 0L9 2L12 2L12 5L14 5L14 0L9 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Fullscreen")}
      {...rest}
    ></Icon>
  );
}
