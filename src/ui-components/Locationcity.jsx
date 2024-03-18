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
export default function Locationcity(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Locationcity: {} }, variantValues: { style: "Filled" } },
    { overrides: { Locationcity: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Locationcity: {
          paths: [
            {
              d: "M12 8.5825L12 3.4125C12 2.8825 11.79 2.3725 11.41 2.0025L9.7 0.2925C9.31 -0.0975 8.68 -0.0975 8.29 0.2925L6.59 1.9925C6.21 2.3725 6 2.8825 6 3.4125L6 4.5825L2 4.5825C0.9 4.5825 0 5.4825 0 6.5825L0 16.5825C0 17.6825 0.9 18.5825 2 18.5825L16 18.5825C17.1 18.5825 18 17.6825 18 16.5825L18 10.5825C18 9.4825 17.1 8.5825 16 8.5825L12 8.5825ZM4 16.5825L2 16.5825L2 14.5825L4 14.5825L4 16.5825ZM4 12.5825L2 12.5825L2 10.5825L4 10.5825L4 12.5825ZM4 8.5825L2 8.5825L2 6.5825L4 6.5825L4 8.5825ZM10 16.5825L8 16.5825L8 14.5825L10 14.5825L10 16.5825ZM10 12.5825L8 12.5825L8 10.5825L10 10.5825L10 12.5825ZM10 8.5825L8 8.5825L8 6.5825L10 6.5825L10 8.5825ZM10 4.5825L8 4.5825L8 2.5825L10 2.5825L10 4.5825ZM16 16.5825L14 16.5825L14 14.5825L16 14.5825L16 16.5825ZM16 12.5825L14 12.5825L14 10.5825L16 10.5825L16 12.5825Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 11.29%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Locationcity: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Locationcity: {
          paths: [
            {
              d: "M12 9L12 3L9 0L6 3L6 5L0 5L0 19L18 19L18 9L12 9ZM4 17L2 17L2 15L4 15L4 17ZM4 13L2 13L2 11L4 11L4 13ZM4 9L2 9L2 7L4 7L4 9ZM10 17L8 17L8 15L10 15L10 17ZM10 13L8 13L8 11L10 11L10 13ZM10 9L8 9L8 7L10 7L10 9ZM10 5L8 5L8 3L10 3L10 5ZM16 17L14 17L14 15L16 15L16 17ZM16 13L14 13L14 11L16 11L16 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
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
          d: "M12 9L12 3L9 0L6 3L6 5L0 5L0 19L18 19L18 9L12 9ZM4 17L2 17L2 15L4 15L4 17ZM4 13L2 13L2 11L4 11L4 13ZM4 9L2 9L2 7L4 7L4 9ZM10 17L8 17L8 15L10 15L10 17ZM10 13L8 13L8 11L10 11L10 13ZM10 9L8 9L8 7L10 7L10 9ZM10 5L8 5L8 3L10 3L10 5ZM16 17L14 17L14 15L16 15L16 17ZM16 13L14 13L14 11L16 11L16 13Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 10.42%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Locationcity")}
      {...rest}
    ></Icon>
  );
}
