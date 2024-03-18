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
export default function Foodbank(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Foodbank: {
          paths: [
            {
              d: "M8 0L0 6L0 18L16 18L16 6L8 0ZM8.5 9.5C8.5 10.33 7.83 11 7 11L7 15L6 15L6 11C5.17 11 4.5 10.33 4.5 9.5L4.5 6.5L5.5 6.5L5.5 9.5L6 9.5L6 6.5L7 6.5L7 9.5L7.5 9.5L7.5 6.5L8.5 6.5L8.5 9.5ZM11 15L10 15L10 11.5L9 11.5L9 8.5C9 7.4 9.9 6.5 11 6.5L11 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Foodbank: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Foodbank: {
          paths: [
            {
              d: "M6.8 0.3975L0.8 4.8975C0.3 5.2775 0 5.8675 0 6.4975L0 15.4975C0 16.5975 0.9 17.4975 2 17.4975L14 17.4975C15.1 17.4975 16 16.5975 16 15.4975L16 6.4975C16 5.8675 15.7 5.2775 15.2 4.8975L9.2 0.3975C8.49 -0.1325 7.51 -0.1325 6.8 0.3975ZM8.5 8.9975C8.5 9.8275 7.83 10.4975 7 10.4975L7 13.9975C7 14.2775 6.78 14.4975 6.5 14.4975C6.22 14.4975 6 14.2775 6 13.9975L6 10.4975C5.17 10.4975 4.5 9.8275 4.5 8.9975L4.5 6.4975C4.5 6.2175 4.72 5.9975 5 5.9975C5.28 5.9975 5.5 6.2175 5.5 6.4975L5.5 8.9975L6 8.9975L6 6.4975C6 6.2175 6.22 5.9975 6.5 5.9975C6.78 5.9975 7 6.2175 7 6.4975L7 8.9975L7.5 8.9975L7.5 6.4975C7.5 6.2175 7.72 5.9975 8 5.9975C8.28 5.9975 8.5 6.2175 8.5 6.4975L8.5 8.9975ZM10.5 14.4975C10.22 14.4975 10 14.2775 10 13.9975L10 10.9975L9.5 10.9975C9.22 10.9975 9 10.7775 9 10.4975L9 7.9975C9 7.1175 9.57 6.3675 10.36 6.1075C10.67 5.9975 11 6.2475 11 6.5875L11 13.9975C11 14.2775 10.78 14.4975 10.5 14.4975Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 13.55%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Foodbank: {
          paths: [
            {
              d: "M8 0L0 6L0 18L16 18L16 6L8 0ZM8.5 9.5C8.5 10.33 7.83 11 7 11L7 15L6 15L6 11C5.17 11 4.5 10.33 4.5 9.5L4.5 6.5L5.5 6.5L5.5 9.5L6 9.5L6 6.5L7 6.5L7 9.5L7.5 9.5L7.5 6.5L8.5 6.5L8.5 9.5ZM11 15L10 15L10 11.5L9 11.5L9 8.5C9 7.4 9.9 6.5 11 6.5L11 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Foodbank: {
          paths: [
            {
              d: "M6 0L12 4.5L12 13.5L0 13.5L0 4.5L6 0ZM5.5 4L5.5 7L5 7L5 4L4 4L4 7L3.5 7L3.5 4L2.5 4L2.5 7C2.5 7.83 3.17 8.5 4 8.5L4 12.5L5 12.5L5 8.5C5.83 8.5 6.5 7.83 6.5 7L6.5 4L5.5 4ZM7 6L7 9L8 9L8 12.5L9 12.5L9 4C7.9 4 7 4.9 7 6Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 22.92%)" },
            },
            {
              d: "M8 2.5L14 7L14 16L2 16L2 7L8 2.5ZM8 0L0 6L0 18L16 18L16 6L8 0ZM7.5 6.5L7.5 9.5L7 9.5L7 6.5L6 6.5L6 9.5L5.5 9.5L5.5 6.5L4.5 6.5L4.5 9.5C4.5 10.33 5.17 11 6 11L6 15L7 15L7 11C7.83 11 8.5 10.33 8.5 9.5L8.5 6.5L7.5 6.5ZM9 8.5L9 11.5L10 11.5L10 15L11 15L11 6.5C9.9 6.5 9 7.4 9 8.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 12.5%)" },
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
          d: "M8 2.5L14 7L14 16L2 16L2 7L8 2.5ZM8 0L0 6L0 18L16 18L16 6L8 0ZM7.5 6.5L7.5 9.5L7 9.5L7 6.5L6 6.5L6 9.5L5.5 9.5L5.5 6.5L4.5 6.5L4.5 9.5C4.5 10.33 5.17 11 6 11L6 15L7 15L7 11C7.83 11 8.5 10.33 8.5 9.5L8.5 6.5L7.5 6.5ZM9 8.5L9 11.5L10 11.5L10 15L11 15L11 6.5C9.9 6.5 9 7.4 9 8.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Foodbank")}
      {...rest}
    ></Icon>
  );
}
