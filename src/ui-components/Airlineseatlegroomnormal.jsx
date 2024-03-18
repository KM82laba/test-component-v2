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
export default function Airlineseatlegroomnormal(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Airlineseatlegroomnormal: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Airlineseatlegroomnormal: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Airlineseatlegroomnormal: {
          paths: [
            {
              d: "M2 9L2 1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1L0 9C0 11.76 2.24 14 5 14L10 14C10.55 14 11 13.55 11 13C11 12.45 10.55 12 10 12L5 12C3.34 12 2 10.66 2 9ZM17.5 15L16 15L16 8C16 6.9 15.1 6 14 6L9 6L9 0L3 0L3 8C3 9.65 4.35 11 6 11L13 11L13 16C13 17.1 13.9 18 15 18L17.5 18C18.33 18 19 17.33 19 16.5C19 15.67 18.33 15 17.5 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Airlineseatlegroomnormal: {
          paths: [
            {
              d: "M2 12L2 0L0 0L0 14L11 14L11 12L2 12ZM19 15L16 15L16 8C16 6.9 15.1 6 14 6L9 6L9 0L3 0L3 11L13 11L13 18L19 18L19 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.42%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Airlineseatlegroomnormal: {
          paths: [
            {
              d: "M2 9L2 0L0 0L0 9C0 11.76 2.24 14 5 14L11 14L11 12L5 12C3.34 12 2 10.66 2 9ZM17.5 15L16 15L16 8C16 6.9 15.1 6 14 6L9 6L9 0L3 0L3 8C3 9.65 4.35 11 6 11L13 11L13 18L17.5 18C18.33 18 19 17.33 19 16.5C19 15.67 18.33 15 17.5 15Z",
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
          d: "M2 9L2 0L0 0L0 9C0 11.76 2.24 14 5 14L11 14L11 12L5 12C3.34 12 2 10.66 2 9ZM17.5 15L16 15L16 8C16 6.9 15.1 6 14 6L9 6L9 0L3 0L3 8C3 9.65 4.35 11 6 11L13 11L13 18L17.5 18C18.33 18 19 17.33 19 16.5C19 15.67 18.33 15 17.5 15Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(10.42%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Airlineseatlegroomnormal")}
      {...rest}
    ></Icon>
  );
}
