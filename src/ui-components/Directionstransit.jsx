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
export default function Directionstransit(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Directionstransit: {
          paths: [
            {
              d: "M8 0C3.58 0 0 0.5 0 4L0 13.5C0 15.43 1.57 17 3.5 17L2 18.5L2 19L14 19L14 18.5L12.5 17C14.43 17 16 15.43 16 13.5L16 4C16 0.5 12.42 0 8 0ZM3.5 15C2.67 15 2 14.33 2 13.5C2 12.67 2.67 12 3.5 12C4.33 12 5 12.67 5 13.5C5 14.33 4.33 15 3.5 15ZM7 9L2 9L2 4L7 4L7 9ZM12.5 15C11.67 15 11 14.33 11 13.5C11 12.67 11.67 12 12.5 12C13.33 12 14 12.67 14 13.5C14 14.33 13.33 15 12.5 15ZM14 9L9 9L9 4L14 4L14 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 10.42%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Directionstransit: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Directionstransit: {
          paths: [
            {
              d: "M8 0C3.58 0 0 0.5 0 4L0 13.5C0 15.43 1.57 17 3.5 17L2.35 18.15C2.04 18.46 2.26 19 2.71 19L13.3 19C13.75 19 13.97 18.46 13.65 18.15L12.5 17C14.43 17 16 15.43 16 13.5L16 4C16 0.5 12.42 0 8 0ZM3.5 15C2.67 15 2 14.33 2 13.5C2 12.67 2.67 12 3.5 12C4.33 12 5 12.67 5 13.5C5 14.33 4.33 15 3.5 15ZM7 9L2 9L2 4L7 4L7 9ZM12.5 15C11.67 15 11 14.33 11 13.5C11 12.67 11.67 12 12.5 12C13.33 12 14 12.67 14 13.5C14 14.33 13.33 15 12.5 15ZM14 9L9 9L9 4L14 4L14 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 10.42%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Directionstransit: {
          paths: [
            {
              d: "M8 0C3.58 0 0 0.5 0 4L0 13.5C0 15.43 1.57 17 3.5 17L2 18.5L2 19L14 19L14 18.5L12.5 17C14.43 17 16 15.43 16 13.5L16 4C16 0.5 12.42 0 8 0ZM3.5 15C2.67 15 2 14.33 2 13.5C2 12.67 2.67 12 3.5 12C4.33 12 5 12.67 5 13.5C5 14.33 4.33 15 3.5 15ZM7 9L2 9L2 4L7 4L7 9ZM12.5 15C11.67 15 11 14.33 11 13.5C11 12.67 11.67 12 12.5 12C13.33 12 14 12.67 14 13.5C14 14.33 13.33 15 12.5 15ZM14 9L9 9L9 4L14 4L14 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 10.42%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Directionstransit: {
          paths: [
            {
              d: "M6 0C2.49 0 1.04 0.48 0.43 1L11.66 1C11.12 0.46 9.71 0 6 0ZM1.5 13L10.5 13C11.33 13 12 12.33 12 11.5L12 8L0 8L0 11.5C0 12.33 0.67 13 1.5 13ZM9.5 9C10.33 9 11 9.67 11 10.5C11 11.33 10.33 12 9.5 12C8.67 12 8 11.33 8 10.5C8 9.67 8.67 9 9.5 9ZM2.5 9C3.33 9 4 9.67 4 10.5C4 11.33 3.33 12 2.5 12C1.67 12 1 11.33 1 10.5C1 9.67 1.67 9 2.5 9Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 16.67%)" },
            },
            {
              d: "M0 4L0 13.5C0 15.43 1.57 17 3.5 17L2 18.5L2 19L14 19L14 18.5L12.5 17C14.43 17 16 15.43 16 13.5L16 4C16 0.5 12.42 0 8 0C4 0 0 0.5 0 4ZM14 8L9 8L9 5L14 5L14 8ZM8 2C11.71 2 13.12 2.46 13.66 3L2.43 3C3.04 2.48 4.49 2 8 2ZM2 5L7 5L7 8L2 8L2 5ZM2 10L14 10L14 13.5C14 14.33 13.33 15 12.5 15L3.5 15C2.67 15 2 14.33 2 13.5L2 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 54.17%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(58.33%, 54.17%)" },
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
          d: "M8 0C4 0 0 0.5 0 4L0 13.5C0 15.43 1.57 17 3.5 17L2 18.5L2 19L14 19L14 18.5L12.5 17C14.43 17 16 15.43 16 13.5L16 4C16 0.5 12.42 0 8 0ZM13.66 3L2.43 3C3.04 2.48 4.49 2 8 2C11.71 2 13.12 2.46 13.66 3ZM7 5L7 8L2 8L2 5L7 5ZM9 5L14 5L14 8L9 8L9 5ZM12.5 15L3.5 15C2.67 15 2 14.33 2 13.5L2 10L14 10L14 13.5C14 14.33 13.33 15 12.5 15Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 10.42%)" },
        },
        {
          d: "M4.5 14C5.32843 14 6 13.3284 6 12.5C6 11.6716 5.32843 11 4.5 11C3.67157 11 3 11.6716 3 12.5C3 13.3284 3.67157 14 4.5 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 10.42%)" },
        },
        {
          d: "M11.5 14C12.3284 14 13 13.3284 13 12.5C13 11.6716 12.3284 11 11.5 11C10.6716 11 10 11.6716 10 12.5C10 13.3284 10.6716 14 11.5 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 10.42%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Directionstransit")}
      {...rest}
    ></Icon>
  );
}
