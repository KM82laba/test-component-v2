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
export default function Localatm(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Localatm: {} }, variantValues: { style: "Filled" } },
    { overrides: { Localatm: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Localatm: {
          paths: [
            {
              d: "M18 0L2 0C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16L18 16C19.11 16 20 15.11 20 14L20 2C20 0.89 19.11 0 18 0ZM18 13C18 13.55 17.55 14 17 14L3 14C2.45 14 2 13.55 2 13L2 3C2 2.45 2.45 2 3 2L17 2C17.55 2 18 2.45 18 3L18 13ZM12 6C12.55 6 13 5.55 13 5C13 4.45 12.55 4 12 4L11 4L11 3.99C11 3.44 10.55 2.99 10 2.99C9.45 2.99 9 3.44 9 3.99L9 4L8 4C7.45 4 7 4.45 7 5L7 8C7 8.55 7.45 9 8 9L11 9L11 10L8 10C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12L9 12C9 12.55 9.45 13 10 13C10.55 13 11 12.55 11 12L12 12C12.55 12 13 11.55 13 11L13 8C13 7.45 12.55 7 12 7L9 7L9 6L12 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Localatm: {
          paths: [
            {
              d: "M9 13L11 13L11 12L13 12L13 7L9 7L9 6L13 6L13 4L11 4L11 3L9 3L9 4L7 4L7 9L11 9L11 10L7 10L7 12L9 12L9 13ZM20 0L0.00999999 0L0 16L20 16L20 0ZM18 14L2 14L2 2L18 2L18 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Localatm: {
          paths: [
            {
              d: "M0 12L16 12L16 0L0 0L0 12ZM5 8L9 8L9 7L6 7C5.45 7 5 6.55 5 6L5 3C5 2.45 5.45 2 6 2L7 2L7 1L9 1L9 2L11 2L11 4L7 4L7 5L10 5C10.55 5 11 5.45 11 6L11 9C11 9.55 10.55 10 10 10L9 10L9 11L7 11L7 10L5 10L5 8Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 25%)" },
            },
            {
              d: "M18 0L2 0C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16L18 16C19.11 16 20 15.11 20 14L20 2C20 0.89 19.11 0 18 0ZM18 14L2 14L2 2L18 2L18 14ZM9 13L11 13L11 12L12 12C12.55 12 13 11.55 13 11L13 8C13 7.45 12.55 7 12 7L9 7L9 6L13 6L13 4L11 4L11 3L9 3L9 4L8 4C7.45 4 7 4.45 7 5L7 8C7 8.55 7.45 9 8 9L11 9L11 10L7 10L7 12L9 12L9 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
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
          d: "M9 13L11 13L11 12L12 12C12.55 12 13 11.55 13 11L13 8C13 7.45 12.55 7 12 7L9 7L9 6L13 6L13 4L11 4L11 3L9 3L9 4L8 4C7.45 4 7 4.45 7 5L7 8C7 8.55 7.45 9 8 9L11 9L11 10L7 10L7 12L9 12L9 13ZM18 0L2 0C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16L18 16C19.11 16 20 15.11 20 14L20 2C20 0.89 19.11 0 18 0ZM18 14L2 14L2 2L18 2L18 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Localatm")}
      {...rest}
    ></Icon>
  );
}
