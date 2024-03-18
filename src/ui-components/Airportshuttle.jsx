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
export default function Airportshuttle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Airportshuttle: {
          paths: [
            {
              d: "M16 0L2 0C0.9 0 0 0.89 0 2L0 11L2 11C2 12.65 3.34 14 5 14C6.66 14 8 12.65 8 11L13.5 11C13.5 12.65 14.84 14 16.5 14C18.16 14 19.5 12.65 19.5 11L22 11L22 6L16 0ZM2 6L2 2L6 2L6 6L2 6ZM5 12.5C4.17 12.5 3.5 11.83 3.5 11C3.5 10.17 4.17 9.5 5 9.5C5.83 9.5 6.5 10.17 6.5 11C6.5 11.83 5.83 12.5 5 12.5ZM12 6L8 6L8 2L12 2L12 6ZM16.5 12.5C15.67 12.5 15 11.83 15 11C15 10.17 15.67 9.5 16.5 9.5C17.33 9.5 18 10.17 18 11C18 11.83 17.33 12.5 16.5 12.5ZM14 6L14 2L15 2L19 6L14 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Airportshuttle: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Airportshuttle: {
          paths: [
            {
              d: "M21.41 5.41L16.58 0.58C16.21 0.21 15.7 0 15.17 0L2 0C0.9 0 0 0.89 0 2L0 9C0 10.1 0.9 11 2 11C2 12.66 3.34 14 5 14C6.66 14 8 12.66 8 11L14 11C14 12.66 15.34 14 17 14C18.66 14 20 12.66 20 11C21.1 11 22 10.1 22 9L22 6.83C22 6.3 21.79 5.79 21.41 5.41ZM2 5L2 3C2 2.45 2.45 2 3 2L6 2L6 6L3 6C2.45 6 2 5.55 2 5ZM5 12.25C4.31 12.25 3.75 11.69 3.75 11C3.75 10.31 4.31 9.75 5 9.75C5.69 9.75 6.25 10.31 6.25 11C6.25 11.69 5.69 12.25 5 12.25ZM12 6L8 6L8 2L12 2L12 6ZM17 12.25C16.31 12.25 15.75 11.69 15.75 11C15.75 10.31 16.31 9.75 17 9.75C17.69 9.75 18.25 10.31 18.25 11C18.25 11.69 17.69 12.25 17 12.25ZM14 6L14 2L15 2L19 6L14 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Airportshuttle: {
          paths: [
            {
              d: "M16 0L0 0L0 11L2 11C2 12.66 3.34 14 5 14C6.66 14 8 12.66 8 11L14 11C14 12.66 15.34 14 17 14C18.66 14 20 12.66 20 11L22 11L22 6L16 0ZM2 6L2 2L6 2L6 6L2 6ZM5 12.25C4.31 12.25 3.75 11.69 3.75 11C3.75 10.31 4.31 9.75 5 9.75C5.69 9.75 6.25 10.31 6.25 11C6.25 11.69 5.69 12.25 5 12.25ZM12 6L8 6L8 2L12 2L12 6ZM17 12.25C16.31 12.25 15.75 11.69 15.75 11C15.75 10.31 16.31 9.75 17 9.75C17.69 9.75 18.25 10.31 18.25 11C18.25 11.69 17.69 12.25 17 12.25ZM14 6L14 2L15 2L19 6L14 6Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Airportshuttle: {
          paths: [
            {
              d: "M0 2L0.78 2C1.33 1.39 2.12 1 3 1C3.88 1 4.67 1.39 5.22 2L12.78 2C13.33 1.39 14.12 1 15 1C15.88 1 16.67 1.39 17.22 2L18 2L18 0L0 0L0 2Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 50%)" },
            },
            {
              d: "M16 0L2 0C0.9 0 0 0.89 0 2L0 11L2 11C2 12.66 3.34 14 5 14C6.66 14 8 12.66 8 11L14 11C14 12.66 15.34 14 17 14C18.66 14 20 12.66 20 11L22 11L22 6L16 0ZM14 2L15 2L18 5L14 5L14 2ZM8 2L12 2L12 5L8 5L8 2ZM2 2L6 2L6 5L2 5L2 2ZM5 12.25C4.31 12.25 3.75 11.69 3.75 11C3.75 10.31 4.31 9.75 5 9.75C5.69 9.75 6.25 10.31 6.25 11C6.25 11.69 5.69 12.25 5 12.25ZM17 12.25C16.31 12.25 15.75 11.69 15.75 11C15.75 10.31 16.31 9.75 17 9.75C17.69 9.75 18.25 10.31 18.25 11C18.25 11.69 17.69 12.25 17 12.25ZM20 9L19.22 9C18.67 8.39 17.88 8 17 8C16.12 8 15.33 8.39 14.78 9L7.22 9C6.67 8.39 5.89 8 5 8C4.11 8 3.33 8.39 2.78 9L2 9L2 7L20 7L20 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 20.83%)" },
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
          d: "M16 0L2 0C0.9 0 0 0.89 0 2L0 11L2 11C2 12.66 3.34 14 5 14C6.66 14 8 12.66 8 11L14 11C14 12.66 15.34 14 17 14C18.66 14 20 12.66 20 11L22 11L22 6L16 0ZM14 2L15 2L18 5L14 5L14 2ZM8 2L12 2L12 5L8 5L8 2ZM2 2L6 2L6 5L2 5L2 2ZM5 12.25C4.31 12.25 3.75 11.69 3.75 11C3.75 10.31 4.31 9.75 5 9.75C5.69 9.75 6.25 10.31 6.25 11C6.25 11.69 5.69 12.25 5 12.25ZM17 12.25C16.31 12.25 15.75 11.69 15.75 11C15.75 10.31 16.31 9.75 17 9.75C17.69 9.75 18.25 10.31 18.25 11C18.25 11.69 17.69 12.25 17 12.25ZM20 9L19.22 9C18.67 8.39 17.88 8 17 8C16.12 8 15.33 8.39 14.78 9L7.22 9C6.67 8.39 5.89 8 5 8C4.11 8 3.33 8.39 2.78 9L2 9L2 7L20 7L20 9Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Airportshuttle")}
      {...rest}
    ></Icon>
  );
}
