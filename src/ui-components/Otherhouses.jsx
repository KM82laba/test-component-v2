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
export default function Otherhouses(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Otherhouses: {
          paths: [
            {
              d: "M11 0L0 8.4L1.21 9.99L3 8.62L3 18L19 18L19 8.62L20.79 9.98L22 8.4L11 0ZM7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12ZM11 12C10.45 12 10 11.55 10 11C10 10.45 10.45 10 11 10C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 12C14.45 12 14 11.55 14 11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 12.5%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Otherhouses: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Otherhouses: {
          paths: [
            {
              d: "M0.207566 8.9325C0.547566 9.3725 1.16757 9.4525 1.60757 9.1225L2.59757 8.3625L2.59757 16.7425C2.59757 17.2925 3.04757 17.7425 3.59757 17.7425L17.5976 17.7425C18.1476 17.7425 18.5976 17.2925 18.5976 16.7425L18.5976 8.3625L19.5876 9.1225C20.0276 9.4625 20.6576 9.3725 20.9876 8.9325C21.3276 8.4925 21.2376 7.8625 20.7976 7.5325L11.1976 0.2025C10.8376 -0.0675 10.3376 -0.0675 9.98757 0.2025L0.387566 7.5325C-0.0424339 7.8725 -0.132434 8.5025 0.207566 8.9325ZM6.59757 11.7425C6.04757 11.7425 5.59757 11.2925 5.59757 10.7425C5.59757 10.1925 6.04757 9.7425 6.59757 9.7425C7.14757 9.7425 7.59757 10.1925 7.59757 10.7425C7.59757 11.2925 7.14757 11.7425 6.59757 11.7425ZM10.5976 11.7425C10.0476 11.7425 9.59757 11.2925 9.59757 10.7425C9.59757 10.1925 10.0476 9.7425 10.5976 9.7425C11.1476 9.7425 11.5976 10.1925 11.5976 10.7425C11.5976 11.2925 11.1476 11.7425 10.5976 11.7425ZM14.5976 11.7425C14.0476 11.7425 13.5976 11.2925 13.5976 10.7425C13.5976 10.1925 14.0476 9.7425 14.5976 9.7425C15.1476 9.7425 15.5976 10.1925 15.5976 10.7425C15.5976 11.2925 15.1476 11.7425 14.5976 11.7425Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(5.84%, 13.04%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Otherhouses: {
          paths: [
            {
              d: "M11 0L0 8.4L1.21 9.99L3 8.62L3 18L19 18L19 8.62L20.79 9.98L22 8.4L11 0ZM7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12ZM11 12C10.45 12 10 11.55 10 11C10 10.45 10.45 10 11 10C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 12C14.45 12 14 11.55 14 11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12Z",
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
        Otherhouses: {
          paths: [
            {
              d: "M6 0L0 4.58L0 13.48L12 13.48L12 4.58L6 0ZM2 9.48C1.45 9.48 1 9.03 1 8.48C1 7.93 1.45 7.48 2 7.48C2.55 7.48 3 7.93 3 8.48C3 9.03 2.55 9.48 2 9.48ZM6 9.48C5.45 9.48 5 9.03 5 8.48C5 7.93 5.45 7.48 6 7.48C6.55 7.48 7 7.93 7 8.48C7 9.03 6.55 9.48 6 9.48ZM10 9.48C9.45 9.48 9 9.03 9 8.48C9 7.93 9.45 7.48 10 7.48C10.55 7.48 11 7.93 11 8.48C11 9.03 10.55 9.48 10 9.48Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 23%)" },
            },
            {
              d: "M11 0L0 8.4L1.21 9.99L3 8.62L3 18L19 18L19 8.62L20.79 9.98L22 8.4L11 0ZM17 16L5 16L5 7.1L11 2.52L17 7.1L17 16ZM8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10C7.55 10 8 10.45 8 11ZM11 10C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12C10.45 12 10 11.55 10 11C10 10.45 10.45 10 11 10ZM14 11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12C14.45 12 14 11.55 14 11Z",
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
          d: "M11 0L0 8.4L1.21 9.99L3 8.62L3 18L19 18L19 8.62L20.79 9.98L22 8.4L11 0ZM17 16L5 16L5 7.1L11 2.52L17 7.1L17 16ZM8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10C7.55 10 8 10.45 8 11ZM11 10C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12C10.45 12 10 11.55 10 11C10 10.45 10.45 10 11 10ZM14 11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12C14.45 12 14 11.55 14 11Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Otherhouses")}
      {...rest}
    ></Icon>
  );
}
