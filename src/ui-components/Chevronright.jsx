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
export default function Chevronright(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Chevronright: {} }, variantValues: { style: "Filled" } },
    { overrides: { Chevronright: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Chevronright: {
          paths: [
            {
              d: "M0.2925 0.293762C-0.0975 0.683762 -0.0975 1.31376 0.2925 1.70376L4.1725 5.58376L0.2925 9.46376C-0.0975 9.85376 -0.0975 10.4838 0.2925 10.8738C0.6825 11.2638 1.3125 11.2638 1.7025 10.8738L6.2925 6.28376C6.6825 5.89376 6.6825 5.26376 6.2925 4.87376L1.7025 0.283762C1.3225 -0.0962379 0.6825 -0.0962377 0.2925 0.293762Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(36.28%, 26.74%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Chevronright: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Chevronright: {
          paths: [
            {
              d: "M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(35.79%, 25%)" },
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
          d: "M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(34.56%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Chevronright")}
      {...rest}
    ></Icon>
  );
}
