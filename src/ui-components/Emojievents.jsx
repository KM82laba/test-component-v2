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
export default function Emojievents(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Emojievents: {
          paths: [
            {
              d: "M16 2L14 2L14 0L4 0L4 2L2 2C0.9 2 0 2.9 0 4L0 5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9L8 16L4 16L4 18L14 18L14 16L10 16L10 12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5L18 4C18 2.9 17.1 2 16 2ZM2 5L2 4L4 4L4 7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82L14 4L16 4L16 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Emojievents: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Emojievents: {
          paths: [
            {
              d: "M16 2L14 2L14 1C14 0.45 13.55 0 13 0L5 0C4.45 0 4 0.45 4 1L4 2L2 2C0.9 2 0 2.9 0 4L0 5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9L8 16L5 16C4.45 16 4 16.45 4 17C4 17.55 4.45 18 5 18L13 18C13.55 18 14 17.55 14 17C14 16.45 13.55 16 13 16L10 16L10 12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5L18 4C18 2.9 17.1 2 16 2ZM2 5L2 4L4 4L4 7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82L14 4L16 4L16 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Emojievents: {
          paths: [
            {
              d: "M16 2L14 2L14 0L4 0L4 2L2 2C0.9 2 0 2.9 0 4L0 5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9L8 16L4 16L4 18L14 18L14 16L10 16L10 12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5L18 4C18 2.9 17.1 2 16 2ZM2 5L2 4L4 4L4 7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82L14 4L16 4L16 5Z",
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
        Emojievents: {
          paths: [
            {
              d: "M3 9C1.35 9 0 7.65 0 6L0 0L6 0L6 6C6 7.65 4.65 9 3 9Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(37.5%, 20.83%)" },
            },
            {
              d: "M16 2L14 2L14 0L4 0L4 2L2 2C0.9 2 0 2.9 0 4L0 5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9L8 16L4 16L4 18L14 18L14 16L10 16L10 12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5L18 4C18 2.9 17.1 2 16 2ZM2 5L2 4L4 4L4 7.82C2.84 7.4 2 6.3 2 5ZM9 11C7.35 11 6 9.65 6 8L6 2L12 2L12 8C12 9.65 10.65 11 9 11ZM16 5C16 6.3 15.16 7.4 14 7.82L14 4L16 4L16 5Z",
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
          d: "M16 2L14 2L14 0L4 0L4 2L2 2C0.9 2 0 2.9 0 4L0 5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9L8 16L4 16L4 18L14 18L14 16L10 16L10 12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5L18 4C18 2.9 17.1 2 16 2ZM2 5L2 4L4 4L4 7.82C2.84 7.4 2 6.3 2 5ZM9 11C7.35 11 6 9.65 6 8L6 2L12 2L12 8C12 9.65 10.65 11 9 11ZM16 5C16 6.3 15.16 7.4 14 7.82L14 4L16 4L16 5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Emojievents")}
      {...rest}
    ></Icon>
  );
}
