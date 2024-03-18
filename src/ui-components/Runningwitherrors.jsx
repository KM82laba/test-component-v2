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
export default function Runningwitherrors(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Runningwitherrors: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Runningwitherrors: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Runningwitherrors: {
          paths: [
            {
              d: "M19 16C18.45 16 18 15.55 18 15L18 9C18 8.45 18.45 8 19 8C19.55 8 20 8.45 20 9L20 15C20 15.55 19.55 16 19 16ZM19 18C18.45 18 18 18.45 18 19C18 19.55 18.45 20 19 20C19.55 20 20 19.55 20 19C20 18.45 19.55 18 19 18ZM16 15.29C14.53 16.95 12.39 18 10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2L10 11L17.55 3.45C15.72 1.34 13.02 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C12.25 20 14.33 19.26 16 18L16 15.29Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Runningwitherrors: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: { Runningwitherrors: {} },
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
          d: "M20 8L20 16L18 16L18 8L20 8ZM18 18L18 20L20 20L20 18L18 18ZM16 15.29C14.53 16.95 12.39 18 10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2L10 11L17.55 3.45C15.72 1.34 13.02 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C12.25 20 14.33 19.26 16 18L16 15.29Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Runningwitherrors")}
      {...rest}
    ></Icon>
  );
}
