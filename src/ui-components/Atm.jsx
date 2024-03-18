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
export default function Atm(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Atm: {} }, variantValues: { style: "Filled" } },
    { overrides: { Atm: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Atm: {
          paths: [
            {
              d: "M6 0.75C6 1.16 6.34 1.5 6.75 1.5L8.25 1.5L8.25 5.25C8.25 5.66 8.59 6 9 6C9.41 6 9.75 5.66 9.75 5.25L9.75 1.5L11.25 1.5C11.66 1.5 12 1.16 12 0.75C12 0.34 11.66 0 11.25 0L6.75 0C6.34 0 6 0.34 6 0.75ZM4 0L1 0C0.45 0 0 0.45 0 1L0 5.25C0 5.66 0.34 6 0.75 6C1.16 6 1.5 5.66 1.5 5.25L1.5 4.5L3.5 4.5L3.5 5.25C3.5 5.66 3.84 6 4.25 6C4.66 6 5 5.66 5 5.25L5 1C5 0.45 4.55 0 4 0ZM3.5 3L1.5 3L1.5 1.5L3.5 1.5L3.5 3ZM19 0L14.5 0C13.95 0 13.5 0.45 13.5 1L13.5 5.25C13.5 5.66 13.84 6 14.25 6C14.66 6 15 5.66 15 5.25L15 1.5L16 1.5L16 4.25C16 4.66 16.34 5 16.75 5C17.16 5 17.5 4.66 17.5 4.25L17.5 1.49L18.5 1.49L18.5 5.25C18.5 5.66 18.84 6 19.25 6C19.66 6 20 5.66 20 5.25L20 1C20 0.45 19.55 0 19 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 37.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Atm: {
          paths: [
            {
              d: "M6 0L6 1.5L8.25 1.5L8.25 6L9.75 6L9.75 1.5L12 1.5L12 0L6 0ZM5 0L0 0L0 6L1.5 6L1.5 4.5L3.5 4.5L3.5 6L5 6L5 0ZM3.5 3L1.5 3L1.5 1.5L3.5 1.5L3.5 3ZM20 0L13.5 0L13.5 6L15 6L15 1.5L16 1.5L16 5L17.5 5L17.5 1.49L18.5 1.49L18.5 6L20 6L20 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 37.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Atm: {
          paths: [
            {
              d: "M1.5 4.5L3.5 4.5L3.5 6L5 6L5 1C5 0.45 4.55 0 4 0L1 0C0.45 0 0 0.45 0 1L0 6L1.5 6L1.5 4.5ZM1.5 1.5L3.5 1.5L3.5 3L1.5 3L1.5 1.5ZM15 1.5L16 1.5L16 5L17.5 5L17.5 1.49L18.5 1.49L18.5 6L20 6L20 1C20 0.45 19.55 0 19 0L14.5 0C13.95 0 13.5 0.45 13.5 1L13.5 6L15 6L15 1.5ZM8.25 6L9.75 6L9.75 1.5L12 1.5L12 0L6 0L6 1.5L8.25 1.5L8.25 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 37.5%)" },
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
          d: "M6 0L6 1.5L8.25 1.5L8.25 6L9.75 6L9.75 1.5L12 1.5L12 0L6 0ZM4 0L1 0C0.45 0 0 0.45 0 1L0 6L1.5 6L1.5 4.5L3.5 4.5L3.5 6L5 6L5 1C5 0.45 4.55 0 4 0ZM3.5 3L1.5 3L1.5 1.5L3.5 1.5L3.5 3ZM19 0L14.5 0C13.95 0 13.5 0.45 13.5 1L13.5 6L15 6L15 1.5L16 1.5L16 5L17.5 5L17.5 1.49L18.5 1.49L18.5 6L20 6L20 1C20 0.45 19.55 0 19 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 37.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Atm")}
      {...rest}
    ></Icon>
  );
}
