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
export default function Flight(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Flight: {} }, variantValues: { style: "Filled" } },
    { overrides: { Flight: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Flight: {
          paths: [
            {
              d: "M19 12.58C19 12.22 18.81 11.89 18.51 11.69L11 7L11 1.5C11 0.67 10.33 0 9.5 0C8.67 0 8 0.67 8 1.5L8 7L0.49 11.69C0.19 11.88 0 12.22 0 12.58C0 13.28 0.68 13.79 1.36 13.58L8 11.5L8 17L6.2 18.35C6.07 18.44 6 18.59 6 18.75L6 19.34C6 19.67 6.32 19.91 6.64 19.82L9.5 19L12.36 19.82C12.68 19.91 13 19.67 13 19.34L13 18.75C13 18.59 12.93 18.44 12.8 18.35L11 17L11 11.5L17.64 13.58C18.32 13.79 19 13.28 19 12.58Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 8.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Flight: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Flight: {
          paths: [
            {
              d: "M8 17L6 18.5L6 20L9.5 19L13 20L13 18.5L11 17L11 11.5L19 14L19 12L11 7L11 1.5C11 0.67 10.33 0 9.5 0C8.67 0 8 0.67 8 1.5L8 7L0 12L0 14L8 11.5L8 17Z",
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
          d: "M19 14L19 12L11 7L11 1.5C11 0.67 10.33 0 9.5 0C8.67 0 8 0.67 8 1.5L8 7L0 12L0 14L8 11.5L8 17L6 18.5L6 20L9.5 19L13 20L13 18.5L11 17L11 11.5L19 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(10.42%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Flight")}
      {...rest}
    ></Icon>
  );
}
