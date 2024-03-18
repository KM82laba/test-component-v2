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
export default function Phoneforwarded(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Phoneforwarded: {
          paths: [
            {
              d: "M15 10L20 5L15 0L15 3L11 3L11 7L15 7L15 10ZM17 14.5C15.75 14.5 14.55 14.3 13.43 13.93C13.08 13.82 12.69 13.9 12.41 14.17L10.21 16.37C7.38 14.93 5.06 12.62 3.62 9.78L5.82 7.57C6.1 7.31 6.18 6.92 6.07 6.57C5.7 5.45 5.5 4.25 5.5 3C5.5 2.45 5.05 2 4.5 2L1 2C0.45 2 0 2.45 0 3C0 12.39 7.61 20 17 20C17.55 20 18 19.55 18 19L18 15.5C18 14.95 17.55 14.5 17 14.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Phoneforwarded: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Phoneforwarded: {
          paths: [
            {
              d: "M19.6237 3.94153L15.8337 0.151534C15.5137 -0.168466 14.9737 0.0515344 14.9737 0.501534L14.9737 2.29153L11.4737 2.29153C11.1937 2.29153 10.9737 2.51153 10.9737 2.79153L10.9737 5.79153C10.9737 6.07153 11.1937 6.29153 11.4737 6.29153L14.9737 6.29153L14.9737 8.08153C14.9737 8.53153 15.5137 8.75153 15.8237 8.43153L19.6137 4.64153C19.8137 4.45153 19.8137 4.13153 19.6237 3.94153ZM16.2037 13.5515L13.6637 13.2615C13.0537 13.1915 12.4537 13.4015 12.0237 13.8315L10.1837 15.6715C7.35367 14.2315 5.03367 11.9215 3.59367 9.08153L5.44367 7.23153C5.87367 6.80153 6.08367 6.20153 6.01367 5.59153L5.72367 3.07153C5.60367 2.06153 4.75367 1.30153 3.73367 1.30153L2.00367 1.30153C0.873674 1.30153 -0.0663265 2.24153 0.00367348 3.37153C0.533673 11.9115 7.36367 18.7315 15.8937 19.2615C17.0237 19.3315 17.9637 18.3915 17.9637 17.2615L17.9637 15.5315C17.9737 14.5215 17.2137 13.6715 16.2037 13.5515Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.82%, 9.86%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Phoneforwarded: {
          paths: [
            {
              d: "M14.9984 10L19.9984 5L14.9984 0L14.9984 3L10.9984 3L10.9984 7L14.9984 7L14.9984 10ZM10.2084 16.37C7.37844 14.93 5.05844 12.62 3.61844 9.78L6.14844 7.25L5.53844 2L0.0284377 2C-0.551562 12.18 7.81844 20.55 17.9984 19.97L17.9984 14.46L12.7284 13.85L10.2084 16.37Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.34%, 8.34%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Phoneforwarded: {
          paths: [
            {
              d: "M10.16 13.21C11.37 13.62 12.64 13.88 13.96 13.97L13.96 12.47C13.08 12.4 12.21 12.25 11.36 12.02L10.16 13.21ZM1.5 0L0 0C0.09 1.32 0.34 2.58 0.75 3.79L1.95 2.58C1.71 1.75 1.56 0.88 1.5 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(21%, 20.83%)" },
            },
            {
              d: "M17 14.5C15.75 14.5 14.55 14.3 13.43 13.93C13.33 13.9 13.22 13.88 13.12 13.88C12.86 13.88 12.61 13.98 12.41 14.17L10.21 16.37C7.38 14.93 5.06 12.62 3.62 9.78L5.82 7.57C6.1 7.31 6.18 6.92 6.07 6.57C5.7 5.45 5.5 4.25 5.5 3C5.5 2.45 5.05 2 4.5 2L1 2C0.45 2 0 2.45 0 3C0 12.39 7.61 20 17 20C17.55 20 18 19.55 18 19L18 15.5C18 14.95 17.55 14.5 17 14.5ZM2.03 4L3.53 4C3.6 4.88 3.75 5.75 3.98 6.58L2.78 7.79C2.38 6.58 2.12 5.32 2.03 4ZM16 17.97C14.68 17.88 13.4 17.62 12.2 17.21L13.4 16.01C14.25 16.25 15.12 16.4 16 16.46L16 17.97ZM15 10L20 5L15 0L15 3L11 3L11 7L15 7L15 10Z",
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
          d: "M17 14.5C15.75 14.5 14.55 14.3 13.43 13.93C13.33 13.9 13.22 13.88 13.12 13.88C12.86 13.88 12.61 13.98 12.41 14.17L10.21 16.37C7.38 14.93 5.06 12.62 3.62 9.78L5.82 7.57C6.1 7.31 6.18 6.92 6.07 6.57C5.7 5.45 5.5 4.25 5.5 3C5.5 2.45 5.05 2 4.5 2L1 2C0.45 2 0 2.45 0 3C0 12.39 7.61 20 17 20C17.55 20 18 19.55 18 19L18 15.5C18 14.95 17.55 14.5 17 14.5ZM2.03 4L3.53 4C3.6 4.88 3.75 5.75 3.98 6.58L2.78 7.79C2.38 6.58 2.12 5.32 2.03 4ZM16 17.97C14.68 17.88 13.4 17.62 12.2 17.21L13.4 16.01C14.25 16.25 15.12 16.4 16 16.46L16 17.97ZM15 10L20 5L15 0L15 3L11 3L11 7L15 7L15 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Phoneforwarded")}
      {...rest}
    ></Icon>
  );
}
