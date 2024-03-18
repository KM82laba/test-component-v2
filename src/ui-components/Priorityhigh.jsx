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
export default function Priorityhigh(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Priorityhigh: {} }, variantValues: { style: "Filled" } },
    { overrides: { Priorityhigh: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Priorityhigh: {
          paths: [
            {
              d: "M2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(41.67%, 12.5%)" },
            },
            {
              d: "M2 0C0.9 0 0 0.9 0 2L0 10C0 11.1 0.9 12 2 12C3.1 12 4 11.1 4 10L4 2C4 0.9 3.1 0 2 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(41.67%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Priorityhigh: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Priorityhigh: {
          paths: [
            {
              d: "M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(41.67%, 70.83%)" },
            },
            {
              d: "M0 0L4 0L4 12L0 12L0 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(41.67%, 12.5%)" },
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
          d: "M2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(41.67%, 12.5%)" },
        },
        {
          d: "M0 0L4 0L4 12L0 12L0 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(41.67%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Priorityhigh")}
      {...rest}
    ></Icon>
  );
}
