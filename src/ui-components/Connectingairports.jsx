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
export default function Connectingairports(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Connectingairports: {} },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Connectingairports: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Connectingairports: {
          paths: [
            {
              d: "M11.7416 8C12.1316 8 12.4016 8.37 12.2916 8.74L11.2116 12.4L14.0616 12.4L14.6516 11.62C14.7516 11.48 14.9116 11.4 15.0816 11.4C15.4416 11.4 15.7016 11.75 15.6016 12.1L15.2116 13.4L15.6016 14.7C15.7016 15.05 15.4416 15.4 15.0816 15.4C14.9116 15.4 14.7516 15.32 14.6516 15.18L14.0616 14.4L11.2116 14.4L12.2916 18.06C12.4016 18.43 12.1216 18.8 11.7416 18.8C11.5416 18.8 11.3516 18.69 11.2416 18.52L8.81159 14.4L5.84159 14.4C5.31159 14.4 4.84159 14 4.81159 13.47C4.77159 12.88 5.24159 12.4 5.81159 12.4L8.81159 12.4L11.2416 8.28C11.3516 8.11 11.5416 8 11.7416 8ZM3.88159 0C3.49159 0 3.22159 0.37 3.33159 0.74L4.41159 4.4L1.56159 4.4L0.971588 3.62C0.871588 3.48 0.711588 3.4 0.541588 3.4C0.181588 3.4 -0.0784117 3.75 0.0215883 4.1L0.411588 5.4L0.0215883 6.7C-0.0784117 7.05 0.181588 7.4 0.541588 7.4C0.711588 7.4 0.871588 7.32 0.971588 7.18L1.56159 6.4L4.41159 6.4L3.33159 10.06C3.22159 10.43 3.50159 10.8 3.88159 10.8C4.08159 10.8 4.27159 10.69 4.38159 10.52L6.81159 6.4L9.78159 6.4C10.3116 6.4 10.7816 6 10.8116 5.47C10.8516 4.88 10.3816 4.4 9.81159 4.4L6.81159 4.4L4.38159 0.28C4.27159 0.11 4.08159 0 3.88159 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(17.45%, 10.83%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: { Connectingairports: {} },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: { Connectingairports: {} },
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
          d: "M11.4 14.4L12.7 18.8L11.6 18.8L9 14.4L6 14.4C5.45 14.4 5 13.95 5 13.4C5 12.85 5.45 12.4 6 12.4L9 12.4L11.6 8L12.7 8L11.4 12.4L14.25 12.4L15 11.4L16 11.4L15.4 13.4L16 15.4L15 15.4L14.25 14.4L11.4 14.4ZM1.75 4.4L1 3.4L0 3.4L0.6 5.4L0 7.4L1 7.4L1.75 6.4L4.6 6.4L3.3 10.8L4.4 10.8L7 6.4L10 6.4C10.55 6.4 11 5.95 11 5.4C11 4.85 10.55 4.4 10 4.4L7 4.4L4.4 0L3.3 0L4.6 4.4L1.75 4.4Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(16.67%, 10.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Connectingairports")}
      {...rest}
    ></Icon>
  );
}
