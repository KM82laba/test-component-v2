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
export default function Casino(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Casino: {
          paths: [
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM4.5 15C3.67 15 3 14.33 3 13.5C3 12.67 3.67 12 4.5 12C5.33 12 6 12.67 6 13.5C6 14.33 5.33 15 4.5 15ZM4.5 6C3.67 6 3 5.33 3 4.5C3 3.67 3.67 3 4.5 3C5.33 3 6 3.67 6 4.5C6 5.33 5.33 6 4.5 6ZM9 10.5C8.17 10.5 7.5 9.83 7.5 9C7.5 8.17 8.17 7.5 9 7.5C9.83 7.5 10.5 8.17 10.5 9C10.5 9.83 9.83 10.5 9 10.5ZM13.5 15C12.67 15 12 14.33 12 13.5C12 12.67 12.67 12 13.5 12C14.33 12 15 12.67 15 13.5C15 14.33 14.33 15 13.5 15ZM13.5 6C12.67 6 12 5.33 12 4.5C12 3.67 12.67 3 13.5 3C14.33 3 15 3.67 15 4.5C15 5.33 14.33 6 13.5 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Casino: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Casino: {
          paths: [
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM4.5 15C3.67 15 3 14.33 3 13.5C3 12.67 3.67 12 4.5 12C5.33 12 6 12.67 6 13.5C6 14.33 5.33 15 4.5 15ZM4.5 6C3.67 6 3 5.33 3 4.5C3 3.67 3.67 3 4.5 3C5.33 3 6 3.67 6 4.5C6 5.33 5.33 6 4.5 6ZM9 10.5C8.17 10.5 7.5 9.83 7.5 9C7.5 8.17 8.17 7.5 9 7.5C9.83 7.5 10.5 8.17 10.5 9C10.5 9.83 9.83 10.5 9 10.5ZM13.5 15C12.67 15 12 14.33 12 13.5C12 12.67 12.67 12 13.5 12C14.33 12 15 12.67 15 13.5C15 14.33 14.33 15 13.5 15ZM13.5 6C12.67 6 12 5.33 12 4.5C12 3.67 12.67 3 13.5 3C14.33 3 15 3.67 15 4.5C15 5.33 14.33 6 13.5 6Z",
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
        Casino: {
          paths: [
            {
              d: "M18 0L0 0L0 18L18 18L18 0ZM4.5 15C3.67 15 3 14.33 3 13.5C3 12.67 3.67 12 4.5 12C5.33 12 6 12.67 6 13.5C6 14.33 5.33 15 4.5 15ZM4.5 6C3.67 6 3 5.33 3 4.5C3 3.67 3.67 3 4.5 3C5.33 3 6 3.67 6 4.5C6 5.33 5.33 6 4.5 6ZM9 10.5C8.17 10.5 7.5 9.83 7.5 9C7.5 8.17 8.17 7.5 9 7.5C9.83 7.5 10.5 8.17 10.5 9C10.5 9.83 9.83 10.5 9 10.5ZM13.5 15C12.67 15 12 14.33 12 13.5C12 12.67 12.67 12 13.5 12C14.33 12 15 12.67 15 13.5C15 14.33 14.33 15 13.5 15ZM13.5 6C12.67 6 12 5.33 12 4.5C12 3.67 12.67 3 13.5 3C14.33 3 15 3.67 15 4.5C15 5.33 14.33 6 13.5 6Z",
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
        Casino: {
          paths: [
            {
              d: "M0 14L14 14L14 0L0 0L0 14ZM11.5 1C12.33 1 13 1.67 13 2.5C13 3.33 12.33 4 11.5 4C10.67 4 10 3.33 10 2.5C10 1.67 10.67 1 11.5 1ZM11.5 10C12.33 10 13 10.67 13 11.5C13 12.33 12.33 13 11.5 13C10.67 13 10 12.33 10 11.5C10 10.67 10.67 10 11.5 10ZM7 5.5C7.83 5.5 8.5 6.17 8.5 7C8.5 7.83 7.83 8.5 7 8.5C6.17 8.5 5.5 7.83 5.5 7C5.5 6.17 6.17 5.5 7 5.5ZM2.5 1C3.33 1 4 1.67 4 2.5C4 3.33 3.33 4 2.5 4C1.67 4 1 3.33 1 2.5C1 1.67 1.67 1 2.5 1ZM2.5 10C3.33 10 4 10.67 4 11.5C4 12.33 3.33 13 2.5 13C1.67 13 1 12.33 1 11.5C1 10.67 1.67 10 2.5 10Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
            {
              d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM16 16L2 16L2 2L16 2L16 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 12.5%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 62.5%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 25%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(43.75%, 43.75%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(62.5%, 62.5%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(62.5%, 25%)" },
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
          d: "M16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0ZM16 16L2 16L2 2L16 2L16 16Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M4.5 15C5.32843 15 6 14.3284 6 13.5C6 12.6716 5.32843 12 4.5 12C3.67157 12 3 12.6716 3 13.5C3 14.3284 3.67157 15 4.5 15Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M13.5 15C14.3284 15 15 14.3284 15 13.5C15 12.6716 14.3284 12 13.5 12C12.6716 12 12 12.6716 12 13.5C12 14.3284 12.6716 15 13.5 15Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
        {
          d: "M13.5 6C14.3284 6 15 5.32843 15 4.5C15 3.67157 14.3284 3 13.5 3C12.6716 3 12 3.67157 12 4.5C12 5.32843 12.6716 6 13.5 6Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Casino")}
      {...rest}
    ></Icon>
  );
}
