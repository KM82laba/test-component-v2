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
export default function Northeast(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Northeast: {} }, variantValues: { style: "Filled" } },
    { overrides: { Northeast: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Northeast: {
          paths: [
            {
              d: "M4.5925 1C4.5925 1.56 5.0425 2 5.5925 2L11.1825 2L0.2925 12.89C-0.0975 13.28 -0.0975 13.91 0.2925 14.3C0.6825 14.69 1.3125 14.69 1.7025 14.3L12.5925 3.41L12.5925 9C12.5925 9.55 13.0425 10 13.5925 10C14.1425 10 14.5925 9.55 14.5925 9L14.5925 1C14.5925 0.45 14.1425 0 13.5925 0L5.5925 0C5.0425 0 4.5925 0.45 4.5925 1Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.6%, 19.6%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Northeast: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Northeast: {
          paths: [
            {
              d: "M5 0L5 2L11.59 2L0 13.59L1.41 15L13 3.41L13 10L15 10L15 0L5 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 20.83%)" },
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
          d: "M5 0L5 2L11.59 2L0 13.59L1.41 15L13 3.41L13 10L15 10L15 0L5 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 18.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Northeast")}
      {...rest}
    ></Icon>
  );
}
