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
export default function Expandless(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Expandless: {} }, variantValues: { style: "Filled" } },
    { overrides: { Expandless: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Expandless: {
          paths: [
            {
              d: "M4.8825 0.2925L0.2925 4.8825C-0.0975 5.2725 -0.0975 5.9025 0.2925 6.2925C0.6825 6.6825 1.3125 6.6825 1.7025 6.2925L5.5925 2.4125L9.4725 6.2925C9.8625 6.6825 10.4925 6.6825 10.8825 6.2925C11.2725 5.9025 11.2725 5.2725 10.8825 4.8825L6.2925 0.2925C5.9125 -0.0975 5.2725 -0.0975 4.8825 0.2925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(26.72%, 36.28%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Expandless: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Expandless: {
          paths: [
            {
              d: "M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 33.33%)" },
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
          d: "M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(25%, 34.56%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Expandless")}
      {...rest}
    ></Icon>
  );
}
