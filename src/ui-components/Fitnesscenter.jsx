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
export default function Fitnesscenter(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Fitnesscenter: {} }, variantValues: { style: "Filled" } },
    { overrides: { Fitnesscenter: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Fitnesscenter: {
          paths: [
            {
              d: "M18.1525 12.4425L18.8725 11.7225C19.2625 11.3325 19.2625 10.7025 18.8725 10.3125L18.8525 10.2925C18.4625 9.9025 17.8325 9.9025 17.4425 10.2925L14.5825 13.1525L6.0125 4.5825L8.8725 1.7225C9.2625 1.3325 9.2625 0.7025 8.8725 0.3125L8.8525 0.2925C8.4625 -0.0975 7.8325 -0.0975 7.4425 0.2925L6.7225 1.0125L6.0025 0.2925C5.6125 -0.0975 4.9725 -0.0975 4.5825 0.2925L3.1525 1.7225L2.4325 1.0025C2.0425 0.6125 1.3925 0.6125 1.0025 1.0025C0.6125 1.3925 0.6125 2.0425 1.0025 2.4325L1.7225 3.1525L0.2925 4.5825C-0.0975 4.9725 -0.0975 5.6025 0.2925 5.9925L1.0125 6.7125L0.2925 7.4425C-0.0975 7.8325 -0.0975 8.4625 0.2925 8.8525L0.3125 8.8725C0.7025 9.2625 1.3325 9.2625 1.7225 8.8725L4.5825 6.0125L13.1525 14.5825L10.2925 17.4425C9.9025 17.8325 9.9025 18.4625 10.2925 18.8525L10.3125 18.8725C10.7025 19.2625 11.3325 19.2625 11.7225 18.8725L12.4425 18.1525L13.1625 18.8725C13.5525 19.2625 14.1825 19.2625 14.5725 18.8725L16.0025 17.4425L16.7225 18.1625C17.1125 18.5525 17.7625 18.5525 18.1525 18.1625C18.5425 17.7725 18.5425 17.1225 18.1525 16.7325L17.4325 16.0125L18.8725 14.5825C19.2625 14.1925 19.2625 13.5625 18.8725 13.1725L18.1525 12.4425Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.07%, 10.07%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Fitnesscenter: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Fitnesscenter: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M18.57 12.86L20 11.43L18.57 10L15 13.57L6.43 5L10 1.43L8.57 0L7.14 1.43L5.71 0L3.57 2.14L2.14 0.71L0.71 2.14L2.14 3.57L0 5.71L1.43 7.14L0 8.57L1.43 10L5 6.43L13.57 15L10 18.57L11.43 20L12.86 18.57L14.29 20L16.43 17.86L17.86 19.29L19.29 17.86L17.86 16.43L20 14.29L18.57 12.86Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Fitnesscenter")}
      {...rest}
    ></Icon>
  );
}
