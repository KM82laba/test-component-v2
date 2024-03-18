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
export default function Checkboxoutlineblank(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Checkboxoutlineblank: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Checkboxoutlineblank: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Checkboxoutlineblank: {
          paths: [
            {
              d: "M15 16L3 16C2.45 16 2 15.55 2 15L2 3C2 2.45 2.45 2 3 2L15 2C15.55 2 16 2.45 16 3L16 15C16 15.55 15.55 16 15 16ZM16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Checkboxoutlineblank: {
          paths: [
            {
              d: "M16 2L16 16L2 16L2 2L16 2ZM18 0L0 0L0 18L18 18L18 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: { Checkboxoutlineblank: {} },
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
          d: "M16 2L16 16L2 16L2 2L16 2ZM16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Checkboxoutlineblank")}
      {...rest}
    ></Icon>
  );
}
