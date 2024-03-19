/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Input, SelectField, Text, View } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import CustomInputField from "./CustomInputField";
import CustomSelectField from "./CustomSelectField";
import CustomSelectField_Status from "./CustomSelectField_Status";
import CustomAddTags from "./CustomAddTags";
export default function BodyJobCreate(props) {
  const { overrides, ...rest } = props;
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleSelectedValueChange = (value) => {
    setSelectedValue(value);
  };

  function handleButtonClick() {
    // const firstNameJobValue = document.getElementById('job_status').value;
    console.log(selectedValue);
  }
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const options_Status = [
    { value: 'github', label: 'GitHub' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'linkedIn', label: 'LinkedIn' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'reddit', label: 'Reddit' },
  ];
  return (
    <Flex
      gap="28px"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 40px 0px 40px"
      {...getOverrideProps(overrides, "BodyJobCreate")}
      {...rest}
    >
      <Link to="/" style={{textDecoration:"none"}}>
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
          padding="8px 0px 8px 0px"
          {...getOverrideProps(overrides, "Button302747")}
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
            {...getOverrideProps(overrides, "arrow_back_ios")}
          >
            <Icon
              width="11.67px"
              height="19.8px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.670000076293945,
                height: 19.799999237060547,
              }}
              paths={[
                {
                  d: "M11.67 1.77L9.9 0L0 9.9L9.9 19.8L11.67 18.03L3.54 9.9L11.67 1.77Z",
                  fill: "rgba(31,31,31,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.75%"
              bottom="8.75%"
              left="25.69%"
              right="25.69%"
              {...getOverrideProps(overrides, "Vector302756")}
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
            children="Back to job list"
            {...getOverrideProps(overrides, "Accept order302749")}
          ></Text>
        </Flex>
      </Link>
      <Flex
        gap="28px"
        direction="row"
        width="unset"
        height="40px"
        justifyContent="flex-start"
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
          children="New job"
          {...getOverrideProps(overrides, "New job")}
        ></Text>
      </Flex>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1948757033")}
      >
        <Flex
          gap="16px"
          direction="row"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 26080102")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26080103301418")}
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
              {...getOverrideProps(overrides, "autorenew")}
            >
              <Icon
                width="13.33px"
                height="18.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 13.333333015441895,
                  height: 18.333332061767578,
                }}
                paths={[
                  {
                    d: "M6.66667 4.16667L6.66667 6.66667L10 3.33333L6.66667 0L6.66667 2.5C2.98333 2.5 0 5.48333 0 9.16667C0 10.475 0.383333 11.6917 1.03333 12.7167L2.25 11.5C1.875 10.8083 1.66667 10.0083 1.66667 9.16667C1.66667 6.40833 3.90833 4.16667 6.66667 4.16667ZM12.3 5.61667L11.0833 6.83333C11.45 7.53333 11.6667 8.325 11.6667 9.16667C11.6667 11.925 9.425 14.1667 6.66667 14.1667L6.66667 11.6667L3.33333 15L6.66667 18.3333L6.66667 15.8333C10.35 15.8333 13.3333 12.85 13.3333 9.16667C13.3333 7.85833 12.95 6.64167 12.3 5.61667Z",
                    fill: "rgba(68,71,70,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="4.17%"
                bottom="4.17%"
                left="16.67%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector302766")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(31,31,31,1)"
              lineHeight="20px"
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
              children="STATUS:"
              {...getOverrideProps(overrides, "STATUS:")}
            ></Text>
          </Flex>
          <Flex>
            <CustomSelectField_Status options={options_Status} placeholder="Submitted" inputId="job_status" onSelect={handleSelectedValueChange}/>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 26080103301422")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26080103301423")}
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
              {...getOverrideProps(overrides, "tag")}
            >
              <Icon
                width="13.33px"
                height="13.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 13.333333015441895,
                  height: 13.333333015441895,
                }}
                paths={[
                  {
                    d: "M13.3333 5L13.3333 3.33333L10 3.33333L10 0L8.33333 0L8.33333 3.33333L5 3.33333L5 0L3.33333 0L3.33333 3.33333L0 3.33333L0 5L3.33333 5L3.33333 8.33333L0 8.33333L0 10L3.33333 10L3.33333 13.3333L5 13.3333L5 10L8.33333 10L8.33333 13.3333L10 13.3333L10 10L13.3333 10L13.3333 8.33333L10 8.33333L10 5L13.3333 5ZM8.33333 8.33333L5 8.33333L5 5L8.33333 5L8.33333 8.33333Z",
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
                {...getOverrideProps(overrides, "Vector302760")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(31,31,31,1)"
              lineHeight="20px"
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
              children="TAGS:"
              {...getOverrideProps(overrides, "TAGS:")}
            ></Text>
          </Flex>
          <CustomAddTags/>
        </Flex>
      </Flex>
      <Flex
        gap="20px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Info cards")}
      >
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Client and Job")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            boxShadow="0px 2px 7px rgba(0, 0, 0, 0.03999999910593033)"
            borderRadius="10px"
            padding="20px 20px 20px 20px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Client")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="40px"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 26080083301430")}
            >
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(31,31,31,1)"
                lineHeight="28px"
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
                children="Client details"
                {...getOverrideProps(overrides, "Client details")}
              ></Text>
            </Flex>
            <Flex
              gap="20px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 26080084301432")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="6px"
                padding="0px 15px 0px 15px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Input302820")}
              >
                <CustomInputField placeholder="First name" type="name"  inputId="first_name_job"/>
              
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="6px"
                padding="0px 15px 0px 15px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Input302822")}
              >
                <CustomInputField placeholder="Last name" type="name" inputId="last_name_job"/>
              </Flex>
            </Flex>
            <Flex
              gap="20px"
              direction="row"
              width="unset"
              height="44px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(225,227,225,1)"
              borderRadius="6px"
              padding="0px 15px 0px 15px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Input302769")}
            >
              <CustomInputField placeholder="Phone number" type="phone" inputId="phone_job"/>
            </Flex>
            <Flex
              gap="20px"
              direction="row"
              width="unset"
              height="44px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(225,227,225,1)"
              borderRadius="6px"
              padding="0px 15px 0px 15px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Input302771")}
            >
              <CustomInputField placeholder="E-mail" type="mail" inputId="mail_job"/>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            boxShadow="0px 2px 7px rgba(0, 0, 0, 0.03999999910593033)"
            borderRadius="10px"
            padding="20px 20px 20px 20px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Job")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="40px"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 26080083301438")}
            >
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(31,31,31,1)"
                lineHeight="28px"
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
                children="Job details"
                {...getOverrideProps(overrides, "Job details")}
              ></Text>
            </Flex>
            <Flex
              gap="20px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 26080085301440")}
            >
              <Flex
                gap="2px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="6px"
                padding="5px 0px 5px 0px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Filter v1302808")}
              >
                <CustomSelectField placeholder="Job type" inputId="job_type" options={options}/>
                
              </Flex>
              <Flex
                gap="2px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="6px"
                padding="5px 15px 5px 15px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Filter v1302814")}
              >
                <CustomSelectField placeholder="Job source" inputId="job_source" options={options}/>
              </Flex>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(225,227,225,1)"
              borderRadius="8px"
              padding="0px 0px 0px 11px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Textarea")}
            >
                <CustomInputField placeholder="Description" type="text"/>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Location and Schedule")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            boxShadow="0px 2px 7px rgba(0, 0, 0, 0.03999999910593033)"
            borderRadius="10px"
            padding="20px 20px 20px 20px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Location")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="40px"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 26080083301446")}
            >
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(31,31,31,1)"
                lineHeight="28px"
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
                children="Service location"
                {...getOverrideProps(overrides, "Service location")}
              ></Text>
            </Flex>
            <Flex
              gap="20px"
              direction="row"
              width="unset"
              height="44px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(225,227,225,1)"
              borderRadius="6px"
              padding="5px 15px 5px 15px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Input302773")}
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
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Address"
                {...getOverrideProps(overrides, "Label302774")}
              ></Text>
            </Flex>
            <Flex
              gap="20px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 26080084301449")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="6px"
                padding="5px 15px 5px 15px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Input302775")}
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
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="State"
                  {...getOverrideProps(overrides, "Label302776")}
                ></Text>
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="6px"
                padding="5px 15px 5px 15px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Input302777")}
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
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="City"
                  {...getOverrideProps(overrides, "Label302778")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="20px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 1948756985")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="6px"
                padding="5px 15px 5px 15px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Input302779")}
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
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="ZIP code"
                  {...getOverrideProps(overrides, "Label302780")}
                ></Text>
              </Flex>
              <Flex
                gap="2px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="6px"
                padding="5px 15px 5px 15px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "Filter v1302781")}
              > 
                <CustomSelectField placeholder="Service area" inputId="job_service_area" options={options}/>  
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
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            boxShadow="0px 2px 7px rgba(0, 0, 0, 0.03999999910593033)"
            borderRadius="10px"
            padding="20px 20px 20px 20px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Schedule301455")}
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
              {...getOverrideProps(overrides, "Frame 26080083301456")}
            >
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="600"
                color="rgba(31,31,31,1)"
                lineHeight="28px"
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
                children="Schedule"
                {...getOverrideProps(overrides, "Schedule301457")}
              ></Text>
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
                border="1px SOLID rgba(22,92,22,1)"
                borderRadius="8px"
                padding="7px 15px 7px 15px"
                {...getOverrideProps(overrides, "Button302787")}
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
                  {...getOverrideProps(overrides, "event")}
                >
                  <Icon
                    width="18px"
                    height="20px"
                    viewBox={{ minX: 0, minY: 0, width: 18, height: 20 }}
                    paths={[
                      {
                        d: "M14 11L9 11L9 16L14 16L14 11ZM13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2L15 2L15 0L13 0ZM16 18L2 18L2 7L16 7L16 18Z",
                        fill: "rgba(34,139,34,1)",
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
                    {...getOverrideProps(overrides, "Vector302792")}
                  ></Icon>
                </View>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(34,139,34,1)"
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
                  children="Choose slot"
                  {...getOverrideProps(overrides, "Accept order302789")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="20px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 26080085301459")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                borderRadius="6px"
                padding="8px 16px 8px 16px"
                backgroundColor="rgba(242,242,242,1)"
                {...getOverrideProps(overrides, "Input302793")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(142,145,143,1)"
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
                  children="Date"
                  {...getOverrideProps(overrides, "Label302794")}
                ></Text>
              </Flex>
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="44px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                borderRadius="6px"
                padding="8px 16px 8px 16px"
                backgroundColor="rgba(242,242,242,1)"
                {...getOverrideProps(overrides, "Input302795")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="400"
                  color="rgba(142,145,143,1)"
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
                  children="Time"
                  {...getOverrideProps(overrides, "Label302796")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="2px"
              direction="row"
              width="unset"
              height="44px"
              justifyContent="flex-start"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="6px"
              padding="8px 16px 8px 16px"
              backgroundColor="rgba(242,242,242,1)"
              {...getOverrideProps(overrides, "Filter v1302797")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(142,145,143,1)"
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
                children="Technicial"
                {...getOverrideProps(overrides, "Label302798")}
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
                {...getOverrideProps(overrides, "expand_more")}
              >
                <Icon
                  width="10px"
                  height="6.17px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 10,
                    height: 6.174999713897705,
                  }}
                  paths={[
                    {
                      d: "M8.825 0L5 3.81667L1.175 0L0 1.175L5 6.175L10 1.175L8.825 0Z",
                      fill: "rgba(142,145,143,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="34.56%"
                  bottom="34.56%"
                  left="25%"
                  right="25%"
                  {...getOverrideProps(overrides, "Vector302802")}
                ></Icon>
              </View>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

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
        padding="20px 20px 20px 20px"
        marginTop={50}
        borderRadius="10px"
        backgroundColor="#FFFFFF"
        {...getOverrideProps(overrides, "Footer")}
      >
        <Flex
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
          {...getOverrideProps(overrides, "Left-Conteiner-Footer")}
        ></Flex>
        
        <Button
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          border="0"
          onClick={handleButtonClick}
          {...getOverrideProps(overrides, "Frame 1948756988")}
        >
          
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
        </Button>
      </Flex>
    </Flex>
  );
}
