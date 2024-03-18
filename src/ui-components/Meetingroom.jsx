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
export default function Meetingroom(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Meetingroom: {
          paths: [
            {
              d: "M11 3L11 18L0 18L0 16L2 16L2 0L11 0L11 1L16 1L16 16L18 16L18 18L14 18L14 3L11 3ZM7 8L7 10L9 10L9 8L7 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Meetingroom: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Meetingroom: {
          paths: [
            {
              d: "M17 16L16 16L16 2C16 1.45 15.55 1 15 1L11 1C11 0.45 10.55 0 10 0L3 0C2.45 0 2 0.45 2 1L2 16L1 16C0.45 16 0 16.45 0 17C0 17.55 0.45 18 1 18L10 18C10.55 18 11 17.55 11 17L11 3L14 3L14 17C14 17.55 14.45 18 15 18L17 18C17.55 18 18 17.55 18 17C18 16.45 17.55 16 17 16ZM8 10C7.45 10 7 9.55 7 9C7 8.45 7.45 8 8 8C8.55 8 9 8.45 9 9C9 9.55 8.55 10 8 10Z",
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
        Meetingroom: {
          paths: [
            {
              d: "M11 3L11 18L0 18L0 16L2 16L2 0L11 0L11 1L16 1L16 16L18 16L18 18L14 18L14 3L11 3ZM7 8L7 10L9 10L9 8L7 8Z",
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
        Meetingroom: {
          paths: [
            {
              d: "M0 14L6 14L6 0L0 0L0 14ZM3 6L5 6L5 8L3 8L3 6Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 20.83%)" },
            },
            {
              d: "M16 16L16 1L12 1L12 0L2 0L2 16L0 16L0 18L12 18L12 3L14 3L14 18L18 18L18 16L16 16ZM10 16L4 16L4 2L10 2L10 16ZM7 8L9 8L9 10L7 10L7 8Z",
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
          d: "M16 16L16 1L12 1L12 0L2 0L2 16L0 16L0 18L12 18L12 3L14 3L14 18L18 18L18 16L16 16ZM10 16L4 16L4 2L10 2L10 16ZM7 8L9 8L9 10L7 10L7 8Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Meetingroom")}
      {...rest}
    ></Icon>
  );
}
