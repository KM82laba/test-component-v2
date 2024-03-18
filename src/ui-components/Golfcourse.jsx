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
export default function Golfcourse(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Golfcourse: {} }, variantValues: { style: "Filled" } },
    { overrides: { Golfcourse: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Golfcourse: {
          paths: [
            {
              d: "M15.5 18.396C16.3284 18.396 17 17.7245 17 16.896C17 16.0676 16.3284 15.396 15.5 15.396C14.6716 15.396 14 16.0676 14 16.896C14 17.7245 14.6716 18.396 15.5 18.396Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.58%, 9.59%)" },
            },
            {
              d: "M7 15.426L7 6.37604L11.22 4.22604C11.95 3.85604 11.95 2.79604 11.21 2.43604L6.45 0.106044C5.78 -0.223956 5 0.256044 5 0.996044L5 16.396C5 16.946 4.55 17.396 4 17.396C3.45 17.396 3 16.946 3 16.396L3 15.666C1.21 16.016 0 16.656 0 17.396C0 18.496 2.69 19.396 6 19.396C9.31 19.396 12 18.496 12 17.396C12 16.406 9.84 15.586 7 15.426Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(14.58%, 9.59%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Golfcourse: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Golfcourse: {
          paths: [
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(75%, 75%)" },
            },
            {
              d: "M13 3.92L5 0L5 18L3 18L3 16.27C1.21 16.62 0 17.26 0 18C0 19.1 2.69 20 6 20C9.31 20 12 19.1 12 18C12 17.01 9.84 16.19 7 16.03L7 6.98L13 3.92Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(75%, 75%)" },
            },
            {
              d: "M13 3.92L5 0L5 18L3 18L3 16.27C1.21 16.62 0 17.26 0 18C0 19.1 2.69 20 6 20C9.31 20 12 19.1 12 18C12 17.01 9.84 16.19 7 16.03L7 6.98L13 3.92Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
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
          d: "M15.5 19C16.3284 19 17 18.3284 17 17.5C17 16.6716 16.3284 16 15.5 16C14.6716 16 14 16.6716 14 17.5C14 18.3284 14.6716 19 15.5 19Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(14.58%, 8.33%)" },
        },
        {
          d: "M13 3.92L5 0L5 18L3 18L3 16.27C1.21 16.62 0 17.26 0 18C0 19.1 2.69 20 6 20C9.31 20 12 19.1 12 18C12 17.01 9.84 16.19 7 16.03L7 6.98L13 3.92Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(14.58%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Golfcourse")}
      {...rest}
    ></Icon>
  );
}
