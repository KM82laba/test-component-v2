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
export default function Personoff(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Personoff: {
          paths: [
            {
              d: "M7.26 3.01C7.97 1.91 9.21 1.19 10.61 1.19C12.82 1.19 14.61 2.98 14.61 5.19C14.61 6.59 13.89 7.83 12.79 8.54L7.26 3.01ZM18.61 14.36C18.59 13.26 17.98 12.25 17 11.74C16.46 11.46 15.87 11.2 15.23 10.98L18.61 14.36ZM19.8 18.38L1.42 0L0 1.41L8.89 10.3C7.08 10.53 5.5 11.09 4.22 11.75C3.22 12.26 2.61 13.29 2.61 14.41L2.61 17.19L15.78 17.19L18.39 19.8L19.8 18.38Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.75%, 8.75%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Personoff: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Personoff: {
          paths: [
            {
              d: "M6.8425 2.6025C7.5525 1.5025 8.7925 0.7825 10.1925 0.7825C12.4025 0.7825 14.1925 2.5725 14.1925 4.7825C14.1925 6.1825 13.4725 7.4225 12.3725 8.1325L6.8425 2.6025ZM18.1925 13.9525C18.1725 12.8525 17.5625 11.8425 16.5825 11.3325C16.0425 11.0525 15.4525 10.7925 14.8125 10.5725L18.1925 13.9525ZM18.6825 17.2725L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L8.4725 9.8825C6.6525 10.1125 5.0625 10.6825 3.7725 11.3425C2.7925 11.8625 2.1925 12.8925 2.1925 14.0025L2.1925 16.7825L15.3625 16.7825L17.2625 18.6825C17.6525 19.0725 18.2825 19.0725 18.6725 18.6825C19.0725 18.2925 19.0725 17.6625 18.6825 17.2725Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10.47%, 10.47%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Personoff: {
          paths: [
            {
              d: "M7.26 3.01C7.97 1.91 9.21 1.19 10.61 1.19C12.82 1.19 14.61 2.98 14.61 5.19C14.61 6.59 13.89 7.83 12.79 8.54L7.26 3.01ZM18.61 14.36C18.59 13.26 17.98 12.25 17 11.74C16.46 11.46 15.87 11.2 15.23 10.98L18.61 14.36ZM19.8 18.38L1.42 0L0 1.41L8.89 10.3C7.08 10.53 5.5 11.09 4.22 11.75C3.22 12.26 2.61 13.29 2.61 14.41L2.61 17.19L15.78 17.19L18.39 19.8L19.8 18.38Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.75%, 8.75%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Personoff: {
          paths: [
            {
              d: "M9.17 12L6.17 9C6.11 9 6.06 9 6 9C3.63 9 1.71 9.73 0.52 10.34C0.2 10.5 0 10.84 0 11.22L0 12L9.17 12ZM4.13 1.3C4.41 0.54 5.14 0 6 0C7.1 0 8 0.9 8 2C8 2.86 7.46 3.59 6.7 3.87",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 25%)" },
            },
            {
              d: "M18.61 14.36L15.24 10.98C15.88 11.2 16.47 11.46 17.01 11.74C17.98 12.25 18.59 13.26 18.61 14.36ZM19.8 18.38L18.39 19.79L15.78 17.19L2.61 17.19L2.61 14.41C2.61 13.29 3.22 12.26 4.22 11.75C5.51 11.09 7.09 10.53 8.89 10.3L0 1.41L1.41 0L19.8 18.38ZM13.78 15.19L10.78 12.19C10.72 12.19 10.67 12.19 10.61 12.19C8.24 12.19 6.32 12.92 5.13 13.53C4.81 13.69 4.61 14.03 4.61 14.41L4.61 15.19L13.78 15.19ZM10.61 3.19C11.71 3.19 12.61 4.09 12.61 5.19C12.61 6.05 12.07 6.78 11.31 7.06L12.79 8.54C13.89 7.83 14.61 6.59 14.61 5.19C14.61 2.98 12.82 1.19 10.61 1.19C9.21 1.19 7.97 1.91 7.26 3.01L8.74 4.49C9.02 3.73 9.75 3.19 10.61 3.19Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(5.79%, 11.71%)" },
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
          d: "M18.61 14.36L15.24 10.98C15.88 11.2 16.47 11.46 17.01 11.74C17.98 12.25 18.59 13.26 18.61 14.36ZM19.8 18.38L18.39 19.79L15.78 17.19L2.61 17.19L2.61 14.41C2.61 13.29 3.22 12.26 4.22 11.75C5.51 11.09 7.09 10.53 8.89 10.3L0 1.41L1.41 0L19.8 18.38ZM13.78 15.19L10.78 12.19C10.72 12.19 10.67 12.19 10.61 12.19C8.24 12.19 6.32 12.92 5.13 13.53C4.81 13.69 4.61 14.03 4.61 14.41L4.61 15.19L13.78 15.19ZM10.61 3.19C11.71 3.19 12.61 4.09 12.61 5.19C12.61 6.05 12.07 6.78 11.31 7.06L12.79 8.54C13.89 7.83 14.61 6.59 14.61 5.19C14.61 2.98 12.82 1.19 10.61 1.19C9.21 1.19 7.97 1.91 7.26 3.01L8.74 4.49C9.02 3.73 9.75 3.19 10.61 3.19Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.75%, 8.77%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Personoff")}
      {...rest}
    ></Icon>
  );
}
