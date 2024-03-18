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
export default function Noencryption(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Noencryption: {
          paths: [
            {
              d: "M18 20.78L1.22 4L0 5.22L2.04 7.26C1.42 7.6 1 8.25 1 9L1 19C1 20.1 1.9 21 3 21L15 21C15.23 21 15.45 20.95 15.66 20.88L16.78 22L18 20.78ZM5.9 5C5.9 3.29 7.29 1.9 9 1.9C10.71 1.9 12.1 3.29 12.1 5L12.1 7L6.66 7L17 17.34L17 9C17 7.9 16.1 7 15 7L14 7L14 5C14 2.24 11.76 0 9 0C6.44 0 4.36 1.93 4.06 4.4L5.9 6.24L5.9 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Noencryption: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Noencryption: {
          paths: [
            {
              d: "M5.4825 5C5.4825 3.29 6.8725 1.9 8.5825 1.9C10.2925 1.9 11.6825 3.29 11.6825 5L11.6825 7L7.0225 7L16.5825 16.56L16.5825 9C16.5825 7.9 15.6825 7 14.5825 7L13.5825 7L13.5825 5C13.5825 2.24 11.3425 0 8.5825 0C6.2625 0 4.3225 1.59 3.7625 3.74L5.4825 5.46L5.4825 5ZM1.7025 4.51C1.3125 4.12 0.6825 4.12 0.2925 4.51C-0.0975 4.9 -0.0975 5.53 0.2925 5.92L1.6225 7.25C1.0025 7.6 0.5825 8.25 0.5825 9L0.5825 19C0.5825 20.1 1.4825 21 2.5825 21L15.3625 21L15.6525 21.29C16.0425 21.68 16.6725 21.68 17.0625 21.29C17.4525 20.9 17.4525 20.27 17.0625 19.88L1.7025 4.51Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(13.84%, 5.04%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Noencryption: {
          paths: [
            {
              d: "M5.9 4.99491C5.9 3.28491 7.29 1.89491 9 1.89491C10.71 1.89491 12.1 3.28491 12.1 4.99491L12.1 6.99491L7.44 6.99491L17 16.5549L17 6.99491L14 6.99491L14 5.21491C14 2.60491 12.09 0.274913 9.49 0.024913C6.96 -0.225087 4.77 1.43491 4.17 3.72491L5.9 5.45491L5.9 4.99491ZM1.41 3.80491L0 5.21491L1.78 6.99491L1 6.99491L1 20.9949L15.78 20.9949L16.78 21.9949L18.19 20.5849L1.41 3.80491Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.1%, 4.18%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Noencryption: {
          paths: [
            {
              d: "M0 10L10.78 10L0.78 0L0 0L0 10ZM6.44 0L12 5.56L12 0L6.44 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 41.67%)" },
            },
            {
              d: "M5.9 5C5.9 3.29 7.29 1.9 9 1.9C10.71 1.9 12.1 3.29 12.1 5L12.1 7L7.44 7L9.44 9L15 9L15 14.56L17 16.56L17 9C17 7.9 16.1 7 15 7L14 7L14 5C14 2.24 11.76 0 9 0C6.68 0 4.74 1.59 4.18 3.74L5.9 5.46L5.9 5ZM1.41 3.81L0 5.22L2.04 7.26C1.42 7.6 1 8.25 1 9L1 19C1 20.1 1.9 21 3 21L15.78 21L16.78 22L18.19 20.59L1.41 3.81ZM3 19L3 9L3.78 9L13.78 19L3 19Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 4.17%)" },
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
          d: "M5.9 5C5.9 3.29 7.29 1.9 9 1.9C10.71 1.9 12.1 3.29 12.1 5L12.1 7L7.44 7L9.44 9L15 9L15 14.56L17 16.56L17 9C17 7.9 16.1 7 15 7L14 7L14 5C14 2.24 11.76 0 9 0C6.68 0 4.74 1.59 4.18 3.74L5.9 5.46L5.9 5ZM1.41 3.81L0 5.22L2.04 7.26C1.42 7.6 1 8.25 1 9L1 19C1 20.1 1.9 21 3 21L15.78 21L16.78 22L18.19 20.59L1.41 3.81ZM3 19L3 9L3.78 9L13.78 19L3 19Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.1%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Noencryption")}
      {...rest}
    ></Icon>
  );
}
