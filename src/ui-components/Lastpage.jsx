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
export default function Lastpage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Lastpage: {} }, variantValues: { style: "Filled" } },
    { overrides: { Lastpage: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Lastpage: {
          paths: [
            {
              d: "M0.2925 2.11L4.1825 6L0.2925 9.89C-0.0975 10.28 -0.0975 10.91 0.2925 11.3C0.6825 11.69 1.3125 11.69 1.7025 11.3L6.2925 6.71C6.6825 6.32 6.6825 5.69 6.2925 5.3L1.7025 0.7C1.3125 0.31 0.6825 0.31 0.2925 0.7C-0.0875 1.09 -0.0875 1.73 0.2925 2.11ZM11.0025 0C11.5525 0 12.0025 0.45 12.0025 1L12.0025 11C12.0025 11.55 11.5525 12 11.0025 12C10.4525 12 10.0025 11.55 10.0025 11L10.0025 1C10.0025 0.45 10.4525 0 11.0025 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(24.99%, 25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Lastpage: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Lastpage: {
          paths: [
            {
              d: "M0 1.41L4.59 6L0 10.59L1.41 12L7.41 6L1.41 0L0 1.41ZM10.41 0L12.41 0L12.41 12L10.41 12L10.41 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(23.29%, 25%)" },
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
          d: "M0 1.41L4.59 6L0 10.59L1.41 12L7.41 6L1.41 0L0 1.41ZM10.41 0L12.41 0L12.41 12L10.41 12L10.41 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(24.15%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Lastpage")}
      {...rest}
    ></Icon>
  );
}
