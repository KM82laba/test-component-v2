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
export default function Ondemandvideo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Ondemandvideo: {
          paths: [
            {
              d: "M20 0L2 0C0.89 0 0 0.89 0 2L0 14C0 15.1 0.89 16 2 16L7 16L7 18L15 18L15 16L20 16C21.1 16 21.99 15.1 21.99 14L22 2C22 0.89 21.1 0 20 0ZM20 14L2 14L2 2L20 2L20 14ZM15 8L8 12L8 4L15 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Ondemandvideo: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Ondemandvideo: {
          paths: [
            {
              d: "M20 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L7 16L7 17C7 17.55 7.45 18 8 18L14 18C14.55 18 15 17.55 15 17L15 16L20 16C21.1 16 21.99 15.1 21.99 14L22 2C22 0.89 21.1 0 20 0ZM19 14L3 14C2.45 14 2 13.55 2 13L2 3C2 2.45 2.45 2 3 2L19 2C19.55 2 20 2.45 20 3L20 13C20 13.55 19.55 14 19 14ZM13.48 8.87L9.5 11.15C8.83 11.53 8 11.04 8 10.28L8 5.72C8 4.95 8.83 4.47 9.5 4.85L13.48 7.13C14.15 7.52 14.15 8.48 13.48 8.87Z",
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
        Ondemandvideo: {
          paths: [
            {
              d: "M22 0L0 0L0 16L7 16L7 18L15 18L15 16L21.99 16L22 0ZM20 14L2 14L2 2L20 2L20 14ZM15 8L8 12L8 4L15 8Z",
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
        Ondemandvideo: {
          paths: [
            {
              d: "M0 12L18 12L18 0L0 0L0 12ZM6 2L13 6L6 10L6 2Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(12.5%, 20.83%)" },
            },
            {
              d: "M8 4L8 12L15 8L8 4ZM20 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L7 16L7 18L15 18L15 16L20 16C21.1 16 22 15.1 22 14L22 2C22 0.9 21.1 0 20 0ZM20 14L2 14L2 2L20 2L20 14Z",
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
          d: "M8 4L8 12L15 8L8 4ZM20 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L7 16L7 18L15 18L15 16L20 16C21.1 16 22 15.1 22 14L22 2C22 0.9 21.1 0 20 0ZM20 14L2 14L2 2L20 2L20 14Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Ondemandvideo")}
      {...rest}
    ></Icon>
  );
}
