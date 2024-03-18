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
export default function Systemupdate(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Systemupdate: {} }, variantValues: { style: "Filled" } },
    { overrides: { Systemupdate: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Systemupdate: {
          paths: [
            {
              d: "M12 0.00999999L2 0C0.9 0 0 0.9 0 2L0 20C0 21.1 0.9 22 2 22L12 22C13.1 22 14 21.1 14 20L14 2C14 0.9 13.1 0.00999999 12 0.00999999ZM12 18L2 18L2 4L12 4L12 18ZM9.79 12L8 12L8 8C8 7.45 7.55 7 7 7C6.45 7 6 7.45 6 8L6 12L4.21 12C3.76 12 3.54 12.54 3.86 12.85L6.65 15.64C6.85 15.84 7.16 15.84 7.36 15.64L10.15 12.85C10.46 12.54 10.24 12 9.79 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Systemupdate: {
          paths: [
            {
              d: "M0 0L0 22L14 22L14 0L0 0ZM12 18L2 18L2 4L12 4L12 18ZM11 12L8 12L8 7L6 7L6 12L3 12L7 16L11 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Systemupdate: {
          paths: [
            {
              d: "M0 14L10 14L10 0L0 0L0 14ZM4 8L4 3L6 3L6 8L9 8L5 12L1 8L4 8Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 20.83%)" },
            },
            {
              d: "M11 12L8 12L8 7L6 7L6 12L3 12L7 16L11 12ZM12 0.00999999L2 0C0.9 0 0 0.9 0 2L0 20C0 21.1 0.9 22 2 22L12 22C13.1 22 14 21.1 14 20L14 2C14 0.9 13.1 0.00999999 12 0.00999999ZM12 18L2 18L2 4L12 4L12 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 4.17%)" },
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
          d: "M12 0.00999999L2 0C0.9 0 0 0.9 0 2L0 20C0 21.1 0.9 22 2 22L12 22C13.1 22 14 21.1 14 20L14 2C14 0.9 13.1 0.00999999 12 0.00999999ZM12 18L2 18L2 4L12 4L12 18ZM11 12L8 12L8 7L6 7L6 12L3 12L7 16L11 12Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Systemupdate")}
      {...rest}
    ></Icon>
  );
}
