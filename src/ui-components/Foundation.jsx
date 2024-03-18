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
export default function Foundation(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Foundation: {} }, variantValues: { style: "Filled" } },
    { overrides: { Foundation: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Foundation: {
          paths: [
            {
              d: "M16.1979 8.655L17.8979 8.655C18.3579 8.655 18.5779 8.085 18.2279 7.785L9.86785 0.255C9.48785 -0.085 8.90785 -0.085 8.52785 0.255L0.167852 7.785C-0.172148 8.085 0.0378519 8.655 0.497852 8.655L2.19785 8.655L2.19785 11.655L1.19785 11.655C0.647852 11.655 0.197852 12.105 0.197852 12.655C0.197852 13.205 0.647852 13.655 1.19785 13.655L2.19785 13.655L2.19785 15.655C2.19785 16.205 2.64785 16.655 3.19785 16.655C3.74785 16.655 4.19785 16.205 4.19785 15.655L4.19785 13.655L8.19785 13.655L8.19785 15.655C8.19785 16.205 8.64785 16.655 9.19785 16.655C9.74785 16.655 10.1979 16.205 10.1979 15.655L10.1979 13.655L14.1979 13.655L14.1979 15.655C14.1979 16.205 14.6479 16.655 15.1979 16.655C15.7479 16.655 16.1979 16.205 16.1979 15.655L16.1979 13.655L17.1979 13.655C17.7479 13.655 18.1979 13.205 18.1979 12.655C18.1979 12.105 17.7479 11.655 17.1979 11.655L16.1979 11.655L16.1979 8.655ZM4.19785 11.655L4.19785 6.845L8.19785 3.245L8.19785 11.655L4.19785 11.655ZM10.1979 11.655L10.1979 3.245L14.1979 6.845L14.1979 11.655L10.1979 11.655Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(11.67%, 15.3%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Foundation: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Foundation: {
          paths: [
            {
              d: "M0 8.41L0 3.6L4 0L4 8.41L0 8.41ZM6 8.41L6 0L10 3.6L10 8.41L6 8.41Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 27.46%)" },
            },
            {
              d: "M17 9L20 9L10 0L0 9L3 9L3 12L1 12L1 14L3 14L3 17L5 17L5 14L9 14L9 17L11 17L11 14L15 14L15 17L17 17L17 14L19 14L19 12L17 12L17 9ZM5 12L5 7.19L9 3.59L9 12L5 12ZM11 12L11 3.59L15 7.19L15 12L11 12Z",
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
          d: "M17 9L20 9L10 0L0 9L3 9L3 12L1 12L1 14L3 14L3 17L5 17L5 14L9 14L9 17L11 17L11 14L15 14L15 17L17 17L17 14L19 14L19 12L17 12L17 9ZM5 12L5 7.19L9 3.59L9 12L5 12ZM11 12L11 3.59L15 7.19L15 12L11 12Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 14.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Foundation")}
      {...rest}
    ></Icon>
  );
}
