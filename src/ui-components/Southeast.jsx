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
export default function Southeast(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Southeast: {} }, variantValues: { style: "Filled" } },
    { overrides: { Southeast: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Southeast: {
          paths: [
            {
              d: "M13.5825 4.5925C13.0225 4.5925 12.5825 5.0425 12.5825 5.5925L12.5825 11.1825L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L11.1725 12.5925L5.5825 12.5925C5.0325 12.5925 4.5825 13.0425 4.5825 13.5925C4.5825 14.1425 5.0325 14.5925 5.5825 14.5925L13.5825 14.5925C14.1325 14.5925 14.5825 14.1425 14.5825 13.5925L14.5825 5.5925C14.5825 5.0425 14.1325 4.5925 13.5825 4.5925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.62%, 19.6%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Southeast: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Southeast: {
          paths: [
            {
              d: "M15 5L13 5L13 11.59L1.41 0L0 1.41L11.59 13L5 13L5 15L15 15L15 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
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
          d: "M15 5L13 5L13 11.59L1.41 0L0 1.41L11.59 13L5 13L5 15L15 15L15 5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 18.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Southeast")}
      {...rest}
    ></Icon>
  );
}
