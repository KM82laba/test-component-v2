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
export default function Female(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Female: {} }, variantValues: { style: "Filled" } },
    { overrides: { Female: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Female: {
          paths: [
            {
              d: "M5.5 2C7.43 2 9 3.57 9 5.5C9 7.43 7.43 9 5.5 9C3.57 9 2 7.43 2 5.5C2 3.57 3.57 2 5.5 2ZM6.5 10.91C9.06 10.44 11 8.2 11 5.5C11 2.46 8.54 0 5.5 0C2.46 0 0 2.46 0 5.5C0 8.2 1.94 10.44 4.5 10.91L4.5 13L3.5 13C2.95 13 2.5 13.45 2.5 14C2.5 14.55 2.95 15 3.5 15L4.5 15L4.5 16C4.5 16.55 4.95 17 5.5 17C6.05 17 6.5 16.55 6.5 16L6.5 15L7.5 15C8.05 15 8.5 14.55 8.5 14C8.5 13.45 8.05 13 7.5 13L6.5 13L6.5 10.91Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(27.08%, 14.58%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Female: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Female: {
          paths: [
            {
              d: "M11 5.5C11 2.46 8.54 0 5.5 0C2.46 0 0 2.46 0 5.5C0 8.2 1.94 10.43 4.5 10.9L4.5 13L2.5 13L2.5 15L4.5 15L4.5 17L6.5 17L6.5 15L8.5 15L8.5 13L6.5 13L6.5 10.9C9.06 10.43 11 8.2 11 5.5ZM2 5.5C2 3.57 3.57 2 5.5 2C7.43 2 9 3.57 9 5.5C9 7.43 7.43 9 5.5 9C3.57 9 2 7.43 2 5.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(27.08%, 16.67%)" },
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
          d: "M11 5.5C11 2.46 8.54 0 5.5 0C2.46 0 0 2.46 0 5.5C0 8.2 1.94 10.43 4.5 10.9L4.5 13L2.5 13L2.5 15L4.5 15L4.5 17L6.5 17L6.5 15L8.5 15L8.5 13L6.5 13L6.5 10.9C9.06 10.43 11 8.2 11 5.5ZM2 5.5C2 3.57 3.57 2 5.5 2C7.43 2 9 3.57 9 5.5C9 7.43 7.43 9 5.5 9C3.57 9 2 7.43 2 5.5Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(27.08%, 14.58%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Female")}
      {...rest}
    ></Icon>
  );
}
