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
export default function Plusone(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Plusone: {} }, variantValues: { style: "Filled" } },
    { overrides: { Plusone: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Plusone: {
          paths: [
            {
              d: "M5 2.72805C4.45 2.72805 4 3.17805 4 3.72805L4 6.72805L1 6.72805C0.45 6.72805 0 7.17805 0 7.72805C0 8.27805 0.45 8.72805 1 8.72805L4 8.72805L4 11.7281C4 12.2781 4.45 12.7281 5 12.7281C5.55 12.7281 6 12.2781 6 11.7281L6 8.72805L9 8.72805C9.55 8.72805 10 8.27805 10 7.72805C10 7.17805 9.55 6.72805 9 6.72805L6 6.72805L6 3.72805C6 3.17805 5.55 2.72805 5 2.72805ZM10.5 1.51805C10.5 2.08805 11.02 2.51805 11.58 2.40805L13 2.12805L13 11.7281C13 12.2781 13.45 12.7281 14 12.7281C14.55 12.7281 15 12.2781 15 11.7281L15 0.998051C15 0.348051 14.4 -0.121948 13.77 0.0280516L11.2 0.648051C10.79 0.738051 10.5 1.10805 10.5 1.51805Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(18.75%, 23.48%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Plusone: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Plusone: {
          paths: [
            {
              d: "M6 3L4 3L4 7L0 7L0 9L4 9L4 13L6 13L6 9L10 9L10 7L6 7L6 3ZM10.5 1.08L10.5 2.9L13 2.4L13 13L15 13L15 0L10.5 1.08Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 20.83%)" },
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
          d: "M6 3L4 3L4 7L0 7L0 9L4 9L4 13L6 13L6 9L10 9L10 7L6 7L6 3ZM10.5 1.08L10.5 2.9L13 2.4L13 13L15 13L15 0L10.5 1.08Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(18.75%, 22.92%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Plusone")}
      {...rest}
    ></Icon>
  );
}
