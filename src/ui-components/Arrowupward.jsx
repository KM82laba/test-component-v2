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
export default function Arrowupward(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowupward: {} }, variantValues: { style: "Filled" } },
    { overrides: { Arrowupward: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Arrowupward: {
          paths: [
            {
              d: "M8.5925 14.5825L8.5925 3.4125L13.4725 8.2925C13.8625 8.6825 14.5025 8.6825 14.8925 8.2925C15.2825 7.9025 15.2825 7.2725 14.8925 6.8825L8.3025 0.2925C7.9125 -0.0975 7.2825 -0.0975 6.8925 0.2925L0.2925 6.8725C-0.0975 7.2625 -0.0975 7.8925 0.2925 8.2825C0.6825 8.6725 1.3125 8.6725 1.7025 8.2825L6.5925 3.4125L6.5925 14.5825C6.5925 15.1325 7.0425 15.5825 7.5925 15.5825C8.1425 15.5825 8.5925 15.1325 8.5925 14.5825Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(18.36%, 17.54%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Arrowupward: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Arrowupward: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M0 8L1.41 9.41L7 3.83L7 16L9 16L9 3.83L14.58 9.42L16 8L8 0L0 8Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowupward")}
      {...rest}
    ></Icon>
  );
}
