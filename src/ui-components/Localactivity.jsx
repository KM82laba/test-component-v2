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
export default function Localactivity(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Localactivity: {
          paths: [
            {
              d: "M18 8C18 6.9 18.9 6 20 6L20 2C20 0.9 19.1 0 18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0.00999999 6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 10C18.9 10 18 9.1 18 8ZM13.58 12.8L10 10.5L6.42 12.8L7.5 8.68L4.21 5.99L8.45 5.74L10 1.8L11.54 5.75L15.78 6L12.49 8.69L13.58 12.8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Localactivity: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Localactivity: {
          paths: [
            {
              d: "M18 8C18 7.24 18.43 6.58 19.06 6.24C19.66 5.91 20 5.23 20 4.54L20 2C20 0.9 19.1 0 18 0L2 0C0.9 0 0.00999999 0.89 0.00999999 1.99L0.00999999 4.54C0.00999999 5.23 0.34 5.91 0.95 6.23C1.58 6.58 2 7.24 2 8C2 8.76 1.57 9.43 0.94 9.76C0.34 10.09 0 10.77 0 11.46L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 11.46C20 10.77 19.66 10.09 19.06 9.76C18.43 9.42 18 8.76 18 8ZM12.5 12.1L10 10.5L7.5 12.11C7.12 12.35 6.63 12 6.75 11.56L7.5 8.68L5.2 6.8C4.85 6.51 5.03 5.94 5.49 5.91L8.45 5.74L9.53 2.99C9.7 2.57 10.3 2.57 10.46 2.99L11.54 5.75L14.5 5.92C14.95 5.95 15.14 6.52 14.79 6.81L12.49 8.69L13.25 11.55C13.37 12 12.88 12.35 12.5 12.1Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Localactivity: {
          paths: [
            {
              d: "M18 8C18 6.9 18.9 6 20 6L20 0L0.00999999 0L0.00999999 6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10L0 16L20 16L20 10C18.9 10 18 9.1 18 8ZM13.58 12.8L10 10.5L6.42 12.8L7.5 8.68L4.21 5.99L8.45 5.74L10 1.8L11.54 5.75L15.78 6L12.49 8.69L13.58 12.8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Localactivity: {
          paths: [
            {
              d: "M0.0100002 2.54C1.2 3.23 2 4.52 2 6C2 7.48 1.19 8.77 0 9.46L0 12L16 12L16 9.46C14.81 8.77 14 7.47 14 6C14 4.53 14.81 3.23 16 2.54L16 0L0 0L0.0100002 2.54ZM6.73 4.22L8 1L9.26 4.23L12.73 4.43L10.04 6.63L10.93 10L8 8.12L5.07 10L5.95 6.63L3.26 4.43L6.73 4.22Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 25%)" },
            },
            {
              d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0.00999999 6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 10C18.9 10 18 9.1 18 8C18 6.9 18.9 6 20 6L20 2C20 0.9 19.1 0 18 0ZM18 4.54C16.81 5.23 16 6.53 16 8C16 9.47 16.81 10.77 18 11.46L18 14L2 14L2 11.46C3.19 10.77 4 9.47 4 8C4 6.52 3.2 5.23 2.01 4.54L2 2L18 2L18 4.54ZM7.07 12L10 10.12L12.93 12L12.04 8.64L14.73 6.44L11.26 6.23L10 3L8.73 6.22L5.26 6.43L7.95 8.63L7.07 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
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
          d: "M20 6L20 2C20 0.9 19.1 0 18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0.00999999 6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 10C18.9 10 18 9.1 18 8C18 6.9 18.9 6 20 6ZM18 4.54C16.81 5.23 16 6.53 16 8C16 9.47 16.81 10.77 18 11.46L18 14L2 14L2 11.46C3.19 10.77 4 9.47 4 8C4 6.52 3.2 5.23 2.01 4.54L2 2L18 2L18 4.54ZM7.07 12L10 10.12L12.93 12L12.04 8.64L14.73 6.44L11.26 6.23L10 3L8.73 6.22L5.26 6.43L7.95 8.63L7.07 12Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Localactivity")}
      {...rest}
    ></Icon>
  );
}
