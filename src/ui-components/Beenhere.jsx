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
export default function Beenhere(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Beenhere: {
          paths: [
            {
              d: "M16 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 14.93C0 15.62 0.35 16.23 0.88 16.59L9 22L17.11 16.59C17.64 16.23 17.99 15.62 17.99 14.93L18 2C18 0.9 17.1 0 16 0ZM7 15L2 10L3.41 8.59L7 12.17L14.59 4.58L16 6L7 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Beenhere: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Beenhere: {
          paths: [
            {
              d: "M16 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 14.93C0 15.62 0.35 16.23 0.88 16.59L8.45 21.63C8.79 21.85 9.22 21.85 9.56 21.63L17.12 16.59C17.65 16.23 18 15.62 18 14.93L18 2C18 0.9 17.1 0 16 0ZM15.3 6.7L7.71 14.29C7.32 14.68 6.69 14.68 6.3 14.29L2.71 10.7C2.32 10.31 2.32 9.68 2.71 9.29C3.1 8.9 3.73 8.9 4.12 9.29L7 12.17L13.88 5.29C14.27 4.9 14.9 4.9 15.29 5.29C15.68 5.68 15.69 6.31 15.3 6.7Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 4.59%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Beenhere: {
          paths: [
            {
              d: "M0.00999999 0L0 16L9 22L17.99 16L18 0L0.00999999 0ZM7 15L2 10L3.41 8.58L7 12.17L14.59 4.58L16 6L7 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Beenhere: {
          paths: [
            {
              d: "M14 0L0 0L0 12.93L7 17.59L14 12.92L14 0ZM5 13L1 9L2.41 7.59L4.99 10.17L11.58 3.58L13 5L5 13Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 12.5%)" },
            },
            {
              d: "M16 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 14.93C0 15.62 0.35 16.23 0.88 16.59L9 22L17.11 16.59C17.64 16.23 17.99 15.62 17.99 14.93L18 2C18 0.9 17.1 0 16 0ZM9 19.6L2 14.94L2 2L16 2L16 14.93L9 19.6ZM6.99 12.18L4.41 9.59L3 11L7 15L15 7L13.58 5.58L6.99 12.18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 4.17%)" },
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
          d: "M16 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 14.93C0 15.62 0.35 16.23 0.88 16.59L9 22L17.11 16.59C17.64 16.23 17.99 15.62 17.99 14.93L18 2C18 0.9 17.1 0 16 0ZM9 19.6L2 14.94L2 2L16 2L16 14.93L9 19.6ZM6.99 12.18L4.41 9.59L3 11L7 15L15 7L13.58 5.58L6.99 12.18Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Beenhere")}
      {...rest}
    ></Icon>
  );
}
