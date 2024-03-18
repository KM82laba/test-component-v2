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
export default function Southamerica(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Southamerica: {} }, variantValues: { style: "Filled" } },
    { overrides: { Southamerica: {} }, variantValues: { style: "Outlined" } },
    { overrides: { Southamerica: {} }, variantValues: { style: "Round" } },
    { overrides: { Southamerica: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Southamerica: {
          paths: [
            {
              d: "M0 8C0 6.05 0.7 4.26 1.87 2.87L5 6L5 7C5 8.1 5.9 9 7 9L7 14.59C7 14.86 7.11 15.11 7.29 15.3L8 16C3.58 16 0 12.42 0 8ZM9 15.94L9 14L12.75 8.38C12.91 8.13 13 7.84 13 7.55L13 6.5C13 5.95 12.55 5.5 12 5.5L10.5 5.5L9.1 3.75C8.72 3.28 8.15 3 7.54 3L4 3L4 1.07C5.18 0.39 6.54 0 8 0C12.41 0 16 3.59 16 8C16 12.07 12.94 15.44 9 15.94Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
            {
              d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 8.05 2.7 6.26 3.87 4.87L7 8L7 9C7 10.1 7.9 11 9 11L9 16.59C9 16.86 9.11 17.11 9.29 17.3L10 18C5.58 18 2 14.42 2 10ZM11 17.94L11 16L14.75 10.38C14.91 10.13 15 9.84 15 9.55L15 8.5C15 7.95 14.55 7.5 14 7.5L12.5 7.5L11.1 5.75C10.72 5.28 10.15 5 9.54 5L6 5L6 3.07C7.18 2.39 8.54 2 10 2C14.41 2 18 5.59 18 10C18 14.07 14.94 17.44 11 17.94Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
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
          d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 8.05 2.7 6.26 3.87 4.87L7 8L7 9C7 10.1 7.9 11 9 11L9 16.59C9 16.86 9.11 17.11 9.29 17.3L10 18C5.58 18 2 14.42 2 10ZM11 17.94L11 16L14.75 10.38C14.91 10.13 15 9.84 15 9.55L15 8.5C15 7.95 14.55 7.5 14 7.5L12.5 7.5L11.1 5.75C10.72 5.28 10.15 5 9.54 5L6 5L6 3.07C7.18 2.39 8.54 2 10 2C14.41 2 18 5.59 18 10C18 14.07 14.94 17.44 11 17.94Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Southamerica")}
      {...rest}
    ></Icon>
  );
}
