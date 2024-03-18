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
export default function Smsfailed(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Smsfailed: {
          paths: [
            {
              d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM11 12L9 12L9 10L11 10L11 12ZM11 8L9 8L9 4L11 4L11 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Smsfailed: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Smsfailed: {
          paths: [
            {
              d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM11 12L9 12L9 10L11 10L11 12ZM10 8C9.45 8 9 7.55 9 7L9 5C9 4.45 9.45 4 10 4C10.55 4 11 4.45 11 5L11 7C11 7.55 10.55 8 10 8Z",
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
        Smsfailed: {
          paths: [
            {
              d: "M20 0L0 0L0 20L4 16L20 16L20 0ZM11 12L9 12L9 10L11 10L11 12ZM11 8L9 8L9 4L11 4L11 8Z",
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
        Smsfailed: {
          paths: [
            {
              d: "M0 13.17L1.17 12L16 12L16 0L0 0L0 13.17ZM7 2L9 2L9 6L7 6L7 2ZM7 8L9 8L9 10L7 10L7 8Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
            {
              d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L3.17 14L2 15.17L2 2L18 2L18 14ZM9 10L11 10L11 12L9 12L9 10ZM9 4L11 4L11 8L9 8L9 4Z",
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
          d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L3.17 14L2 15.17L2 2L18 2L18 14ZM9 10L11 10L11 12L9 12L9 10ZM9 4L11 4L11 8L9 8L9 4Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Smsfailed")}
      {...rest}
    ></Icon>
  );
}
