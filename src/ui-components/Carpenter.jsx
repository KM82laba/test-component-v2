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
export default function Carpenter(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Carpenter: {
          paths: [
            {
              d: "M16.62 12.73L3.89 0L0 3.89L8.13 15.56C7.35 16.34 7.35 17.61 8.13 18.39L9.54 19.8C10.32 20.58 11.59 20.58 12.37 19.8L16.61 15.56C17.4 14.78 17.4 13.51 16.62 12.73ZM10.96 18.38L9.55 16.97L13.79 12.73L15.2 14.14L10.96 18.38Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.16%, 7.53%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Carpenter: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Carpenter: {
          paths: [
            {
              d: "M16.3214 12.3125L4.30136 0.2925C3.91136 -0.0975 3.28136 -0.0975 2.89136 0.2925L0.29136 2.8825C-0.0486396 3.2225 -0.0986398 3.7625 0.18136 4.1625L7.83136 15.1425C7.05136 15.9225 7.05136 17.1925 7.83136 17.9725L9.24136 19.3825C10.0214 20.1625 11.2914 20.1625 12.0714 19.3825L16.3114 15.1425C17.1014 14.3625 17.1014 13.0925 16.3214 12.3125ZM10.6614 17.9625L9.25136 16.5525L13.4914 12.3125L14.9014 13.7225L10.6614 17.9625Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.78%, 8.4%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Carpenter: {
          paths: [
            {
              d: "M3.89 0L0 3.89L8.13 15.56L6.72 16.97L10.96 21.21L18.03 14.14L3.89 0ZM9.55 16.97L13.79 12.73L15.2 14.14L10.96 18.38L9.55 16.97Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.44%, 5.81%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Carpenter: {
          paths: [
            {
              d: "M0 1.29L1.29 0L9.78 8.49L6.97 11.3L0 1.29Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(23.79%, 18.04%)" },
            },
            {
              d: "M16.62 12.73L3.89 0L0 3.89L8.13 15.56C7.35 16.34 7.35 17.61 8.13 18.39L9.54 19.8C10.32 20.58 11.59 20.58 12.37 19.8L16.61 15.56C17.4 14.78 17.4 13.51 16.62 12.73ZM2.6 4.12L3.89 2.83L12.38 11.32L9.57 14.13L2.6 4.12ZM10.96 18.38L9.55 16.97L13.79 12.73L15.2 14.14L10.96 18.38Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.96%, 6.25%)" },
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
          d: "M16.62 12.73L3.89 0L0 3.89L8.13 15.56C7.35 16.34 7.35 17.61 8.13 18.39L9.54 19.8C10.32 20.58 11.59 20.58 12.37 19.8L16.61 15.56C17.4 14.78 17.4 13.51 16.62 12.73ZM2.6 4.12L3.89 2.83L12.38 11.32L9.57 14.13L2.6 4.12ZM10.96 18.38L9.55 16.97L13.79 12.73L15.2 14.14L10.96 18.38Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(14.16%, 7.53%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Carpenter")}
      {...rest}
    ></Icon>
  );
}
