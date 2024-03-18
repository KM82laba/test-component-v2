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
export default function Allinclusive(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Allinclusive: {
          paths: [
            {
              d: "M18.6 0C17.16 0 15.8 0.56 14.83 1.53L12 4.04L10.48 5.38L10.49 5.38L7.8 7.77C7.16 8.41 6.31 8.76 5.4 8.76C3.53 8.76 2.01 7.25 2.01 5.38C2.01 3.51 3.53 2 5.4 2C6.31 2 7.16 2.35 7.84 3.03L8.97 4.03L10.48 2.69L9.22 1.58C8.2 0.56 6.84 0 5.4 0C2.42 0 0 2.42 0 5.38C0 8.34 2.42 10.76 5.4 10.76C6.84 10.76 8.2 10.2 9.17 9.23L12 6.73L12.01 6.74L13.52 5.38L13.51 5.38L16.2 2.99C16.84 2.35 17.69 2 18.6 2C20.47 2 21.99 3.51 21.99 5.38C21.99 7.25 20.47 8.76 18.6 8.76C17.7 8.76 16.84 8.41 16.16 7.73L15.02 6.72L13.51 8.06L14.78 9.18C15.8 10.19 17.15 10.75 18.6 10.75C21.58 10.75 24 8.34 24 5.37C24 2.4 21.58 0 18.6 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 27.58%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Allinclusive: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Allinclusive: {
          paths: [
            {
              d: "M20.22 0.24C18.22 -0.36 16.16 0.2 14.83 1.53L12 4.04L10.48 5.38L10.49 5.38L7.8 7.77C6.99 8.58 5.85 8.92 4.68 8.69C3.43 8.44 2.4 7.44 2.11 6.2C1.59 3.97 3.27 2 5.4 2C6.31 2 7.16 2.35 7.84 3.03L8.31 3.44C8.69 3.78 9.26 3.78 9.64 3.44C10.09 3.04 10.09 2.34 9.64 1.94L9.22 1.58C8.2 0.56 6.84 0 5.4 0C2.42 0 0 2.42 0 5.38C0 8.34 2.42 10.76 5.4 10.76C6.84 10.76 8.2 10.2 9.17 9.23L12 6.73L12.01 6.74L13.52 5.38L13.51 5.38L16.2 2.99C17.01 2.18 18.15 1.84 19.32 2.07C20.57 2.32 21.6 3.32 21.89 4.56C22.41 6.79 20.73 8.76 18.6 8.76C17.7 8.76 16.84 8.41 16.16 7.73L15.68 7.31C15.3 6.97 14.73 6.97 14.35 7.31C13.9 7.71 13.9 8.41 14.35 8.81L14.77 9.18C15.79 10.19 17.14 10.75 18.59 10.75C21.86 10.75 24.45 7.85 23.92 4.5C23.62 2.51 22.15 0.81 20.22 0.24Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0.02%, 27.58%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Allinclusive: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Allinclusive: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M18.6 0C17.16 0 15.8 0.56 14.83 1.53L7.8 7.77C7.16 8.41 6.31 8.76 5.4 8.76C3.53 8.76 2.01 7.25 2.01 5.38C2.01 3.51 3.53 2 5.4 2C6.31 2 7.16 2.35 7.84 3.03L8.97 4.03L10.48 2.69L9.22 1.58C8.2 0.56 6.84 0 5.4 0C2.42 0 0 2.42 0 5.38C0 8.34 2.42 10.76 5.4 10.76C6.84 10.76 8.2 10.2 9.17 9.23L16.2 2.99C16.84 2.35 17.69 2 18.6 2C20.47 2 21.99 3.51 21.99 5.38C21.99 7.25 20.47 8.76 18.6 8.76C17.7 8.76 16.84 8.41 16.16 7.73L15.02 6.72L13.51 8.06L14.78 9.18C15.8 10.19 17.15 10.75 18.6 10.75C21.58 10.75 24 8.34 24 5.37C24 2.4 21.58 0 18.6 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 27.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Allinclusive")}
      {...rest}
    ></Icon>
  );
}
