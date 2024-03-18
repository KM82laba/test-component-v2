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
export default function South(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { South: {} }, variantValues: { style: "Filled" } },
    { overrides: { South: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        South: {
          paths: [
            {
              d: "M12.8825 12.29C12.4925 11.9 11.8625 11.9 11.4725 12.29L7.5825 16.17L7.5825 1C7.5825 0.45 7.1325 0 6.5825 0C6.0325 0 5.5825 0.45 5.5825 1L5.5825 16.18L1.7025 12.3C1.3125 11.91 0.6825 11.91 0.2925 12.3C-0.0975 12.69 -0.0975 13.32 0.2925 13.71L5.8825 19.3C6.2725 19.69 6.9025 19.69 7.2925 19.3L12.8825 13.71C13.2625 13.32 13.2625 12.68 12.8825 12.29Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(22.57%, 9.18%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { South: {} }, variantValues: { style: "Sharp" } },
    { overrides: { South: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M14 13L12.59 11.59L8 16.17L8 0L6 0L6 16.17L1.41 11.58L0 13L7 20L14 13Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "South")}
      {...rest}
    ></Icon>
  );
}
