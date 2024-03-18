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
export default function Editlocation(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Editlocation: {
          paths: [
            {
              d: "M7 0C3.14 0 0 3.14 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.14 10.86 0 7 0ZM5.44 10L4 10L4 8.56L7.35 5.22L8.78 6.65L5.44 10ZM9.89 5.55L9.19 6.25L7.75 4.81L8.45 4.11C8.6 3.96 8.84 3.96 8.99 4.11L9.89 5.01C10.04 5.16 10.04 5.4 9.89 5.55Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(20.83%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Editlocation: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Editlocation: {
          paths: [
            {
              d: "M8 0C3.8 0 0 3.22 0 8.2C0 11.38 2.45 15.12 7.34 19.43C7.72 19.76 8.29 19.76 8.67 19.43C13.55 15.12 16 11.38 16 8.2C16 3.22 12.2 0 8 0ZM5.73 11.5L4.5 11.5L4.5 10.06L8.43 6.14L9.86 7.57L6.09 11.35C5.99 11.45 5.87 11.5 5.73 11.5ZM11.28 6.16L10.58 6.86L9.14 5.42L9.84 4.72C9.99 4.57 10.23 4.57 10.38 4.72L11.28 5.62C11.43 5.77 11.43 6.01 11.28 6.16Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 9.01%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Editlocation: {
          paths: [
            {
              d: "M14.11 1.67L15.78 0L17.9 2.12L16.23 3.79L14.11 1.67ZM13.11 2.67L15.23 4.79L9.12 10.9L7 10.9L7 8.79L13.11 2.67ZM11.13 2.54L5.5 8.17L5.5 12.41L9.74 12.41L15.36 6.79C15.77 7.78 16 8.89 16 10.11C16 13.43 13.33 17.36 8 21.91C2.67 17.36 0 13.43 0 10.11C0 5.13 3.8 1.91 8 1.91C9.09 1.91 10.16 2.13 11.13 2.54Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(12.71%, 4.35%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Editlocation: {
          paths: [
            {
              d: "M8.11 10L7.28 10L4 10L2 10L2 8L2 4.74L2 3.91L2.59 3.32L5.91 0C2.61 0.05 0 2.6 0 6.2C0 8.54 1.95 11.64 6 15.34C10.05 11.64 12 8.55 12 6.2C12 6.17 12 6.14 12 6.12L8.7 9.42L8.11 10Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(25%, 16.67%)" },
            },
            {
              d: "M14.17 3.90376L13.1 2.83376L7.55 8.38376L7.55 9.46376L8.63 9.46376L14.17 3.90376ZM12 1.73376L13.29 0.443758C13.87 -0.146242 14.81 -0.146242 15.4 0.433758L15.41 0.443758L16.56 1.59376C17.15 2.18376 17.15 3.13376 16.56 3.71376L15.88 4.39376L15.86 4.41376L15.28 4.99376L9.28 10.9938L6 10.9938L6 7.73376L12 1.73376ZM9.72 1.18376L9.17 1.73376L7.9 3.00376C4.6 3.05376 2 5.60376 2 9.20376C2 11.5438 3.95 14.6438 8 18.3438C12.05 14.6438 14 11.5538 14 9.20376L14 9.10376L15.8 7.30376C15.93 7.90376 16 8.54376 16 9.20376C16 12.5238 13.33 16.4538 8 21.0038C2.67 16.4538 0 12.5238 0 9.20376C0 4.22376 3.8 1.00376 8 1.00376C8.58 1.00376 9.16 1.06376 9.72 1.18376Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 4.19%)" },
            },
            {
              d: "M6.62 1.07L5.55 0L0 5.55L0 6.63L1.08 6.63L6.62 1.07Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(48.13%, 16%)" },
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
          d: "M14.17 3.90286L13.1 2.83286L7.55 8.38286L7.55 9.46286L8.63 9.46286L14.17 3.90286ZM13.29 0.442861C13.4286 0.302571 13.5936 0.191187 13.7756 0.115166C13.9576 0.0391451 14.1528 2.22045e-16 14.35 0C14.5472 2.22045e-16 14.7424 0.0391451 14.9244 0.115166C15.1064 0.191187 15.2714 0.302571 15.41 0.442861L16.56 1.59286C17.15 2.18286 17.15 3.13286 16.56 3.71286L9.28 10.9929L6 10.9929L6 7.73286L13.29 0.442861ZM9.72 1.18286L7.9 3.00286C4.6 3.05286 2 5.60286 2 9.20286C2 11.5429 3.95 14.6429 8 18.3429C12.05 14.6429 14 11.5529 14 9.20286L14 9.10286L15.8 7.30286C15.93 7.90286 16 8.54286 16 9.20286C16 12.5229 13.33 16.4529 8 21.0029C2.67 16.4529 0 12.5229 0 9.20286C0 4.22286 3.8 1.00286 8 1.00286C8.58 1.00286 9.16 1.06286 9.72 1.18286Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(14.58%, 6.24%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Editlocation")}
      {...rest}
    ></Icon>
  );
}
