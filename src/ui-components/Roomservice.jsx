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
export default function Roomservice(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Roomservice: {
          paths: [
            {
              d: "M0 12L20 12L20 14L0 14L0 12ZM11.84 2.79C11.94 2.55 12 2.28 12 2C12 0.9 11.1 0 10 0C8.9 0 8 0.9 8 2C8 2.28 8.06 2.55 8.16 2.79C4.25 3.6 1.27 6.93 1 11L19 11C18.73 6.93 15.75 3.6 11.84 2.79Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Roomservice: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Roomservice: {
          paths: [
            {
              d: "M1 12L19 12C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14L1 14C0.45 14 0 13.55 0 13C0 12.45 0.45 12 1 12ZM11.84 2.79C11.94 2.55 12 2.28 12 2C12 0.9 11.1 0 10 0C8.9 0 8 0.9 8 2C8 2.28 8.06 2.55 8.16 2.79C4.25 3.6 1.27 6.93 1 11L19 11C18.73 6.93 15.75 3.6 11.84 2.79Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Roomservice: {
          paths: [
            {
              d: "M0 12L20 12L20 14L0 14L0 12ZM11.84 2.79C11.94 2.55 12 2.28 12 2C12 0.9 11.1 0 10 0C8.9 0 8 0.9 8 2C8 2.28 8.06 2.55 8.16 2.79C4.25 3.6 1.27 6.93 1 11L19 11C18.73 6.93 15.75 3.6 11.84 2.79Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Roomservice: {
          paths: [
            {
              d: "M6.5 0C3.55 0 1.03 1.83 0 4.41L13 4.41C11.97 1.83 9.45 0 6.5 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(22.92%, 39.92%)" },
            },
            {
              d: "M0 12L20 12L20 14L0 14L0 12ZM11.84 2.79C11.94 2.55 12 2.28 12 2C12 0.9 11.1 0 10 0C8.9 0 8 0.9 8 2C8 2.28 8.06 2.55 8.16 2.79C4.25 3.6 1.27 6.93 1 11L19 11C18.73 6.93 15.75 3.6 11.84 2.79ZM10 4.58C12.95 4.58 15.47 6.41 16.5 8.99L3.5 8.99C4.53 6.41 7.05 4.58 10 4.58Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 20.83%)" },
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
          d: "M0 12L0 14L20 14L20 12L0 12ZM19 11C18.73 6.93 15.75 3.6 11.84 2.79C11.94 2.55 12 2.28 12 2C12 0.9 11.1 0 10 0C8.9 0 8 0.9 8 2C8 2.28 8.06 2.55 8.16 2.79C4.25 3.6 1.27 6.93 1 11L19 11ZM10 4.58C12.95 4.58 15.47 6.41 16.5 8.99L3.5 8.99C4.53 6.41 7.05 4.58 10 4.58Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Roomservice")}
      {...rest}
    ></Icon>
  );
}
