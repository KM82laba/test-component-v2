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
export default function Villa(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Villa: {
          paths: [
            {
              d: "M4 18L0 18L0 5L13 0L13 7L4 7L4 18ZM16 7C14.9 7 14 7.9 14 9L6 9L6 18L11 18L11 13L13 13L13 18L18 18L18 9C18 7.9 17.1 7 16 7Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Villa: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Villa: {
          paths: [
            {
              d: "M4 17.547L1 17.547C0.45 17.547 0 17.097 0 16.547L0 5.23697C0 4.81697 0.25 4.44697 0.64 4.29697L11.64 0.0669735C12.3 -0.183026 13 0.296974 13 1.00697L13 6.54697L5 6.54697C4.45 6.54697 4 6.99697 4 7.54697L4 17.547ZM14 8.54697L7 8.54697C6.45 8.54697 6 8.99697 6 9.54697L6 16.547C6 17.097 6.45 17.547 7 17.547L11 17.547L11 13.547C11 12.997 11.45 12.547 12 12.547C12.55 12.547 13 12.997 13 13.547L13 17.547L17 17.547C17.55 17.547 18 17.097 18 16.547L18 8.54697C18 7.44697 17.1 6.54697 16 6.54697C14.9 6.54697 14 7.44697 14 8.54697Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 13.44%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Villa: {
          paths: [
            {
              d: "M4 18L0 18L0 5L13 0L13 7L4 7L4 18ZM16 7C14.9 7 14 7.9 14 9L6 9L6 18L11 18L11 13L13 13L13 18L18 18L18 9C18 7.9 17.1 7 16 7Z",
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
        Villa: {
          paths: [
            {
              d: "M0 3.46L9 0L9 6.09L4 6.09L4 13.09L0 13.09L0 3.46ZM14 13.09L11 13.09L11 10.09L9 10.09L9 13.09L6 13.09L6 8.09L14 8.09L14 13.09Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 24.62%)" },
            },
            {
              d: "M16 7C14.9 7 14 7.9 14 9L13 9L13 0L0 5L0 18L18 18L18 9C18 7.9 17.1 7 16 7ZM2 6.37L11 2.91L11 9L6 9L6 16L2 16L2 6.37ZM16 16L13 16L13 13L11 13L11 16L8 16L8 11L16 11L16 16Z",
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
          d: "M16 7C14.9 7 14 7.9 14 9L13 9L13 0L0 5L0 18L18 18L18 9C18 7.9 17.1 7 16 7ZM2 6.37L11 2.91L11 9L6 9L6 16L2 16L2 6.37ZM16 16L13 16L13 13L11 13L11 16L8 16L8 11L16 11L16 16Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Villa")}
      {...rest}
    ></Icon>
  );
}
