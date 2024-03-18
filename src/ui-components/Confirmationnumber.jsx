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
export default function Confirmationnumber(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Confirmationnumber: {
          paths: [
            {
              d: "M20 6L20 2C20 0.89 19.1 0 18 0L2 0C0.9 0 0.00999999 0.89 0.00999999 2L0.00999999 6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 10C18.9 10 18 9.1 18 8C18 6.9 18.9 6 20 6ZM11 13.5L9 13.5L9 11.5L11 11.5L11 13.5ZM11 9L9 9L9 7L11 7L11 9ZM11 4.5L9 4.5L9 2.5L11 2.5L11 4.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Confirmationnumber: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Confirmationnumber: {
          paths: [
            {
              d: "M20 4.54L20 2C20 0.9 19.1 0 18 0L2 0C0.9 0 0.00999999 0.89 0.00999999 2L0.00999999 4.54C0.00999999 5.23 0.34 5.91 0.95 6.23C1.58 6.58 2 7.24 2 8C2 8.76 1.57 9.43 0.94 9.76C0.34 10.09 0 10.77 0 11.46L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 11.46C20 10.77 19.66 10.09 19.06 9.76C18.43 9.42 18 8.76 18 8C18 7.24 18.43 6.58 19.06 6.24C19.66 5.91 20 5.23 20 4.54ZM11 13.5L9 13.5L9 11.5L11 11.5L11 13.5ZM11 9L9 9L9 7L11 7L11 9ZM11 4.5L9 4.5L9 2.5L11 2.5L11 4.5Z",
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
        Confirmationnumber: {
          paths: [
            {
              d: "M20 6L20 0L0.00999999 0L0.00999999 6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10L0 16L20 16L20 10C18.9 10 18 9.1 18 8C18 6.9 18.9 6 20 6ZM11 13.5L9 13.5L9 11.5L11 11.5L11 13.5ZM11 9L9 9L9 7L11 7L11 9ZM11 4.5L9 4.5L9 2.5L11 2.5L11 4.5Z",
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
        Confirmationnumber: {
          paths: [
            {
              d: "M0.0100002 2.54C1.2 3.23 2 4.52 2 6C2 7.48 1.19 8.77 0 9.46L0 12L16 12L16 9.46C14.81 8.77 14 7.47 14 6C14 4.53 14.81 3.23 16 2.54L16 0L0 0L0.0100002 2.54ZM7 1L9 1L9 3L7 3L7 1ZM7 5L9 5L9 7L7 7L7 5ZM7 9L9 9L9 11L7 11L7 9Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 25%)" },
            },
            {
              d: "M20 6L20 2C20 0.89 19.1 0 18 0L2 0C0.9 0 0.00999999 0.89 0.00999999 2L0.00999999 6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 10C18.9 10 18 9.1 18 8C18 6.9 18.9 6 20 6ZM18 4.54C16.81 5.23 16 6.53 16 8C16 9.47 16.81 10.77 18 11.46L18 14L2 14L2 11.46C3.19 10.77 4 9.47 4 8C4 6.52 3.2 5.23 2.01 4.54L2 2L18 2L18 4.54ZM9 11L11 11L11 13L9 13L9 11ZM9 7L11 7L11 9L9 9L9 7ZM9 3L11 3L11 5L9 5L9 3Z",
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
          d: "M20 6L20 2C20 0.89 19.1 0 18 0L2 0C0.9 0 0.00999999 0.89 0.00999999 2L0.00999999 6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 10C18.9 10 18 9.1 18 8C18 6.9 18.9 6 20 6ZM18 4.54C16.81 5.23 16 6.53 16 8C16 9.47 16.81 10.77 18 11.46L18 14L2 14L2 11.46C3.19 10.77 4 9.47 4 8C4 6.52 3.2 5.23 2.01 4.54L2 2L18 2L18 4.54ZM9 11L11 11L11 13L9 13L9 11ZM9 7L11 7L11 9L9 9L9 7ZM9 3L11 3L11 5L9 5L9 3Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Confirmationnumber")}
      {...rest}
    ></Icon>
  );
}
