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
export default function Poll(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Poll: {
          paths: [
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM6 14L4 14L4 7L6 7L6 14ZM10 14L8 14L8 4L10 4L10 14ZM14 14L12 14L12 10L14 10L14 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Poll: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Poll: {
          paths: [
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM5 14C4.45 14 4 13.55 4 13L4 8C4 7.45 4.45 7 5 7C5.55 7 6 7.45 6 8L6 13C6 13.55 5.55 14 5 14ZM9 14C8.45 14 8 13.55 8 13L8 5C8 4.45 8.45 4 9 4C9.55 4 10 4.45 10 5L10 13C10 13.55 9.55 14 9 14ZM13 14C12.45 14 12 13.55 12 13L12 11C12 10.45 12.45 10 13 10C13.55 10 14 10.45 14 11L14 13C14 13.55 13.55 14 13 14Z",
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
        Poll: {
          paths: [
            {
              d: "M0 0L0 18L18 18L18 0L0 0ZM6 14L4 14L4 7L6 7L6 14ZM10 14L8 14L8 4L10 4L10 14ZM14 14L12 14L12 10L14 10L14 14Z",
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
        Poll: {
          paths: [
            {
              d: "M0 14L14 14L14 0L0 0L0 14ZM10 8L12 8L12 12L10 12L10 8ZM6 2L8 2L8 12L6 12L6 2ZM2 5L4 5L4 12L2 12L2 5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM16 16L2 16L2 2L16 2L16 16ZM4 7L6 7L6 14L4 14L4 7ZM8 4L10 4L10 14L8 14L8 4ZM12 10L14 10L14 14L12 14L12 10Z",
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
          d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM16 16L2 16L2 2L16 2L16 16ZM4 7L6 7L6 14L4 14L4 7ZM8 4L10 4L10 14L8 14L8 4ZM12 10L14 10L14 14L12 14L12 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Poll")}
      {...rest}
    ></Icon>
  );
}
