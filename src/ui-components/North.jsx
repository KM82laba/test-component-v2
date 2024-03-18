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
export default function North(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { North: {} }, variantValues: { style: "Filled" } },
    { overrides: { North: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        North: {
          paths: [
            {
              d: "M0.2925 7.2925C0.6825 7.6825 1.3125 7.6825 1.7025 7.2925L5.5825 3.4225L5.5825 18.5925C5.5825 19.1425 6.0325 19.5925 6.5825 19.5925C7.1325 19.5925 7.5825 19.1425 7.5825 18.5925L7.5825 3.4225L11.4625 7.3025C11.8525 7.6925 12.4825 7.6925 12.8725 7.3025C13.2625 6.9125 13.2625 6.2825 12.8725 5.8925L7.2825 0.2925C6.8925 -0.0975 6.2625 -0.0975 5.8725 0.2925L0.2925 5.8825C-0.0975 6.2725 -0.0975 6.9125 0.2925 7.2925Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(22.57%, 9.18%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { North: {} }, variantValues: { style: "Sharp" } },
    { overrides: { North: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M0 7L1.41 8.41L6 3.83L6 20L8 20L8 3.83L12.59 8.42L14 7L7 0L0 7Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "North")}
      {...rest}
    ></Icon>
  );
}
