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
export default function Arrowright(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Arrowright: {} }, variantValues: { style: "Filled" } },
    { overrides: { Arrowright: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Arrowright: {
          paths: [
            {
              d: "M1.71 6.87957L4.3 4.28957C4.69 3.89957 4.69 3.26957 4.3 2.87957L1.71 0.289571C1.08 -0.330429 0 0.109571 0 0.999571L0 6.16957C0 7.06957 1.08 7.50957 1.71 6.87957Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(40.43%, 35.05%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Arrowright: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Arrowright: {
          paths: [
            {
              d: "M0 10L5 5L0 0L0 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(41.67%, 29.17%)" },
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
          d: "M0 10L5 5L0 0L0 10Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(39.58%, 29.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Arrowright")}
      {...rest}
    ></Icon>
  );
}
