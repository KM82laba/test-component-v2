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
export default function Recycling(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Recycling: {} }, variantValues: { style: "Filled" } },
    { overrides: { Recycling: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Recycling: {
          paths: [
            {
              d: "M4.40983 5.41C4.17983 5.27 4.09983 4.96 4.23983 4.73L5.40983 2.78L6.43983 1.07C6.82983 0.42 7.76983 0.42 8.15983 1.07L9.63983 3.53L8.40983 5.59L7.68983 6.79C7.52983 7.02 7.21983 7.1 6.97983 6.96L4.40983 5.41ZM19.9298 10.97L18.5898 8.73C18.4498 8.5 18.1498 8.42 17.9098 8.55L15.3098 10.05C15.0698 10.19 14.9898 10.5 15.1298 10.74L17.0798 14L18.1698 14C18.7798 14 19.3698 13.74 19.7598 13.27C20.0598 12.9 20.2098 12.45 20.2098 12C20.2098 11.64 20.1098 11.29 19.9298 10.97ZM14.2098 19L15.7098 19C16.4698 19 17.1598 18.57 17.4998 17.89L18.9498 15L14.2098 15L14.2098 14.21C14.2098 13.76 13.6698 13.54 13.3598 13.86L10.5698 16.65C10.3698 16.85 10.3698 17.16 10.5698 17.36L13.3598 20.15C13.6698 20.46 14.2098 20.24 14.2098 19.8L14.2098 19ZM7.70983 15L3.90983 15L3.06983 16.41C2.76983 16.91 2.74983 17.53 3.00983 18.06C3.28983 18.63 3.87983 19 4.52983 19L7.70983 19C7.98983 19 8.20983 18.78 8.20983 18.5L8.20983 15.5C8.20983 15.22 7.98983 15 7.70983 15ZM4.32983 12.35L5.02983 12.77C5.40983 13 5.87983 12.65 5.76983 12.22L4.80983 8.38C4.74983 8.12 4.47983 7.95 4.20983 8.02L0.379827 8.98C-0.050173 9.09 -0.140173 9.66 0.239827 9.89L0.899827 10.29L0.489827 10.98C0.139827 11.57 0.109827 12.29 0.419827 12.9L2.04983 16.16L4.32983 12.35ZM15.2298 3.14L13.9298 0.97C13.5598 0.37 12.9098 0 12.2098 0L8.67983 0L11.7998 5.2L11.1098 5.61C10.7298 5.84 10.8098 6.42 11.2498 6.52L15.0798 7.48C15.3498 7.55 15.6198 7.38 15.6898 7.12L16.6498 3.29C16.7598 2.86 16.2898 2.51 15.9098 2.74L15.2298 3.14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(7.9%, 7.72%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Recycling: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Recycling: {
          paths: [
            {
              d: "M4.77 5.15L6.2 2.78L7.23 1.07C7.62 0.42 8.56 0.42 8.95 1.07L10.43 3.53L9.2 5.59L8.2 7.21L4.77 5.15ZM20.72 10.97L19.12 8.31L15.66 10.31L17.87 14L19 14C19.76 14 20.45 13.57 20.79 12.89C20.93 12.61 21 12.31 21 12C21 11.64 20.9 11.29 20.72 10.97ZM15 19L16.5 19C17.26 19 17.95 18.57 18.29 17.89L19.74 15L15 15L15 13L11 17L15 21L15 19ZM9 15L4.7 15L3.86 16.41C3.56 16.91 3.54 17.53 3.8 18.06C4.08 18.63 4.67 19 5.32 19L9 19L9 15ZM5.12 12.35L6.85 13.39L5.48 7.9L0 9.27L1.7 10.29L1.29 10.98C0.94 11.57 0.91 12.29 1.22 12.9L2.85 16.16L5.12 12.35ZM16.02 3.14L14.72 0.97C14.35 0.37 13.7 0 13 0L9.47 0L12.59 5.2L10.87 6.23L16.36 7.6L17.73 2.11L16.02 3.14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.33%)" },
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
          d: "M4.77 5.15L7.23 1.07C7.62 0.42 8.56 0.42 8.95 1.07L10.43 3.53L9.2 5.59L8.2 7.21L4.77 5.15ZM20.72 10.97L19.12 8.31L15.66 10.31L17.87 14L19 14C19.76 14 20.45 13.57 20.79 12.89C20.93 12.61 21 12.31 21 12C21 11.64 20.9 11.29 20.72 10.97ZM15 19L16.5 19C17.26 19 17.95 18.57 18.29 17.89L19.74 15L15 15L15 13L11 17L15 21L15 19ZM9 15L4.7 15L3.86 16.41C3.56 16.91 3.54 17.53 3.8 18.06C4.08 18.63 4.67 19 5.32 19L9 19L9 15ZM5.12 12.35L6.85 13.39L5.48 7.9L0 9.27L1.7 10.29L1.29 10.98C0.94 11.57 0.91 12.29 1.22 12.9L2.85 16.16L5.12 12.35ZM16.02 3.14L14.72 0.97C14.35 0.37 13.7 0 13 0L9.47 0L12.59 5.2L10.87 6.23L16.36 7.6L17.73 2.11L16.02 3.14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(6.25%, 6.25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Recycling")}
      {...rest}
    ></Icon>
  );
}
