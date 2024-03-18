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
export default function Syncdisabled(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Syncdisabled: {
          paths: [
            {
              d: "M7.14 2.35L7.14 0.26C6.34 0.47 5.59 0.8 4.91 1.22L6.37 2.68C6.62 2.56 6.87 2.44 7.14 2.35ZM0 1.41L2.36 3.77C1.59 4.99 1.14 6.44 1.14 8C1.14 10.21 2.05 12.2 3.5 13.64L1.14 16L7.14 16L7.14 10L4.9 12.24C3.82 11.15 3.14 9.66 3.14 8C3.14 7 3.39 6.06 3.82 5.23L11.9 13.31C11.65 13.44 11.4 13.56 11.13 13.65L11.13 15.74C11.93 15.53 12.68 15.2 13.36 14.78L15.72 17.14L16.99 15.87L1.28 0.14L0 1.41ZM17.14 0L11.14 0L11.14 6L13.38 3.76C14.46 4.85 15.14 6.34 15.14 8C15.14 9 14.89 9.94 14.46 10.77L15.92 12.23C16.69 11.01 17.14 9.56 17.14 8C17.14 5.79 16.23 3.8 14.78 2.36L17.14 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.29%, 14.29%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Syncdisabled: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Syncdisabled: {
          paths: [
            {
              d: "M6.7225 1.74L6.7225 1.55C6.7225 0.87 6.0125 0.44 5.4025 0.73C5.2125 0.82 5.0425 0.93 4.8625 1.03L6.3225 2.49C6.5625 2.31 6.7225 2.04 6.7225 1.74ZM16.7225 8C16.7225 5.79 15.8125 3.8 14.3625 2.36L15.8725 0.85C16.1825 0.54 15.9625 0 15.5125 0L10.7225 0L10.7225 4.79C10.7225 5.24 11.2625 5.46 11.5725 5.14L12.9625 3.75C14.0425 4.85 14.7225 6.34 14.7225 8C14.7225 8.85 14.5425 9.66 14.2225 10.39L15.7025 11.87C16.3425 10.72 16.7225 9.41 16.7225 8ZM0.2925 0.7C-0.0975 1.09 -0.0975 1.72 0.2925 2.11L1.9425 3.76C1.1725 5 0.7225 6.44 0.7225 8C0.7225 10.21 1.6325 12.2 3.0825 13.64L1.5725 15.15C1.2625 15.46 1.4825 16 1.9325 16L6.2225 16C6.5025 16 6.7225 15.78 6.7225 15.5L6.7225 11.21C6.7225 10.76 6.1825 10.54 5.8725 10.86L4.4825 12.25C3.4025 11.15 2.7225 9.66 2.7225 8C2.7225 7 2.9825 6.07 3.4125 5.24L11.4825 13.31C11.4725 13.33 11.4725 13.33 11.4725 13.35C11.0425 13.47 10.7225 13.83 10.7225 14.26L10.7225 14.44C10.7225 15.12 11.4325 15.55 12.0425 15.26C12.3525 15.12 12.6525 14.95 12.9425 14.77L14.8125 16.64C15.2025 17.03 15.8325 17.03 16.2225 16.64C16.6125 16.25 16.6125 15.62 16.2225 15.23L1.7025 0.7C1.3125 0.31 0.6825 0.31 0.2925 0.7Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(15.16%, 14.72%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Syncdisabled: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Syncdisabled: {
          paths: [
            {
              d: "M7.14 2.35L7.14 0.26C6.48 0.43 5.85 0.69 5.26 1.01L6.76 2.51C6.89 2.46 7.01 2.4 7.14 2.35ZM17.14 8C17.14 5.79 16.23 3.8 14.78 2.36L17.14 0L11.14 0L11.14 6L13.38 3.76C14.46 4.85 15.14 6.34 15.14 8C15.14 8.85 14.95 9.65 14.63 10.38L16.13 11.88C16.77 10.74 17.14 9.41 17.14 8ZM1.41 0L0 1.41L2.36 3.77C1.59 4.99 1.14 6.44 1.14 8C1.14 10.21 2.05 12.2 3.5 13.64L1.14 16L7.14 16L7.14 10L4.9 12.24C3.82 11.15 3.14 9.66 3.14 8C3.14 7 3.39 6.06 3.82 5.23L11.9 13.31C11.65 13.44 11.4 13.55 11.14 13.65L11.14 15.74C11.94 15.53 12.69 15.2 13.37 14.78L15.95 17.36L17.36 15.95L1.41 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(11.92%, 16.67%)" },
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
          d: "M7.14 2.35L7.14 0.26C6.48 0.43 5.85 0.69 5.26 1.01L6.76 2.51C6.89 2.46 7.01 2.4 7.14 2.35ZM17.14 8C17.14 5.79 16.23 3.8 14.78 2.36L17.14 0L11.14 0L11.14 6L13.38 3.76C14.46 4.85 15.14 6.34 15.14 8C15.14 8.85 14.95 9.65 14.63 10.38L16.13 11.88C16.77 10.74 17.14 9.41 17.14 8ZM1.41 0L0 1.41L2.36 3.77C1.59 4.99 1.14 6.44 1.14 8C1.14 10.21 2.05 12.2 3.5 13.64L1.14 16L7.14 16L7.14 10L4.9 12.24C3.82 11.15 3.14 9.66 3.14 8C3.14 7 3.39 6.06 3.82 5.23L11.9 13.31C11.65 13.44 11.4 13.55 11.14 13.65L11.14 15.74C11.94 15.53 12.69 15.2 13.37 14.78L15.95 17.36L17.36 15.95L1.41 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(13.83%, 13.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Syncdisabled")}
      {...rest}
    ></Icon>
  );
}
