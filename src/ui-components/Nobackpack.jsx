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
export default function Nobackpack(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Nobackpack: {
          paths: [
            {
              d: "M19.8 19.19L1.42 0.81L0 2.22L2.76 4.98C2.67 5.31 2.61 5.64 2.61 6L2.61 18C2.61 19.1 3.51 20 4.61 20L16.61 20C16.95 20 17.26 19.91 17.54 19.76L18.39 20.61L19.8 19.19ZM4.61 12L4.61 10L7.78 10L9.78 12L4.61 12ZM13.44 10L5.59 2.15C5.6 2.15 5.6 2.14 5.61 2.14L5.61 0L8.61 0L8.61 2L12.61 2L12.61 0L15.61 0L15.61 2.14C17.33 2.59 18.61 4.14 18.61 6L18.61 15.17L16.61 13.17L16.61 10L13.44 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.75%, 7.06%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Nobackpack: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Nobackpack: {
          paths: [
            {
              d: "M5.1725 2.15C5.1825 2.15 5.1825 2.14 5.1925 2.14L5.1925 1.5C5.1925 0.67 5.8625 0 6.6925 0C7.5225 0 8.1925 0.67 8.1925 1.5L8.1925 2L12.1925 2L12.1925 1.5C12.1925 0.67 12.8625 0 13.6925 0C14.5225 0 15.1925 0.67 15.1925 1.5L15.1925 2.14C16.9125 2.59 18.1925 4.14 18.1925 6L18.1925 15.17L16.1625 13.14C16.1725 13.09 16.1925 13.05 16.1925 13L16.1925 11C16.1925 10.45 15.7425 10 15.1925 10L13.0225 10L5.1725 2.15ZM18.6825 19.9C18.2925 20.29 17.6625 20.29 17.2725 19.9L17.1325 19.76C16.8425 19.91 16.5325 20 16.1925 20L4.1925 20C3.0925 20 2.1925 19.1 2.1925 18L2.1925 6C2.1925 5.64 2.2525 5.31 2.3425 4.98L0.2925 2.93C-0.0975 2.54 -0.0975 1.91 0.2925 1.52C0.6825 1.13 1.3125 1.13 1.7025 1.52L18.6725 18.49C19.0725 18.88 19.0725 19.51 18.6825 19.9ZM9.3625 12L7.3625 10L5.1925 10C4.6425 10 4.1925 10.45 4.1925 11C4.1925 11.55 4.6425 12 5.1925 12L9.3625 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.47%, 7.93%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Nobackpack: {
          paths: [
            {
              d: "M19.8 19.19L1.42 0.81L0 2.22L2.76 4.98C2.67 5.31 2.61 5.64 2.61 6L2.61 20L17.78 20L18.39 20.61L19.8 19.19ZM4.61 12L4.61 10L7.78 10L9.78 12L4.61 12ZM5.59 2.15C5.6 2.15 5.6 2.14 5.61 2.14L5.61 0L8.61 0L8.61 2L12.61 2L12.61 0L15.61 0L15.61 2.14C17.33 2.59 18.61 4.14 18.61 6L18.61 15.17L16.61 13.17L16.61 10L13.44 10L5.59 2.15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.75%, 7.06%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Nobackpack: {
          paths: [
            {
              d: "M12 9.17L12 2C12 0.9 11.1 0 10 0L2.83 0L8.83 6L10.5 6L10.5 7.67L12 9.17ZM11.17 14L5.17 8L1.5 8L1.5 6L3.17 6L0 2.83L0 14L11.17 14Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 25%)" },
            },
            {
              d: "M5.59 2.15C5.6 2.15 5.6 2.14 5.61 2.14L5.61 0L8.61 0L8.61 2L12.61 2L12.61 0L15.61 0L15.61 2.14C17.33 2.59 18.61 4.14 18.61 6L18.61 15.17L16.61 13.17L16.61 6C16.61 4.9 15.71 4 14.61 4L7.44 4L5.59 2.15ZM13.44 10L15.11 11.67L15.11 10L13.44 10ZM18.39 20.61L17.54 19.76C17.26 19.91 16.95 20 16.61 20L4.61 20C3.51 20 2.61 19.1 2.61 18L2.61 6C2.61 5.64 2.67 5.31 2.76 4.98L0 2.22L1.41 0.81L19.79 19.19L18.39 20.61ZM15.78 18L9.78 12L6.11 12L6.11 10L7.78 10L4.61 6.83L4.61 18L15.78 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(5.79%, 8.33%)" },
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
          d: "M5.59 2.15C5.6 2.15 5.6 2.14 5.61 2.14L5.61 0L8.61 0L8.61 2L12.61 2L12.61 0L15.61 0L15.61 2.14C17.33 2.59 18.61 4.14 18.61 6L18.61 15.17L16.61 13.17L16.61 6C16.61 4.9 15.71 4 14.61 4L7.44 4L5.59 2.15ZM13.44 10L15.11 11.67L15.11 10L13.44 10ZM18.39 20.61L17.54 19.76C17.26 19.91 16.95 20 16.61 20L4.61 20C3.51 20 2.61 19.1 2.61 18L2.61 6C2.61 5.64 2.67 5.31 2.76 4.98L0 2.22L1.41 0.81L19.79 19.19L18.39 20.61ZM15.78 18L9.78 12L6.11 12L6.11 10L7.78 10L4.61 6.83L4.61 18L15.78 18Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.77%, 7.06%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Nobackpack")}
      {...rest}
    ></Icon>
  );
}
