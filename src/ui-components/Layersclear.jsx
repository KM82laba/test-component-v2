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
export default function Layersclear(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Layersclear: {
          paths: [
            {
              d: "M17.81 13.99L19 13.07L17.57 11.64L16.38 12.56L17.81 13.99ZM17.36 9.27L19 8L10 1L7.09 3.27L14.96 11.15L17.36 9.27ZM1.27 0L0 1.27L4.22 5.49L1 8L2.63 9.27L10 15L12.1 13.37L13.53 14.8L10 17.54L2.63 11.81L1 13.07L10 20.07L14.95 16.22L18.73 20L20 18.73L1.27 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.19%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Layersclear: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Layersclear: {
          paths: [
            {
              d: "M17.5725 8.5225C18.0825 8.1225 18.0825 7.3425 17.5725 6.9425L10.8125 1.6825C10.0925 1.1225 9.0825 1.1225 8.3525 1.6825L6.9925 2.7525L14.8725 10.6325L17.5725 8.5225ZM17.5725 12.0125L17.5625 12.0025C17.2025 11.7225 16.7025 11.7225 16.3425 12.0025L16.2925 12.0425L17.6925 13.4425C18.0625 13.0325 18.0325 12.3725 17.5725 12.0125ZM19.0225 17.6125L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L3.8125 5.2225L1.5925 6.9425C1.0825 7.3425 1.0825 8.1225 1.5925 8.5225L8.3525 13.7825C9.0725 14.3425 10.0825 14.3425 10.8125 13.7825L11.6825 13.1025L13.1025 14.5225L10.1825 16.7925C9.8225 17.0725 9.3125 17.0725 8.9525 16.7925L2.8025 12.0125C2.4425 11.7325 1.9425 11.7325 1.5825 12.0125C1.0725 12.4125 1.0725 13.1825 1.5825 13.5825L8.3425 18.8425C9.0625 19.4025 10.0725 19.4025 10.8025 18.8425L14.5225 15.9525L17.5925 19.0225C17.9825 19.4125 18.6125 19.4125 19.0025 19.0225C19.4125 18.6325 19.4125 18.0025 19.0225 17.6125Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.77%, 9.76%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Layersclear: {
          paths: [
            {
              d: "M19 8.14L10 1.14L7.41 3.16L15.28 11.03L19 8.14ZM19 13.21L17.37 11.94L16.7 12.46L18.13 13.89L19 13.21ZM1.41 0L0 1.41L4.22 5.63L1 8.14L10 15.14L12.1 13.51L13.52 14.93L9.99 17.68L2.62 11.95L1 13.21L10 20.21L14.95 16.36L18.73 20.14L20.14 18.73L1.41 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.04%, 7.9%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Layersclear: {
          paths: [
            {
              d: "M5.74 8.94L6.41 8.41L1.39 3.39L0 4.47L5.74 8.94ZM5.74 0L4.57 0.91L9.59 5.94L11.48 4.47L5.74 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(26.08%, 18.87%)" },
            },
            {
              d: "M10 3.67L15.74 8.14L13.85 9.61L15.28 11.03L19 8.14L10 1.14L7.41 3.16L8.83 4.58L10 3.67ZM19 13.21L17.37 11.94L16.7 12.46L18.13 13.89L19 13.21ZM1.41 0L0 1.41L4.22 5.63L1 8.14L10 15.14L12.1 13.51L13.52 14.93L9.99 17.68L2.62 11.95L1 13.21L10 20.21L14.95 16.36L18.73 20.14L20.14 18.73L1.41 0ZM10 12.61L4.26 8.14L5.65 7.06L10.67 12.08L10 12.61Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 3.58%)" },
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
          d: "M10 3.67L15.74 8.14L13.85 9.61L15.28 11.03L19 8.14L10 1.14L7.41 3.16L8.83 4.58L10 3.67ZM19 13.21L17.37 11.94L16.7 12.46L18.13 13.89L19 13.21ZM1.41 0L0 1.41L4.22 5.63L1 8.14L10 15.14L12.1 13.51L13.52 14.93L9.99 17.68L2.62 11.95L1 13.21L10 20.21L14.95 16.36L18.73 20.14L20.14 18.73L1.41 0ZM10 12.61L4.26 8.14L5.65 7.06L10.67 12.08L10 12.61Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.04%, 7.9%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Layersclear")}
      {...rest}
    ></Icon>
  );
}
