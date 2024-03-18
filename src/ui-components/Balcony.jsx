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
export default function Balcony(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Balcony: {} }, variantValues: { style: "Filled" } },
    { overrides: { Balcony: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Balcony: {
          paths: [
            {
              d: "M17 12.27L17 8C17 3.58 13.42 0 9 0C4.58 0 1 3.58 1 8L1 12.27C0.4 12.61 0 13.26 0 14L0 18C0 19.1 0.9 20 2 20L16 20C17.1 20 18 19.1 18 18L18 14C18 13.26 17.6 12.61 17 12.27ZM4 18L2 18L2 14L4 14L4 18ZM8 18L6 18L6 14L8 14L8 18ZM8 12L3 12L3 8C3 5.03 5.16 2.56 8 2.08L8 12ZM10 2.08C12.84 2.56 15 5.02 15 8L15 12L10 12L10 2.08ZM12 18L10 18L10 14L12 14L12 18ZM16 18L14 18L14 14L16 14L16 18ZM5 9C5 8.45 5.45 8 6 8C6.55 8 7 8.45 7 9C7 9.55 6.55 10 6 10C5.45 10 5 9.55 5 9ZM13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Balcony: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Balcony: {
          paths: [
            {
              d: "M2 11.92L0 11.92L0 15.92L2 15.92L2 11.92ZM6 11.92L4 11.92L4 15.92L6 15.92L6 11.92ZM1 5.92L1 9.92L6 9.92L6 0C3.16 0.48 1 2.95 1 5.92ZM5 7.92L3 7.92L3 5.92L5 5.92L5 7.92ZM8 0L8 9.92L13 9.92L13 5.92C13 2.95 10.84 0.48 8 0ZM11 7.92L9 7.92L9 5.92L11 5.92L11 7.92ZM10 11.92L8 11.92L8 15.92L10 15.92L10 11.92ZM14 11.92L12 11.92L12 15.92L14 15.92L14 11.92Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 17%)" },
            },
            {
              d: "M7 8L7 10L5 10L5 8L7 8ZM13 10L13 8L11 8L11 10L13 10ZM18 12L18 20L0 20L0 12L1 12L1 8C1 3.58 4.58 0 9 0C13.42 0 17 3.58 17 8L17 12L18 12ZM4 14L2 14L2 18L4 18L4 14ZM8 14L6 14L6 18L8 18L8 14ZM8 2.08C5.16 2.56 3 5.03 3 8L3 12L8 12L8 2.08ZM10 12L15 12L15 8C15 5.03 12.84 2.56 10 2.08L10 12ZM12 14L10 14L10 18L12 18L12 14ZM16 14L14 14L14 18L16 18L16 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
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
          d: "M7 8L7 10L5 10L5 8L7 8ZM13 10L13 8L11 8L11 10L13 10ZM18 12L18 20L0 20L0 12L1 12L1 8C1 3.58 4.58 0 9 0C13.42 0 17 3.58 17 8L17 12L18 12ZM4 14L2 14L2 18L4 18L4 14ZM8 14L6 14L6 18L8 18L8 14ZM8 2.08C5.16 2.56 3 5.03 3 8L3 12L8 12L8 2.08ZM10 12L15 12L15 8C15 5.03 12.84 2.56 10 2.08L10 12ZM12 14L10 14L10 18L12 18L12 14ZM16 14L14 14L14 18L16 18L16 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Balcony")}
      {...rest}
    ></Icon>
  );
}
