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
export default function Male(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Male: {} }, variantValues: { style: "Filled" } },
    { overrides: { Male: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Male: {
          paths: [
            {
              d: "M15 0L11 0C10.45 0 10 0.45 10 1C10 1.55 10.45 2 11 2L12.58 2L8.61 5.97C7.73 5.36 6.66 5 5.5 5C2.46 5 0 7.46 0 10.5C0 13.54 2.46 16 5.5 16C8.54 16 11 13.54 11 10.5C11 9.34 10.64 8.27 10.03 7.38L14 3.42L14 5C14 5.55 14.45 6 15 6C15.55 6 16 5.55 16 5L16 1C16 0.45 15.55 0 15 0ZM5.5 14C3.57 14 2 12.43 2 10.5C2 8.57 3.57 7 5.5 7C7.43 7 9 8.57 9 10.5C9 12.43 7.43 14 5.5 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Male: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Male: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M5.5 7C7.43 7 9 8.57 9 10.5C9 12.43 7.43 14 5.5 14C3.57 14 2 12.43 2 10.5C2 8.57 3.57 7 5.5 7ZM5.5 5C2.46 5 0 7.46 0 10.5C0 13.54 2.46 16 5.5 16C8.54 16 11 13.54 11 10.5C11 9.34 10.64 8.27 10.03 7.38L14 3.42L14 6L16 6L16 0L10 0L10 2L12.58 2L8.61 5.97C7.73 5.36 6.66 5 5.5 5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Male")}
      {...rest}
    ></Icon>
  );
}
