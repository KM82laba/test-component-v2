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
export default function Housesiding(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Housesiding: {} }, variantValues: { style: "Filled" } },
    { overrides: { Housesiding: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Housesiding: {
          paths: [
            {
              d: "M16.1979 8.655L17.8979 8.655C18.3579 8.655 18.5779 8.085 18.2279 7.785L9.86785 0.255C9.48785 -0.085 8.90785 -0.085 8.52785 0.255L0.167852 7.785C-0.172148 8.085 0.0378519 8.655 0.497852 8.655L2.19785 8.655L2.19785 15.655C2.19785 16.205 2.64785 16.655 3.19785 16.655C3.74785 16.655 4.19785 16.205 4.19785 15.655L4.19785 14.655L14.1979 14.655L14.1979 15.655C14.1979 16.205 14.6479 16.655 15.1979 16.655C15.7479 16.655 16.1979 16.205 16.1979 15.655L16.1979 8.655ZM4.40785 6.655L13.9879 6.655L14.1979 6.845L14.1979 8.655L4.19785 8.655L4.19785 6.845L4.40785 6.655ZM11.7679 4.655L6.62785 4.655L9.19785 2.345L11.7679 4.655ZM4.19785 12.655L4.19785 10.655L14.1979 10.655L14.1979 12.655L4.19785 12.655Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(11.67%, 15.3%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Housesiding: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Housesiding: {
          paths: [
            {
              d: "M0.21 4.31L9.79 4.31L10 4.5L10 6.31L0 6.31L0 4.5L0.21 4.31ZM7.57 2.31L2.43 2.31L5 0L7.57 2.31ZM0 10.31L0 8.31L10 8.31L10 10.31L0 10.31Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 23.71%)" },
            },
            {
              d: "M17 9L20 9L10 0L0 9L3 9L3 17L5 17L5 15L15 15L15 17L17 17L17 9ZM5.21 7L14.79 7L15 7.19L15 9L5 9L5 7.19L5.21 7ZM12.57 5L7.43 5L10 2.69L12.57 5ZM5 13L5 11L15 11L15 13L5 13Z",
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
          d: "M17 9L20 9L10 0L0 9L3 9L3 17L5 17L5 15L15 15L15 17L17 17L17 9ZM5.21 7L14.79 7L15 7.19L15 9L5 9L5 7.19L5.21 7ZM12.57 5L7.43 5L10 2.69L12.57 5ZM5 13L5 11L15 11L15 13L5 13Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 14.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Housesiding")}
      {...rest}
    ></Icon>
  );
}
