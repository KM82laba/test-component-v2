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
export default function Public(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Public: {
          paths: [
            {
              d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.79 2.21 8.21L7 13L7 14C7 15.1 7.9 16 9 16L9 17.93ZM15.9 15.39C15.64 14.58 14.9 14 14 14L13 14L13 11C13 10.45 12.55 10 12 10L6 10L6 8L8 8C8.55 8 9 7.55 9 7L9 5L11 5C12.1 5 13 4.1 13 3L13 2.59C15.93 3.78 18 6.65 18 10C18 12.08 17.2 13.97 15.9 15.39Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Public: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Public: {
          paths: [
            {
              d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.79 2.21 8.21L7 13L7 14C7 15.1 7.9 16 9 16L9 17.93ZM15.9 15.39C15.64 14.58 14.9 14 14 14L13 14L13 11C13 10.45 12.55 10 12 10L6 10L6 8L8 8C8.55 8 9 7.55 9 7L9 5L11 5C12.1 5 13 4.1 13 3L13 2.59C15.93 3.78 18 6.65 18 10C18 12.08 17.2 13.97 15.9 15.39Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Public: {
          paths: [
            {
              d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.79 2.21 8.21L7 13L7 14C7 15.1 7.9 16 9 16L9 17.93ZM15.9 15.39C15.64 14.58 14.9 14 14 14L13 14L13 11C13 10.45 12.55 10 12 10L6 10L6 8L8 8C8.55 8 9 7.55 9 7L9 5L11 5C12.1 5 13 4.1 13 3L13 2.59C15.93 3.78 18 6.65 18 10C18 12.08 17.2 13.97 15.9 15.39Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Public: {
          paths: [
            {
              d: "M10.99 0L10.99 0.41C10.99 1.51 10.09 2.41 8.99 2.41L6.99 2.41L6.99 4.41C6.99 4.96 6.54 5.41 5.99 5.41L3.99 5.41L3.99 7.41L9.99 7.41C10.54 7.41 10.99 7.86 10.99 8.41L10.99 11.41L11.99 11.41C12.88 11.41 13.63 12 13.89 12.81C15.19 11.39 16 9.49 16 7.41C16 4.06 13.92 1.18 10.99 0ZM4.99 11.41L4.99 10.41L0.21 5.63C0.08 6.2 0 6.8 0 7.41C0 11.48 3.06 14.84 6.99 15.34L6.99 13.41C5.89 13.41 4.99 12.51 4.99 11.41Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 19.13%)" },
            },
            {
              d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8.99 17.93C5.06 17.43 2 14.07 2 10C2 9.39 2.08 8.79 2.21 8.22L6.99 13L6.99 14C6.99 15.1 7.89 16 8.99 16L8.99 17.93ZM15.89 15.4C15.63 14.59 14.89 14 13.99 14L12.99 14L12.99 11C12.99 10.45 12.54 10 11.99 10L5.99 10L5.99 8L7.99 8C8.54 8 8.99 7.55 8.99 7L8.99 5L10.99 5C12.09 5 12.99 4.1 12.99 3L12.99 2.59C15.92 3.77 18 6.65 18 10C18 12.08 17.19 13.98 15.89 15.4Z",
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
          d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 9.39 2.08 8.79 2.21 8.22L6.99 13L6.99 14C6.99 15.1 7.89 16 8.99 16L8.99 17.93C5.06 17.43 2 14.07 2 10ZM15.89 15.4C15.63 14.59 14.89 14 13.99 14L12.99 14L12.99 11C12.99 10.45 12.54 10 11.99 10L5.99 10L5.99 8L7.99 8C8.54 8 8.99 7.55 8.99 7L8.99 5L10.99 5C12.09 5 12.99 4.1 12.99 3L12.99 2.59C15.92 3.77 18 6.65 18 10C18 12.08 17.19 13.98 15.89 15.4Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Public")}
      {...rest}
    ></Icon>
  );
}
