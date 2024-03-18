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
export default function Enhancedencryption(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Enhancedencryption: {
          paths: [
            {
              d: "M14 7L13 7L13 5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5L3 7L2 7C0.9 7 0 7.9 0 9L0 19C0 20.1 0.9 21 2 21L14 21C15.1 21 16 20.1 16 19L16 9C16 7.9 15.1 7 14 7ZM4.9 5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5L11.1 7L4.9 7L4.9 5ZM12 15L9 15L9 18L7 18L7 15L4 15L4 13L7 13L7 10L9 10L9 13L12 13L12 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 6.25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Enhancedencryption: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Enhancedencryption: {
          paths: [
            {
              d: "M14 7L13 7L13 5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5L3 7L2 7C0.9 7 0 7.9 0 9L0 19C0 20.1 0.9 21 2 21L14 21C15.1 21 16 20.1 16 19L16 9C16 7.9 15.1 7 14 7ZM4.9 5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5L11.1 7L4.9 7L4.9 5ZM11 15L9 15L9 17C9 17.55 8.55 18 8 18C7.45 18 7 17.55 7 17L7 15L5 15C4.45 15 4 14.55 4 14C4 13.45 4.45 13 5 13L7 13L7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11L9 13L11 13C11.55 13 12 13.45 12 14C12 14.55 11.55 15 11 15Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 6.25%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Enhancedencryption: {
          paths: [
            {
              d: "M16 6.99434L13 6.99434L13 5.21434C13 2.60434 11.09 0.274338 8.49 0.024338C5.51 -0.265662 3 2.07434 3 4.99434L3 6.99434L0 6.99434L0 20.9943L16 20.9943L16 6.99434ZM4.9 4.99434C4.9 3.28434 6.29 1.89434 8 1.89434C9.71 1.89434 11.1 3.28434 11.1 4.99434L11.1 6.99434L4.9 6.99434L4.9 4.99434ZM12 14.9943L9 14.9943L9 17.9943L7 17.9943L7 14.9943L4 14.9943L4 12.9943L7 12.9943L7 9.99434L9 9.99434L9 12.9943L12 12.9943L12 14.9943Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 6.26%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Enhancedencryption: {
          paths: [
            {
              d: "M0 10L12 10L12 0L0 0L0 10ZM2 4L5 4L5 1L7 1L7 4L10 4L10 6L7 6L7 9L5 9L5 6L2 6L2 4Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 41.67%)" },
            },
            {
              d: "M14 7L13 7L13 5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5L3 7L2 7C0.9 7 0 7.9 0 9L0 19C0 20.1 0.9 21 2 21L14 21C15.1 21 16 20.1 16 19L16 9C16 7.9 15.1 7 14 7ZM4.9 5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5L11.1 7L4.9 7L4.9 5ZM14 19L2 19L2 9L14 9L14 19ZM7 18L9 18L9 15L12 15L12 13L9 13L9 10L7 10L7 13L4 13L4 15L7 15L7 18Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 4.17%)" },
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
          d: "M14 7L13 7L13 5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5L3 7L2 7C0.9 7 0 7.9 0 9L0 19C0 20.1 0.9 21 2 21L14 21C15.1 21 16 20.1 16 19L16 9C16 7.9 15.1 7 14 7ZM4.9 5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5L11.1 7L4.9 7L4.9 5ZM14 19L2 19L2 9L14 9L14 19ZM9 10L7 10L7 13L4 13L4 15L7 15L7 18L9 18L9 15L12 15L12 13L9 13L9 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 6.25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Enhancedencryption")}
      {...rest}
    ></Icon>
  );
}
