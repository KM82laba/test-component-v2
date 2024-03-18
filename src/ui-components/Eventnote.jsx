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
export default function Eventnote(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Eventnote: {
          paths: [
            {
              d: "M14 9L4 9L4 11L14 11L14 9ZM16 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM16 18L2 18L2 7L16 7L16 18ZM11 13L4 13L4 15L11 15L11 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Eventnote: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Eventnote: {
          paths: [
            {
              d: "M13 9L5 9C4.45 9 4 9.45 4 10C4 10.55 4.45 11 5 11L13 11C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9ZM16 2L15 2L15 1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1L13 2L5 2L5 1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1L3 2L2 2C0.89 2 0 2.9 0 4L0 18C0 19.1 0.89 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM15 18L3 18C2.45 18 2 17.55 2 17L2 7L16 7L16 17C16 17.55 15.55 18 15 18ZM10 13L5 13C4.45 13 4 13.45 4 14C4 14.55 4.45 15 5 15L10 15C10.55 15 11 14.55 11 14C11 13.45 10.55 13 10 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Eventnote: {
          paths: [
            {
              d: "M14 9L4 9L4 11L14 11L14 9ZM18 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L0 2L0 20L18 20L18 2ZM16 18L2 18L2 7L16 7L16 18ZM11 13L4 13L4 15L11 15L11 13Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Eventnote: {
          paths: [
            {
              d: "M0 0L14 0L14 2L0 2L0 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
            {
              d: "M16 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.9 2 0 2.9 0 4L0 18C0 19.1 0.9 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM16 18L2 18L2 8L16 8L16 18ZM16 6L2 6L2 4L16 4L16 6ZM4 10L14 10L14 12L4 12L4 10ZM4 14L11 14L11 16L4 16L4 14Z",
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
          d: "M16 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.9 2 0 2.9 0 4L0 18C0 19.1 0.9 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM16 18L2 18L2 8L16 8L16 18ZM2 6L2 4L16 4L16 6L2 6ZM4 10L14 10L14 12L4 12L4 10ZM4 14L11 14L11 16L4 16L4 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Eventnote")}
      {...rest}
    ></Icon>
  );
}
