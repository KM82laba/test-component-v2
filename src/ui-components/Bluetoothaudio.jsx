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
export default function Bluetoothaudio(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Bluetoothaudio: {} }, variantValues: { style: "Filled" } },
    { overrides: { Bluetoothaudio: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Bluetoothaudio: {
          paths: [
            {
              d: "M12.5925 7.86401L11.2125 9.24401C11.0125 9.44401 11.0125 9.75401 11.2125 9.95401L12.5925 11.334C12.8725 11.614 13.3425 11.484 13.4425 11.104C13.5525 10.604 13.6125 10.104 13.6125 9.58401C13.6125 9.07401 13.5525 8.57401 13.4325 8.10401C13.3425 7.72401 12.8725 7.58401 12.5925 7.86401ZM16.7125 5.36401C16.4625 4.81401 15.7325 4.69401 15.3125 5.12401C15.0525 5.38401 15.0025 5.76401 15.1425 6.10401C15.6025 7.17401 15.8625 8.34401 15.8625 9.57401C15.8625 10.814 15.6025 11.994 15.1325 13.064C14.9925 13.384 15.0425 13.754 15.2925 14.004C15.7025 14.414 16.3925 14.294 16.6425 13.774C17.2725 12.474 17.6225 11.014 17.6225 9.47401C17.6125 8.02401 17.2925 6.62401 16.7125 5.36401ZM8.0025 9.58401L11.5925 6.00401C11.9825 5.61401 11.9825 4.98401 11.5925 4.58401L7.3025 0.294012C6.6725 -0.335988 5.5925 0.114012 5.5925 1.00401L5.5925 7.18401L1.7025 3.28401C1.3125 2.89401 0.6825 2.89401 0.2925 3.28401C-0.0975 3.67401 -0.0975 4.30401 0.2925 4.69401L5.1825 9.58401L0.2925 14.474C-0.0975 14.864 -0.0975 15.494 0.2925 15.884C0.6825 16.274 1.3125 16.274 1.7025 15.884L5.5925 11.994L5.5925 18.174C5.5925 19.064 6.6725 19.514 7.3025 18.884L11.6025 14.584C11.9925 14.194 11.9925 13.564 11.6025 13.164L8.0025 9.58401ZM7.5925 3.41401L9.4725 5.29401L7.5925 7.17401L7.5925 3.41401ZM7.5925 15.754L7.5925 11.994L9.4725 13.874L7.5925 15.754Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(13.29%, 10.05%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Bluetoothaudio: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Bluetoothaudio: {
          paths: [
            {
              d: "M11.24 10.01L13.56 12.33C13.84 11.61 14 10.82 14 10C14 9.18 13.84 8.41 13.57 7.69L11.24 10.01ZM16.53 4.71L15.27 5.97C15.9 7.18 16.25 8.54 16.25 9.99C16.25 11.44 15.89 12.81 15.27 14.01L16.47 15.21C17.44 13.67 18.01 11.85 18.01 9.9C18 8.01 17.46 6.23 16.53 4.71ZM12.71 5.71L7 0L6 0L6 7.59L1.41 3L0 4.41L5.59 10L0 15.59L1.41 17L6 12.41L6 20L7 20L12.71 14.29L8.41 10L12.71 5.71ZM8 3.83L9.88 5.71L8 7.59L8 3.83ZM9.88 14.29L8 16.17L8 12.41L9.88 14.29Z",
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
          d: "M11.24 10.01L13.56 12.33C13.84 11.61 14 10.82 14 10C14 9.18 13.84 8.41 13.57 7.69L11.24 10.01ZM16.53 4.71L15.27 5.97C15.9 7.18 16.25 8.54 16.25 9.99C16.25 11.44 15.89 12.81 15.27 14.01L16.47 15.21C17.44 13.67 18.01 11.85 18.01 9.9C18 8.01 17.46 6.23 16.53 4.71ZM12.71 5.71L7 0L6 0L6 7.59L1.41 3L0 4.41L5.59 10L0 15.59L1.41 17L6 12.41L6 20L7 20L12.71 14.29L8.41 10L12.71 5.71ZM8 3.83L9.88 5.71L8 7.59L8 3.83ZM9.88 14.29L8 16.17L8 12.41L9.88 14.29Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.48%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Bluetoothaudio")}
      {...rest}
    ></Icon>
  );
}
