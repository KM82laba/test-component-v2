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
export default function Poweroff(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Poweroff: {
          paths: [
            {
              d: "M15.29 11.49L15.29 6C15.29 5 14.28 3.99 13.29 4L13.29 0L11.29 0L11.29 4L7.29 4L7.29 0L5.29 0L5.29 2.48L14.8 11.98L15.29 11.49ZM13.53 13.26L4.49 4.2L4.48 4.21L1.27 1L0 2.25L3.36 5.61C3.33 5.74 3.29 5.87 3.29 6L3.29 11.48L6.79 15L6.79 18L11.79 18L11.79 15L12.27 14.52L16.74 19L18 17.72L13.53 13.26Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 10.42%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Poweroff: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Poweroff: {
          paths: [
            {
              d: "M14.8725 10.66L14.8725 5.99C14.8725 4.99 13.8625 3.99 12.8725 4L12.8725 1C12.8725 0.45 12.4225 0 11.8725 0C11.3225 0 10.8725 0.45 10.8725 1L10.8725 4L6.9925 4L14.6225 11.63C14.7725 11.33 14.8725 11 14.8725 10.66ZM6.8725 1C6.8725 0.45 6.4225 0 5.8725 0C5.3225 0 4.8725 0.45 4.8725 1L4.8725 1.88L6.8725 3.88L6.8725 1ZM17.0225 16.86L1.7025 1.54C1.3125 1.15 0.6825 1.15 0.2925 1.54C-0.0975 1.93 -0.0975 2.56 0.2925 2.95L2.9225 5.58C2.8925 5.71 2.8725 5.85 2.8725 5.99L2.8725 10.65C2.8725 11.18 3.0825 11.69 3.4525 12.06L6.3725 15L6.3725 17C6.3725 17.55 6.8225 18 7.3725 18L10.3725 18C10.9225 18 11.3725 17.55 11.3725 17L11.3725 15L11.8525 14.52L15.6125 18.28C16.0025 18.67 16.6325 18.67 17.0225 18.28C17.4125 17.89 17.4125 17.25 17.0225 16.86Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(13.93%, 11.31%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Poweroff: {
          paths: [
            {
              d: "M15.29 11.49L15.29 6C15.29 4.9 14.39 4 13.29 4L13.29 0L11.29 0L11.29 4L7.41 4L15.1 11.69L15.29 11.49ZM7.29 0L5.29 0L5.29 1.88L7.29 3.88L7.29 0ZM1.41 0.84L0 2.25L3.34 5.59C3.31 5.72 3.29 5.86 3.29 5.99L3.29 11.5L6.79 15L6.79 18L11.79 18L11.79 15L12.27 14.52L16.74 18.99L18.15 17.58L1.41 0.84Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.19%, 10.44%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Poweroff: {
          paths: [
            {
              d: "M4.12 0L8 3.88L8 0L4.12 0ZM3.5 8.17L3.5 10L4.5 10L4.5 8.17L5.57 7.11L0 1.54L0 4.65L3.5 8.17Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 37.5%)" },
            },
            {
              d: "M7.29 0L5.29 0L5.29 1.88L7.29 3.88L7.29 0ZM13.29 6L13.29 9.88L15.09 11.68L15.29 11.48L15.29 6C15.29 4.9 14.39 4 13.29 4L13.29 0L11.29 0L11.29 4L7.41 4L9.41 6L13.29 6ZM1.41 0.84L0 2.25L3.29 5.54L3.29 11.5L6.79 15L6.79 18L11.79 18L11.79 15L12.27 14.52L16.74 18.99L18.15 17.58L1.41 0.84ZM9.79 14.17L9.79 16L8.79 16L8.79 14.17L5.29 10.65L5.29 7.54L10.86 13.11L9.79 14.17Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(11.29%, 12.5%)" },
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
          d: "M7.29 0L5.29 0L5.29 1.88L7.29 3.88L7.29 0ZM13.29 6L13.29 9.88L15.09 11.68L15.29 11.48L15.29 6C15.29 4.9 14.39 4 13.29 4L13.29 0L11.29 0L11.29 4L7.41 4L9.41 6L13.29 6ZM1.41 0.84L0 2.25L3.29 5.54L3.29 11.5L6.79 15L6.79 18L11.79 18L11.79 15L12.27 14.52L16.74 18.99L18.15 17.58L1.41 0.84ZM9.79 14.17L9.79 16L8.79 16L8.79 14.17L5.29 10.65L5.29 7.54L10.86 13.11L9.79 14.17Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.19%, 10.44%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Poweroff")}
      {...rest}
    ></Icon>
  );
}
