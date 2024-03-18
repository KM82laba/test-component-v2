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
export default function Phonepaused(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Phonepaused: {
          paths: [
            {
              d: "M14 0L12 0L12 7L14 7L14 0ZM17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.08 11.82 12.69 11.9 12.41 12.17L10.21 14.37C7.38 12.93 5.06 10.62 3.62 7.78L5.82 5.57C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0L1 0C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17L18 13.5C18 12.95 17.55 12.5 17 12.5ZM16 0L16 7L18 7L18 0L16 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Phonepaused: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Phonepaused: {
          paths: [
            {
              d: "M12.9737 0C12.4237 0 11.9737 0.45 11.9737 1L11.9737 6C11.9737 6.55 12.4237 7 12.9737 7C13.5237 7 13.9737 6.55 13.9737 6L13.9737 1C13.9737 0.45 13.5237 0 12.9737 0ZM15.9737 1L15.9737 6C15.9737 6.55 16.4237 7 16.9737 7C17.5237 7 17.9737 6.55 17.9737 6L17.9737 1C17.9737 0.45 17.5237 0 16.9737 0C16.4237 0 15.9737 0.45 15.9737 1ZM16.2037 12.26L13.6637 11.97C13.0537 11.9 12.4537 12.11 12.0237 12.54L10.1837 14.38C7.35367 12.94 5.03367 10.63 3.59367 7.79L5.44367 5.94C5.87367 5.51 6.08367 4.91 6.01367 4.3L5.72367 1.78C5.60367 0.77 4.75367 0.00999999 3.73367 0.00999999L2.00367 0.00999999C0.873674 0.00999999 -0.0663265 0.95 0.00367348 2.08C0.533673 10.62 7.36367 17.44 15.8937 17.97C17.0237 18.04 17.9637 17.1 17.9637 15.97L17.9637 14.24C17.9737 13.23 17.2137 12.38 16.2037 12.26Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.55%, 12.55%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Phonepaused: {
          paths: [
            {
              d: "M11.9984 0L13.9984 0L13.9984 7L11.9984 7L11.9984 0ZM15.9984 0L17.9984 0L17.9984 7L15.9984 7L15.9984 0ZM10.2084 14.37C7.37844 12.93 5.05844 10.62 3.61844 7.78L6.14844 5.25L5.53844 0L0.0284377 0C-0.551562 10.18 7.81844 18.55 17.9984 17.97L17.9984 12.46L12.7284 11.85L10.2084 14.37Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Phonepaused: {
          paths: [
            {
              d: "M1.5 0L0 0C0.09 1.32 0.34 2.58 0.75 3.79L1.95 2.58C1.71 1.75 1.56 0.88 1.5 0ZM10.16 13.21C11.37 13.62 12.64 13.88 13.96 13.97L13.96 12.47C13.08 12.4 12.21 12.25 11.36 12.02L10.16 13.21Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(21%, 20.83%)" },
            },
            {
              d: "M17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.33 11.9 13.22 11.88 13.12 11.88C12.86 11.88 12.61 11.98 12.41 12.17L10.21 14.37C7.38 12.93 5.06 10.62 3.62 7.78L5.82 5.57C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0L1 0C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17L18 13.5C18 12.95 17.55 12.5 17 12.5ZM2.03 2L3.53 2C3.6 2.88 3.75 3.75 3.98 4.58L2.78 5.79C2.38 4.58 2.12 3.32 2.03 2ZM16 15.97C14.68 15.88 13.4 15.62 12.2 15.21L13.4 14.01C14.25 14.25 15.12 14.4 16 14.46L16 15.97ZM12 0L14 0L14 7L12 7L12 0ZM16 0L18 0L18 7L16 7L16 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
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
          d: "M3.54 2C3.6 2.88 3.75 3.75 3.98 4.58L2.78 5.79C2.38 4.58 2.12 3.32 2.03 2L3.54 2ZM13.4 14.01C14.25 14.25 15.12 14.4 16 14.46L16 15.96C14.68 15.87 13.4 15.61 12.2 15.2L13.4 14.01ZM4.5 0L1 0C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17L18 13.5C18 12.95 17.55 12.5 17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.33 11.9 13.22 11.88 13.12 11.88C12.86 11.88 12.61 11.98 12.41 12.17L10.21 14.37C7.38 12.93 5.06 10.62 3.62 7.78L5.82 5.57C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0ZM12 0L14 0L14 7L12 7L12 0ZM16 0L18 0L18 7L16 7L16 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Phonepaused")}
      {...rest}
    ></Icon>
  );
}
