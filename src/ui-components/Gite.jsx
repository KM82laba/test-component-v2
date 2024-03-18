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
export default function Gite(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Gite: {} }, variantValues: { style: "Filled" } },
    { overrides: { Gite: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Gite: {
          paths: [
            {
              d: "M19.41 5.41L16.58 2.58C16.21 2.21 15.7 2 15.17 2L7 2L7 1C7 0.45 6.55 0 6 0C5.45 0 5 0.45 5 1L5 2L4.83 2C4.3 2 3.79 2.21 3.41 2.59L0.59 5.41C0.21 5.79 0 6.3 0 6.83L0 13C0 14.1 0.9 15 2 15L18 15C19.1 15 20 14.1 20 13L20 6.83C20 6.3 19.79 5.79 19.41 5.41ZM12 13L2 13L2 8L12 8L12 13ZM18 13L14 13L14 6.83L16 4.83L18 6.83L18 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 18.75%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Gite: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Gite: {
          paths: [
            {
              d: "M0 3.17L10 3.17L10 8.17L0 8.17L0 3.17ZM16 8.17L12 8.17L12 2L14 0L16 2L16 8.17Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 36.79%)" },
            },
            {
              d: "M16 2L7 2L7 0L5 0L5 2L4 2L0 6L0 15L20 15L20 6L16 2ZM2 8L12 8L12 13L2 13L2 8ZM18 13L14 13L14 6.83L16 4.83L18 6.83L18 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
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
          d: "M16 2L7 2L7 0L5 0L5 2L4 2L0 6L0 15L20 15L20 6L16 2ZM2 8L12 8L12 13L2 13L2 8ZM18 13L14 13L14 6.83L16 4.83L18 6.83L18 13Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 18.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Gite")}
      {...rest}
    ></Icon>
  );
}
