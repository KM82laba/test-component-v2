/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function BusycalendarslotSS(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="column"
      width="141px"
      height="30px"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(116,119,117,1)"
      padding="3px 3px 3px 11px"
      backgroundColor="rgba(127,255,212,1)"
      {...getOverrideProps(overrides, "BusycalendarslotSS")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 99")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="600"
          color="rgba(31,31,31,1)"
          textTransform="uppercase"
          lineHeight="14px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.65px"
          width="60px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="№123456"
          {...getOverrideProps(overrides, "\u2116123456")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(68,71,70,1)"
          lineHeight="21px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="123.1 mi"
          {...getOverrideProps(overrides, "123.1 mi")}
        ></Text>
      </Flex>
    </Flex>
  );
}
