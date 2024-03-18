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
export default function Airlineseatindividualsuite(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Airlineseatindividualsuite: {
          paths: [
            {
              d: "M6 6C7.65 6 9 4.65 9 3C9 1.35 7.65 0 6 0C4.35 0 3 1.35 3 3C3 4.65 4.35 6 6 6ZM18 0L10 0L10 7L2 7L2 0L0 0L0 10L22 10L22 4C22 1.79 20.21 0 18 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 29.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Airlineseatindividualsuite: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Airlineseatindividualsuite: {
          paths: [
            {
              d: "M6 6C7.65 6 9 4.65 9 3C9 1.35 7.65 0 6 0C4.35 0 3 1.35 3 3C3 4.65 4.35 6 6 6ZM18 0L12 0C10.9 0 10 0.9 10 2L10 7L2 7L2 1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1L0 8C0 9.1 0.9 10 2 10L20 10C21.1 10 22 9.1 22 8L22 4C22 1.79 20.21 0 18 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 29.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Airlineseatindividualsuite: {
          paths: [
            {
              d: "M6 6C7.65 6 9 4.65 9 3C9 1.35 7.65 0 6 0C4.35 0 3 1.35 3 3C3 4.65 4.35 6 6 6ZM22 0L10 0L10 7L2 7L2 0L0 0L0 10L22 10L22 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 29.17%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Airlineseatindividualsuite: {
          paths: [
            {
              d: "M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 41.67%)" },
            },
            {
              d: "M6 0L0 0L0 6L8 6L8 2C8 0.9 7.1 0 6 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(54.17%, 37.5%)" },
            },
            {
              d: "M6 7C7.66 7 9 5.66 9 4C9 2.34 7.66 1 6 1C4.34 1 3 2.34 3 4C3 5.66 4.34 7 6 7ZM6 3C6.55 3 7 3.45 7 4C7 4.55 6.55 5 6 5C5.45 5 5 4.55 5 4C5 3.45 5.45 3 6 3ZM18 0L10 0L10 8L2 8L2 0L0 0L0 10L22 10L22 4C22 1.79 20.21 0 18 0ZM20 8L12 8L12 2L18 2C19.1 2 20 2.9 20 4L20 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 29.17%)" },
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
          d: "M6 7C7.66 7 9 5.66 9 4C9 2.34 7.66 1 6 1C4.34 1 3 2.34 3 4C3 5.66 4.34 7 6 7ZM6 3C6.55 3 7 3.45 7 4C7 4.55 6.55 5 6 5C5.45 5 5 4.55 5 4C5 3.45 5.45 3 6 3ZM18 0L10 0L10 8L2 8L2 0L0 0L0 10L22 10L22 4C22 1.79 20.21 0 18 0ZM20 8L12 8L12 2L18 2C19.1 2 20 2.9 20 4L20 8Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 29.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Airlineseatindividualsuite")}
      {...rest}
    ></Icon>
  );
}
