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
export default function Directionsbike(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Directionsbike: {} }, variantValues: { style: "Filled" } },
    { overrides: { Directionsbike: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Directionsbike: {
          paths: [
            {
              d: "M15.5 4C16.6 4 17.5 3.1 17.5 2C17.5 0.9 16.6 0 15.5 0C14.4 0 13.5 0.9 13.5 2C13.5 3.1 14.4 4 15.5 4ZM5 10.5C2.2 10.5 0 12.7 0 15.5C0 18.3 2.2 20.5 5 20.5C7.8 20.5 10 18.3 10 15.5C10 12.7 7.8 10.5 5 10.5ZM5 19C3.1 19 1.5 17.4 1.5 15.5C1.5 13.6 3.1 12 5 12C6.9 12 8.5 13.6 8.5 15.5C8.5 17.4 6.9 19 5 19ZM10.8 9L13.2 6.6L14 7.4C15.06 8.46 16.38 9.18 17.96 9.42C18.56 9.51 19.1 9.03 19.1 8.42C19.1 7.93 18.73 7.51 18.25 7.43C17.14 7.25 16.23 6.72 15.5 6L13.6 4.1C13.1 3.7 12.6 3.5 12 3.5C11.4 3.5 10.9 3.7 10.6 4.1L7.8 6.9C7.4 7.3 7.2 7.8 7.2 8.3C7.2 8.9 7.4 9.4 7.8 9.7L11 12.5L11 16.5C11 17.05 11.45 17.5 12 17.5C12.55 17.5 13 17.05 13 16.5L13 12.1C13 11.58 12.8 11.09 12.45 10.72L10.8 9ZM19 10.5C16.2 10.5 14 12.7 14 15.5C14 18.3 16.2 20.5 19 20.5C21.8 20.5 24 18.3 24 15.5C24 12.7 21.8 10.5 19 10.5ZM19 19C17.1 19 15.5 17.4 15.5 15.5C15.5 13.6 17.1 12 19 12C20.9 12 22.5 13.6 22.5 15.5C22.5 17.4 20.9 19 19 19Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 7.29%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Directionsbike: {
          paths: [
            {
              d: "M15.5 4C16.6 4 17.5 3.1 17.5 2C17.5 0.9 16.6 0 15.5 0C14.4 0 13.5 0.9 13.5 2C13.5 3.1 14.4 4 15.5 4ZM5 10.5C2.2 10.5 0 12.7 0 15.5C0 18.3 2.2 20.5 5 20.5C7.8 20.5 10 18.3 10 15.5C10 12.7 7.8 10.5 5 10.5ZM5 19C3.1 19 1.5 17.4 1.5 15.5C1.5 13.6 3.1 12 5 12C6.9 12 8.5 13.6 8.5 15.5C8.5 17.4 6.9 19 5 19ZM10.8 9L13.2 6.6L14 7.4C15.3 8.7 17 9.5 19.1 9.5L19.1 7.5C17.6 7.5 16.4 6.9 15.5 6L13.6 4.1C13.1 3.7 12.6 3.5 12 3.5C11.4 3.5 10.9 3.7 10.6 4.1L6.31 8.4L11 12.5L11 17.5L13 17.5L13 11.3L10.8 9ZM19 10.5C16.2 10.5 14 12.7 14 15.5C14 18.3 16.2 20.5 19 20.5C21.8 20.5 24 18.3 24 15.5C24 12.7 21.8 10.5 19 10.5ZM19 19C17.1 19 15.5 17.4 15.5 15.5C15.5 13.6 17.1 12 19 12C20.9 12 22.5 13.6 22.5 15.5C22.5 17.4 20.9 19 19 19Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 7.29%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Directionsbike: {
          paths: [
            {
              d: "M15.5 4C16.6 4 17.5 3.1 17.5 2C17.5 0.9 16.6 0 15.5 0C14.4 0 13.5 0.9 13.5 2C13.5 3.1 14.4 4 15.5 4ZM5 20.5C7.8 20.5 10 18.3 10 15.5C10 12.7 7.8 10.5 5 10.5C2.2 10.5 0 12.7 0 15.5C0 18.3 2.2 20.5 5 20.5ZM5 12C6.9 12 8.5 13.6 8.5 15.5C8.5 17.4 6.9 19 5 19C3.1 19 1.5 17.4 1.5 15.5C1.5 13.6 3.1 12 5 12ZM7.8 9.7L11 12.5L11 17.5L13 17.5L13 11.3L10.8 9L13.2 6.6L14 7.4C15.3 8.7 17 9.5 19.1 9.5L19.1 7.5C17.6 7.5 16.4 6.9 15.5 6L13.6 4.1C13.1 3.7 12.6 3.5 12 3.5C11.4 3.5 10.9 3.7 10.6 4.1L7.8 6.9C7.4 7.3 7.2 7.8 7.2 8.3C7.2 8.9 7.4 9.4 7.8 9.7ZM19 10.5C16.2 10.5 14 12.7 14 15.5C14 18.3 16.2 20.5 19 20.5C21.8 20.5 24 18.3 24 15.5C24 12.7 21.8 10.5 19 10.5ZM19 19C17.1 19 15.5 17.4 15.5 15.5C15.5 13.6 17.1 12 19 12C20.9 12 22.5 13.6 22.5 15.5C22.5 17.4 20.9 19 19 19Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 6.25%)" },
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
          d: "M15.5 4C16.6 4 17.5 3.1 17.5 2C17.5 0.9 16.6 0 15.5 0C14.4 0 13.5 0.9 13.5 2C13.5 3.1 14.4 4 15.5 4ZM5 10.5C2.2 10.5 0 12.7 0 15.5C0 18.3 2.2 20.5 5 20.5C7.8 20.5 10 18.3 10 15.5C10 12.7 7.8 10.5 5 10.5ZM5 19C3.1 19 1.5 17.4 1.5 15.5C1.5 13.6 3.1 12 5 12C6.9 12 8.5 13.6 8.5 15.5C8.5 17.4 6.9 19 5 19ZM10.8 9L13.2 6.6L14 7.4C15.3 8.7 17 9.5 19.1 9.5L19.1 7.5C17.6 7.5 16.4 6.9 15.5 6L13.6 4.1C13.1 3.7 12.6 3.5 12 3.5C11.4 3.5 10.9 3.7 10.6 4.1L7.8 6.9C7.4 7.3 7.2 7.8 7.2 8.3C7.2 8.9 7.4 9.4 7.8 9.7L11 12.5L11 17.5L13 17.5L13 11.3L10.8 9ZM19 10.5C16.2 10.5 14 12.7 14 15.5C14 18.3 16.2 20.5 19 20.5C21.8 20.5 24 18.3 24 15.5C24 12.7 21.8 10.5 19 10.5ZM19 19C17.1 19 15.5 17.4 15.5 15.5C15.5 13.6 17.1 12 19 12C20.9 12 22.5 13.6 22.5 15.5C22.5 17.4 20.9 19 19 19Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 7.29%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Directionsbike")}
      {...rest}
    ></Icon>
  );
}
