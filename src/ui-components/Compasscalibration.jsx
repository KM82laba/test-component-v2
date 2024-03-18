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
export default function Compasscalibration(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Compasscalibration: {
          paths: [
            {
              d: "M10 18C12.2091 18 14 16.2091 14 14C14 11.7909 12.2091 10 10 10C7.79086 10 6 11.7909 6 14C6 16.2091 7.79086 18 10 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
            {
              d: "M10 7.07C11.95 7.07 13.72 7.86 15 9.14L20 4.14C17.44 1.59 13.9 0 10 0C6.1 0 2.56 1.59 0 4.15L5 9.15C6.28 7.87 8.05 7.07 10 7.07Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Compasscalibration: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Compasscalibration: {
          paths: [
            {
              d: "M9.55359 18C11.7627 18 13.5536 16.2091 13.5536 14C13.5536 11.7909 11.7627 10 9.55359 10C7.34445 10 5.55359 11.7909 5.55359 14C5.55359 16.2091 7.34445 18 9.55359 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.22%, 12.5%)" },
            },
            {
              d: "M9.55359 0C6.04359 0 2.83359 1.29 0.353589 3.41C-0.0864114 3.79 -0.126411 4.47 0.293589 4.89L3.89359 8.49C4.25359 8.85 4.81359 8.88 5.21359 8.57C6.41359 7.63 7.92359 7.07 9.55359 7.07C11.1936 7.07 12.6936 7.63 13.8936 8.56C14.2936 8.87 14.8536 8.84 15.2036 8.48L18.8036 4.88C19.2236 4.46 19.1836 3.78 18.7336 3.4C16.2736 1.28 13.0636 0 9.55359 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.22%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Compasscalibration: {
          paths: [
            {
              d: "M10 18C12.2091 18 14 16.2091 14 14C14 11.7909 12.2091 10 10 10C7.79086 10 6 11.7909 6 14C6 16.2091 7.79086 18 10 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
            {
              d: "M10 0C6.1 0 2.56 1.59 0 4.15L5 9.15C6.28 7.87 8.05 7.07 10 7.07C11.95 7.07 13.72 7.86 15 9.14L20 4.14C17.44 1.59 13.9 0 10 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Compasscalibration: {
          paths: [
            {
              d: "M0 2.26L2.21 4.47C3.65 3.56 5.32 3.07 7.06 3.07C8.8 3.07 10.47 3.56 11.9 4.47L14.11 2.26C12.06 0.79 9.62 0 7.06 0C4.5 0 2.05 0.79 0 2.26Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.58%, 20.83%)" },
            },
            {
              d: "M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(37.5%, 58.33%)" },
            },
            {
              d: "M15 14C15 11.24 12.76 9 10 9C7.24 9 5 11.24 5 14C5 16.76 7.24 19 10 19C12.76 19 15 16.76 15 14ZM7 14C7 12.35 8.35 11 10 11C11.65 11 13 12.35 13 14C13 15.65 11.65 17 10 17C8.35 17 7 15.65 7 14ZM0 4.15L5 9.15C6.28 7.87 8.05 7.07 10 7.07C11.95 7.07 13.72 7.86 15 9.14L20 4.14C17.44 1.59 13.9 0 10 0C6.1 0 2.56 1.59 0 4.15ZM14.84 6.47C13.4 5.56 11.74 5.07 10 5.07C8.26 5.07 6.59 5.56 5.15 6.48L2.94 4.26C4.99 2.79 7.44 2 10 2C12.56 2 15 2.79 17.05 4.26L14.84 6.47Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 12.5%)" },
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
          d: "M10 9C7.24 9 5 11.24 5 14C5 16.76 7.24 19 10 19C12.76 19 15 16.76 15 14C15 11.24 12.76 9 10 9ZM10 17C8.35 17 7 15.65 7 14C7 12.35 8.35 11 10 11C11.65 11 13 12.35 13 14C13 15.65 11.65 17 10 17ZM10 0C6.1 0 2.56 1.59 0 4.15L5 9.15C6.28 7.87 8.05 7.07 10 7.07C11.95 7.07 13.72 7.86 15 9.14L20 4.14C17.44 1.59 13.9 0 10 0ZM14.84 6.47C13.4 5.56 11.74 5.07 10 5.07C8.26 5.07 6.59 5.56 5.15 6.48L2.94 4.26C4.99 2.79 7.44 2 10 2C12.56 2 15 2.79 17.05 4.26L14.84 6.47Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 10.42%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Compasscalibration")}
      {...rest}
    ></Icon>
  );
}
