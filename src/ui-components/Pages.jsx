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
export default function Pages(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Pages: {
          paths: [
            {
              d: "M0 2L0 8L5 8L4 4L8 5L8 0L2 0C0.9 0 0 0.9 0 2ZM5 10L0 10L0 16C0 17.1 0.9 18 2 18L8 18L8 13L4 14L5 10ZM14 14L10 13L10 18L16 18C17.1 18 18 17.1 18 16L18 10L13 10L14 14ZM16 0L10 0L10 5L14 4L13 8L18 8L18 2C18 0.9 17.1 0 16 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Pages: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Pages: {
          paths: [
            {
              d: "M0 2L0 8L5 8L4.4 5.62C4.22 4.88 4.88 4.22 5.62 4.4L8 5L8 0L2 0C0.9 0 0 0.9 0 2ZM5 10L0 10L0 16C0 17.1 0.9 18 2 18L8 18L8 13L5.62 13.6C4.89 13.78 4.22 13.12 4.41 12.39L5 10ZM12.38 13.6L10 13L10 18L16 18C17.1 18 18 17.1 18 16L18 10L13 10L13.6 12.38C13.78 13.12 13.12 13.78 12.38 13.6ZM16 0L10 0L10 5L12.38 4.4C13.11 4.22 13.78 4.88 13.59 5.61L13 8L18 8L18 2C18 0.9 17.1 0 16 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Pages: {
          paths: [
            {
              d: "M0 0L0 8L5 8L4 4L8 5L8 0L0 0ZM5 10L0 10L0 18L8 18L8 13L4 14L5 10ZM14 14L10 13L10 18L18 18L18 10L13 10L14 14ZM18 0L10 0L10 5L14 4L13 8L18 8L18 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Pages: {
          paths: [
            {
              d: "M2 2L6 3L6 0L0 0L0 6L3 6L2 2ZM3 8L0 8L0 14L6 14L6 11L2 12L3 8ZM12 12L8 11L8 14L14 14L14 8L11 8L12 12ZM8 3L12 2L11 6L14 6L14 0L8 0L8 3Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM2 2L8 2L8 5L4 4L5 8L2 8L2 2ZM8 16L2 16L2 10L5 10L4 14L8 13L8 16ZM6.37 11.63L7.28 9L6.37 6.37L9 7.28L11.63 6.37L10.72 9L11.63 11.63L9 10.72L6.37 11.63ZM16 16L10 16L10 13L14 14L13 10L16 10L16 16ZM16 8L13 8L14 4L10 5L10 2L16 2L16 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
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
          d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM10 2L16 2L16 8L13 8L14 4L10 5L10 2ZM2 2L8 2L8 5L4 4L5 8L2 8L2 2ZM8 16L2 16L2 10L5 10L4 14L8 13L8 16ZM16 16L10 16L10 13L14 14L13 10L16 10L16 16ZM11.63 11.63L9 10.72L6.37 11.63L7.28 9L6.37 6.37L9 7.28L11.63 6.37L10.72 9L11.63 11.63Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Pages")}
      {...rest}
    ></Icon>
  );
}
