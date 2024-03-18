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
export default function Airlineseatlegroomreduced(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Airlineseatlegroomreduced: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Airlineseatlegroomreduced: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Airlineseatlegroomreduced: {
          paths: [
            {
              d: "M16.97 16.2C17.15 17.16 16.42 18 15.5 18L12.81 18C11.51 18 10.55 16.78 10.87 15.51L12 11L6 11C4.35 11 3 9.65 3 8L3 0L9 0L9 6L14 6C15.1 6 16 6.9 16 8L14 15L15.44 15C16.17 15 16.83 15.49 16.97 16.2ZM2 9L2 1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1L0 9C0 11.76 2.24 14 5 14L8 14C8.55 14 9 13.55 9 13C9 12.45 8.55 12 8 12L5 12C3.34 12 2 10.66 2 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.59%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Airlineseatlegroomreduced: {
          paths: [
            {
              d: "M16.97 18L11 18L11 15L12 11L3 11L3 0L9 0L9 6L14 6C15.1 6 16 6.9 16 8L14 15L16.97 15L16.97 18ZM2 12L2 0L0 0L0 14L9 14L9 12L2 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.65%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Airlineseatlegroomreduced: {
          paths: [
            {
              d: "M16.97 16.2C17.15 17.16 16.42 18 15.5 18L11 18L11 15L12 11L6 11C4.35 11 3 9.65 3 8L3 0L9 0L9 6L14 6C15.1 6 16 6.9 16 8L14 15L15.44 15C16.17 15 16.83 15.49 16.97 16.2ZM2 9L2 0L0 0L0 9C0 11.76 2.24 14 5 14L9 14L9 12L5 12C3.34 12 2 10.66 2 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
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
          d: "M16.97 16.2C17.15 17.16 16.42 18 15.5 18L11 18L11 15L12 11L6 11C4.35 11 3 9.65 3 8L3 0L9 0L9 6L14 6C15.1 6 16 6.9 16 8L14 15L15.44 15C16.17 15 16.83 15.49 16.97 16.2ZM2 9L2 0L0 0L0 9C0 11.76 2.24 14 5 14L9 14L9 12L5 12C3.34 12 2 10.66 2 9Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(14.59%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Airlineseatlegroomreduced")}
      {...rest}
    ></Icon>
  );
}
