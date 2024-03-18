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
export default function Unfoldmore(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Unfoldmore: {} }, variantValues: { style: "Filled" } },
    { overrides: { Unfoldmore: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Unfoldmore: {
          paths: [
            {
              d: "M4.1725 2.4225L6.6325 4.8825C7.0225 5.2725 7.6525 5.2725 8.0425 4.8825C8.4325 4.4925 8.4325 3.8625 8.0425 3.4725L4.8725 0.2925C4.4825 -0.0975 3.8525 -0.0975 3.4625 0.2925L0.2925 3.4725C-0.0975 3.8625 -0.0975 4.4925 0.2925 4.8825C0.6825 5.2725 1.3125 5.2725 1.7025 4.8825L4.1725 2.4225ZM4.1725 14.7625L1.7125 12.3025C1.3225 11.9125 0.6925 11.9125 0.3025 12.3025C-0.0874998 12.6925 -0.0874998 13.3225 0.3025 13.7125L3.4725 16.8925C3.8625 17.2825 4.4925 17.2825 4.8825 16.8925L8.0525 13.7225C8.4425 13.3325 8.4425 12.7025 8.0525 12.3125C7.6625 11.9225 7.0325 11.9225 6.6425 12.3125L4.1725 14.7625Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(32.61%, 14.2%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Unfoldmore: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Unfoldmore: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M4.59 2.83L7.76 6L9.17 4.59L4.59 0L0 4.59L1.42 6L4.59 2.83ZM4.59 15.17L1.42 12L0.0100002 13.41L4.59 18L9.18 13.41L7.76 12L4.59 15.17Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(30.87%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Unfoldmore")}
      {...rest}
    ></Icon>
  );
}
