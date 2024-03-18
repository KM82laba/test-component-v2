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
export default function School(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        School: {
          paths: [
            {
              d: "M4 10.18L4 14.18L11 18L18 14.18L18 10.18L11 14L4 10.18ZM11 0L0 6L11 12L20 7.09L20 14L22 14L22 6L11 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { School: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        School: {
          paths: [
            {
              d: "M2.9075 9.9L2.9075 12.71C2.9075 13.44 3.3075 14.12 3.9475 14.47L8.9475 17.2C9.5475 17.53 10.2675 17.53 10.8675 17.2L15.8675 14.47C16.5075 14.12 16.9075 13.44 16.9075 12.71L16.9075 9.9L10.8675 13.2C10.2675 13.53 9.5475 13.53 8.9475 13.2L2.9075 9.9ZM8.9475 0.24L0.5175 4.84C-0.1725 5.22 -0.1725 6.22 0.5175 6.6L8.9475 11.2C9.5475 11.53 10.2675 11.53 10.8675 11.2L18.9075 6.81L18.9075 12.72C18.9075 13.27 19.3575 13.72 19.9075 13.72C20.4575 13.72 20.9075 13.27 20.9075 12.72L20.9075 6.31C20.9075 5.94 20.7075 5.61 20.3875 5.43L10.8675 0.24C10.2675 -0.08 9.5475 -0.08 8.9475 0.24Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.44%, 13.65%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        School: {
          paths: [
            {
              d: "M4 10.18L4 14.18L11 18L18 14.18L18 10.18L11 14L4 10.18ZM11 0L0 6L11 12L20 7.09L20 14L22 14L22 6L11 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        School: {
          paths: [
            {
              d: "M1.82 6.99L1.82 10.71L6.82 13.44L11.82 10.71L11.82 6.99L6.82 9.72L1.82 6.99ZM0 3.72L6.82 7.44L13.64 3.72L6.82 0L0 3.72Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(21.58%, 22%)" },
            },
            {
              d: "M11 0L0 6L4 8.18L4 14.18L11 18L18 14.18L18 8.18L20 7.09L20 14L22 14L22 6L11 0ZM16 12.99L11 15.72L6 12.99L6 9.27L11 12L16 9.27L16 12.99ZM11 9.72L4.18 6L11 2.28L17.82 6L11 9.72Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 12.5%)" },
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
          d: "M11 0L0 6L4 8.18L4 14.18L11 18L18 14.18L18 8.18L20 7.09L20 14L22 14L22 6L11 0ZM17.82 6L11 9.72L4.18 6L11 2.28L17.82 6ZM16 12.99L11 15.72L6 12.99L6 9.27L11 12L16 9.27L16 12.99Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "School")}
      {...rest}
    ></Icon>
  );
}
