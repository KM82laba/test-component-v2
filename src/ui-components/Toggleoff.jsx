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
export default function Toggleoff(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Toggleoff: {
          paths: [
            {
              d: "M15 0L5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10L15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM5 8C3.34 8 2 6.66 2 5C2 3.34 3.34 2 5 2C6.66 2 8 3.34 8 5C8 6.66 6.66 8 5 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 29.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Toggleoff: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Toggleoff: {
          paths: [
            {
              d: "M15 0L5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10L15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM5 8C3.34 8 2 6.66 2 5C2 3.34 3.34 2 5 2C6.66 2 8 3.34 8 5C8 6.66 6.66 8 5 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 29.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Toggleoff: {
          paths: [
            {
              d: "M15 0L5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10L15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM5 8C3.34 8 2 6.66 2 5C2 3.34 3.34 2 5 2C6.66 2 8 3.34 8 5C8 6.66 6.66 8 5 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 29.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Toggleoff: {
          paths: [
            {
              d: "M14 0L4 0C1.79 0 0 1.79 0 4C0 6.21 1.79 8 4 8L14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0ZM4 7C2.34 7 1 5.66 1 4C1 2.34 2.34 1 4 1C5.66 1 7 2.34 7 4C7 5.66 5.66 7 4 7Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 33.33%)" },
            },
            {
              d: "M16 0L6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12L16 12C19.31 12 22 9.31 22 6C22 2.69 19.31 0 16 0ZM16 10L6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2L16 2C18.21 2 20 3.79 20 6C20 8.21 18.21 10 16 10ZM6 3C4.34 3 3 4.34 3 6C3 7.66 4.34 9 6 9C7.66 9 9 7.66 9 6C9 4.34 7.66 3 6 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 25%)" },
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
          d: "M16 0L6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12L16 12C19.31 12 22 9.31 22 6C22 2.69 19.31 0 16 0ZM16 10L6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2L16 2C18.21 2 20 3.79 20 6C20 8.21 18.21 10 16 10ZM6 3C4.34 3 3 4.34 3 6C3 7.66 4.34 9 6 9C7.66 9 9 7.66 9 6C9 4.34 7.66 3 6 3Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Toggleoff")}
      {...rest}
    ></Icon>
  );
}
