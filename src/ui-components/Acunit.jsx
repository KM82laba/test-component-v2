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
export default function Acunit(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Acunit: {} }, variantValues: { style: "Filled" } },
    { overrides: { Acunit: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Acunit: {
          paths: [
            {
              d: "M19 9L15.83 9L18.37 6.46C18.76 6.07 18.76 5.44 18.37 5.05C17.98 4.66 17.34 4.66 16.95 5.05L13 9L11 9L11 7L14.95 3.05C15.34 2.66 15.34 2.02 14.95 1.63C14.56 1.24 13.93 1.24 13.54 1.63L11 4.17L11 1C11 0.45 10.55 0 10 0C9.45 0 9 0.45 9 1L9 4.17L6.46 1.63C6.07 1.24 5.44 1.24 5.05 1.63C4.66 2.02 4.66 2.66 5.05 3.05L9 7L9 9L7 9L3.05 5.05C2.66 4.66 2.02 4.66 1.63 5.05C1.24 5.44 1.24 6.07 1.63 6.46L4.17 9L1 9C0.45 9 0 9.45 0 10C0 10.55 0.45 11 1 11L4.17 11L1.63 13.54C1.24 13.93 1.24 14.56 1.63 14.95C2.02 15.34 2.66 15.34 3.05 14.95L7 11L9 11L9 13L5.05 16.95C4.66 17.34 4.66 17.98 5.05 18.37C5.44 18.76 6.07 18.76 6.46 18.37L9 15.83L9 19C9 19.55 9.45 20 10 20C10.55 20 11 19.55 11 19L11 15.83L13.54 18.37C13.93 18.76 14.56 18.76 14.95 18.37C15.34 17.98 15.34 17.34 14.95 16.95L11 13L11 11L13 11L16.95 14.95C17.34 15.34 17.98 15.34 18.37 14.95C18.76 14.56 18.76 13.93 18.37 13.54L15.83 11L19 11C19.55 11 20 10.55 20 10C20 9.45 19.55 9 19 9Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Acunit: {} }, variantValues: { style: "Sharp" } },
    { overrides: { Acunit: {} }, variantValues: { style: "Two Tone" } },
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
          d: "M20 9L15.83 9L19.07 5.76L17.66 4.34L13 9L11 9L11 7L15.66 2.34L14.24 0.93L11 4.17L11 0L9 0L9 4.17L5.76 0.93L4.34 2.34L9 7L9 9L7 9L2.34 4.34L0.93 5.76L4.17 9L0 9L0 11L4.17 11L0.93 14.24L2.34 15.66L7 11L9 11L9 13L4.34 17.66L5.76 19.07L9 15.83L9 20L11 20L11 15.83L14.24 19.07L15.66 17.66L11 13L11 11L13 11L17.66 15.66L19.07 14.24L15.83 11L20 11L20 9Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Acunit")}
      {...rest}
    ></Icon>
  );
}
