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
export default function Transgender(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Transgender: {} }, variantValues: { style: "Filled" } },
    { overrides: { Transgender: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Transgender: {
          paths: [
            {
              d: "M20 0L16 0C15.45 0 15 0.45 15 1C15 1.55 15.45 2 16 2L17.58 2L13.61 5.97C12.73 5.36 11.66 5 10.5 5C9.34 5 8.27 5.36 7.39 5.97L6.74 5.32L7.44 4.62C7.83 4.23 7.83 3.6 7.44 3.21C7.05 2.82 6.42 2.82 6.03 3.21L5.33 3.91L3.42 2L5 2C5.55 2 6 1.55 6 1C6 0.45 5.55 0 5 0L1 0C0.45 0 0 0.45 0 1L0 5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5L2 3.42L3.91 5.32L3.2 6.03C2.81 6.42 2.81 7.05 3.2 7.44C3.59 7.83 4.22 7.83 4.61 7.44L5.32 6.73L5.97 7.38C5.36 8.27 5 9.34 5 10.5C5 13.2 6.94 15.44 9.5 15.91L9.5 18L8.5 18C7.95 18 7.5 18.45 7.5 19C7.5 19.55 7.95 20 8.5 20L9.5 20L9.5 21C9.5 21.55 9.95 22 10.5 22C11.05 22 11.5 21.55 11.5 21L11.5 20L12.5 20C13.05 20 13.5 19.55 13.5 19C13.5 18.45 13.05 18 12.5 18L11.5 18L11.5 15.91C14.06 15.44 16 13.2 16 10.5C16 9.34 15.64 8.27 15.03 7.38L19 3.42L19 5C19 5.55 19.45 6 20 6C20.55 6 21 5.55 21 5L21 1C21 0.45 20.55 0 20 0ZM10.5 14C8.57 14 7 12.43 7 10.5C7 8.57 8.57 7 10.5 7C12.43 7 14 8.57 14 10.5C14 12.43 12.43 14 10.5 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.25%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Transgender: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Transgender: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M10.5 7C12.43 7 14 8.57 14 10.5C14 12.43 12.43 14 10.5 14C8.57 14 7 12.43 7 10.5C7 8.57 8.57 7 10.5 7ZM15.03 7.38L19 3.42L19 6L21 6L21 0L15 0L15 2L17.58 2L13.61 5.97C12.73 5.36 11.66 5 10.5 5C9.34 5 8.27 5.36 7.39 5.97L6.74 5.32L8.15 3.91L6.74 2.49L5.32 3.9L3.42 2L6 2L6 0L0 0L0 6L2 6L2 3.42L3.91 5.32L2.49 6.74L3.9 8.15L5.31 6.74L5.96 7.39C5.36 8.27 5 9.34 5 10.5C5 13.2 6.94 15.44 9.5 15.91L9.5 18L7.5 18L7.5 20L9.5 20L9.5 22L11.5 22L11.5 20L13.5 20L13.5 18L11.5 18L11.5 15.91C14.06 15.44 16 13.2 16 10.5C16 9.34 15.64 8.27 15.03 7.38Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(6.25%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Transgender")}
      {...rest}
    ></Icon>
  );
}
