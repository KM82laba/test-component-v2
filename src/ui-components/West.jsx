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
export default function West(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { West: {} }, variantValues: { style: "Filled" } },
    { overrides: { West: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        West: {
          paths: [
            {
              d: "M7.2925 12.8825C7.6825 12.4925 7.6825 11.8625 7.2925 11.4725L3.4225 7.5825L18.5925 7.5825C19.1425 7.5825 19.5925 7.1325 19.5925 6.5825C19.5925 6.0325 19.1425 5.5825 18.5925 5.5825L3.4225 5.5825L7.3025 1.7025C7.6925 1.3125 7.6925 0.6825 7.3025 0.2925C6.9125 -0.0975 6.2825 -0.0975 5.8925 0.2925L0.2925 5.8825C-0.0975 6.2725 -0.0975 6.9025 0.2925 7.2925L5.8825 12.8825C6.2725 13.2625 6.9125 13.2625 7.2925 12.8825Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.18%, 22.57%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { West: {} }, variantValues: { style: "Sharp" } },
    { overrides: { West: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M7 14L8.41 12.59L3.83 8L20 8L20 6L3.83 6L8.42 1.41L7 0L0 7L7 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "West")}
      {...rest}
    ></Icon>
  );
}
