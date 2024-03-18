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
export default function Airlines(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Airlines: {
          paths: [
            {
              d: "M11 0L0 16L17 16L20 0L11 0ZM12.5 10C11.12 10 10 8.88 10 7.5C10 6.12 11.12 5 12.5 5C13.88 5 15 6.12 15 7.5C15 8.88 13.88 10 12.5 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Airlines: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Airlines: {
          paths: [
            {
              d: "M17.59 0L12.58 0C11.59 0 10.67 0.49 10.11 1.3L0 16L17 16L19.56 2.37C19.79 1.14 18.84 0 17.59 0ZM12.5 10C11.12 10 10 8.88 10 7.5C10 6.12 11.12 5 12.5 5C13.88 5 15 6.12 15 7.5C15 8.88 13.88 10 12.5 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.18%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Airlines: {
          paths: [
            {
              d: "M11 0L0 16L17 16L20 0L11 0ZM12.5 10C11.12 10 10 8.88 10 7.5C10 6.12 11.12 5 12.5 5C13.88 5 15 6.12 15 7.5C15 8.88 13.88 10 12.5 10Z",
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
        Airlines: {
          paths: [
            {
              d: "M8.25 0L0 12L11.54 12L13.79 0L8.25 0ZM8.7 8C7.32 8 6.2 6.88 6.2 5.5C6.2 4.12 7.32 3 8.7 3C10.08 3 11.2 4.12 11.2 5.5C11.2 6.88 10.08 8 8.7 8Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(24.17%, 25%)" },
            },
            {
              d: "M15.34 14L3.8 14L12.05 2L17.59 2L15.34 14ZM11 0L0 16L17 16L20 0L11 0ZM12.5 5C11.12 5 10 6.12 10 7.5C10 8.88 11.12 10 12.5 10C13.88 10 15 8.88 15 7.5C15 6.12 13.88 5 12.5 5Z",
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
          d: "M15.34 14L3.8 14L12.05 2L17.59 2L15.34 14ZM11 0L0 16L17 16L20 0L11 0ZM12.5 5C11.12 5 10 6.12 10 7.5C10 8.88 11.12 10 12.5 10C13.88 10 15 8.88 15 7.5C15 6.12 13.88 5 12.5 5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Airlines")}
      {...rest}
    ></Icon>
  );
}
