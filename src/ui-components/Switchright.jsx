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
export default function Switchright(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Switchright: {} }, variantValues: { style: "Filled" } },
    { overrides: { Switchright: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Switchright: {
          paths: [
            {
              d: "M12.0925 8.97401L12.0925 2.21401L15.4725 5.59401L12.0925 8.97401ZM16.8825 6.30401C17.2725 5.91401 17.2725 5.28401 16.8825 4.89401L12.2925 0.304012C11.6725 -0.325988 10.5925 0.114012 10.5925 1.00401L10.5925 10.174C10.5925 11.064 11.6725 11.514 12.3025 10.884L16.8825 6.30401ZM6.5925 10.184L6.5925 1.00401C6.5925 0.114012 5.5125 -0.335988 4.8825 0.294012L0.2925 4.88401C-0.0975 5.27401 -0.0975 5.90401 0.2925 6.29401L4.8825 10.884C5.5125 11.514 6.5925 11.074 6.5925 10.184Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.22%, 26.71%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Switchright: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Switchright: {
          paths: [
            {
              d: "M0 6.76L0 0L3.38 3.38L0 6.76Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(64.58%, 35.91%)" },
            },
            {
              d: "M12.5 10.38L12.5 3.62L15.88 7L12.5 10.38ZM11 14L18 7L11 0L11 14ZM7 14L7 0L0 7L7 14Z",
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
          d: "M12.5 10.38L12.5 3.62L15.88 7L12.5 10.38ZM11 14L18 7L11 0L11 14ZM7 14L7 0L0 7L7 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Switchright")}
      {...rest}
    ></Icon>
  );
}
