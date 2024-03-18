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
export default function Pianooff(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Pianooff: {} }, variantValues: { style: "Filled" } },
    { overrides: { Pianooff: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Pianooff: {
          paths: [
            {
              d: "M18.6825 18.9C19.0725 18.51 19.0725 17.88 18.6825 17.49L1.7025 0.51C1.3125 0.12 0.6825 0.12 0.2925 0.51C-0.0975 0.9 -0.0975 1.53 0.2925 1.92L1.1925 2.83L1.1925 16C1.1925 17.1 2.0925 18 3.1925 18L16.3625 18L17.2625 18.9C17.6525 19.29 18.2825 19.29 18.6825 18.9ZM6.4425 16L3.1925 16L3.1925 4.83L5.1925 6.83L5.1925 10.5C5.1925 11.05 5.6425 11.5 6.1925 11.5L6.4425 11.5L6.4425 16ZM7.9425 16L7.9425 11.5L8.1925 11.5C8.6525 11.5 9.0125 11.19 9.1325 10.77L12.4425 14.08L12.4425 16L7.9425 16ZM9.1925 5.17L4.0225 0L17.1925 0C18.2925 0 19.1925 0.9 19.1925 2L19.1925 15.17L17.1925 13.17L17.1925 2L15.1925 2L15.1925 10.5C15.1925 10.69 15.1225 10.86 15.0325 11.01L11.1925 7.17L11.1925 2L9.1925 2L9.1925 5.17Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.02%, 10.02%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Pianooff: {
          paths: [
            {
              d: "M19.8 18.38L1.42 0L0 1.41L1.61 3.02L1.61 18.19L16.78 18.19L18.39 19.8L19.8 18.38ZM6.86 16.19L3.61 16.19L3.61 5.02L5.61 7.02L5.61 11.69L6.86 11.69L6.86 16.19ZM8.36 16.19L8.36 11.69L9.61 11.69L9.61 11.02L12.86 14.27L12.86 16.19L8.36 16.19ZM4.44 0.19L19.61 0.19L19.61 15.36L17.61 13.36L17.61 2.19L15.61 2.19L15.61 11.36L11.61 7.36L11.61 2.19L9.61 2.19L9.61 5.36L4.44 0.19Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.75%, 8.75%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Pianooff: {
          paths: [
            {
              d: "M3.25 14L0 14L0 2.83L2 4.83L2 8.5C2 9.05 2.45 9.5 3 9.5L3.25 9.5L3.25 14ZM4.75 14L4.75 9.5L5 9.5C5.46 9.5 5.82 9.19 5.94 8.77L9.25 12.08L9.25 14L4.75 14ZM8 5.17L8 0L6 0L6 3.17L8 5.17ZM14 11.17L14 0L12 0L12 8.5C12 8.69 11.93 8.86 11.84 9.01L14 11.17Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
            {
              d: "M19.8 18.38L1.42 0L0 1.41L1.61 3.02L1.61 16.19C1.61 17.29 2.51 18.19 3.61 18.19L16.78 18.19L18.39 19.8L19.8 18.38ZM6.86 16.19L3.61 16.19L3.61 5.02L5.61 7.02L5.61 10.69C5.61 11.24 6.06 11.69 6.61 11.69L6.86 11.69L6.86 16.19ZM8.36 16.19L8.36 11.69L8.61 11.69C9.07 11.69 9.43 11.38 9.55 10.96L12.86 14.27L12.86 16.19L8.36 16.19ZM9.61 5.36L4.44 0.19L17.61 0.19C18.71 0.19 19.61 1.09 19.61 2.19L19.61 15.36L17.61 13.36L17.61 2.19L15.61 2.19L15.61 10.69C15.61 10.88 15.54 11.05 15.45 11.2L11.61 7.36L11.61 2.19L9.61 2.19L9.61 5.36Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(5.79%, 11.71%)" },
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
          d: "M19.8 18.38L1.42 0L0 1.41L1.61 3.02L1.61 16.19C1.61 17.29 2.51 18.19 3.61 18.19L16.78 18.19L18.39 19.8L19.8 18.38ZM6.86 16.19L3.61 16.19L3.61 5.02L5.61 7.02L5.61 10.69C5.61 11.24 6.06 11.69 6.61 11.69L6.86 11.69L6.86 16.19ZM8.36 16.19L8.36 11.69L8.61 11.69C9.07 11.69 9.43 11.38 9.55 10.96L12.86 14.27L12.86 16.19L8.36 16.19ZM9.61 5.36L4.44 0.19L17.61 0.19C18.71 0.19 19.61 1.09 19.61 2.19L19.61 15.36L17.61 13.36L17.61 2.19L15.61 2.19L15.61 10.69C15.61 10.88 15.54 11.05 15.45 11.2L11.61 7.36L11.61 2.19L9.61 2.19L9.61 5.36Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.75%, 8.75%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Pianooff")}
      {...rest}
    ></Icon>
  );
}
