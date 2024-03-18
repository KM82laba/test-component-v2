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
export default function Piano(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Piano: {} }, variantValues: { style: "Filled" } },
    { overrides: { Piano: {} }, variantValues: { style: "Outlined" } },
    { overrides: { Piano: {} }, variantValues: { style: "Round" } },
    {
      overrides: {
        Piano: {
          paths: [
            {
              d: "M18 0L0 0L0 18L18 18L18 0ZM10 11.5L11.25 11.5L11.25 16L6.75 16L6.75 11.5L8 11.5L8 2L10 2L10 11.5ZM2 2L4 2L4 11.5L5.25 11.5L5.25 16L2 16L2 2ZM16 16L12.75 16L12.75 11.5L14 11.5L14 2L16 2L16 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Piano: {
          paths: [
            {
              d: "M9 9.5L9.25 9.5L9.25 14L4.75 14L4.75 9.5L5 9.5C5.55 9.5 6 9.05 6 8.5L6 0L8 0L8 8.5C8 9.05 8.45 9.5 9 9.5ZM0 0L2 0L2 8.5C2 9.05 2.45 9.5 3 9.5L3.25 9.5L3.25 14L0 14L0 0ZM14 14L10.75 14L10.75 9.5L11 9.5C11.55 9.5 12 9.05 12 8.5L12 0L14 0L14 14Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM11 11.5L11.25 11.5L11.25 16L6.75 16L6.75 11.5L7 11.5C7.55 11.5 8 11.05 8 10.5L8 2L10 2L10 10.5C10 11.05 10.45 11.5 11 11.5ZM2 2L4 2L4 10.5C4 11.05 4.45 11.5 5 11.5L5.25 11.5L5.25 16L2 16L2 2ZM16 16L12.75 16L12.75 11.5L13 11.5C13.55 11.5 14 11.05 14 10.5L14 2L16 2L16 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
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
          d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM11 11.5L11.25 11.5L11.25 16L6.75 16L6.75 11.5L7 11.5C7.55 11.5 8 11.05 8 10.5L8 2L10 2L10 10.5C10 11.05 10.45 11.5 11 11.5ZM2 2L4 2L4 10.5C4 11.05 4.45 11.5 5 11.5L5.25 11.5L5.25 16L2 16L2 2ZM16 16L12.75 16L12.75 11.5L13 11.5C13.55 11.5 14 11.05 14 10.5L14 2L16 2L16 16Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Piano")}
      {...rest}
    ></Icon>
  );
}
