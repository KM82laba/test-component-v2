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
export default function Apps(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Apps: {} }, variantValues: { style: "Filled" } },
    { overrides: { Apps: {} }, variantValues: { style: "Outlined" } },
    { overrides: { Apps: {} }, variantValues: { style: "Round" } },
    { overrides: { Apps: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Apps: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M0 4L4 4L4 0L0 0L0 4ZM6 16L10 16L10 12L6 12L6 16ZM0 16L4 16L4 12L0 12L0 16ZM0 10L4 10L4 6L0 6L0 10ZM6 10L10 10L10 6L6 6L6 10ZM12 0L12 4L16 4L16 0L12 0ZM6 4L10 4L10 0L6 0L6 4ZM12 10L16 10L16 6L12 6L12 10ZM12 16L16 16L16 12L12 12L12 16Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Apps")}
      {...rest}
    ></Icon>
  );
}
