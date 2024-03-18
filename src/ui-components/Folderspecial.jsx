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
export default function Folderspecial(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Folderspecial: {
          paths: [
            {
              d: "M18 2L10 2L8 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 4C20 2.9 19.1 2 18 2ZM15.94 13L13 11.28L10.06 13L10.84 9.67L8.25 7.43L11.66 7.14L13 4L14.34 7.14L17.75 7.43L15.16 9.67L15.94 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Folderspecial: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Folderspecial: {
          paths: [
            {
              d: "M18 2L10 2L8.59 0.59C8.21 0.21 7.7 0 7.17 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 4C20 2.9 19.1 2 18 2ZM14.94 12.41L13 11.28L11.06 12.41C10.68 12.63 10.22 12.29 10.32 11.86L10.83 9.66L9.14 8.2C8.81 7.91 8.98 7.36 9.42 7.32L11.65 7.13L12.53 5.07C12.7 4.67 13.28 4.67 13.45 5.07L14.33 7.13L16.56 7.32C17 7.36 17.18 7.91 16.84 8.2L15.15 9.66L15.66 11.86C15.77 12.29 15.31 12.63 14.94 12.41Z",
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
        Folderspecial: {
          paths: [
            {
              d: "M20 2L10 2L8 0L0 0L0 16L20 16L20 2ZM15.94 13L13 11.28L10.06 13L10.84 9.67L8.25 7.43L11.66 7.14L13 4L14.34 7.14L17.75 7.43L15.16 9.67L15.94 13Z",
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
        Folderspecial: {
          paths: [
            {
              d: "M7.17 2L5.17 0L0 0L0 12L16 12L16 2L7.17 2ZM11 3L12.19 5.79L15.22 6.05L12.92 8.04L13.61 11L11 9.47L8.39 11L9.08 8.04L6.78 6.05L9.81 5.79L11 3Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 25%)" },
            },
            {
              d: "M18 2L10 2L8 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 4C20 2.9 19.1 2 18 2ZM18 14L2 14L2 2L7.17 2L9.17 4L18 4L18 14ZM11.08 10.04L10.39 13L13 11.47L15.61 13L14.92 10.04L17.22 8.05L14.19 7.79L13 5L11.81 7.79L8.78 8.05L11.08 10.04Z",
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
          d: "M18 2L10 2L8 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 4C20 2.9 19.1 2 18 2ZM18 14L2 14L2 2L7.17 2L9.17 4L18 4L18 14ZM11.08 10.04L10.39 13L13 11.47L15.61 13L14.92 10.04L17.22 8.05L14.19 7.79L13 5L11.81 7.79L8.78 8.05L11.08 10.04Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Folderspecial")}
      {...rest}
    ></Icon>
  );
}
