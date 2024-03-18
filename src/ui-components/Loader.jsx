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
export default function Loader(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Loader: {} },
      variantValues: { size: "44", color: "Light" },
    },
    { overrides: { Loader: {} }, variantValues: { size: "44", color: "Dark" } },
    {
      overrides: {
        Loader: {
          width: "20px",
          height: "20px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 20 },
        },
      },
      variantValues: { size: "20", color: "Light" },
    },
    {
      overrides: {
        Loader: {
          width: "20px",
          height: "20px",
          viewBox: { minX: 0, minY: 0, width: 20, height: 20 },
        },
      },
      variantValues: { size: "44", color: "Dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="44px"
      height="44px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 44, height: 44 }}
      paths={[]}
      {...getOverrideProps(overrides, "Loader")}
      {...rest}
    ></Icon>
  );
}
