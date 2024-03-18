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
export default function Layers(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Layers: {
          paths: [
            {
              d: "M8.99 16.54L1.62 10.81L0 12.07L9 19.07L18 12.07L16.37 10.8L8.99 16.54ZM9 14L16.36 8.27L18 7L9 0L0 7L1.63 8.27L9 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 10.27%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Layers: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Layers: {
          paths: [
            {
              d: "M8.9825 15.54C8.6225 15.82 8.1125 15.82 7.7525 15.54L1.6025 10.76C1.2425 10.48 0.7425 10.48 0.3825 10.76C-0.1275 11.16 -0.1275 11.93 0.3825 12.33L7.1425 17.59C7.8625 18.15 8.8725 18.15 9.6025 17.59L16.3625 12.33C16.8725 11.93 16.8725 11.16 16.3625 10.76L16.3525 10.75C15.9925 10.47 15.4925 10.47 15.1325 10.75L8.9825 15.54ZM9.6125 12.52L16.3725 7.26C16.8825 6.86 16.8825 6.08 16.3725 5.68L9.6125 0.42C8.8925 -0.14 7.8825 -0.14 7.1525 0.42L0.3925 5.69C-0.1175 6.09 -0.1175 6.87 0.3925 7.27L7.1525 12.53C7.8725 13.09 8.8925 13.09 9.6125 12.52Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(15.09%, 12.48%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Layers: {
          paths: [
            {
              d: "M8.99 16.54L1.62 10.81L0 12.07L9 19.07L18 12.07L16.37 10.8L8.99 16.54ZM9 14L16.36 8.27L18 7L9 0L0 7L1.63 8.27L9 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 10.27%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Layers: {
          paths: [
            {
              d: "M0 4.47L5.74 8.94L11.48 4.47L5.74 0L0 4.47Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(26.08%, 18.87%)" },
            },
            {
              d: "M16.37 10.8L8.99 16.54L1.62 10.81L0 12.07L9 19.07L18 12.07L16.37 10.8ZM9 0L0 7L1.63 8.27L9 14L16.36 8.27L18 7L9 0ZM9 11.47L3.26 7L9 2.53L14.74 7L9 11.47Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
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
          d: "M8.99 16.54L1.62 10.81L0 12.07L9 19.07L18 12.07L16.37 10.8L8.99 16.54ZM9 14L16.36 8.27L18 7L9 0L0 7L1.63 8.27L9 14ZM9 2.53L14.74 7L9 11.47L3.26 7L9 2.53Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 10.27%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Layers")}
      {...rest}
    ></Icon>
  );
}
