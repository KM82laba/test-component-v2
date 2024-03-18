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
export default function Chevronleft(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Chevronleft: {} }, variantValues: { style: "Filled" } },
    { overrides: { Chevronleft: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Chevronleft: {
          paths: [
            {
              d: "M6.2925 0.2925C5.9025 -0.0975 5.2725 -0.0975 4.8825 0.2925L0.2925 4.8825C-0.0975 5.2725 -0.0975 5.9025 0.2925 6.2925L4.8825 10.8825C5.2725 11.2725 5.9025 11.2725 6.2925 10.8825C6.6825 10.4925 6.6825 9.8625 6.2925 9.4725L2.4125 5.5825L6.2925 1.7025C6.6825 1.3125 6.6725 0.6725 6.2925 0.2925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(36.28%, 26.72%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Chevronleft: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Chevronleft: {
          paths: [
            {
              d: "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 25%)" },
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
          d: "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(34.56%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Chevronleft")}
      {...rest}
    ></Icon>
  );
}
