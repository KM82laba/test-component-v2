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
export default function Airlineseatreclineextra(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Airlineseatreclineextra: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Airlineseatreclineextra: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Airlineseatreclineextra: {
          paths: [
            {
              d: "M3.12911 3.63938C2.22911 2.99938 2.00911 1.75938 2.63911 0.849378C3.26911 -0.0506219 4.51911 -0.270622 5.42911 0.359378C6.32911 0.999378 6.54911 2.23938 5.91911 3.14938C5.27911 4.04938 4.03911 4.26938 3.12911 3.63938ZM13.7791 17.9994C13.7791 17.4494 13.3291 16.9994 12.7791 16.9994L6.70911 16.9994C5.22911 16.9994 3.96911 15.9194 3.74911 14.4594L1.93911 5.77938C1.84911 5.32938 1.44911 4.99938 0.979114 4.99938C0.359114 4.99938 -0.100886 5.56938 0.0191139 6.17938L1.76911 14.7594C2.14911 17.1994 4.24911 18.9994 6.71911 18.9994L12.7791 18.9994C13.3291 18.9994 13.7791 18.5494 13.7791 17.9994ZM13.3191 12.9994L9.12911 12.9994L8.09911 8.89938C9.37911 9.61938 10.7291 10.1794 12.1991 10.1994C12.7791 10.2094 13.2491 9.70938 13.2491 9.12938C13.2491 8.53938 12.7591 8.08938 12.1691 8.06938C10.8591 8.02938 9.53911 7.50938 8.55911 6.73938L6.91911 5.46938C6.68911 5.28938 6.42911 5.16938 6.15911 5.08938C5.83911 4.99938 5.49911 4.96938 5.16911 5.02938L5.14911 5.02938C3.91911 5.24938 3.09911 6.41938 3.30911 7.63938L4.65911 13.5594C4.93911 14.9794 6.16911 15.9994 7.60911 15.9994L14.4591 15.9994L17.5491 18.4194C17.9691 18.7494 18.5691 18.7094 18.9391 18.3394C19.3891 17.8894 19.3391 17.1594 18.8391 16.7694L14.5491 13.4194C14.1991 13.1494 13.7691 12.9994 13.3191 12.9994Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(9.9%, 10.42%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Airlineseatreclineextra: {
          paths: [
            {
              d: "M3.35 3.63938C2.45 2.99938 2.23 1.75938 2.86 0.849378C3.49 -0.0506219 4.74 -0.270622 5.65 0.359378C6.55 0.999378 6.77 2.23938 6.14 3.14938C5.5 4.04938 4.26 4.26938 3.35 3.63938ZM14 16.9994L4.5 16.9994L2 4.99938L0 4.99938L2.85 18.9994L14 18.9994L14 16.9994ZM14.23 12.9994L9.35 12.9994L8.32 8.89938C9.9 9.78938 11.6 10.4394 13.47 10.1194L13.47 7.98938C11.84 8.29938 10.03 7.71938 8.78 6.73938L7.14 5.46938C6.91 5.28938 6.65 5.16938 6.38 5.08938C6.06 4.99938 5.72 4.96938 5.39 5.02938L5.37 5.02938C4.14 5.24938 3.32 6.41938 3.53 7.63938L5.44 15.9994L14.68 15.9994L18.5 18.9994L20 17.4994L14.23 12.9994Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 10.42%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Airlineseatreclineextra: {
          paths: [
            {
              d: "M3.35 3.63938C2.45 2.99938 2.23 1.75938 2.86 0.849378C3.49 -0.0506219 4.74 -0.270622 5.65 0.359378C6.55 0.999378 6.77 2.23938 6.14 3.14938C5.5 4.04938 4.26 4.26938 3.35 3.63938ZM14 16.9994L6.93 16.9994C5.45 16.9994 4.19 15.9194 3.97 14.4594L2 4.99938L0 4.99938L1.99 14.7594C2.37 17.1994 4.47 18.9994 6.94 18.9994L14 18.9994L14 16.9994ZM14.23 12.9994L9.35 12.9994L8.32 8.89938C9.9 9.78938 11.6 10.4394 13.47 10.1194L13.47 7.98938C11.84 8.29938 10.03 7.71938 8.78 6.73938L7.14 5.46938C6.91 5.28938 6.65 5.16938 6.38 5.08938C6.06 4.99938 5.72 4.96938 5.39 5.02938L5.37 5.02938C4.14 5.24938 3.32 6.41938 3.53 7.63938L4.88 13.5594C5.16 14.9794 6.39 15.9994 7.83 15.9994L14.68 15.9994L18.5 18.9994L20 17.4994L14.23 12.9994Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.33%, 8.33%)" },
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
          d: "M3.35 3.63938C2.45 2.99938 2.23 1.75938 2.86 0.849378C3.49 -0.0506219 4.74 -0.270622 5.65 0.359378C6.55 0.999378 6.77 2.23938 6.14 3.14938C5.5 4.04938 4.26 4.26938 3.35 3.63938ZM14 16.9994L6.93 16.9994C5.45 16.9994 4.19 15.9194 3.97 14.4594L2 4.99938L0 4.99938L1.99 14.7594C2.37 17.1994 4.47 18.9994 6.94 18.9994L14 18.9994L14 16.9994ZM14.23 12.9994L9.35 12.9994L8.32 8.89938C9.9 9.78938 11.6 10.4394 13.47 10.1194L13.47 7.98938C11.84 8.29938 10.03 7.71938 8.78 6.73938L7.14 5.46938C6.91 5.28938 6.65 5.16938 6.38 5.08938C6.06 4.99938 5.72 4.96938 5.39 5.02938L5.37 5.02938C4.14 5.24938 3.32 6.41938 3.53 7.63938L4.88 13.5594C5.16 14.9794 6.39 15.9994 7.83 15.9994L14.68 15.9994L18.5 18.9994L20 17.4994L14.23 12.9994Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.33%, 10.42%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Airlineseatreclineextra")}
      {...rest}
    ></Icon>
  );
}
