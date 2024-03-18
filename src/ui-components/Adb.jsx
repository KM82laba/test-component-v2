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
export default function Adb(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Adb: {} }, variantValues: { style: "Filled" } },
    { overrides: { Adb: {} }, variantValues: { style: "Outlined" } },
    { overrides: { Adb: {} }, variantValues: { style: "Round" } },
    { overrides: { Adb: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Adb: {
          paths: [
            {
              d: "M0 14.56C0 18.43 3.13 21.56 7 21.56C10.87 21.56 14 18.43 14 14.56L14 10.56L0 10.56L0 14.56ZM11.12 2.93L13.22 0.83L12.4 0L10.1 2.31C9.16 1.84 8.12 1.56 7 1.56C5.88 1.56 4.84 1.84 3.91 2.31L1.6 0L0.78 0.83L2.88 2.93C1.14 4.2 0 6.24 0 8.56L0 9.56L14 9.56L14 8.56C14 6.24 12.86 4.2 11.12 2.93ZM4 7.56C3.45 7.56 3 7.11 3 6.56C3 6.01 3.45 5.56 4 5.56C4.55 5.56 5 6.01 5 6.56C5 7.11 4.55 7.56 4 7.56ZM10 7.56C9.45 7.56 9 7.11 9 6.56C9 6.01 9.45 5.56 10 5.56C10.55 5.56 11 6.01 11 6.56C11 7.11 10.55 7.56 10 7.56Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 6%)" },
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
          d: "M0 14.56C0 18.43 3.13 21.56 7 21.56C10.87 21.56 14 18.43 14 14.56L14 10.56L0 10.56L0 14.56ZM11.12 2.93L13.22 0.83L12.4 0L10.1 2.31C9.16 1.84 8.12 1.56 7 1.56C5.88 1.56 4.84 1.84 3.91 2.31L1.6 0L0.78 0.83L2.88 2.93C1.14 4.2 0 6.24 0 8.56L0 9.56L14 9.56L14 8.56C14 6.24 12.86 4.2 11.12 2.93ZM4 7.56C3.45 7.56 3 7.11 3 6.56C3 6.01 3.45 5.56 4 5.56C4.55 5.56 5 6.01 5 6.56C5 7.11 4.55 7.56 4 7.56ZM10 7.56C9.45 7.56 9 7.11 9 6.56C9 6.01 9.45 5.56 10 5.56C10.55 5.56 11 6.01 11 6.56C11 7.11 10.55 7.56 10 7.56Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(20.83%, 5.08%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Adb")}
      {...rest}
    ></Icon>
  );
}
