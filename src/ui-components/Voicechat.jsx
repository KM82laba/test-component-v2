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
export default function Voicechat(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Voicechat: {
          paths: [
            {
              d: "M18 0L2 0C0.9 0 0 0.9 0 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L4 14L2 16L2 2L18 2L18 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
            {
              d: "M10.75 3L9.25 3L9.25 13L10.75 13L10.75 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
            {
              d: "M8 5L6.5 5L6.5 11L8 11L8 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
            {
              d: "M5.5 7L4 7L4 9L5.5 9L5.5 7Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
            {
              d: "M13.5 5L12 5L12 11L13.5 11L13.5 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
            {
              d: "M16 7L14.5 7L14.5 9L16 9L16 7Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Voicechat: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Voicechat: {
          paths: [
            {
              d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM14.38 10.7L12 8.8L12 11C12 11.55 11.55 12 11 12L5 12C4.45 12 4 11.55 4 11L4 5C4 4.45 4.45 4 5 4L11 4C11.55 4 12 4.45 12 5L12 7.2L14.38 5.3C15.03 4.78 16 5.24 16 6.08L16 9.92C16 10.76 15.03 11.22 14.38 10.7Z",
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
        Voicechat: {
          paths: [
            {
              d: "M20 0L0.00999999 0L0 20L4 16L20 16L20 0ZM16 12L12 8.8L12 12L4 12L4 4L12 4L12 7.2L16 4L16 12Z",
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
        Voicechat: {
          paths: [
            {
              d: "M0 13.17L1.17 12L16 12L16 0L0 0L0 13.17ZM3 3L10 3L10 5.4L13 3L13 9L10 6.6L10 9L3 9L3 3Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
            {
              d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L3.17 14L2 15.17L2 2L18 2L18 14ZM12 8.6L15 11L15 5L12 7.4L12 5L5 5L5 11L12 11L12 8.6Z",
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
          d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 14L3.17 14L2 15.17L2 2L18 2L18 14ZM12 8.6L15 11L15 5L12 7.4L12 5L5 5L5 11L12 11L12 8.6Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Voicechat")}
      {...rest}
    ></Icon>
  );
}
