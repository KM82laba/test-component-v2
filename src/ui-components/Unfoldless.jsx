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
export default function Unfoldless(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Unfoldless: {} }, variantValues: { style: "Filled" } },
    { overrides: { Unfoldless: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Unfoldless: {
          paths: [
            {
              d: "M0.2925 14.8925C0.6825 15.2825 1.3125 15.2825 1.7025 14.8925L4.1725 12.4225L6.6425 14.8925C7.0325 15.2825 7.6625 15.2825 8.0525 14.8925C8.4425 14.5025 8.4425 13.8725 8.0525 13.4825L4.8825 10.3125C4.4925 9.9225 3.8625 9.9225 3.4725 10.3125L0.3025 13.4825C-0.0974998 13.8625 -0.0975 14.5025 0.2925 14.8925ZM8.0525 0.2925C7.6625 -0.0975 7.0325 -0.0975 6.6425 0.2925L4.1725 2.7625L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3225 0.2925 1.7125L3.4625 4.8825C3.8525 5.2725 4.4825 5.2725 4.8725 4.8825L8.0425 1.7125C8.4425 1.3225 8.4425 0.6825 8.0525 0.2925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(32.61%, 18.36%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Unfoldless: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Unfoldless: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M0 14.59L1.42 16L4.59 12.83L7.76 16L9.17 14.59L4.59 10L0 14.59ZM9.18 1.41L7.76 0L4.59 3.17L1.42 0L0 1.41L4.59 6L9.18 1.41Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(30.87%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Unfoldless")}
      {...rest}
    ></Icon>
  );
}
