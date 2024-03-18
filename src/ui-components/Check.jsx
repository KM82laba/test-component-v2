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
export default function Check(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Check: {} }, variantValues: { style: "Filled" } },
    { overrides: { Check: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Check: {
          paths: [
            {
              d: "M5.1725 10.1625L1.7025 6.6925C1.3125 6.3025 0.6825 6.3025 0.2925 6.6925C-0.0975 7.0825 -0.0975 7.7125 0.2925 8.1025L4.4725 12.2825C4.8625 12.6725 5.4925 12.6725 5.8825 12.2825L16.4625 1.7025C16.8525 1.3125 16.8525 0.6825 16.4625 0.2925C16.0725 -0.0975 15.4425 -0.0975 15.0525 0.2925L5.1725 10.1625Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(15.09%, 23.8%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Check: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Check: {
          paths: [
            {
              d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.21%, 23.29%)" },
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
          d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(13.35%, 22.06%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Check")}
      {...rest}
    ></Icon>
  );
}
