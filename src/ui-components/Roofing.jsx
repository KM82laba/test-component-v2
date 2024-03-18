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
export default function Roofing(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Roofing: {} }, variantValues: { style: "Filled" } },
    { overrides: { Roofing: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Roofing: {
          paths: [
            {
              d: "M10.1979 14.655L8.19785 14.655L8.19785 12.655L10.1979 12.655L10.1979 14.655ZM6.19785 11.655L6.19785 15.655C6.19785 16.205 6.64785 16.655 7.19785 16.655L11.1979 16.655C11.7479 16.655 12.1979 16.205 12.1979 15.655L12.1979 11.655C12.1979 11.105 11.7479 10.655 11.1979 10.655L7.19785 10.655C6.64785 10.655 6.19785 11.105 6.19785 11.655ZM16.1979 5.955L16.1979 1.655C16.1979 1.105 15.7479 0.655 15.1979 0.655L14.1979 0.655C13.6479 0.655 13.1979 1.105 13.1979 1.655L13.1979 3.255L9.86785 0.255C9.48785 -0.085 8.90785 -0.085 8.52785 0.255L0.167852 7.785C-0.172148 8.085 0.0378519 8.655 0.497852 8.655L1.80785 8.655C2.05785 8.655 2.29785 8.565 2.47785 8.395L9.19785 2.345L15.9079 8.395C16.0979 8.565 16.3379 8.655 16.5779 8.655L17.8879 8.655C18.3479 8.655 18.5679 8.085 18.2179 7.785L16.1979 5.955Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(11.69%, 15.3%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Roofing: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Roofing: {
          paths: [
            {
              d: "M2 0L0 0L0 2L2 2L2 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(45.83%, 66.67%)" },
            },
            {
              d: "M11 15L9 15L9 13L11 13L11 15ZM13 11L7 11L7 17L13 17L13 11ZM17 6.3L17 1L14 1L14 3.6L10 0L0 9L3 9L10 2.69L17 9L20 9L17 6.3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
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
          d: "M11 15L9 15L9 13L11 13L11 15ZM13 11L7 11L7 17L13 17L13 11ZM17 6.3L17 1L14 1L14 3.6L10 0L0 9L3 9L10 2.69L17 9L20 9L17 6.3Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 14.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Roofing")}
      {...rest}
    ></Icon>
  );
}
