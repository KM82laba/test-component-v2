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
export default function Starhalf(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Starhalf: {} }, variantValues: { style: "Filled" } },
    { overrides: { Starhalf: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Starhalf: {
          paths: [
            {
              d: "M16.207 5.4775L11.367 5.0575L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0675L0.916957 5.4775C0.0369575 5.5475 -0.323043 6.6475 0.346957 7.2275L4.01696 10.4075L2.91696 15.1275C2.71696 15.9875 3.64696 16.6675 4.40696 16.2075L8.55696 13.7075L12.707 16.2175C13.467 16.6775 14.397 15.9975 14.197 15.1375L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.087 5.5475 16.207 5.4775ZM8.55696 11.8375L8.55696 2.5375L10.267 6.5775L14.647 6.9575L11.327 9.8375L12.327 14.1175L8.55696 11.8375Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.34%, 15.9%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Starhalf: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Starhalf: {
          paths: [
            {
              d: "M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z",
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
          d: "M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 10.42%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Starhalf")}
      {...rest}
    ></Icon>
  );
}
