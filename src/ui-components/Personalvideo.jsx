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
export default function Personalvideo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Personalvideo: {} }, variantValues: { style: "Filled" } },
    { overrides: { Personalvideo: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Personalvideo: {
          paths: [
            {
              d: "M20 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L7 16L7 17C7 17.55 7.45 18 8 18L14 18C14.55 18 15 17.55 15 17L15 16L20 16C21.1 16 21.99 15.1 21.99 14L22 2C22 0.89 21.1 0 20 0ZM19 14L3 14C2.45 14 2 13.55 2 13L2 3C2 2.45 2.45 2 3 2L19 2C19.55 2 20 2.45 20 3L20 13C20 13.55 19.55 14 19 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Personalvideo: {
          paths: [
            {
              d: "M22 0L0 0L0 16L7 16L7 18L15 18L15 16L21.99 16L22 0ZM20 14L2 14L2 2L20 2L20 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Personalvideo: {
          paths: [
            {
              d: "M0 0L18 0L18 12L0 12L0 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 20.83%)" },
            },
            {
              d: "M20 0L2 0C0.89 0 0 0.89 0 2L0 14C0 15.1 0.89 16 2 16L7 16L7 18L15 18L15 16L20 16C21.1 16 21.99 15.1 21.99 14L22 2C22 0.89 21.1 0 20 0ZM20 14L2 14L2 2L20 2L20 14Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 12.5%)" },
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
          d: "M20 0L2 0C0.89 0 0 0.89 0 2L0 14C0 15.1 0.89 16 2 16L7 16L7 18L15 18L15 16L20 16C21.1 16 21.99 15.1 21.99 14L22 2C22 0.89 21.1 0 20 0ZM20 14L2 14L2 2L20 2L20 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Personalvideo")}
      {...rest}
    ></Icon>
  );
}
