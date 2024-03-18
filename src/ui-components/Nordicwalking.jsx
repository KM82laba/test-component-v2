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
export default function Nordicwalking(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Nordicwalking: {} }, variantValues: { style: "Filled" } },
    { overrides: { Nordicwalking: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Nordicwalking: {
          paths: [
            {
              d: "M14.0671 21.5C13.6571 21.5 13.3171 21.16 13.3171 20.75L13.3171 12.5L14.8171 12.5L14.8171 20.75C14.8171 21.16 14.4771 21.5 14.0671 21.5ZM0.747134 21.5C1.09713 21.5 1.40713 21.26 1.47713 20.91L3.34713 12.5L1.81713 12.5L0.0171339 20.59C-0.0828661 21.06 0.267134 21.5 0.747134 21.5ZM9.31713 4C10.4171 4 11.3171 3.1 11.3171 2C11.3171 0.9 10.4171 0 9.31713 0C8.21713 0 7.31713 0.9 7.31713 2C7.31713 3.1 8.21713 4 9.31713 4ZM9.81713 21.5C10.3671 21.5 10.8171 21.05 10.8171 20.5L10.8171 14.86C10.8171 14.31 10.5971 13.79 10.1971 13.41L8.71713 12L9.31713 9C10.3871 10.24 11.9371 11.13 13.6771 11.41C14.2771 11.51 14.8171 11.03 14.8171 10.42C14.8171 9.93 14.4671 9.51 13.9871 9.44C12.4571 9.2 11.1971 8.3 10.5171 7.11L9.51713 5.51C8.95713 4.62 7.83713 4.26 6.85713 4.67L3.03713 6.28C2.29713 6.6 1.81713 7.32 1.81713 8.12L1.81713 10.5C1.81713 11.05 2.26713 11.5 2.81713 11.5C3.36713 11.5 3.81713 11.05 3.81713 10.5L3.81713 8.1L5.61713 7.4L3.06713 20.26C2.93713 20.9 3.42713 21.5 4.08713 21.5C4.57713 21.5 4.99713 21.16 5.10713 20.69L6.71713 13.5L8.81713 15.5L8.81713 20.5C8.81713 21.05 9.26713 21.5 9.81713 21.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(19.13%, 5.21%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Nordicwalking: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Nordicwalking: {
          paths: [
            {
              d: "M15 21.5L13.5 21.5L13.5 12.5L15 12.5L15 21.5ZM3.53 12.5L2 12.5L0 21.5L1.53 21.5L3.53 12.5ZM9.5 4C10.6 4 11.5 3.1 11.5 2C11.5 0.9 10.6 0 9.5 0C8.4 0 7.5 0.9 7.5 2C7.5 3.1 8.4 4 9.5 4ZM5.8 7.4L3 21.5L5.1 21.5L6.9 13.5L9 15.5L9 21.5L11 21.5L11 14L8.9 12L9.5 9C10.8 10.5 12.8 11.5 15 11.5L15 9.5C13.1 9.5 11.5 8.5 10.7 7.1L9.7 5.5C9.14 4.61 8.02 4.25 7.05 4.66L2 6.8L2 11.5L4 11.5L4 8.1L5.8 7.4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 6.25%)" },
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
          d: "M15 21.5L13.5 21.5L13.5 12.5L15 12.5L15 21.5ZM3.53 12.5L2 12.5L0 21.5L1.53 21.5L3.53 12.5ZM9.5 4C10.6 4 11.5 3.1 11.5 2C11.5 0.9 10.6 0 9.5 0C8.4 0 7.5 0.9 7.5 2C7.5 3.1 8.4 4 9.5 4ZM5.8 7.4L3 21.5L5.1 21.5L6.9 13.5L9 15.5L9 21.5L11 21.5L11 14L8.9 12L9.5 9C10.8 10.5 12.8 11.5 15 11.5L15 9.5C13.1 9.5 11.5 8.5 10.7 7.1L9.7 5.5C9.14 4.61 8.02 4.25 7.05 4.66L2 6.8L2 11.5L4 11.5L4 8.1L5.8 7.4Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 5.21%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Nordicwalking")}
      {...rest}
    ></Icon>
  );
}
