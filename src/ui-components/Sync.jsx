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
export default function Sync(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Sync: {} }, variantValues: { style: "Filled" } },
    { overrides: { Sync: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Sync: {
          paths: [
            {
              d: "M8 2.29153L8 0.501534C8 0.0515344 7.46 -0.168466 7.15 0.151534L4.35 2.94153C4.15 3.14153 4.15 3.45153 4.35 3.65153L7.14 6.44153C7.46 6.75153 8 6.53153 8 6.08153L8 4.29153C11.31 4.29153 14 6.98153 14 10.2915C14 11.0815 13.85 11.8515 13.56 12.5415C13.41 12.9015 13.52 13.3115 13.79 13.5815C14.3 14.0915 15.16 13.9115 15.43 13.2415C15.8 12.3315 16 11.3315 16 10.2915C16 5.87153 12.42 2.29153 8 2.29153ZM8 16.2915C4.69 16.2915 2 13.6015 2 10.2915C2 9.50153 2.15 8.73153 2.44 8.04153C2.59 7.68153 2.48 7.27153 2.21 7.00153C1.7 6.49153 0.84 6.67153 0.57 7.34153C0.2 8.25153 0 9.25153 0 10.2915C0 14.7115 3.58 18.2915 8 18.2915L8 20.0815C8 20.5315 8.54 20.7515 8.85 20.4315L11.64 17.6415C11.84 17.4415 11.84 17.1315 11.64 16.9315L8.85 14.1415C8.54 13.8315 8 14.0515 8 14.5015L8 16.2915Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 7.12%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Sync: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Sync: {
          paths: [
            {
              d: "M8 3L8 0L4 4L8 8L8 5C11.31 5 14 7.69 14 11C14 12.01 13.75 12.97 13.3 13.8L14.76 15.26C15.54 14.03 16 12.57 16 11C16 6.58 12.42 3 8 3ZM8 17C4.69 17 2 14.31 2 11C2 9.99 2.25 9.03 2.7 8.2L1.24 6.74C0.46 7.97 0 9.43 0 11C0 15.42 3.58 19 8 19L8 22L12 18L8 14L8 17Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.71%, 4.17%)" },
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
          d: "M8 3L8 0L4 4L8 8L8 5C11.31 5 14 7.69 14 11C14 12.01 13.75 12.97 13.3 13.8L14.76 15.26C15.54 14.03 16 12.57 16 11C16 6.58 12.42 3 8 3ZM8 17C4.69 17 2 14.31 2 11C2 9.99 2.25 9.03 2.7 8.2L1.24 6.74C0.46 7.97 0 9.43 0 11C0 15.42 3.58 19 8 19L8 22L12 18L8 14L8 17Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Sync")}
      {...rest}
    ></Icon>
  );
}
