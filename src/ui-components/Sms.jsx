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
export default function Sms(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Sms: {
          paths: [
            {
              d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM7 9L5 9L5 7L7 7L7 9ZM11 9L9 9L9 7L11 7L11 9ZM15 9L13 9L13 7L15 7L15 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Sms: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Sms: {
          paths: [
            {
              d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM7 9L5 9L5 7L7 7L7 9ZM11 9L9 9L9 7L11 7L11 9ZM15 9L13 9L13 7L15 7L15 9Z",
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
        Sms: {
          paths: [
            {
              d: "M20 0L0 0L0 20L4 16L20 16L20 0ZM7 9L5 9L5 7L7 7L7 9ZM11 9L9 9L9 7L11 7L11 9ZM15 9L13 9L13 7L15 7L15 9Z",
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
        Sms: {
          paths: [
            {
              d: "M0 13.17L1.17 12L16 12L16 0L0 0L0 13.17ZM11 5L13 5L13 7L11 7L11 5ZM7 5L9 5L9 7L7 7L7 5ZM3 5L5 5L5 7L3 7L3 5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
            {
              d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L3.17 14L2 15.17L2 2L18 2L18 14ZM5 7L7 7L7 9L5 9L5 7ZM13 7L15 7L15 9L13 9L13 7ZM9 7L11 7L11 9L9 9L9 7Z",
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
          d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L3.17 14L2 15.17L2 2L18 2L18 14ZM5 7L7 7L7 9L5 9L5 7ZM13 7L15 7L15 9L13 9L13 7ZM9 7L11 7L11 9L9 9L9 7Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Sms")}
      {...rest}
    ></Icon>
  );
}
