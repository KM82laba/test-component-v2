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
export default function Personoutline(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Personoutline: {} }, variantValues: { style: "Filled" } },
    { overrides: { Personoutline: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Personoutline: {
          paths: [
            {
              d: "M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13L14.1 14.1L1.9 14.1L1.9 13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13L0 15C0 15.55 0.45 16 1 16L15 16C15.55 16 16 15.55 16 15L16 13C16 10.34 10.67 9 8 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Personoutline: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Personoutline: {
          paths: [
            {
              d: "M2.1 4.2C3.2598 4.2 4.2 3.2598 4.2 2.1C4.2 0.940202 3.2598 0 2.1 0C0.940202 0 0 0.940202 0 2.1C0 3.2598 0.940202 4.2 2.1 4.2Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(41.25%, 24.58%)" },
            },
            {
              d: "M6.1 0C3.13 0 0 1.46 0 2.1L0 3.2L12.2 3.2L12.2 2.1C12.2 1.46 9.07 0 6.1 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(24.58%, 62.08%)" },
            },
            {
              d: "M8 9C5.33 9 0 10.34 0 13L0 16L16 16L16 13C16 10.34 10.67 9 8 9ZM14.1 14.1L1.9 14.1L1.9 13C1.9 12.36 5.03 10.9 8 10.9C10.97 10.9 14.1 12.36 14.1 13L14.1 14.1ZM8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
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
          d: "M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13L14.1 14.1L1.9 14.1L1.9 13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13L0 16L16 16L16 13C16 10.34 10.67 9 8 9Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Personoutline")}
      {...rest}
    ></Icon>
  );
}
