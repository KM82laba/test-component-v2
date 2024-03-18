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
export default function Mms(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Mms: {
          paths: [
            {
              d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM3 12L6.5 7.5L9 10.51L12.5 6L17 12L3 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Mms: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Mms: {
          paths: [
            {
              d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM3.63 11.19L6.12 7.99C6.32 7.74 6.7 7.73 6.9 7.98L9 10.51L12.1 6.52C12.3 6.26 12.7 6.26 12.9 6.53L16.41 11.21C16.66 11.54 16.42 12.01 16.01 12.01L4.02 12.01C3.61 12 3.37 11.52 3.63 11.19Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Mms: {
          paths: [
            {
              d: "M20 0L0 0L0 20L4 16L20 16L20 0ZM3 12L6.5 7.5L9 10.51L12.5 6L17 12L3 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Mms: {
          paths: [
            {
              d: "M0 13.17L1.17 12L16 12L16 0L0 0L0 13.17ZM4.5 5.5L7 8.51L10.5 4L15 10L1 10L4.5 5.5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
            {
              d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L3.17 14L2 15.17L2 2L18 2L18 14ZM12.5 6L9 10.51L6.5 7.5L3 12L17 12L12.5 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
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
          d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L3.17 14L2 15.17L2 2L18 2L18 14ZM12.5 6L9 10.51L6.5 7.5L3 12L17 12L12.5 6Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Mms")}
      {...rest}
    ></Icon>
  );
}
