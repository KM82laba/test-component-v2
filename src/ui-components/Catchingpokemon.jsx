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
export default function Catchingpokemon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Catchingpokemon: {} }, variantValues: { style: "Filled" } },
    {
      overrides: { Catchingpokemon: {} },
      variantValues: { style: "Outlined" },
    },
    { overrides: { Catchingpokemon: {} }, variantValues: { style: "Round" } },
    { overrides: { Catchingpokemon: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Catchingpokemon: {
          paths: [
            {
              d: "M7.94 0C12.02 0 15.39 3.05 15.88 7L11.82 7C11.37 5.27 9.8 4 7.94 4C6.08 4 4.51 5.27 4.07 7L0 7C0.49 3.05 3.86 0 7.94 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.92%, 16.67%)" },
            },
            {
              d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 2C14.08 2 17.45 5.05 17.94 9L13.88 9C13.43 7.27 11.86 6 10 6C8.14 6 6.57 7.27 6.13 9L2.06 9C2.55 5.05 5.92 2 10 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10C8 8.9 8.9 8 10 8C11.1 8 12 8.9 12 10ZM10 18C5.92 18 2.55 14.95 2.06 11L6.12 11C6.56 12.73 8.13 14 9.99 14C11.85 14 13.42 12.73 13.86 11L17.92 11C17.45 14.95 14.08 18 10 18Z",
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
          d: "M12.5 10C12.5 11.38 11.38 12.5 10 12.5C8.62 12.5 7.5 11.38 7.5 10C7.5 8.62 8.62 7.5 10 7.5C11.38 7.5 12.5 8.62 12.5 10ZM20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10ZM18 10L14 10C14 7.79 12.21 6 10 6C7.79 6 6 7.79 6 10L2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Catchingpokemon")}
      {...rest}
    ></Icon>
  );
}
