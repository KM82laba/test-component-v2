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
export default function Southwest(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Southwest: {} }, variantValues: { style: "Filled" } },
    { overrides: { Southwest: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Southwest: {
          paths: [
            {
              d: "M10 13.5925C10 13.0325 9.55 12.5925 9 12.5925L3.41 12.5925L14.3 1.7025C14.69 1.3125 14.69 0.6825 14.3 0.2925C13.91 -0.0975 13.28 -0.0975 12.89 0.2925L2 11.1825L2 5.5925C2 5.0425 1.55 4.5925 1 4.5925C0.45 4.5925 0 5.0425 0 5.5925L0 13.5925C0 14.1425 0.45 14.5925 1 14.5925L9 14.5925C9.55 14.5925 10 14.1425 10 13.5925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.6%, 19.6%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Southwest: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Southwest: {
          paths: [
            {
              d: "M10 15L10 13L3.41 13L15 1.41L13.59 0L2 11.59L2 5L0 5L0 15L10 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 16.67%)" },
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
          d: "M10 15L10 13L3.41 13L15 1.41L13.59 0L2 11.59L2 5L0 5L0 15L10 15Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 18.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Southwest")}
      {...rest}
    ></Icon>
  );
}
