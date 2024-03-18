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
export default function Subdirectoryarrowleft(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Subdirectoryarrowleft: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Subdirectoryarrowleft: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Subdirectoryarrowleft: {
          paths: [
            {
              d: "M0.2925 11.71L4.8725 16.29C5.2625 16.68 5.9025 16.68 6.2925 16.29C6.6825 15.9 6.6825 15.26 6.2925 14.87L3.4125 12L13.5825 12C14.1325 12 14.5825 11.55 14.5825 11L14.5825 1C14.5825 0.45 14.1325 0 13.5825 0C13.0325 0 12.5825 0.45 12.5825 1L12.5825 10L3.4125 10L6.2925 7.13C6.6825 6.74 6.6825 6.1 6.2925 5.71C5.9025 5.32 5.2625 5.32 4.8725 5.71L0.2925 10.29C-0.0975 10.68 -0.0975 11.32 0.2925 11.71Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.62%, 15.45%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: { Subdirectoryarrowleft: {} },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Subdirectoryarrowleft: {
          paths: [
            {
              d: "M6 5L7.42 6.42L3.83 10L13 10L13 0L15 0L15 12L3.83 12L7.42 15.58L6 17L0 11L6 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 16.67%)" },
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
          d: "M6 5L7.42 6.42L3.83 10L13 10L13 0L15 0L15 12L3.83 12L7.42 15.58L6 17L0 11L6 5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 14.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Subdirectoryarrowleft")}
      {...rest}
    ></Icon>
  );
}
