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
export default function Switchleft(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Switchleft: {} }, variantValues: { style: "Filled" } },
    { overrides: { Switchleft: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Switchleft: {
          paths: [
            {
              d: "M5.0825 2.21401L5.0825 8.97401L1.7025 5.59401L5.0825 2.21401ZM0.2925 4.88401C-0.0975 5.27401 -0.0975 5.90401 0.2925 6.29401L4.8825 10.884C5.5025 11.514 6.5825 11.074 6.5825 10.184L6.5825 1.00401C6.5825 0.114012 5.5025 -0.335988 4.8725 0.294012L0.2925 4.88401ZM10.5825 1.00401L10.5825 10.174C10.5825 11.064 11.6625 11.514 12.2925 10.884L16.8825 6.29401C17.2725 5.90401 17.2725 5.27401 16.8825 4.88401L12.2925 0.294012C11.6625 -0.325988 10.5825 0.114012 10.5825 1.00401Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.22%, 26.71%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Switchleft: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Switchleft: {
          paths: [
            {
              d: "M3.38 0L3.38 6.76L0 3.38L3.38 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(21.33%, 35.91%)" },
            },
            {
              d: "M5.5 3.62L5.5 10.38L2.12 7L5.5 3.62ZM7 0L0 7L7 14L7 0ZM11 0L11 14L18 7L11 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 20.83%)" },
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
          d: "M5.5 3.62L5.5 10.38L2.12 7L5.5 3.62ZM7 0L0 7L7 14L7 0ZM11 0L11 14L18 7L11 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Switchleft")}
      {...rest}
    ></Icon>
  );
}
