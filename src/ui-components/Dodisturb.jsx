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
export default function Dodisturb(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Dodisturb: {
          paths: [
            {
              d: "M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM2 10C2 5.6 5.6 2 10 2C11.8 2 13.5 2.6 14.9 3.7L3.7 14.9C2.6 13.5 2 11.8 2 10ZM10 18C8.2 18 6.5 17.4 5.1 16.3L16.3 5.1C17.4 6.5 18 8.2 18 10C18 14.4 14.4 18 10 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Dodisturb: {} }, variantValues: { style: "Outlined" } },
    { overrides: { Dodisturb: {} }, variantValues: { style: "Round" } },
    { overrides: { Dodisturb: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Dodisturb: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 8.15 2.63 6.45 3.69 5.1L14.9 16.31C13.55 17.37 11.85 18 10 18ZM16.31 14.9L5.1 3.69C6.45 2.63 8.15 2 10 2C14.42 2 18 5.58 18 10C18 11.85 17.37 13.55 16.31 14.9Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Dodisturb")}
      {...rest}
    ></Icon>
  );
}
