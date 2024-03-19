/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Input, Text, View , Image} from "@aws-amplify/ui-react";
import avatar_img from "../assets/img/Avatar.png"
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="100%"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(225,227,225,1)"
      padding="19px 39px 19px 39px"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="80%"
        height="40px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(225,227,225,1)"
        borderRadius="10px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Search bar")}
      >
          <Flex
            gap="8px"
            direction="row"
            height="28px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 30px 0px 8px"
            {...getOverrideProps(overrides, "input field")}
            width="100%"
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
              {...getOverrideProps(overrides, "search")}
            >
              <Icon
                width="17.49px"
                height="17.49px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.489999771118164,
                  height: 17.489999771118164,
                }}
                paths={[
                  {
                    d: "M12.5 11L11.71 11L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71L11 12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",
                    fill: "rgba(116,119,117,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="13.56%"
                bottom="13.56%"
                left="13.56%"
                right="13.56%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
            <Flex
              gap="10px"
              direction="row"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              width="100%"
              {...getOverrideProps(overrides, "Frame 1948757004")}
            >
              <Input
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
                width="100%"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                placeholder="Search and filters"
                border={"0"}
                {...getOverrideProps(overrides, "Search text")}
              ></Input>
            </Flex>
          </Flex>
        
      </Flex>
      <Flex
        gap="20px"
        direction="row"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 8")}
      >
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 7")}
        >
          <Image
            gap="10px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="60px"
            padding="0px 0px 0px 0px"
            src={avatar_img.src}
            {...getOverrideProps(overrides, "Avatar")}
          ></Image>
          <Flex
            gap="4px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 6")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(31,31,31,1)"
              lineHeight="19.363636016845703px"
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
              children="Kathryn Murphy"
              {...getOverrideProps(overrides, "Kathryn Murphy")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="300"
              color="rgba(31,31,31,1)"
              lineHeight="16.94318199157715px"
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
              children="Administrator"
              {...getOverrideProps(overrides, "Administrator")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
