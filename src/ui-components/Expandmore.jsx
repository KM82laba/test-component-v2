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
export default function Expandmore(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Expandmore: {} }, variantValues: { style: "Filled" } },
    { overrides: { Expandmore: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Expandmore: {
          paths: [
            {
              d: "M9.4625 0.2925L5.5825 4.1725L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L4.8825 6.2925C5.2725 6.6825 5.9025 6.6825 6.2925 6.2925L10.8825 1.7025C11.2725 1.3125 11.2725 0.6825 10.8825 0.2925C10.4925 -0.0875 9.8525 -0.0975 9.4625 0.2925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(26.72%, 36.28%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Expandmore: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Expandmore: {
          paths: [
            {
              d: "M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 35.79%)" },
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
          d: "M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(25%, 34.56%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Expandmore")}
      {...rest}
    ></Icon>
  );
}
