/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
export default function Body(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="28px"
      direction="column"
      width="100%"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="1px 0px 0px 0px"
      padding="0px 40px 20px 40px"
      {...getOverrideProps(overrides, "Body")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Title")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="600"
          color="rgba(31,31,31,1)"
          lineHeight="38px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Jobs"
          {...getOverrideProps(overrides, "Jobs")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1948756988")}
        >
          <Link to="/createjob" style={{ textDecoration: 'none' }}>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="8px"
              padding="8px 16px 8px 16px"
              backgroundColor="rgba(255,212,0,1)"
              {...getOverrideProps(overrides, "Button")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "add")}
              >
                <Icon
                  width="14px"
                  height="14px"
                  viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
                  paths={[
                    {
                      d: "M14 8L8 8L8 14L6 14L6 8L0 8L0 6L6 6L6 0L8 0L8 6L14 6L14 8Z",
                      fill: "rgba(31,31,31,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="20.83%"
                  bottom="20.83%"
                  left="20.83%"
                  right="20.83%"
                  {...getOverrideProps(overrides, "Vector94589")}
                ></Icon>
              </View>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="500"
                color="rgba(31,31,31,1)"
                lineHeight="20px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Create new job"
                {...getOverrideProps(overrides, "Accept order94590")}
              ></Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="44px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 55")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="40px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(225,227,225,1)"
          borderRadius="10px"
          padding="5px 15px 5px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter v294592")}
        >
          <View
            width="18px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "send")}
          >
            <Icon
              width="15.75px"
              height="13.5px"
              viewBox={{ minX: 0, minY: 0, width: 15.75, height: 13.5 }}
              paths={[
                {
                  d: "M1.5075 2.2725L7.14 4.6875L1.5 3.9375L1.5075 2.2725ZM7.1325 8.8125L1.5 11.2275L1.5 9.5625L7.1325 8.8125ZM0.00749999 0L0 5.25L11.25 6.75L0 8.25L0.00749999 13.5L15.75 6.75L0.00749999 0Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.5%"
              bottom="12.5%"
              left="6.25%"
              right="6.25%"
              {...getOverrideProps(overrides, "Vector94594")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(68,71,70,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dispatch"
            {...getOverrideProps(overrides, "Dispatch94595")}
          ></Text>
          <View
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "arrow_drop_down94596")}
          >
            <Icon
              width="8.33px"
              height="4.17px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.333333969116211,
                height: 4.166666507720947,
              }}
              paths={[
                {
                  d: "M0 0L4.16667 4.16667L8.33333 0L0 0Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="39.58%"
              bottom="39.58%"
              left="29.17%"
              right="29.17%"
              {...getOverrideProps(overrides, "Vector94597")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="40px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(225,227,225,1)"
          borderRadius="10px"
          padding="5px 15px 5px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter v294598")}
        >
          <View
            width="18px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "engineering")}
          >
            <Icon
              width="16.43px"
              height="13.5px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.432498931884766,
                height: 13.5,
              }}
              paths={[
                {
                  d: "M6 9C3.9975 9 0 10.005 0 12L0 13.5L12 13.5L12 12C12 10.005 8.0025 9 6 9ZM1.5 12C1.665 11.46 3.9825 10.5 6 10.5C8.025 10.5 10.35 11.4675 10.5 12L1.5 12Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
                {
                  d: "M2.805 4.5L3 4.5C3 6.1575 4.3425 7.5 6 7.5C7.6575 7.5 9 6.1575 9 4.5L9.195 4.5C9.3975 4.5 9.5625 4.335 9.5625 4.1325L9.5625 4.1175C9.5625 3.915 9.3975 3.75 9.195 3.75L9 3.75C9 2.64 8.3925 1.6875 7.5 1.1625L7.5 1.875C7.5 2.085 7.335 2.25 7.125 2.25C6.915 2.25 6.75 2.085 6.75 1.875L6.75 0.855C6.51 0.795 6.2625 0.75 6 0.75C5.7375 0.75 5.49 0.795 5.25 0.855L5.25 1.875C5.25 2.085 5.085 2.25 4.875 2.25C4.665 2.25 4.5 2.085 4.5 1.875L4.5 1.1625C3.6075 1.6875 3 2.64 3 3.75L2.805 3.75C2.6025 3.75 2.4375 3.915 2.4375 4.1175L2.4375 4.14C2.4375 4.335 2.6025 4.5 2.805 4.5ZM7.5 4.5C7.5 5.325 6.825 6 6 6C5.175 6 4.5 5.325 4.5 4.5L7.5 4.5Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
                {
                  d: "M15.735 2.4225L16.4325 1.8L15.87 0.825L14.9775 1.1175C14.8725 1.035 14.7525 0.9675 14.625 0.915L14.4375 0L13.3125 0L13.125 0.915C12.9975 0.9675 12.8775 1.035 12.765 1.1175L11.88 0.825L11.3175 1.8L12.015 2.4225C12 2.55 12 2.685 12.015 2.8125L11.3175 3.45L11.88 4.425L12.78 4.14C12.8775 4.215 12.99 4.275 13.1025 4.3275L13.3125 5.25L14.4375 5.25L14.64 4.335C14.76 4.2825 14.865 4.2225 14.97 4.1475L15.8625 4.4325L16.425 3.4575L15.7275 2.82C15.75 2.6775 15.7425 2.55 15.735 2.4225ZM13.875 3.5625C13.3575 3.5625 12.9375 3.1425 12.9375 2.625C12.9375 2.1075 13.3575 1.6875 13.875 1.6875C14.3925 1.6875 14.8125 2.1075 14.8125 2.625C14.8125 3.1425 14.3925 3.5625 13.875 3.5625Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
                {
                  d: "M13.8 5.8425L13.1625 6.0525C13.0875 5.9925 13.005 5.9475 12.915 5.91L12.78 5.25L11.9775 5.25L11.8425 5.9025C11.7525 5.94 11.6625 5.9925 11.5875 6.045L10.9575 5.835L10.5525 6.5325L11.0475 6.975C11.04 7.0725 11.04 7.1625 11.0475 7.2525L10.5525 7.71L10.9575 8.4075L11.6025 8.205C11.6775 8.2575 11.7525 8.3025 11.835 8.34L11.97 9L12.7725 9L12.915 8.3475C12.9975 8.31 13.08 8.265 13.155 8.2125L13.7925 8.415L14.1975 7.7175L13.7025 7.26C13.71 7.1625 13.71 7.0725 13.7025 6.9825L14.1975 6.54L13.8 5.8425ZM12.375 7.7925C12.0075 7.7925 11.7075 7.4925 11.7075 7.125C11.7075 6.7575 12.0075 6.4575 12.375 6.4575C12.7425 6.4575 13.0425 6.7575 13.0425 7.125C13.0425 7.4925 12.7425 7.7925 12.375 7.7925Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.5%"
              bottom="12.5%"
              left="4.35%"
              right="4.35%"
              {...getOverrideProps(overrides, "Vector94600")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(68,71,70,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Tech"
            {...getOverrideProps(overrides, "Dispatch94601")}
          ></Text>
          <View
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "arrow_drop_down94602")}
          >
            <Icon
              width="8.33px"
              height="4.17px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.333333969116211,
                height: 4.166666507720947,
              }}
              paths={[
                {
                  d: "M0 0L4.16667 4.16667L8.33333 0L0 0Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="39.58%"
              bottom="39.58%"
              left="29.17%"
              right="29.17%"
              {...getOverrideProps(overrides, "Vector94603")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="40px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(225,227,225,1)"
          borderRadius="10px"
          padding="5px 15px 5px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter v294604")}
        >
          <View
            width="18px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "tag")}
          >
            <Icon
              width="12px"
              height="12px"
              viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
              paths={[
                {
                  d: "M12 4.5L12 3L9 3L9 0L7.5 0L7.5 3L4.5 3L4.5 0L3 0L3 3L0 3L0 4.5L3 4.5L3 7.5L0 7.5L0 9L3 9L3 12L4.5 12L4.5 9L7.5 9L7.5 12L9 12L9 9L12 9L12 7.5L9 7.5L9 4.5L12 4.5ZM7.5 7.5L4.5 7.5L4.5 4.5L7.5 4.5L7.5 7.5Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="16.67%"
              bottom="16.67%"
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector94606")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(68,71,70,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Tags"
            {...getOverrideProps(overrides, "Dispatch94607")}
          ></Text>
          <View
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "arrow_drop_down94608")}
          >
            <Icon
              width="8.33px"
              height="4.17px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.333333969116211,
                height: 4.166666507720947,
              }}
              paths={[
                {
                  d: "M0 0L4.16667 4.16667L8.33333 0L0 0Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="39.58%"
              bottom="39.58%"
              left="29.17%"
              right="29.17%"
              {...getOverrideProps(overrides, "Vector94609")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="40px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(225,227,225,1)"
          borderRadius="10px"
          padding="5px 15px 5px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter v294610")}
        >
          <View
            width="18px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "build")}
          >
            <Icon
              width="16.43px"
              height="16.49px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.433753967285156,
                height: 16.488128662109375,
              }}
              paths={[
                {
                  d: "M16.2088 13.4863L9.39875 6.67625C10.0963 4.92125 9.73625 2.85125 8.31875 1.42625C6.59375 -0.298747 3.90875 -0.456247 1.99625 0.938753L4.87625 3.82625L3.81125 4.88375L0.938753 2.01125C-0.456247 3.91625 -0.298747 6.60875 1.42625 8.32625C2.82125 9.72125 4.85375 10.0888 6.59375 9.43625L13.4263 16.2688C13.7188 16.5613 14.1913 16.5613 14.4838 16.2688L16.2088 14.5438C16.5088 14.2588 16.5088 13.7863 16.2088 13.4863ZM13.9588 14.6863L6.86375 7.59125C6.40625 7.92875 5.89625 8.13125 5.36375 8.20625C4.34375 8.35625 3.27125 8.04875 2.49125 7.26875C1.77875 6.56375 1.44875 5.61875 1.50125 4.68875L3.81875 7.00625L6.99875 3.82625L4.68125 1.50875C5.61125 1.45625 6.54875 1.78625 7.26125 2.49125C8.07125 3.30125 8.37875 4.41875 8.19125 5.46125C8.10125 5.99375 7.87625 6.48875 7.53125 6.93125L14.6188 14.0188L13.9588 14.6863Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="4.2%"
              bottom="4.2%"
              left="4.35%"
              right="4.35%"
              {...getOverrideProps(overrides, "Vector94612")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(68,71,70,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Job type"
            {...getOverrideProps(overrides, "Dispatch94613")}
          ></Text>
          <View
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "arrow_drop_down94614")}
          >
            <Icon
              width="8.33px"
              height="4.17px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.333333969116211,
                height: 4.166666507720947,
              }}
              paths={[
                {
                  d: "M0 0L4.16667 4.16667L8.33333 0L0 0Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="39.58%"
              bottom="39.58%"
              left="29.17%"
              right="29.17%"
              {...getOverrideProps(overrides, "Vector94615")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="40px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(225,227,225,1)"
          borderRadius="10px"
          padding="5px 15px 5px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter v294616")}
        >
          <View
            width="18px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "location_on")}
          >
            <Icon
              width="10.5px"
              height="15px"
              viewBox={{ minX: 0, minY: 0, width: 10.5, height: 15 }}
              paths={[
                {
                  d: "M5.25 0C2.3475 0 0 2.3475 0 5.25C0 9.1875 5.25 15 5.25 15C5.25 15 10.5 9.1875 10.5 5.25C10.5 2.3475 8.1525 0 5.25 0ZM1.5 5.25C1.5 3.18 3.18 1.5 5.25 1.5C7.32 1.5 9 3.18 9 5.25C9 7.41 6.84 10.6425 5.25 12.66C3.69 10.6575 1.5 7.3875 1.5 5.25Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
                {
                  d: "M5.25 7.125C6.28553 7.125 7.125 6.28553 7.125 5.25C7.125 4.21447 6.28553 3.375 5.25 3.375C4.21447 3.375 3.375 4.21447 3.375 5.25C3.375 6.28553 4.21447 7.125 5.25 7.125Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector94618")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(68,71,70,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Service area"
            {...getOverrideProps(overrides, "Dispatch94619")}
          ></Text>
          <View
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "arrow_drop_down94620")}
          >
            <Icon
              width="8.33px"
              height="4.17px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.333333969116211,
                height: 4.166666507720947,
              }}
              paths={[
                {
                  d: "M0 0L4.16667 4.16667L8.33333 0L0 0Z",
                  fill: "rgba(68,71,70,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="39.58%"
              bottom="39.58%"
              left="29.17%"
              right="29.17%"
              {...getOverrideProps(overrides, "Vector94621")}
            ></Icon>
          </View>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 26080094")}
      >
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="68px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          className="status-jobs_active"
          padding="7px 19px 7px 19px"
          {...getOverrideProps(overrides, "Tab94623")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Call94624")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="21px"
              fontWeight="600"
              color="rgba(31,31,31,1)"
              lineHeight="26px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Submitted"
              {...getOverrideProps(overrides, "Details94625")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Add info94626")}
          >
            <View
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "home_repair_service94627")}
            >
              <Icon
                width="16.67px"
                height="13.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.666667938232422,
                  height: 13.333333015441895,
                }}
                paths={[
                  {
                    d: "M15 3.33333L12.5 3.33333L12.5 1.66667C12.5 0.75 11.75 0 10.8333 0L5.83333 0C4.91667 0 4.16667 0.75 4.16667 1.66667L4.16667 3.33333L1.66667 3.33333C0.75 3.33333 0 4.08333 0 5L0 13.3333L16.6667 13.3333L16.6667 5C16.6667 4.08333 15.9167 3.33333 15 3.33333ZM5.83333 1.66667L10.8333 1.66667L10.8333 3.33333L5.83333 3.33333L5.83333 1.66667ZM15 11.6667L1.66667 11.6667L1.66667 9.16667L3.33333 9.16667L3.33333 10L5 10L5 9.16667L11.6667 9.16667L11.6667 10L13.3333 10L13.3333 9.16667L15 9.16667L15 11.6667ZM13.3333 7.5L13.3333 6.66667L11.6667 6.66667L11.6667 7.5L5 7.5L5 6.66667L3.33333 6.66667L3.33333 7.5L1.66667 7.5L1.66667 5L15 5L15 7.5L13.3333 7.5Z",
                    fill: "rgba(68,71,70,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="16.67%"
                bottom="16.67%"
                left="8.33%"
                right="8.33%"
                {...getOverrideProps(overrides, "Vector94628")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(31,31,31,1)"
              lineHeight="21px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.05px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="139 deals"
              {...getOverrideProps(overrides, "Refrigerator repair94629")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="68px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          className="status-jobs_inactive"
          padding="7px 19px 7px 19px"
          {...getOverrideProps(overrides, "Tab94630")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Call94631")}
          >
            <Text
              fontFamily="Inter"
              fontSize="21px"
              fontWeight="400"
              color="rgba(116,119,117,1)"
              lineHeight="26px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="In progress"
              {...getOverrideProps(overrides, "Details94632")}
            ></Text>
          </Flex>
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
            {...getOverrideProps(overrides, "Frame 194875700794633")}
          >
            <View
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "home_repair_service94634")}
            >
              <Icon
                width="16.67px"
                height="13.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.666667938232422,
                  height: 13.333333015441895,
                }}
                paths={[
                  {
                    d: "M15 3.33333L12.5 3.33333L12.5 1.66667C12.5 0.75 11.75 0 10.8333 0L5.83333 0C4.91667 0 4.16667 0.75 4.16667 1.66667L4.16667 3.33333L1.66667 3.33333C0.75 3.33333 0 4.08333 0 5L0 13.3333L16.6667 13.3333L16.6667 5C16.6667 4.08333 15.9167 3.33333 15 3.33333ZM5.83333 1.66667L10.8333 1.66667L10.8333 3.33333L5.83333 3.33333L5.83333 1.66667ZM15 11.6667L1.66667 11.6667L1.66667 9.16667L3.33333 9.16667L3.33333 10L5 10L5 9.16667L11.6667 9.16667L11.6667 10L13.3333 10L13.3333 9.16667L15 9.16667L15 11.6667ZM13.3333 7.5L13.3333 6.66667L11.6667 6.66667L11.6667 7.5L5 7.5L5 6.66667L3.33333 6.66667L3.33333 7.5L1.66667 7.5L1.66667 5L15 5L15 7.5L13.3333 7.5Z",
                    fill: "rgba(116,119,117,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="16.67%"
                bottom="16.67%"
                left="8.33%"
                right="8.33%"
                {...getOverrideProps(overrides, "Vector94635")}
              ></Icon>
            </View>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Add info94636")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="131 deals"
                {...getOverrideProps(overrides, "Refrigerator repair94637")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="68px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          className="status-jobs_inactive"
          padding="7px 19px 7px 19px"
          {...getOverrideProps(overrides, "Tab94638")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Call94639")}
          >
            <Text
              fontFamily="Inter"
              fontSize="21px"
              fontWeight="400"
              color="rgba(116,119,117,1)"
              lineHeight="26px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Pending"
              {...getOverrideProps(overrides, "Details94640")}
            ></Text>
          </Flex>
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
            {...getOverrideProps(overrides, "Frame 194875700794641")}
          >
            <View
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "home_repair_service94642")}
            >
              <Icon
                width="16.67px"
                height="13.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.666667938232422,
                  height: 13.333333015441895,
                }}
                paths={[
                  {
                    d: "M15 3.33333L12.5 3.33333L12.5 1.66667C12.5 0.75 11.75 0 10.8333 0L5.83333 0C4.91667 0 4.16667 0.75 4.16667 1.66667L4.16667 3.33333L1.66667 3.33333C0.75 3.33333 0 4.08333 0 5L0 13.3333L16.6667 13.3333L16.6667 5C16.6667 4.08333 15.9167 3.33333 15 3.33333ZM5.83333 1.66667L10.8333 1.66667L10.8333 3.33333L5.83333 3.33333L5.83333 1.66667ZM15 11.6667L1.66667 11.6667L1.66667 9.16667L3.33333 9.16667L3.33333 10L5 10L5 9.16667L11.6667 9.16667L11.6667 10L13.3333 10L13.3333 9.16667L15 9.16667L15 11.6667ZM13.3333 7.5L13.3333 6.66667L11.6667 6.66667L11.6667 7.5L5 7.5L5 6.66667L3.33333 6.66667L3.33333 7.5L1.66667 7.5L1.66667 5L15 5L15 7.5L13.3333 7.5Z",
                    fill: "rgba(116,119,117,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="16.67%"
                bottom="16.67%"
                left="8.33%"
                right="8.33%"
                {...getOverrideProps(overrides, "Vector94643")}
              ></Icon>
            </View>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Add info94644")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="162 deals"
                {...getOverrideProps(overrides, "Refrigerator repair94645")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="68px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          className="status-jobs_inactive"
          padding="7px 19px 7px 19px"
          {...getOverrideProps(overrides, "Tab94646")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Call94647")}
          >
            <Text
              fontFamily="Inter"
              fontSize="21px"
              fontWeight="400"
              color="rgba(116,119,117,1)"
              lineHeight="26px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Done pending approval"
              {...getOverrideProps(overrides, "Details94648")}
            ></Text>
          </Flex>
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
            {...getOverrideProps(overrides, "Frame 194875700794649")}
          >
            <View
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "home_repair_service94650")}
            >
              <Icon
                width="16.67px"
                height="13.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.666667938232422,
                  height: 13.333333015441895,
                }}
                paths={[
                  {
                    d: "M15 3.33333L12.5 3.33333L12.5 1.66667C12.5 0.75 11.75 0 10.8333 0L5.83333 0C4.91667 0 4.16667 0.75 4.16667 1.66667L4.16667 3.33333L1.66667 3.33333C0.75 3.33333 0 4.08333 0 5L0 13.3333L16.6667 13.3333L16.6667 5C16.6667 4.08333 15.9167 3.33333 15 3.33333ZM5.83333 1.66667L10.8333 1.66667L10.8333 3.33333L5.83333 3.33333L5.83333 1.66667ZM15 11.6667L1.66667 11.6667L1.66667 9.16667L3.33333 9.16667L3.33333 10L5 10L5 9.16667L11.6667 9.16667L11.6667 10L13.3333 10L13.3333 9.16667L15 9.16667L15 11.6667ZM13.3333 7.5L13.3333 6.66667L11.6667 6.66667L11.6667 7.5L5 7.5L5 6.66667L3.33333 6.66667L3.33333 7.5L1.66667 7.5L1.66667 5L15 5L15 7.5L13.3333 7.5Z",
                    fill: "rgba(116,119,117,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="16.67%"
                bottom="16.67%"
                left="8.33%"
                right="8.33%"
                {...getOverrideProps(overrides, "Vector94651")}
              ></Icon>
            </View>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Add info94652")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="675 deals"
                {...getOverrideProps(overrides, "Refrigerator repair94653")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        boxShadow="0px 2px 7px rgba(0, 0, 0, 0.03999999910593033)"
        padding="20px 20px 20px 20px"
        {...getOverrideProps(overrides, "Frame 26080082")}
      >
      <View overflow={"auto"} width="100%">
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-end"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1948757010")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(225,227,225,1)"
            padding="0px 0px 3px 0px"
            {...getOverrideProps(overrides, "Frame 61")}
          >
            <Flex
              gap="4px"
              direction="row"
              width="80px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="4px 16px 4px 0px"
              {...getOverrideProps(overrides, "Frame 594657")}
            >
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="8px 8px 8px 8px"
                {...getOverrideProps(overrides, "Checkbox94658")}
              >
                <View
                  width="20px"
                  height="20px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  border="1px SOLID rgba(116,119,117,1)"
                  borderRadius="6px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "Frame 6094659")}
                ></View>
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="All"
                {...getOverrideProps(overrides, "All")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="120px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 4")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Job ID"
                {...getOverrideProps(overrides, "Job ID")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 694663")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Client"
                {...getOverrideProps(overrides, "Client")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="320px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 794665")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Tags"
                {...getOverrideProps(overrides, "Tags")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 894667")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Job type"
                {...getOverrideProps(overrides, "Job type")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="180px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 994669")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Scheduled"
                {...getOverrideProps(overrides, "Scheduled")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 1094671")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Phone"
                {...getOverrideProps(overrides, "Phone")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="260px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 1194673")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Email"
                {...getOverrideProps(overrides, "Email")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 1294675")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Tech"
                {...getOverrideProps(overrides, "Tech")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 1394677")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Create by"
                {...getOverrideProps(overrides, "Create by")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 1494679")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Address"
                {...getOverrideProps(overrides, "Address")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 1594681")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Service area"
                {...getOverrideProps(overrides, "Service area")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="120px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 1694683")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Sourse"
                {...getOverrideProps(overrides, "Sourse94684")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 16px 4px 16px"
              {...getOverrideProps(overrides, "Frame 1794685")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Time in status"
                {...getOverrideProps(overrides, "Time in status94686")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="4px 0px 4px 16px"
              {...getOverrideProps(overrides, "Frame 18")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(116,119,117,1)"
                textTransform="uppercase"
                lineHeight="14px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.25px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Location"
                {...getOverrideProps(overrides, "Location94688")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="116px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="8px 0px 8px 0px"
            {...getOverrideProps(overrides, "Frame 62")}
          >
            <Flex
              gap="12px"
              direction="row"
              width="80px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 16px 0px 0px"
              {...getOverrideProps(overrides, "Frame 594690")}
            >
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="8px 8px 8px 8px"
                {...getOverrideProps(overrides, "Checkbox94691")}
              >
                <View
                  width="20px"
                  height="20px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  border="1px SOLID rgba(142,145,143,1)"
                  borderRadius="6px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "Frame 6094692")}
                ></View>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="120px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 21")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
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
                children="123456"
                {...getOverrideProps(overrides, "123456")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 694695")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="600"
                color="rgba(31,31,31,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Ronald Richards"
                {...getOverrideProps(overrides, "Ronald Richards")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="320px"
              height="unset"
              justifyContent="flex-end"
              alignItems="flex-end"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 794697")}
            >
              <Flex
                gap="4px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 30")}
              >
                <Flex
                  gap="8px"
                  direction="row"
                  width="unset"
                  height="24px"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  borderRadius="6px"
                  padding="4px 8px 4px 8px"
                  backgroundColor="rgba(255,99,71,1)"
                  {...getOverrideProps(overrides, "Tag94699")}
                >
                  <Text
                    fontFamily="Roboto"
                    fontSize="12px"
                    fontWeight="600"
                    color="rgba(255,255,255,1)"
                    textTransform="uppercase"
                    lineHeight="14px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    letterSpacing="0.65px"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="AHS"
                    {...getOverrideProps(overrides, "Accept order94700")}
                  ></Text>
                </Flex>
                <Flex
                  gap="8px"
                  direction="row"
                  width="unset"
                  height="24px"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  borderRadius="6px"
                  padding="4px 8px 4px 8px"
                  backgroundColor="rgba(255,182,193,1)"
                  {...getOverrideProps(overrides, "Tag94702")}
                >
                  <Text
                    fontFamily="Roboto"
                    fontSize="12px"
                    fontWeight="600"
                    color="rgba(31,31,31,1)"
                    textTransform="uppercase"
                    lineHeight="14px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    letterSpacing="0.65px"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Don’t change technicialn"
                    {...getOverrideProps(overrides, "Accept order94703")}
                  ></Text>
                </Flex>
                <Flex
                  gap="8px"
                  direction="row"
                  width="unset"
                  height="24px"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  borderRadius="6px"
                  padding="4px 8px 4px 8px"
                  backgroundColor="rgba(65,105,225,1)"
                  {...getOverrideProps(overrides, "Tag94705")}
                >
                  <Text
                    fontFamily="Roboto"
                    fontSize="12px"
                    fontWeight="600"
                    color="rgba(255,255,255,1)"
                    textTransform="uppercase"
                    lineHeight="14px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    letterSpacing="0.65px"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Don’t change technicialn"
                    {...getOverrideProps(overrides, "Accept order94706")}
                  ></Text>
                </Flex>
                <Flex
                  gap="8px"
                  direction="row"
                  width="unset"
                  height="24px"
                  justifyContent="flex-start"
                  alignItems="center"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  borderRadius="6px"
                  padding="4px 8px 4px 8px"
                  backgroundColor="rgba(255,165,0,1)"
                  {...getOverrideProps(overrides, "Tag94708")}
                >
                  <Text
                    fontFamily="Roboto"
                    fontSize="12px"
                    fontWeight="600"
                    color="rgba(255,255,255,1)"
                    textTransform="uppercase"
                    lineHeight="14px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    letterSpacing="0.65px"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Stackable"
                    {...getOverrideProps(overrides, "Accept order94709")}
                  ></Text>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="4px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "Frame 36")}
                >
                  <View
                    width="24px"
                    height="24px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "more_horiz")}
                  >
                    <Icon
                      width="16px"
                      height="4px"
                      viewBox={{ minX: 0, minY: 0, width: 16, height: 4 }}
                      paths={[
                        {
                          d: "M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z",
                          fill: "rgba(31,31,31,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="41.67%"
                      bottom="41.67%"
                      left="16.67%"
                      right="16.67%"
                      {...getOverrideProps(overrides, "Vector94713")}
                    ></Icon>
                  </View>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 894714")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
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
                children="Wine(cigar)cooler repair"
                {...getOverrideProps(overrides, "Wine(cigar)cooler repair")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
              direction="column"
              width="180px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 994716")}
            >
              <Flex
                gap="4px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 63")}
              >
                <View
                  width="16px"
                  height="16px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "event")}
                >
                  <Icon
                    width="12px"
                    height="13.33px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 12,
                      height: 13.333333969116211,
                    }}
                    paths={[
                      {
                        d: "M10.6667 1.33333L10 1.33333L10 0L8.66667 0L8.66667 1.33333L3.33333 1.33333L3.33333 0L2 0L2 1.33333L1.33333 1.33333C0.593333 1.33333 0.00666666 1.93333 0.00666666 2.66667L0 12C0 12.7333 0.593333 13.3333 1.33333 13.3333L10.6667 13.3333C11.4 13.3333 12 12.7333 12 12L12 2.66667C12 1.93333 11.4 1.33333 10.6667 1.33333ZM10.6667 12L1.33333 12L1.33333 5.33333L10.6667 5.33333L10.6667 12ZM10.6667 4L1.33333 4L1.33333 2.66667L10.6667 2.66667L10.6667 4ZM6 7.33333L9.33333 7.33333L9.33333 10.6667L6 10.6667L6 7.33333Z",
                        fill: "rgba(116,119,117,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="8.33%"
                    bottom="8.33%"
                    left="12.5%"
                    right="12.5%"
                    {...getOverrideProps(overrides, "Vector94719")}
                  ></Icon>
                </View>
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(31,31,31,1)"
                  lineHeight="21px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.05px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Fri, Jul 17, 2024"
                  {...getOverrideProps(overrides, "Fri, Jul 17, 2024")}
                ></Text>
              </Flex>
              <Flex
                gap="4px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 64")}
              >
                <View
                  width="16px"
                  height="16px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "access_time")}
                >
                  <Icon
                    width="13.33px"
                    height="13.33px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 13.333333969116211,
                      height: 13.333333969116211,
                    }}
                    paths={[
                      {
                        d: "M6.66 0C2.98 0 0 2.98667 0 6.66667C0 10.3467 2.98 13.3333 6.66 13.3333C10.3467 13.3333 13.3333 10.3467 13.3333 6.66667C13.3333 2.98667 10.3467 0 6.66 0ZM6.66667 12C3.72 12 1.33333 9.61333 1.33333 6.66667C1.33333 3.72 3.72 1.33333 6.66667 1.33333C9.61333 1.33333 12 3.72 12 6.66667C12 9.61333 9.61333 12 6.66667 12ZM7 3.33333L6 3.33333L6 7.33333L9.5 9.43333L10 8.61333L7 6.83333L7 3.33333Z",
                        fill: "rgba(116,119,117,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="8.33%"
                    bottom="8.33%"
                    left="8.33%"
                    right="8.33%"
                    {...getOverrideProps(overrides, "Vector94723")}
                  ></Icon>
                </View>
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(31,31,31,1)"
                  lineHeight="21px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.05px"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="8:00 AM"
                  {...getOverrideProps(overrides, "8:00\u00A0AM")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 1094725")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="(808) 555-0111"
                {...getOverrideProps(overrides, "(808) 555-0111")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="260px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 1194727")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="curtis.weaver@example.com"
                {...getOverrideProps(overrides, "curtis.weaver@example.com")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 1294729")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Alex Fazylkhatov"
                {...getOverrideProps(overrides, "Alex Fazylkhatov")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 1394731")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Cameron Williamson"
                {...getOverrideProps(overrides, "Cameron Williamson")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="200px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 1494733")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
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
                children="2464 Royal Ln. Mesa, New Jersey 45463"
                {...getOverrideProps(
                  overrides,
                  "2464 Royal Ln. Mesa, New Jersey 45463"
                )}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 1594735")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
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
                children="New Jersey"
                {...getOverrideProps(overrides, "New Jersey")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="120px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 1694737")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Sourse"
                {...getOverrideProps(overrides, "Sourse94738")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Frame 1794739")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Time in status"
                {...getOverrideProps(overrides, "Time in status94740")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="140px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="8px 0px 8px 16px"
              {...getOverrideProps(overrides, "Frame 20")}
            >
                <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(31,31,31,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Location"
                {...getOverrideProps(overrides, "Location94742")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </View>
      </Flex>
    </Flex>
  );
}
