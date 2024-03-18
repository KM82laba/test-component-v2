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
export default function Crib(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Crib: {
          paths: [
            {
              d: "M14 5L8 5L8 0L4 0C1.79 0 0 1.79 0 4L0 10C0 11.1 0.9 12 2 12L4 12L4 14.93C3.39 14.58 2.84 14.15 2.35 13.66L0.93 15.08C2.74 16.88 5.24 18 8 18C10.76 18 13.26 16.88 15.07 15.07L13.65 13.65C13.16 14.14 12.6 14.57 12 14.92L12 12L14 12C15.1 12 16 11.1 16 10L16 7C16 5.9 15.1 5 14 5ZM10 15.75C9.36 15.91 8.69 16 8 16C7.31 16 6.64 15.91 6 15.75L6 12L10 12L10 15.75Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Crib: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Crib: {
          paths: [
            {
              d: "M14.32 14.32C13.96 13.96 13.4 13.92 13.01 14.24C12.69 14.49 12.36 14.72 12.01 14.93L12.01 12L14.01 12C15.11 12 16.01 11.1 16.01 10L16.01 7C16.01 5.9 15.11 5 14.01 5L8.01 5L8.01 2C8.01 0.9 7.11 0 6.01 0L4 0C1.79 0 0 1.79 0 4L0 10C0 11.1 0.9 12 2 12L4 12L4 14.93C3.65 14.73 3.31 14.5 3 14.24C2.61 13.92 2.04 13.97 1.69 14.32C1.27 14.74 1.3 15.44 1.77 15.82C3.47 17.18 5.64 18 8 18C10.36 18 12.53 17.18 14.24 15.82C14.71 15.44 14.74 14.74 14.32 14.32ZM10 15.75C9.36 15.91 8.69 16 8 16C7.31 16 6.64 15.91 6 15.75L6 12L10 12L10 15.75Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.65%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Crib: {
          paths: [
            {
              d: "M16 5L8 5L8 0L4 0C1.79 0 0 1.79 0 4L0 12L4 12L4 14.93C3.39 14.58 2.84 14.15 2.35 13.66L0.93 15.08C2.74 16.88 5.24 18 8 18C10.76 18 13.26 16.88 15.07 15.07L13.65 13.65C13.16 14.14 12.6 14.57 12 14.92L12 12L16 12L16 5ZM10 15.75C9.36 15.91 8.69 16 8 16C7.31 16 6.64 15.91 6 15.75L6 12L10 12L10 15.75Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Crib: {
          paths: [
            {
              d: "M12 8L0 8L0 2C0 0.9 0.9 0 2 0L4 0L4 5L12 5L12 8Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 25%)" },
            },
            {
              d: "M14 5L8 5L8 0L4 0C1.79 0 0 1.79 0 4L0 10C0 11.1 0.9 12 2 12L4 12L4 14.93C3.39 14.58 2.84 14.15 2.35 13.66L0.93 15.08C2.74 16.88 5.24 18 8 18C10.76 18 13.26 16.88 15.07 15.07L13.65 13.65C13.16 14.14 12.6 14.57 12 14.92L12 12L14 12C15.1 12 16 11.1 16 10L16 7C16 5.9 15.1 5 14 5ZM10 15.75C9.36 15.91 8.69 16 8 16C7.31 16 6.64 15.91 6 15.75L6 12L10 12L10 15.75ZM14 10L2 10L2 4C2 2.9 2.9 2 4 2L6 2L6 7L14 7L14 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
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
          d: "M14 5L8 5L8 0L4 0C1.79 0 0 1.79 0 4L0 10C0 11.1 0.9 12 2 12L4 12L4 14.93C3.39 14.58 2.84 14.15 2.35 13.66L0.93 15.08C2.74 16.88 5.24 18 8 18C10.76 18 13.26 16.88 15.07 15.07L13.65 13.65C13.16 14.14 12.6 14.57 12 14.92L12 12L14 12C15.1 12 16 11.1 16 10L16 7C16 5.9 15.1 5 14 5ZM10 15.75C9.36 15.91 8.69 16 8 16C7.31 16 6.64 15.91 6 15.75L6 12L10 12L10 15.75ZM14 10L2 10L2 4C2 2.9 2.9 2 4 2L6 2L6 7L14 7L14 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Crib")}
      {...rest}
    ></Icon>
  );
}
