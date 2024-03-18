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
export default function Northwest(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Northwest: {} }, variantValues: { style: "Filled" } },
    { overrides: { Northwest: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Northwest: {
          paths: [
            {
              d: "M1 10C1.56 10 2 9.55 2 9L2 3.41L12.89 14.3C13.28 14.69 13.91 14.69 14.3 14.3C14.69 13.91 14.69 13.28 14.3 12.89L3.41 2L9 2C9.55 2 10 1.55 10 1C10 0.45 9.55 0 9 0L1 0C0.45 0 0 0.45 0 1L0 9C0 9.55 0.45 10 1 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.6%, 19.6%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Northwest: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Northwest: {
          paths: [
            {
              d: "M0 10L2 10L2 3.41L13.59 15L15 13.59L3.41 2L10 2L10 0L0 0L0 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
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
          d: "M0 10L2 10L2 3.41L13.59 15L15 13.59L3.41 2L10 2L10 0L0 0L0 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 18.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Northwest")}
      {...rest}
    ></Icon>
  );
}
