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
export default function Cottage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Cottage: {
          paths: [
            {
              d: "M11 2L5 6.58L5 5L3 5L3 8.11L0 10.4L1.21 11.99L3 10.62L3 20L10 20L10 14L12 14L12 20L19 20L19 10.62L20.79 11.98L22 10.4L11 2ZM9 0C9 1.66 7.66 3 6 3C5.45 3 5 3.45 5 4L3 4C3 2.34 4.34 1 6 1C6.55 1 7 0.55 7 0L9 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Cottage: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Cottage: {
          paths: [
            {
              d: "M20.9926 11.19C21.3326 10.75 21.2426 10.12 20.8026 9.79L11.2026 2.46C10.8426 2.19 10.3426 2.19 9.99259 2.46L4.60259 6.58L4.60259 6C4.60259 5.45 4.15259 5 3.60259 5C3.05259 5 2.60259 5.45 2.60259 6L2.60259 8.11L0.392592 9.79C-0.0474076 10.12 -0.127408 10.75 0.202592 11.19C0.542592 11.63 1.16259 11.71 1.60259 11.38L2.60259 10.62L2.60259 19C2.60259 19.55 3.05259 20 3.60259 20L9.60259 20L9.60259 15C9.60259 14.45 10.0526 14 10.6026 14C11.1526 14 11.6026 14.45 11.6026 15L11.6026 20L17.6026 20C18.1526 20 18.6026 19.55 18.6026 19L18.6026 10.62L19.5926 11.38C20.0326 11.72 20.6626 11.63 20.9926 11.19ZM3.87259 4C3.13259 4 2.61259 3.2 2.97259 2.55C3.49259 1.62 4.47259 1 5.60259 1C5.98259 1 6.32259 0.78 6.49259 0.47C6.64259 0.16 6.99259 0 7.33259 0C8.07259 0 8.59259 0.8 8.23259 1.45C7.71259 2.38 6.73259 3 5.60259 3C5.22259 3 4.88259 3.22 4.71259 3.53C4.56259 3.84 4.21259 4 3.87259 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(5.83%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Cottage: {
          paths: [
            {
              d: "M11 2L5 6.58L5 5L3 5L3 8.11L0 10.4L1.21 11.99L3 10.62L3 20L10 20L10 14L12 14L12 20L19 20L19 10.62L20.79 11.98L22 10.4L11 2ZM9 0C9 1.66 7.66 3 6 3C5.45 3 5 3.45 5 4L3 4C3 2.34 4.34 1 6 1C6.55 1 7 0.55 7 0L9 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Cottage: {
          paths: [
            {
              d: "M12 13.48L7 13.48L7 9.48L5 9.48L5 13.48L0 13.48L0 4.58L6 0L12 4.58L12 13.48Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 23%)" },
            },
            {
              d: "M11 2L5 6.58L5 5L3 5L3 8.11L0 10.4L1.21 11.99L3 10.62L3 20L19 20L19 10.62L20.79 11.98L22 10.4L11 2ZM17 18L12 18L12 14L10 14L10 18L5 18L5 9.1L11 4.52L17 9.1L17 18ZM9 0C9 1.66 7.66 3 6 3C5.45 3 5 3.45 5 4L3 4C3 2.34 4.34 1 6 1C6.55 1 7 0.55 7 0L9 0Z",
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
          d: "M11 2L5 6.58L5 5L3 5L3 8.11L0 10.4L1.21 11.99L3 10.62L3 20L19 20L19 10.62L20.79 11.98L22 10.4L11 2ZM17 18L12 18L12 14L10 14L10 18L5 18L5 9.1L11 4.52L17 9.1L17 18ZM9 0C9 1.66 7.66 3 6 3C5.45 3 5 3.45 5 4L3 4C3 2.34 4.34 1 6 1C6.55 1 7 0.55 7 0L9 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Cottage")}
      {...rest}
    ></Icon>
  );
}
