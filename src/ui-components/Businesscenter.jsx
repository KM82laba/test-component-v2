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
export default function Businesscenter(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Businesscenter: {
          paths: [
            {
              d: "M8 13L8 12L1.01 12L1 16C1 17.11 1.89 18 3 18L17 18C18.11 18 19 17.11 19 16L19 12L12 12L12 13L8 13ZM18 4L13.99 4L13.99 2L11.99 0L7.99 0L5.99 2L5.99 4L2 4C0.9 4 0 4.9 0 6L0 9C0 10.11 0.89 11 2 11L8 11L8 9L12 9L12 11L18 11C19.1 11 20 10.1 20 9L20 6C20 4.9 19.1 4 18 4ZM12 4L8 4L8 2L12 2L12 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Businesscenter: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Businesscenter: {
          paths: [
            {
              d: "M11 13L9 13C8.45 13 8 12.55 8 12L1.01 12L1.01 16C1.01 17.1 1.91 18 3.01 18L17 18C18.1 18 19 17.1 19 16L19 12L12 12C12 12.55 11.55 13 11 13ZM18 4L14 4C14 1.79 12.21 0 10 0C7.79 0 6 1.79 6 4L2 4C0.9 4 0 4.9 0 6L0 9C0 10.11 0.89 11 2 11L8 11L8 10C8 9.45 8.45 9 9 9L11 9C11.55 9 12 9.45 12 10L12 11L18 11C19.1 11 20 10.1 20 9L20 6C20 4.9 19.1 4 18 4ZM8 4C8 2.9 8.9 2 10 2C11.1 2 12 2.9 12 4L7.99 4L8 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Businesscenter: {
          paths: [
            {
              d: "M8 13L8 12L1.01 12L1.01 18L19 18L19 12L12 12L12 13L8 13ZM20 4L14 4L14 2L12 0L8 0L6 2L6 4L0 4L0 11L8 11L8 9L12 9L12 11L20 11L20 4ZM12 4L8 4L8 2L12 2L12 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Businesscenter: {
          paths: [
            {
              d: "M11 8L5 8L5 7L1 7L1 10L15 10L15 7L11 7L11 8ZM0 5L5 5L5 2L11 2L11 5L16 5L16 0L0 0L0 5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 37.5%)" },
            },
            {
              d: "M18 4L14 4L14 2L12 0L8 0L6 2L6 4L2 4C0.9 4 0 4.9 0 6L0 11C0 11.75 0.4 12.38 1 12.73L1 16C1 17.11 1.89 18 3 18L17 18C18.11 18 19 17.11 19 16L19 12.72C19.59 12.37 20 11.73 20 11L20 6C20 4.9 19.1 4 18 4ZM8 2L12 2L12 4L8 4L8 2ZM17 16L3 16L3 13L7 13L7 14L13 14L13 13L17 13L17 16ZM9 12L9 10L11 10L11 12L9 12ZM18 11L13 11L13 8L7 8L7 11L2 11L2 6L18 6L18 11Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
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
          d: "M18 4L14 4L14 2L12 0L8 0L6 2L6 4L2 4C0.9 4 0 4.9 0 6L0 11C0 11.75 0.4 12.38 1 12.73L1 16C1 17.11 1.89 18 3 18L17 18C18.11 18 19 17.11 19 16L19 12.72C19.59 12.37 20 11.73 20 11L20 6C20 4.9 19.1 4 18 4ZM8 2L12 2L12 4L8 4L8 2ZM2 6L18 6L18 11L13 11L13 8L7 8L7 11L2 11L2 6ZM11 12L9 12L9 10L11 10L11 12ZM17 16L3 16L3 13L7 13L7 14L13 14L13 13L17 13L17 16Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Businesscenter")}
      {...rest}
    ></Icon>
  );
}
