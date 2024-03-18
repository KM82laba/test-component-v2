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
export default function Arrowleft(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowleft: {} }, variantValues: { style: "Filled" } },
    { overrides: { Arrowleft: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Arrowleft: {
          paths: [
            {
              d: "M2.8825 0.296477L0.2925 2.88648C-0.0975 3.27648 -0.0975 3.90648 0.2925 4.29648L2.8825 6.88648C3.5125 7.51648 4.5925 7.06648 4.5925 6.17648L4.5925 0.996477C4.5925 0.106477 3.5125 -0.333523 2.8825 0.296477Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(40.43%, 35.04%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Arrowleft: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Arrowleft: {
          paths: [
            {
              d: "M5 0L0 5L5 10L5 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(37.5%, 29.17%)" },
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
          d: "M5 0L0 5L5 10L5 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(39.58%, 29.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowleft")}
      {...rest}
    ></Icon>
  );
}
