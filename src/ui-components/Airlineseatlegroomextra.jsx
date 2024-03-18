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
export default function Airlineseatlegroomextra(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Airlineseatlegroomextra: {
          paths: [
            {
              d: "M2 9L2 0L0 0L0 9C0 11.76 2.24 14 5 14L11 14L11 12L5 12C3.34 12 2 10.66 2 9ZM20.83 14.24C20.45 13.52 19.54 13.27 18.8 13.61L17.71 14.11L14.3 7.13C13.96 6.45 13.27 6.01 12.51 6.01L9 6L9 0L3 0L3 8C3 9.66 4.34 11 6 11L13 11L16.41 18L20.13 16.3C20.9 15.94 21.23 15 20.83 14.24Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Airlineseatlegroomextra: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Airlineseatlegroomextra: {
          paths: [
            {
              d: "M2 9L2 1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1L0 9C0 11.76 2.24 14 5 14L10 14C10.55 14 11 13.55 11 13C11 12.45 10.55 12 10 12L5 12C3.34 12 2 10.66 2 9ZM20.83 14.24C20.45 13.52 19.54 13.27 18.8 13.61L17.71 14.11L14.3 7.13C13.96 6.45 13.27 6 12.51 6L9 6L9 0L3 0L3 8C3 9.66 4.34 11 6 11L13 11L15.56 16.25C16.04 17.23 17.2 17.64 18.19 17.19L20.14 16.3C20.9 15.94 21.23 15 20.83 14.24Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 13.81%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Airlineseatlegroomextra: {
          paths: [
            {
              d: "M2 0L0 0L0 14L11 14L11 12L2 12L2 0ZM20.24 12.96L17.71 14.11L14.3 7.13C13.96 6.45 13.27 6 12.51 6L9 6L9 0L3 0L3 11L13 11L16.41 18L21.48 15.68L20.24 12.96Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(5.25%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Airlineseatlegroomextra: {
          paths: [
            {
              d: "M2 9L2 0L0 0L0 9C0 11.76 2.24 14 5 14L11 14L11 12L5 12C3.34 12 2 10.66 2 9ZM20.83 14.24C20.45 13.52 19.54 13.27 18.8 13.61L17.71 14.11L14.3 7.13C13.96 6.45 13.27 6 12.51 6L9 6L9 0L3 0L3 8C3 9.66 4.34 11 6 11L13 11L16.41 18L20.13 16.3C20.9 15.94 21.23 15 20.83 14.24Z",
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
          d: "M2 9L2 0L0 0L0 9C0 11.76 2.24 14 5 14L11 14L11 12L5 12C3.34 12 2 10.66 2 9ZM20.83 14.24C20.45 13.52 19.54 13.27 18.8 13.61L17.71 14.11L14.3 7.13C13.96 6.45 13.27 6 12.51 6L9 6L9 0L3 0L3 8C3 9.66 4.34 11 6 11L13 11L16.41 18L20.13 16.3C20.9 15.94 21.23 15 20.83 14.24Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(6.25%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Airlineseatlegroomextra")}
      {...rest}
    ></Icon>
  );
}
