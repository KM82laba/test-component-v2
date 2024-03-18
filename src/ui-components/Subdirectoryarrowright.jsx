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
export default function Subdirectoryarrowright(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Subdirectoryarrowright: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Subdirectoryarrowright: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Subdirectoryarrowright: {
          paths: [
            {
              d: "M14.29 11.71L9.71 16.29C9.32 16.68 8.68 16.68 8.29 16.29C7.9 15.9 7.9 15.26 8.29 14.87L11.17 12L1 12C0.45 12 0 11.55 0 11L0 1C0 0.45 0.45 0 1 0C1.55 0 2 0.45 2 1L2 10L11.17 10L8.29 7.13C7.9 6.74 7.9 6.1 8.29 5.71C8.68 5.32 9.32 5.32 9.71 5.71L14.29 10.29C14.68 10.68 14.68 11.32 14.29 11.71Z",
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
      overrides: { Subdirectoryarrowright: {} },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Subdirectoryarrowright: {
          paths: [
            {
              d: "M15 11L9 17L7.58 15.58L11.17 12L0 12L0 0L2 0L2 10L11.17 10L7.58 6.42L9 5L15 11Z",
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
          d: "M15 11L9 17L7.58 15.58L11.17 12L0 12L0 0L2 0L2 10L11.17 10L7.58 6.42L9 5L15 11Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 14.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Subdirectoryarrowright")}
      {...rest}
    ></Icon>
  );
}
