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
export default function Notificationsnone(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Notificationsnone: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Notificationsnone: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Notificationsnone: {
          paths: [
            {
              d: "M14.8765 14.79L13.5865 13.5L13.5865 8.5C13.5865 5.43 11.9465 2.86 9.08648 2.18L9.08648 1.5C9.08648 0.67 8.41648 0 7.58648 0C6.75648 0 6.08648 0.67 6.08648 1.5L6.08648 2.18C3.21648 2.86 1.58648 5.42 1.58648 8.5L1.58648 13.5L0.296477 14.79C-0.333523 15.42 0.106477 16.5 0.996477 16.5L14.1665 16.5C15.0665 16.5 15.5065 15.42 14.8765 14.79ZM11.5865 14.5L3.58648 14.5L3.58648 8.5C3.58648 6.02 5.09648 4 7.58648 4C10.0765 4 11.5865 6.02 11.5865 8.5L11.5865 14.5ZM7.58648 19.5C8.68648 19.5 9.58648 18.6 9.58648 17.5L5.58648 17.5C5.58648 18.6 6.47648 19.5 7.58648 19.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(18.39%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Notificationsnone: {
          paths: [
            {
              d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 0L6.5 0L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Notificationsnone: {
          paths: [
            {
              d: "M4 0C1.51 0 0 2.02 0 4.5L0 10.5L8 10.5L8 4.5C8 2.02 6.49 0 4 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 27.08%)" },
            },
            {
              d: "M14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5ZM8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 10.42%)" },
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
          d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 9.38%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Notificationsnone")}
      {...rest}
    ></Icon>
  );
}
