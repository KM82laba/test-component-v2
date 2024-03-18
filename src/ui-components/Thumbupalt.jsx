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
export default function Thumbupalt(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Thumbupalt: {
          paths: [
            {
              d: "M0 18L2 18C2.55 18 3 17.55 3 17L3 8C3 7.45 2.55 7 2 7L0 7L0 18ZM19.83 10.88C19.94 10.63 20 10.36 20 10.08L20 9C20 7.9 19.1 7 18 7L12.5 7L13.42 2.35C13.47 2.13 13.44 1.89 13.34 1.69C13.11 1.24 12.82 0.83 12.46 0.47L12 0L5.59 6.41C5.21 6.79 5 7.3 5 7.83L5 15.67C5 16.95 6.05 18 7.34 18L15.45 18C16.15 18 16.81 17.63 17.17 17.03L19.83 10.88Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Thumbupalt: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Thumbupalt: {
          paths: [
            {
              d: "M12.12 0.443758L6.58 5.98376C6.21 6.35376 6 6.86376 6 7.39376L6 17.3838C6 18.4838 6.9 19.3838 8 19.3838L17 19.3838C17.8 19.3838 18.52 18.9038 18.84 18.1738L22.1 10.5638C22.94 8.58376 21.49 6.38376 19.34 6.38376L13.69 6.38376L14.64 1.80376C14.74 1.30376 14.59 0.793758 14.23 0.433758C13.64 -0.146242 12.7 -0.146242 12.12 0.443758ZM2 19.3838C3.1 19.3838 4 18.4838 4 17.3838L4 9.38376C4 8.28376 3.1 7.38376 2 7.38376C0.9 7.38376 0 8.28376 0 9.38376L0 17.3838C0 18.4838 0.9 19.3838 2 19.3838Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(3.45%, 9.62%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Thumbupalt: {
          paths: [
            {
              d: "M13.17 0L6 7.18L6 20L18.31 20L22 11.4L22 7L13.69 7L14.81 1.62L13.17 0ZM0 8L4 8L4 20L0 20L0 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Thumbupalt: {
          paths: [
            {
              d: "M4.34 0L0 4.34L0 14.34L9 14.34L12 7.34L12 5.34L3.23 5.34L4.34 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(37.5%, 19.42%)" },
            },
            {
              d: "M20 7L13.69 7L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.59C6.22 6.95 6 7.45 6 8L6 18C6 19.1 6.9 20 8 20L17 20C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11L22 9C22 7.9 21.1 7 20 7ZM20 11L17 18L8 18L8 8L12.34 3.66L11.23 9L20 9L20 11ZM0 8L4 8L4 20L0 20L0 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.17%)" },
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
          d: "M20 7L13.69 7L14.64 2.43L14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.59C6.22 6.95 6 7.45 6 8L6 18C6 19.1 6.9 20 8 20L17 20C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11L22 9C22 7.9 21.1 7 20 7ZM20 11L17 18L8 18L8 8L12.34 3.66L11.23 9L20 9L20 11ZM0 8L4 8L4 20L0 20L0 8Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Thumbupalt")}
      {...rest}
    ></Icon>
  );
}
