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
export default function Refresh(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Refresh: {} }, variantValues: { style: "Filled" } },
    { overrides: { Refresh: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Refresh: {
          paths: [
            {
              d: "M13.6337 2.35292C12.0037 0.722922 9.69366 -0.217078 7.15366 0.0429219C3.48366 0.412922 0.463664 3.39292 0.0536639 7.06292C-0.496336 11.9129 3.25366 16.0029 7.98366 16.0029C11.1737 16.0029 13.9137 14.1329 15.1937 11.4429C15.5137 10.7729 15.0337 10.0029 14.2937 10.0029C13.9237 10.0029 13.5737 10.2029 13.4137 10.5329C12.2837 12.9629 9.57366 14.5029 6.61366 13.8429C4.39366 13.3529 2.60366 11.5429 2.13366 9.32292C1.29366 5.44292 4.24366 2.00292 7.98366 2.00292C9.64366 2.00292 11.1237 2.69292 12.2037 3.78292L10.6937 5.29292C10.0637 5.92292 10.5037 7.00292 11.3937 7.00292L14.9837 7.00292C15.5337 7.00292 15.9837 6.55292 15.9837 6.00292L15.9837 2.41292C15.9837 1.52292 14.9037 1.07292 14.2737 1.70292L13.6337 2.35292Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.7%, 16.66%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Refresh: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Refresh: {
          paths: [
            {
              d: "M13.64 2.35C12.19 0.9 10.2 0 7.99 0C3.57 0 0 3.58 0 8C0 12.42 3.57 16 7.99 16C11.72 16 14.83 13.45 15.72 10L13.64 10C12.82 12.33 10.6 14 7.99 14C4.68 14 1.99 11.31 1.99 8C1.99 4.69 4.68 2 7.99 2C9.65 2 11.13 2.69 12.21 3.78L8.99 7L15.99 7L15.99 0L13.64 2.35Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.71%, 16.67%)" },
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
          d: "M13.64 2.35C12.19 0.9 10.2 0 7.99 0C3.57 0 0 3.58 0 8C0 12.42 3.57 16 7.99 16C11.72 16 14.83 13.45 15.72 10L13.64 10C12.82 12.33 10.6 14 7.99 14C4.68 14 1.99 11.31 1.99 8C1.99 4.69 4.68 2 7.99 2C9.65 2 11.13 2.69 12.21 3.78L8.99 7L15.99 7L15.99 0L13.64 2.35Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.69%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Refresh")}
      {...rest}
    ></Icon>
  );
}
