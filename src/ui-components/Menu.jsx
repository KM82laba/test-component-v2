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
export default function Menu(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Menu: {} }, variantValues: { style: "Filled" } },
    { overrides: { Menu: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Menu: {
          paths: [
            {
              d: "M1 12L17 12C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10L1 10C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7L17 7C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5L1 5C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2L17 2C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0L1 0C0.45 0 0 0.45 0 1Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Menu: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Menu: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M0 12L18 12L18 10L0 10L0 12ZM0 7L18 7L18 5L0 5L0 7ZM0 0L0 2L18 2L18 0L0 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Menu")}
      {...rest}
    ></Icon>
  );
}
