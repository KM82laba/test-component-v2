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
export default function East(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { East: {} }, variantValues: { style: "Filled" } },
    { overrides: { East: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        East: {
          paths: [
            {
              d: "M12.29 0.2925C11.9 0.6825 11.9 1.3125 12.29 1.7025L16.17 5.5825L1 5.5825C0.45 5.5825 0 6.0325 0 6.5825C0 7.1325 0.45 7.5825 1 7.5825L16.18 7.5825L12.3 11.4625C11.91 11.8525 11.91 12.4825 12.3 12.8725C12.69 13.2625 13.32 13.2625 13.71 12.8725L19.3 7.2825C19.69 6.8925 19.69 6.2625 19.3 5.8725L13.7 0.2925C13.32 -0.0975 12.68 -0.0975 12.29 0.2925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.18%, 22.57%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { East: {} }, variantValues: { style: "Sharp" } },
    { overrides: { East: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M13 0L11.59 1.41L16.17 6L0 6L0 8L16.17 8L11.58 12.59L13 14L20 7L13 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "East")}
      {...rest}
    ></Icon>
  );
}
