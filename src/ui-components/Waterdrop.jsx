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
export default function Waterdrop(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Waterdrop: {
          paths: [
            {
              d: "M8 0C2.67 4.55 0 8.48 0 11.8C0 16.78 3.8 20 8 20C12.2 20 16 16.78 16 11.8C16 8.48 13.33 4.55 8 0ZM3.83 12C4.2 12 4.5 12.26 4.57 12.62C4.98 14.84 6.85 15.6 8.21 15.49C8.64 15.47 9 15.81 9 16.24C9 16.64 8.68 16.97 8.28 16.99C6.15 17.12 3.66 15.9 3.09 12.87C3.01 12.42 3.37 12 3.83 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Waterdrop: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Waterdrop: {
          paths: [
            {
              d: "M8.66 0.2475C8.28 -0.0825 7.71 -0.0825 7.33 0.2475C2.45 4.5475 0 8.2875 0 11.4675C0 16.4475 3.8 19.6675 8 19.6675C12.2 19.6675 16 16.4475 16 11.4675C16 8.2875 13.55 4.5475 8.66 0.2475ZM3.83 11.6675C4.2 11.6675 4.5 11.9275 4.57 12.2875C4.98 14.5075 6.85 15.2675 8.21 15.1575C8.64 15.1375 9 15.4775 9 15.9075C9 16.3075 8.68 16.6375 8.28 16.6575C6.15 16.7875 3.66 15.5675 3.09 12.5375C3.01 12.0875 3.37 11.6675 3.83 11.6675Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 9.03%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Waterdrop: {
          paths: [
            {
              d: "M8 0C2.67 4.55 0 8.48 0 11.8C0 16.78 3.8 20 8 20C12.2 20 16 16.78 16 11.8C16 8.48 13.33 4.55 8 0ZM9 16.91C8.68 16.97 8.35 17 8 17C5.31 17 3.12 15.06 3 12L4.5 12C4.58 14.07 6 15.5 8 15.5C8.35 15.5 8.69 15.46 9 15.37L9 16.91Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Waterdrop: {
          paths: [
            {
              d: "M6 0C1.95 3.7 0 6.79 0 9.14C0 12.77 2.65 15.34 6 15.34C9.35 15.34 12 12.77 12 9.14C12 6.79 10.05 3.69 6 0ZM6.28 14.32C4.15 14.45 1.66 13.23 1.09 10.2C1.01 9.75 1.37 9.33 1.83 9.33C2.2 9.33 2.5 9.59 2.57 9.95C2.98 12.18 4.85 12.93 6.21 12.82C6.64 12.8 7 13.14 7 13.57C7 13.97 6.68 14.3 6.28 14.32Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 19.46%)" },
            },
            {
              d: "M8 0C2.67 4.55 0 8.48 0 11.8C0 16.78 3.8 20 8 20C12.2 20 16 16.78 16 11.8C16 8.48 13.33 4.55 8 0ZM8 18C4.65 18 2 15.43 2 11.8C2 9.46 3.95 6.36 8 2.66C12.05 6.36 14 9.45 14 11.8C14 15.43 11.35 18 8 18ZM3.83 12C4.2 12 4.5 12.26 4.57 12.62C4.98 14.84 6.85 15.6 8.21 15.49C8.64 15.47 9 15.81 9 16.24C9 16.64 8.68 16.97 8.28 16.99C6.15 17.12 3.66 15.9 3.09 12.87C3.01 12.42 3.37 12 3.83 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
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
          d: "M8 0C2.67 4.55 0 8.48 0 11.8C0 16.78 3.8 20 8 20C12.2 20 16 16.78 16 11.8C16 8.48 13.33 4.55 8 0ZM8 18C4.65 18 2 15.43 2 11.8C2 9.46 3.95 6.36 8 2.66C12.05 6.36 14 9.45 14 11.8C14 15.43 11.35 18 8 18ZM3.83 12C4.2 12 4.5 12.26 4.57 12.62C4.98 14.84 6.85 15.6 8.21 15.49C8.64 15.47 9 15.81 9 16.24C9 16.64 8.68 16.97 8.28 16.99C6.15 17.12 3.66 15.9 3.09 12.87C3.01 12.42 3.37 12 3.83 12Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Waterdrop")}
      {...rest}
    ></Icon>
  );
}
