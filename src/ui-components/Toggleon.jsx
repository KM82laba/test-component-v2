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
export default function Toggleon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Toggleon: {
          paths: [
            {
              d: "M15 0L5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10L15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM15 8C13.34 8 12 6.66 12 5C12 3.34 13.34 2 15 2C16.66 2 18 3.34 18 5C18 6.66 16.66 8 15 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 29.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Toggleon: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Toggleon: {
          paths: [
            {
              d: "M15 0L5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10L15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM15 8C13.34 8 12 6.66 12 5C12 3.34 13.34 2 15 2C16.66 2 18 3.34 18 5C18 6.66 16.66 8 15 8Z",
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
        Toggleon: {
          paths: [
            {
              d: "M15 0L5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10L15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM15 8C13.34 8 12 6.66 12 5C12 3.34 13.34 2 15 2C16.66 2 18 3.34 18 5C18 6.66 16.66 8 15 8Z",
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
        Toggleon: {
          paths: [
            {
              d: "M14 0L4 0C1.79 0 0 1.79 0 4C0 6.21 1.79 8 4 8L14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0ZM14 7C12.34 7 11 5.66 11 4C11 2.34 12.34 1 14 1C15.66 1 17 2.34 17 4C17 5.66 15.66 7 14 7Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 33.33%)" },
            },
            {
              d: "M16 0L6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12L16 12C19.31 12 22 9.31 22 6C22 2.69 19.31 0 16 0ZM16 10L6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2L16 2C18.21 2 20 3.79 20 6C20 8.21 18.21 10 16 10ZM16 3C14.34 3 13 4.34 13 6C13 7.66 14.34 9 16 9C17.66 9 19 7.66 19 6C19 4.34 17.66 3 16 3Z",
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
          d: "M16 0L6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12L16 12C19.31 12 22 9.31 22 6C22 2.69 19.31 0 16 0ZM16 10L6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2L16 2C18.21 2 20 3.79 20 6C20 8.21 18.21 10 16 10ZM16 3C14.34 3 13 4.34 13 6C13 7.66 14.34 9 16 9C17.66 9 19 7.66 19 6C19 4.34 17.66 3 16 3Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Toggleon")}
      {...rest}
    ></Icon>
  );
}
