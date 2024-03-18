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
export default function Arrowdropup(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowdropup: {} }, variantValues: { style: "Filled" } },
    { overrides: { Arrowdropup: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Arrowdropup: {
          paths: [
            {
              d: "M0.296477 2.8825L2.88648 0.2925C3.27648 -0.0975 3.90648 -0.0975 4.29648 0.2925L6.88648 2.8825C7.51648 3.5125 7.06648 4.5925 6.17648 4.5925L0.996477 4.5925C0.106477 4.5925 -0.333523 3.5125 0.296477 2.8825Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(35.04%, 40.43%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Arrowdropup: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Arrowdropup: {
          paths: [
            {
              d: "M0 5L5 0L10 5L0 5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 37.5%)" },
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
          d: "M0 5L5 0L10 5L0 5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(29.17%, 39.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowdropup")}
      {...rest}
    ></Icon>
  );
}
