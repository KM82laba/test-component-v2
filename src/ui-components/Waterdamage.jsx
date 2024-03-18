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
export default function Waterdamage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Waterdamage: {
          paths: [
            {
              d: "M10 0L0 9L3 9L3 17L17 17L17 9L20 9L10 0ZM10 13C8.9 13 8 12.1 8 11C8 9.9 10 7 10 7C10 7 12 9.9 12 11C12 12.1 11.1 13 10 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 14.58%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Waterdamage: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Waterdamage: {
          paths: [
            {
              d: "M8.52785 0.255L0.167852 7.785C-0.172148 8.085 0.0378519 8.655 0.497852 8.655L2.19785 8.655L2.19785 15.655C2.19785 16.205 2.64785 16.655 3.19785 16.655L15.1979 16.655C15.7479 16.655 16.1979 16.205 16.1979 15.655L16.1979 8.655L17.8979 8.655C18.3579 8.655 18.5779 8.085 18.2279 7.785L9.86785 0.255C9.48785 -0.085 8.90785 -0.085 8.52785 0.255ZM9.19785 12.655C8.09785 12.655 7.19785 11.755 7.19785 10.655C7.19785 9.875 8.18785 8.215 8.77785 7.295C8.97785 6.985 9.41785 6.985 9.61785 7.295C10.2079 8.215 11.1979 9.875 11.1979 10.655C11.1979 11.755 10.2979 12.655 9.19785 12.655Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(11.67%, 15.3%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Waterdamage: {
          paths: [
            {
              d: "M10 0L0 9L3 9L3 17L17 17L17 9L20 9L10 0ZM10 13C8.9 13 8 12.1 8 11C8 9.9 10 7 10 7C10 7 12 9.9 12 11C12 12.1 11.1 13 10 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 14.58%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Waterdamage: {
          paths: [
            {
              d: "M5 0L0 4.5L0 12.31L10 12.31L10 4.5L5 0ZM5 10.31C3.9 10.31 3 9.41 3 8.31C3 7.21 5 4.31 5 4.31C5 4.31 7 7.21 7 8.31C7 9.41 6.1 10.31 5 10.31Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 23.71%)" },
            },
            {
              d: "M10 0L0 9L3 9L3 17L17 17L17 9L20 9L10 0ZM5 15L5 7.19L10 2.69L15 7.19L15 15L5 15ZM12 11C12 12.1 11.1 13 10 13C8.9 13 8 12.1 8 11C8 9.9 10 7 10 7C10 7 12 9.9 12 11Z",
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
          d: "M10 0L0 9L3 9L3 17L17 17L17 9L20 9L10 0ZM5 15L5 7.19L10 2.69L15 7.19L15 15L5 15ZM12 11C12 12.1 11.1 13 10 13C8.9 13 8 12.1 8 11C8 9.9 10 7 10 7C10 7 12 9.9 12 11Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 14.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Waterdamage")}
      {...rest}
    ></Icon>
  );
}
