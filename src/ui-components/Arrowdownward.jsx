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
export default function Arrowdownward(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowdownward: {} }, variantValues: { style: "Filled" } },
    { overrides: { Arrowdownward: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Arrowdownward: {
          paths: [
            {
              d: "M6.5925 1L6.5925 12.17L1.7125 7.29C1.3225 6.9 0.6825 6.9 0.2925 7.29C-0.0975 7.68 -0.0975 8.31 0.2925 8.7L6.8825 15.29C7.2725 15.68 7.9025 15.68 8.2925 15.29L14.8825 8.7C15.2725 8.31 15.2725 7.68 14.8825 7.29C14.4925 6.9 13.8625 6.9 13.4725 7.29L8.5925 12.17L8.5925 1C8.5925 0.45 8.1425 0 7.5925 0C7.0425 0 6.5925 0.45 6.5925 1Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(18.39%, 17.54%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Arrowdownward: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Arrowdownward: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M16 8L14.59 6.59L9 12.17L9 0L7 0L7 12.17L1.42 6.58L0 8L8 16L16 8Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowdownward")}
      {...rest}
    ></Icon>
  );
}
