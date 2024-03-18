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
import { Flex, View } from "@aws-amplify/ui-react";
export default function Scrollbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { end: {}, start: {}, Knob: {}, Scrollbar: {} },
      variantValues: { position: "Top" },
    },
    {
      overrides: {
        end: {},
        start: {},
        Knob: {},
        Scrollbar: { alignItems: "center" },
      },
      variantValues: { position: "Center" },
    },
    {
      overrides: {
        end: {},
        start: {},
        Knob: {},
        Scrollbar: { alignItems: "flex-end" },
      },
      variantValues: { position: "Botton" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="92px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 4px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Scrollbar")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(142,145,143,1)"
        opacity="0.47999998927116394"
        display="flex"
        {...getOverrideProps(overrides, "Knob")}
      >
        <View
          width="6px"
          height="1px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "end")}
        ></View>
        <View
          width="6px"
          height="1px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "start")}
        ></View>
      </Flex>
    </Flex>
  );
}
