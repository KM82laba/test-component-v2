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
export default function Safetydivider(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Safetydivider: {} }, variantValues: { style: "Filled" } },
    { overrides: { Safetydivider: {} }, variantValues: { style: "Outlined" } },
    { overrides: { Safetydivider: {} }, variantValues: { style: "Round" } },
    { overrides: { Safetydivider: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Safetydivider: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M10 0L12 0L12 14L10 14L10 0ZM4 7C5.1 7 6 6.1 6 5C6 3.9 5.1 3 4 3C2.9 3 2 3.9 2 5C2 6.1 2.9 7 4 7ZM6.78 8.58C5.93 8.21 4.99 8 4 8C3.01 8 2.07 8.21 1.22 8.58C0.48 8.9 0 9.62 0 10.43L0 11L8 11L8 10.43C8 9.62 7.52 8.9 6.78 8.58ZM18 7C19.1 7 20 6.1 20 5C20 3.9 19.1 3 18 3C16.9 3 16 3.9 16 5C16 6.1 16.9 7 18 7ZM20.78 8.58C19.93 8.21 18.99 8 18 8C17.01 8 16.07 8.21 15.22 8.58C14.48 8.9 14 9.62 14 10.43L14 11L22 11L22 10.43C22 9.62 21.52 8.9 20.78 8.58Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Safetydivider")}
      {...rest}
    ></Icon>
  );
}
