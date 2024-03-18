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
export default function Arrowforward(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowforward: {} }, variantValues: { style: "Filled" } },
    { overrides: { Arrowforward: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Arrowforward: {
          paths: [
            {
              d: "M1 8.5925L12.17 8.5925L7.29 13.4725C6.9 13.8625 6.9 14.5025 7.29 14.8925C7.68 15.2825 8.31 15.2825 8.7 14.8925L15.29 8.3025C15.68 7.9125 15.68 7.2825 15.29 6.8925L8.71 0.2925C8.32 -0.0975 7.69 -0.0975 7.3 0.2925C6.91 0.6825 6.91 1.3125 7.3 1.7025L12.17 6.5925L1 6.5925C0.45 6.5925 0 7.0425 0 7.5925C0 8.1425 0.45 8.5925 1 8.5925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(17.54%, 18.36%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Arrowforward: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Arrowforward: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M8 0L6.59 1.41L12.17 7L0 7L0 9L12.17 9L6.59 14.59L8 16L16 8L8 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowforward")}
      {...rest}
    ></Icon>
  );
}
