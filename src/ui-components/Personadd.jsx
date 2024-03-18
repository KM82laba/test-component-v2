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
export default function Personadd(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Personadd: {
          paths: [
            {
              d: "M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6L5 3L3 3L3 6L0 6L0 8L3 8L3 11L5 11L5 8L8 8L8 6L5 6ZM14 10C11.33 10 6 11.34 6 14L6 16L22 16L22 14C22 11.34 16.67 10 14 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Personadd: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Personadd: {
          paths: [
            {
              d: "M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6L5 4C5 3.45 4.55 3 4 3C3.45 3 3 3.45 3 4L3 6L1 6C0.45 6 0 6.45 0 7C0 7.55 0.45 8 1 8L3 8L3 10C3 10.55 3.45 11 4 11C4.55 11 5 10.55 5 10L5 8L7 8C7.55 8 8 7.55 8 7C8 6.45 7.55 6 7 6L5 6ZM14 10C11.33 10 6 11.34 6 14L6 15C6 15.55 6.45 16 7 16L21 16C21.55 16 22 15.55 22 15L22 14C22 11.34 16.67 10 14 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Personadd: {
          paths: [
            {
              d: "M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6L5 3L3 3L3 6L0 6L0 8L3 8L3 11L5 11L5 8L8 8L8 6L5 6ZM14 10C11.33 10 6 11.34 6 14L6 16L22 16L22 14C22 11.34 16.67 10 14 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Personadd: {
          paths: [
            {
              d: "M6 0C3.31 0 0.23 1.28 0 2L12 2C11.8 1.29 8.7 0 6 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(37.5%, 66.67%)" },
            },
            {
              d: "M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(54.17%, 25%)" },
            },
            {
              d: "M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM14 2C15.1 2 16 2.9 16 4C16 5.1 15.1 6 14 6C12.9 6 12 5.1 12 4C12 2.9 12.9 2 14 2ZM14 10C11.33 10 6 11.34 6 14L6 16L22 16L22 14C22 11.34 16.67 10 14 10ZM8 14C8.22 13.28 11.31 12 14 12C16.7 12 19.8 13.29 20 14L8 14ZM5 11L5 8L8 8L8 6L5 6L5 3L3 3L3 6L0 6L0 8L3 8L3 11L5 11Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 16.67%)" },
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
          d: "M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM14 2C15.1 2 16 2.9 16 4C16 5.1 15.1 6 14 6C12.9 6 12 5.1 12 4C12 2.9 12.9 2 14 2ZM14 10C11.33 10 6 11.34 6 14L6 16L22 16L22 14C22 11.34 16.67 10 14 10ZM8 14C8.22 13.28 11.31 12 14 12C16.7 12 19.8 13.29 20 14L8 14ZM5 11L5 8L8 8L8 6L5 6L5 3L3 3L3 6L0 6L0 8L3 8L3 11L5 11Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Personadd")}
      {...rest}
    ></Icon>
  );
}
