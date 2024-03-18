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
export default function Menuopen(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Menuopen: {} }, variantValues: { style: "Filled" } },
    { overrides: { Menuopen: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Menuopen: {
          paths: [
            {
              d: "M1 12L12 12C12.55 12 13 11.55 13 11C13 10.45 12.55 10 12 10L1 10C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7L9 7C9.55 7 10 6.55 10 6C10 5.45 9.55 5 9 5L1 5C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2L12 2C12.55 2 13 1.55 13 1C13 0.45 12.55 0 12 0L1 0C0.45 0 0 0.45 0 1ZM17.3 8.88L14.42 6L17.3 3.12C17.69 2.73 17.69 2.1 17.3 1.71C16.91 1.32 16.28 1.32 15.89 1.71L12.3 5.3C11.91 5.69 11.91 6.32 12.3 6.71L15.89 10.3C16.28 10.69 16.91 10.69 17.3 10.3C17.68 9.91 17.69 9.27 17.3 8.88Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(13.35%, 25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Menuopen: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Menuopen: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M0 12L13 12L13 10L0 10L0 12ZM0 7L10 7L10 5L0 5L0 7ZM0 0L0 2L13 2L13 0L0 0ZM18 9.59L14.42 6L18 2.41L16.59 1L11.59 6L16.59 11L18 9.59Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Menuopen")}
      {...rest}
    ></Icon>
  );
}
