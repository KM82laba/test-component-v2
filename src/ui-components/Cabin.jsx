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
export default function Cabin(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Cabin: {} }, variantValues: { style: "Filled" } },
    { overrides: { Cabin: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Cabin: {
          paths: [
            {
              d: "M2.96259 2.55C3.48259 1.62 4.46259 1 5.59259 1C5.97259 1 6.31259 0.78 6.48259 0.47C6.63259 0.16 6.98259 0 7.32259 0C8.06259 0 8.58259 0.8 8.22259 1.45C7.70259 2.38 6.72259 3 5.59259 3C5.21259 3 4.87259 3.22 4.70259 3.53C4.55259 3.84 4.20259 4 3.86259 4C3.12259 4 2.60259 3.2 2.96259 2.55ZM20.9826 11.19C20.6426 11.63 20.0226 11.71 19.5826 11.38L18.5926 10.62L18.5926 19C18.5926 19.55 18.1426 20 17.5926 20L3.59259 20C3.04259 20 2.59259 19.55 2.59259 19L2.59259 10.62L1.60259 11.38C1.16259 11.72 0.532592 11.63 0.202592 11.19C-0.127408 10.75 -0.0474076 10.12 0.392592 9.79L2.59259 8.11L2.59259 6C2.59259 5.45 3.04259 5 3.59259 5C4.14259 5 4.59259 5.45 4.59259 6L4.59259 6.58L9.98259 2.46C10.3426 2.19 10.8426 2.19 11.1926 2.46L20.7926 9.79C21.2326 10.13 21.3226 10.76 20.9826 11.19ZM8.65259 6L12.5426 6L10.5926 4.52L8.65259 6ZM4.59259 9.1L4.59259 10L16.5926 10L16.5926 9.1L15.1526 8L6.03259 8L4.59259 9.1ZM4.59259 12L4.59259 14L16.5926 14L16.5926 12L4.59259 12ZM16.5926 18L16.5926 16L4.59259 16L4.59259 18L16.5926 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(5.86%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Cabin: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Cabin: {
          paths: [
            {
              d: "M7.94 1.48L4.05 1.48L6 0L7.94 1.48ZM1.44 3.48L10.56 3.48L12 4.58L12 5.48L0 5.48L0 4.58L1.44 3.48ZM12 7.48L12 9.48L0 9.48L0 7.48L12 7.48ZM0 13.48L0 11.48L12 11.48L12 13.48L0 13.48Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 23%)" },
            },
            {
              d: "M9 0C9 1.66 7.66 3 6 3C5.45 3 5 3.45 5 4L3 4C3 2.34 4.34 1 6 1C6.55 1 7 0.55 7 0L9 0ZM11 2L5 6.58L5 5L3 5L3 8.11L0 10.4L1.21 11.99L3 10.62L3 20L19 20L19 10.62L20.79 11.98L22 10.4L11 2ZM12.94 6L9.05 6L11 4.52L12.94 6ZM6.44 8L15.56 8L17 9.1L17 10L5 10L5 9.1L6.44 8ZM17 12L17 14L5 14L5 12L17 12ZM5 18L5 16L17 16L17 18L5 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.17%)" },
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
          d: "M9 0C9 1.66 7.66 3 6 3C5.45 3 5 3.45 5 4L3 4C3 2.34 4.34 1 6 1C6.55 1 7 0.55 7 0L9 0ZM11 2L5 6.58L5 5L3 5L3 8.11L0 10.4L1.21 11.99L3 10.62L3 20L19 20L19 10.62L20.79 11.98L22 10.4L11 2ZM12.94 6L9.05 6L11 4.52L12.94 6ZM6.44 8L15.56 8L17 9.1L17 10L5 10L5 9.1L6.44 8ZM17 12L17 14L5 14L5 12L17 12ZM5 18L5 16L17 16L17 18L5 18Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Cabin")}
      {...rest}
    ></Icon>
  );
}
