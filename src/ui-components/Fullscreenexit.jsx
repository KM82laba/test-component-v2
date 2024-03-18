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
export default function Fullscreenexit(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Fullscreenexit: {} }, variantValues: { style: "Filled" } },
    { overrides: { Fullscreenexit: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Fullscreenexit: {
          paths: [
            {
              d: "M1 11L3 11L3 13C3 13.55 3.45 14 4 14C4.55 14 5 13.55 5 13L5 10C5 9.45 4.55 9 4 9L1 9C0.45 9 0 9.45 0 10C0 10.55 0.45 11 1 11ZM3 3L1 3C0.45 3 0 3.45 0 4C0 4.55 0.45 5 1 5L4 5C4.55 5 5 4.55 5 4L5 1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1L3 3ZM10 14C10.55 14 11 13.55 11 13L11 11L13 11C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9L10 9C9.45 9 9 9.45 9 10L9 13C9 13.55 9.45 14 10 14ZM11 3L11 1C11 0.45 10.55 0 10 0C9.45 0 9 0.45 9 1L9 4C9 4.55 9.45 5 10 5L13 5C13.55 5 14 4.55 14 4C14 3.45 13.55 3 13 3L11 3Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 20.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Fullscreenexit: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Fullscreenexit: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M0 11L3 11L3 14L5 14L5 9L0 9L0 11ZM3 3L0 3L0 5L5 5L5 0L3 0L3 3ZM9 14L11 14L11 11L14 11L14 9L9 9L9 14ZM11 3L11 0L9 0L9 5L14 5L14 3L11 3Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Fullscreenexit")}
      {...rest}
    ></Icon>
  );
}
