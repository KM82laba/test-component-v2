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
export default function Houseboat(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Houseboat: {
          paths: [
            {
              d: "M10 12.5C8.05 12.5 7.9 13.5 6.66 13.5C5.47 13.5 5.24 12.5 3.33 12.5C1.38 12.5 1.24 13.5 0 13.5L0 15.5C1.9 15.5 2.17 14.5 3.35 14.5C4.54 14.5 4.77 15.5 6.68 15.5C8.63 15.5 8.76 14.5 10 14.5C11.24 14.5 11.37 15.5 13.32 15.5C15.23 15.5 15.46 14.5 16.65 14.5C17.83 14.5 18.1 15.5 20 15.5L20 13.5C18.76 13.5 18.62 12.5 16.67 12.5C14.76 12.5 14.53 13.5 13.34 13.5C12.1 13.5 11.95 12.5 10 12.5ZM18.34 7.84L16.97 9.21C16.78 9.39 16.52 9.5 16.26 9.5L15 9.5L15 6.15L16.32 7.12L17.5 5.5L10 0L2.5 5.5L3.68 7.11L5 6.15L5 9.5L3.74 9.5C3.47 9.5 3.22 9.39 3.03 9.21L1.66 7.84L0.25 9.25L1.62 10.62C2.18 11.18 2.95 11.5 3.74 11.5L16.25 11.5C17.05 11.5 17.81 11.18 18.37 10.62L19.74 9.25L18.34 7.84ZM11 9.5L9 9.5L9 7.5L11 7.5L11 9.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 17.71%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Houseboat: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Houseboat: {
          paths: [
            {
              d: "M20 14.085C20 13.665 19.73 13.285 19.33 13.145C18.62 12.875 18.21 12.255 16.67 12.255C14.76 12.255 14.53 13.255 13.34 13.255C12.1 13.255 11.95 12.255 10 12.255C8.05 12.255 7.9 13.255 6.66 13.255C5.47 13.255 5.24 12.255 3.33 12.255C1.79 12.255 1.38 12.875 0.67 13.135C0.27 13.285 0 13.655 0 14.085C0 14.785 0.69 15.275 1.35 15.035C2.15 14.745 2.53 14.255 3.35 14.255C4.54 14.255 4.77 15.255 6.68 15.255C8.63 15.255 8.76 14.255 10 14.255C11.24 14.255 11.37 15.255 13.32 15.255C15.23 15.255 15.46 14.255 16.65 14.255C17.48 14.255 17.86 14.745 18.65 15.035C19.31 15.275 20 14.775 20 14.085ZM16.91 6.065C17.24 5.615 17.14 4.995 16.69 4.665L10.59 0.195C10.24 -0.065 9.76 -0.065 9.41 0.195L3.31 4.665C2.86 4.995 2.77 5.615 3.09 6.065C3.42 6.515 4.04 6.605 4.49 6.285L5 5.905L5 9.255L3.74 9.255C3.47 9.255 3.22 9.145 3.03 8.965L2.37 8.305C1.98 7.915 1.35 7.915 0.96 8.305C0.57 8.695 0.57 9.325 0.96 9.715L1.62 10.375C2.18 10.935 2.95 11.255 3.74 11.255L16.25 11.255C17.05 11.255 17.81 10.935 18.37 10.375L19.03 9.715C19.42 9.325 19.42 8.695 19.03 8.305C18.64 7.915 18.01 7.915 17.62 8.305L16.96 8.965C16.78 9.145 16.52 9.255 16.26 9.255L15 9.255L15 5.905L15.51 6.275C15.96 6.605 16.58 6.505 16.91 6.065ZM11 9.255L9 9.255L9 7.255L11 7.255L11 9.255Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 18.22%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Houseboat: {
          paths: [
            {
              d: "M10 12.5C8.05 12.5 7.9 13.5 6.66 13.5C5.47 13.5 5.24 12.5 3.33 12.5C1.38 12.5 1.24 13.5 0 13.5L0 15.5C1.9 15.5 2.17 14.5 3.35 14.5C4.54 14.5 4.77 15.5 6.68 15.5C8.63 15.5 8.76 14.5 10 14.5C11.24 14.5 11.37 15.5 13.32 15.5C15.23 15.5 15.46 14.5 16.65 14.5C17.83 14.5 18.1 15.5 20 15.5L20 13.5C18.76 13.5 18.62 12.5 16.67 12.5C14.76 12.5 14.53 13.5 13.34 13.5C12.1 13.5 11.95 12.5 10 12.5ZM18.34 7.84L16.67 9.5L15 9.5L15 6.15L16.32 7.12L17.5 5.5L10 0L2.5 5.5L3.68 7.11L5 6.15L5 9.5L3.33 9.5L1.67 7.84L0.26 9.25L2.5 11.5L17.5 11.5L19.75 9.25L18.34 7.84ZM11 9.5L9 9.5L9 7.5L11 7.5L11 9.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 17.71%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Houseboat: {
          paths: [
            {
              d: "M4 7.02L4 5.02L2 5.02L2 7.02L0 7.02L0 2.2L3 0L6 2.2L6 7.02L4 7.02Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(37.5%, 24.92%)" },
            },
            {
              d: "M10 12.5C8.05 12.5 7.9 13.5 6.66 13.5C5.47 13.5 5.24 12.5 3.33 12.5C1.38 12.5 1.24 13.5 0 13.5L0 15.5C1.9 15.5 2.17 14.5 3.35 14.5C4.54 14.5 4.77 15.5 6.68 15.5C8.63 15.5 8.76 14.5 10 14.5C11.24 14.5 11.37 15.5 13.32 15.5C15.23 15.5 15.46 14.5 16.65 14.5C17.83 14.5 18.1 15.5 20 15.5L20 13.5C18.76 13.5 18.62 12.5 16.67 12.5C14.76 12.5 14.53 13.5 13.34 13.5C12.1 13.5 11.95 12.5 10 12.5ZM18.34 7.84L16.97 9.21C16.78 9.39 16.52 9.5 16.26 9.5L15 9.5L15 6.15L16.32 7.12L17.5 5.5L10 0L2.5 5.5L3.68 7.11L5 6.15L5 9.5L3.74 9.5C3.47 9.5 3.22 9.39 3.03 9.21L1.66 7.84L0.25 9.25L1.62 10.62C2.18 11.18 2.95 11.5 3.74 11.5L16.25 11.5C17.05 11.5 17.81 11.18 18.37 10.62L19.74 9.25L18.34 7.84ZM11 9.5L11 7.5L9 7.5L9 9.5L7 9.5L7 4.68L10 2.48L13 4.68L13 9.5L11 9.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 14.58%)" },
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
          d: "M10 12.5C8.05 12.5 7.9 13.5 6.66 13.5C5.47 13.5 5.24 12.5 3.33 12.5C1.38 12.5 1.24 13.5 0 13.5L0 15.5C1.9 15.5 2.17 14.5 3.35 14.5C4.54 14.5 4.77 15.5 6.68 15.5C8.63 15.5 8.76 14.5 10 14.5C11.24 14.5 11.37 15.5 13.32 15.5C15.23 15.5 15.46 14.5 16.65 14.5C17.83 14.5 18.1 15.5 20 15.5L20 13.5C18.76 13.5 18.62 12.5 16.67 12.5C14.76 12.5 14.53 13.5 13.34 13.5C12.1 13.5 11.95 12.5 10 12.5ZM18.34 7.84L16.97 9.21C16.78 9.39 16.52 9.5 16.26 9.5L15 9.5L15 6.15L16.32 7.12L17.5 5.5L10 0L2.5 5.5L3.68 7.11L5 6.15L5 9.5L3.74 9.5C3.47 9.5 3.22 9.39 3.03 9.21L1.66 7.84L0.25 9.25L1.62 10.62C2.18 11.18 2.95 11.5 3.74 11.5L16.25 11.5C17.05 11.5 17.81 11.18 18.37 10.62L19.74 9.25L18.34 7.84ZM11 9.5L11 7.5L9 7.5L9 9.5L7 9.5L7 4.68L10 2.48L13 4.68L13 9.5L11 9.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 17.71%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Houseboat")}
      {...rest}
    ></Icon>
  );
}
