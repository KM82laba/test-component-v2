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
export default function Travelexplore(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Travelexplore: {} }, variantValues: { style: "Filled" } },
    { overrides: { Travelexplore: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Travelexplore: {
          paths: [
            {
              d: "M17.3 14.9C17.88 13.89 18.25 12.67 17.81 11.25C17.28 9.53 15.77 8.2 13.97 8.03C11.1 7.75 8.74 10.1 9.02 12.98C9.2 14.77 10.52 16.29 12.24 16.82C13.67 17.26 14.88 16.89 15.89 16.31L18.39 18.81C18.78 19.2 19.4 19.2 19.79 18.81C20.18 18.42 20.18 17.8 19.79 17.41L17.3 14.9ZM13.5 15C12.1 15 11 13.9 11 12.5C11 11.1 12.1 10 13.5 10C14.9 10 16 11.1 16 12.5C16 13.9 14.9 15 13.5 15ZM10 18L10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0C14.84 0 18.87 3.44 19.8 8L17.73 8C17.09 5.54 15.33 3.53 13 2.59L13 3C13 4.1 12.1 5 11 5L9 5L9 7C9 7.55 8.55 8 8 8L6 8L6 10L8 10L8 13L7 13L2.21 8.21C2.08 8.79 2 9.38 2 10C2 14.41 5.59 18 10 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.16%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Travelexplore: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Travelexplore: {
          paths: [
            {
              d: "M17.3 14.9C17.7 14.2 18 13.4 18 12.5C18 10 16 8 13.5 8C11 8 9 10 9 12.5C9 15 11 17 13.5 17C14.4 17 15.2 16.7 15.9 16.3L19.1 19.5L20.5 18.1L17.3 14.9ZM13.5 15C12.1 15 11 13.9 11 12.5C11 11.1 12.1 10 13.5 10C14.9 10 16 11.1 16 12.5C16 13.9 14.9 15 13.5 15ZM10 18L10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0C14.84 0 18.87 3.44 19.8 8L17.73 8C17.09 5.54 15.33 3.53 13 2.59L13 3C13 4.1 12.1 5 11 5L9 5L9 7C9 7.55 8.55 8 8 8L6 8L6 10L8 10L8 13L7 13L2.21 8.21C2.08 8.79 2 9.38 2 10C2 14.41 5.59 18 10 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
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
          d: "M17.3 14.9C17.7 14.2 18 13.4 18 12.5C18 10 16 8 13.5 8C11 8 9 10 9 12.5C9 15 11 17 13.5 17C14.4 17 15.2 16.7 15.9 16.3L19.1 19.5L20.5 18.1L17.3 14.9ZM13.5 15C12.1 15 11 13.9 11 12.5C11 11.1 12.1 10 13.5 10C14.9 10 16 11.1 16 12.5C16 13.9 14.9 15 13.5 15ZM10 18L10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0C14.84 0 18.87 3.44 19.8 8L17.73 8C17.09 5.54 15.33 3.53 13 2.59L13 3C13 4.1 12.1 5 11 5L9 5L9 7C9 7.55 8.55 8 8 8L6 8L6 10L8 10L8 13L7 13L2.21 8.21C2.08 8.79 2 9.38 2 10C2 14.41 5.59 18 10 18Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(7.29%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Travelexplore")}
      {...rest}
    ></Icon>
  );
}
