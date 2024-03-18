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
export default function Arrowdropdown(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowdropdown: {} }, variantValues: { style: "Filled" } },
    { overrides: { Arrowdropdown: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Arrowdropdown: {
          paths: [
            {
              d: "M0.296477 1.71L2.88648 4.3C3.27648 4.69 3.90648 4.69 4.29648 4.3L6.88648 1.71C7.51648 1.08 7.06648 0 6.17648 0L0.996477 0C0.106477 0 -0.333523 1.08 0.296477 1.71Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(35.04%, 40.43%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Arrowdropdown: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Arrowdropdown: {
          paths: [
            {
              d: "M0 0L5 5L10 0L0 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 41.67%)" },
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
          d: "M0 0L5 5L10 0L0 0Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(29.17%, 39.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowdropdown")}
      {...rest}
    ></Icon>
  );
}
