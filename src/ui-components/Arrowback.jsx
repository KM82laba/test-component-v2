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
export default function Arrowback(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowback: {} }, variantValues: { style: "Filled" } },
    { overrides: { Arrowback: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Arrowback: {
          paths: [
            {
              d: "M14.5825 6.5925L3.4125 6.5925L8.2925 1.7125C8.6825 1.3225 8.6825 0.6825 8.2925 0.2925C7.9025 -0.0975 7.2725 -0.0975 6.8825 0.2925L0.2925 6.8825C-0.0975 7.2725 -0.0975 7.9025 0.2925 8.2925L6.8825 14.8825C7.2725 15.2725 7.9025 15.2725 8.2925 14.8825C8.6825 14.4925 8.6825 13.8625 8.2925 13.4725L3.4125 8.5925L14.5825 8.5925C15.1325 8.5925 15.5825 8.1425 15.5825 7.5925C15.5825 7.0425 15.1325 6.5925 14.5825 6.5925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(17.54%, 18.39%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Arrowback: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Arrowback: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M16 7L3.83 7L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9L16 9L16 7Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowback")}
      {...rest}
    ></Icon>
  );
}
