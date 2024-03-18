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
export default function Networklocked(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Networklocked: {
          paths: [
            {
              d: "M18.5 9C18.67 9 18.83 9.03 19 9.05L19 0L0 19L13 19L13 16C13 15.11 13.39 14.32 14 13.77L14 13.5C14 11.02 16.02 9 18.5 9ZM21 15L21 13.5C21 12.12 19.88 11 18.5 11C17.12 11 16 12.12 16 13.5L16 15C15.45 15 15 15.45 15 16L15 20C15 20.55 15.45 21 16 21L21 21C21.55 21 22 20.55 22 20L22 16C22 15.45 21.55 15 21 15ZM20 15L17 15L17 13.5C17 12.67 17.67 12 18.5 12C19.33 12 20 12.67 20 13.5L20 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 6.25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Networklocked: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Networklocked: {
          paths: [
            {
              d: "M18.5865 8.58401L18.5865 1.00401C18.5865 0.114012 17.5065 -0.335988 16.8765 0.294012L0.296477 16.874C-0.333523 17.504 0.106477 18.584 0.996477 18.584L11.5865 18.584L11.5865 12.584C11.5865 10.374 13.3765 8.58401 15.5865 8.58401L18.5865 8.58401ZM18.5865 13.584L18.5865 12.584C18.5865 11.484 17.6865 10.584 16.5865 10.584C15.4865 10.584 14.5865 11.484 14.5865 12.584L14.5865 13.584C14.0365 13.584 13.5865 14.034 13.5865 14.584L13.5865 17.584C13.5865 18.134 14.0365 18.584 14.5865 18.584L18.5865 18.584C19.1365 18.584 19.5865 18.134 19.5865 17.584L19.5865 14.584C19.5865 14.034 19.1365 13.584 18.5865 13.584ZM15.5865 12.584C15.5865 12.034 16.0365 11.584 16.5865 11.584C17.1365 11.584 17.5865 12.034 17.5865 12.584L17.5865 13.584L15.5865 13.584L15.5865 12.584Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.19%, 11.28%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Networklocked: {
          paths: [
            {
              d: "M21 15L21 14.64C21 13.33 20.06 12.14 18.76 12.01C17.26 11.86 16 13.03 16 14.5L16 15L15 15L15 21L22 21L22 15L21 15ZM20 15L17 15L17 14.5C17 13.67 17.67 13 18.5 13C19.33 13 20 13.67 20 14.5L20 15ZM18.5 10C18.65 10 18.8 10.01 18.96 10.02C18.97 10.02 18.99 10.03 19 10.03L19 0L0 19L13 19L13 13L14.26 13C14.48 12.37 14.84 11.8 15.32 11.32C16.17 10.47 17.3 10 18.5 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 6.25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Networklocked: {
          paths: [
            {
              d: "M21 15L21 14.5C21 13.12 19.88 12 18.5 12C17.12 12 16 13.12 16 14.5L16 15C15.45 15 15 15.45 15 16L15 20C15 20.55 15.45 21 16 21L21 21C21.55 21 22 20.55 22 20L22 16C22 15.45 21.55 15 21 15ZM20 15L17 15L17 14.5C17 13.67 17.67 13 18.5 13C19.33 13 20 13.67 20 14.5L20 15ZM17 4.83L17 10.26C17.47 10.1 17.97 10 18.5 10C18.67 10 18.83 10.03 19 10.05L19 0L0 19L13 19L13 17L4.83 17L17 4.83Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 4.17%)" },
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
          d: "M21 15L21 14.5C21 13.12 19.88 12 18.5 12C17.12 12 16 13.12 16 14.5L16 15C15.45 15 15 15.45 15 16L15 20C15 20.55 15.45 21 16 21L21 21C21.55 21 22 20.55 22 20L22 16C22 15.45 21.55 15 21 15ZM20 15L17 15L17 14.5C17 13.67 17.67 13 18.5 13C19.33 13 20 13.67 20 14.5L20 15ZM17 4.83L17 10.26C17.47 10.1 17.97 10 18.5 10C18.67 10 18.83 10.03 19 10.05L19 0L0 19L13 19L13 17L4.83 17L17 4.83Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 6.25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Networklocked")}
      {...rest}
    ></Icon>
  );
}
