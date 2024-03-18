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
export default function Ricebowl(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Ricebowl: {
          paths: [
            {
              d: "M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 13.69 2.47 16.86 6 18.25L6 20L14 20L14 18.25C17.53 16.86 20 13.69 20 10ZM18 10L14 10L14 3.08C16.39 4.47 18 7.05 18 10ZM12 2.26L12 10L8 10L8 2.26C8.64 2.1 9.31 2 10 2C10.69 2 11.36 2.1 12 2.26ZM2 10C2 7.05 3.61 4.47 6 3.08L6 10L2 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Ricebowl: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Ricebowl: {
          paths: [
            {
              d: "M20.0003 10.0009C20.0003 4.52088 15.6003 0.0708821 10.1403 0.000882068C6.52032 -0.0491179 3.29032 2.03088 1.43032 5.14088C-1.89968 10.6909 0.980322 16.2709 6.00032 18.2509L6.00032 18.5009C6.00032 19.3309 6.67032 20.0009 7.50032 20.0009L12.5003 20.0009C13.3303 20.0009 14.0003 19.3309 14.0003 18.5009L14.0003 18.2509C17.5303 16.8609 20.0003 13.6909 20.0003 10.0009ZM18.0003 10.0009L14.0003 10.0009L14.0003 3.08088C16.3903 4.47088 18.0003 7.05088 18.0003 10.0009ZM12.0003 2.26088L12.0003 10.0009L8.00032 10.0009L8.00032 2.26088C8.64032 2.10088 9.31032 2.00088 10.0003 2.00088C10.6903 2.00088 11.3603 2.10088 12.0003 2.26088ZM2.00032 10.0009C2.00032 7.05088 3.61032 4.47088 6.00032 3.08088L6.00032 10.0009L2.00032 10.0009Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Ricebowl: {
          paths: [
            {
              d: "M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 13.69 2.47 16.86 6 18.25L6 20L14 20L14 18.25C17.53 16.86 20 13.69 20 10ZM18 10L14 10L14 3.08C16.39 4.47 18 7.05 18 10ZM12 2.26L12 10L8 10L8 2.26C8.64 2.1 9.31 2 10 2C10.69 2 11.36 2.1 12 2.26ZM2 10C2 7.05 3.61 4.47 6 3.08L6 10L2 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Ricebowl: {
          paths: [
            {
              d: "M15.33 0.0100002C14.67 1.93 13.09 3.55 10.93 4.4L9.67 4.89L9.67 6.01L5.67 6.01L5.67 4.89L4.4 4.39C2.24 3.54 0.66 1.92 0 0L15.33 0",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(18.04%, 58.29%)" },
            },
            {
              d: "M17.66 12C17 13.92 15.42 15.54 13.26 16.39L12 16.88L12 18L8 18L8 16.88L6.73 16.38C4.57 15.53 2.99 13.91 2.33 11.99L17.66 11.99M10 0C4.48 0 0 4.48 0 10C0 13.69 2.47 16.86 6 18.25L6 20L14 20L14 18.25C17.53 16.86 20 13.69 20 10C20 4.48 15.52 0 10 0ZM8 10L8 2.26C8.64 2.1 9.31 2 10 2C10.69 2 11.36 2.1 12 2.26L12 10L8 10ZM14 10L14 3.08C16.39 4.47 18 7.04 18 10L14 10ZM2 10C2 7.05 3.61 4.47 6 3.08L6 10L2 10Z",
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
          d: "M17.66 12C17 13.92 15.42 15.54 13.26 16.39L12 16.88L12 18L8 18L8 16.88L6.73 16.38C4.57 15.53 2.99 13.91 2.33 11.99L17.66 11.99M10 0C4.48 0 0 4.48 0 10C0 13.69 2.47 16.86 6 18.25L6 20L14 20L14 18.25C17.53 16.86 20 13.69 20 10C20 4.48 15.52 0 10 0ZM8 10L8 2.26C8.64 2.1 9.31 2 10 2C10.69 2 11.36 2.1 12 2.26L12 10L8 10ZM14 10L14 3.08C16.39 4.47 18 7.04 18 10L14 10ZM2 10C2 7.05 3.61 4.47 6 3.08L6 10L2 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Ricebowl")}
      {...rest}
    ></Icon>
  );
}
