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
export default function More(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        More: {
          paths: [
            {
              d: "M22 0L7 0C6.31 0 5.77 0.35 5.41 0.88L0 9L5.41 17.11C5.77 17.64 6.38 18 7.07 18L22 18C23.1 18 24 17.1 24 16L24 2C24 0.9 23.1 0 22 0ZM9 10.5C8.17 10.5 7.5 9.83 7.5 9C7.5 8.17 8.17 7.5 9 7.5C9.83 7.5 10.5 8.17 10.5 9C10.5 9.83 9.83 10.5 9 10.5ZM14 10.5C13.17 10.5 12.5 9.83 12.5 9C12.5 8.17 13.17 7.5 14 7.5C14.83 7.5 15.5 8.17 15.5 9C15.5 9.83 14.83 10.5 14 10.5ZM19 10.5C18.17 10.5 17.5 9.83 17.5 9C17.5 8.17 18.17 7.5 19 7.5C19.83 7.5 20.5 8.17 20.5 9C20.5 9.83 19.83 10.5 19 10.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { More: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        More: {
          paths: [
            {
              d: "M21.795 0L6.795 0C6.105 0 5.565 0.35 5.205 0.88L0.165 8.45C-0.055 8.79 -0.055 9.22 0.165 9.56L5.205 17.12C5.565 17.64 6.175 18 6.865 18L21.795 18C22.895 18 23.795 17.1 23.795 16L23.795 2C23.795 0.9 22.895 0 21.795 0ZM8.795 10.5C7.965 10.5 7.295 9.83 7.295 9C7.295 8.17 7.965 7.5 8.795 7.5C9.625 7.5 10.295 8.17 10.295 9C10.295 9.83 9.625 10.5 8.795 10.5ZM13.795 10.5C12.965 10.5 12.295 9.83 12.295 9C12.295 8.17 12.965 7.5 13.795 7.5C14.625 7.5 15.295 8.17 15.295 9C15.295 9.83 14.625 10.5 13.795 10.5ZM18.795 10.5C17.965 10.5 17.295 9.83 17.295 9C17.295 8.17 17.965 7.5 18.795 7.5C19.625 7.5 20.295 8.17 20.295 9C20.295 9.83 19.625 10.5 18.795 10.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0.43%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        More: {
          paths: [
            {
              d: "M24 0L6 0L0 9L6 18L24 18L24 0ZM9 10.5C8.17 10.5 7.5 9.83 7.5 9C7.5 8.17 8.17 7.5 9 7.5C9.83 7.5 10.5 8.17 10.5 9C10.5 9.83 9.83 10.5 9 10.5ZM14 10.5C13.17 10.5 12.5 9.83 12.5 9C12.5 8.17 13.17 7.5 14 7.5C14.83 7.5 15.5 8.17 15.5 9C15.5 9.83 14.83 10.5 14 10.5ZM19 10.5C18.17 10.5 17.5 9.83 17.5 9C17.5 8.17 18.17 7.5 19 7.5C19.83 7.5 20.5 8.17 20.5 9C20.5 9.83 19.83 10.5 19 10.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        More: {
          paths: [
            {
              d: "M4.66 0L0 7L4.67 14L19.6 14L19.6 0L4.66 0C4.67 0 4.67 0 4.66 0ZM16.6 5.5C17.43 5.5 18.1 6.17 18.1 7C18.1 7.83 17.43 8.5 16.6 8.5C15.77 8.5 15.1 7.83 15.1 7C15.1 6.17 15.77 5.5 16.6 5.5ZM11.6 5.5C12.43 5.5 13.1 6.17 13.1 7C13.1 7.83 12.43 8.5 11.6 8.5C10.77 8.5 10.1 7.83 10.1 7C10.1 6.17 10.77 5.5 11.6 5.5ZM6.6 5.5C7.43 5.5 8.1 6.17 8.1 7C8.1 7.83 7.43 8.5 6.6 8.5C5.77 8.5 5.1 7.83 5.1 7C5.1 6.17 5.77 5.5 6.6 5.5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(10%, 20.83%)" },
            },
            {
              d: "M22 0L7 0C6.31 0 5.77 0.35 5.41 0.88L0 9L5.41 17.11C5.77 17.64 6.38 18 7.07 18L22 18C23.1 18 24 17.1 24 16L24 2C24 0.9 23.1 0 22 0ZM22 16L7.07 16L2.4 9L7.06 2L22 2L22 16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 12.5%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(31.25%, 43.75%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(52.08%, 43.75%)" },
            },
            {
              d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(72.92%, 43.75%)" },
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
          d: "M22 0L7 0C6.31 0 5.77 0.35 5.41 0.88L0 9L5.41 17.11C5.77 17.64 6.38 18 7.07 18L22 18C23.1 18 24 17.1 24 16L24 2C24 0.9 23.1 0 22 0ZM22 16L7.07 16L2.4 9L7.06 2L22 2L22 16Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 12.5%)" },
        },
        {
          d: "M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 12.5%)" },
        },
        {
          d: "M14 10.5C14.8284 10.5 15.5 9.82843 15.5 9C15.5 8.17157 14.8284 7.5 14 7.5C13.1716 7.5 12.5 8.17157 12.5 9C12.5 9.82843 13.1716 10.5 14 10.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 12.5%)" },
        },
        {
          d: "M19 10.5C19.8284 10.5 20.5 9.82843 20.5 9C20.5 8.17157 19.8284 7.5 19 7.5C18.1716 7.5 17.5 8.17157 17.5 9C17.5 9.82843 18.1716 10.5 19 10.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "More")}
      {...rest}
    ></Icon>
  );
}
