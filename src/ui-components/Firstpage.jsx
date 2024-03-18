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
export default function Firstpage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Firstpage: {} }, variantValues: { style: "Filled" } },
    { overrides: { Firstpage: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Firstpage: {
          paths: [
            {
              d: "M11.7 9.89L7.82 6L11.71 2.11C12.1 1.72 12.1 1.09 11.71 0.7C11.32 0.31 10.69 0.31 10.3 0.7L5.71 5.29C5.32 5.68 5.32 6.31 5.71 6.7L10.3 11.29C10.69 11.68 11.32 11.68 11.71 11.29C12.09 10.91 12.09 10.27 11.7 9.89ZM1 0C1.55 0 2 0.45 2 1L2 11C2 11.55 1.55 12 1 12C0.45 12 0 11.55 0 11L0 1C0 0.45 0.45 0 1 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(24.99%, 25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Firstpage: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Firstpage: {
          paths: [
            {
              d: "M12.41 10.59L7.82 6L12.41 1.41L11 0L5 6L11 12L12.41 10.59ZM0 0L2 0L2 12L0 12L0 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 25%)" },
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
          d: "M12.41 10.59L7.82 6L12.41 1.41L11 0L5 6L11 12L12.41 10.59ZM0 0L2 0L2 12L0 12L0 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(24.15%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Firstpage")}
      {...rest}
    ></Icon>
  );
}
