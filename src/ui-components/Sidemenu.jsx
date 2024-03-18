/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React  from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import logo from "../assets/img/logo.png"
import MenuItem  from "./MenuItem.jsx";
export default function Sidemenu(props) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColor = isHovered ? 'white' : 'rgba(116,119,117,1)';

  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="48px"
      direction="column"
      width="68px"
      height="1024px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 2px 0px 2px"
      backgroundColor="rgba(31,31,31,1)"
      {...getOverrideProps(overrides, "Sidemenu")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="68px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(225,227,225,1)"
        padding="19px 11px 19px 11px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Logo")}
      >
        <View
          width="44px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 26080096")}
        >
          <Image
            width="42px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="calc(50% - 21px - 0px)"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            src={logo.src}
            {...getOverrideProps(overrides, "image 15")}
          ></Image>
        </View>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "menu items")}
      >
        <MenuItem iconName="handyman" text="Jobs" />
        <MenuItem iconName="calendar_month" text="Schedule" />
        <MenuItem iconName="map" text="Map" />
        <MenuItem iconName="clients" text="Clients" />
        <MenuItem iconName="calculate" text="Estimates" />
        <MenuItem iconName="inventory" text="Service plans" />
        <MenuItem iconName="analytics" text="Reports" />
        <MenuItem iconName="payment" text="Payment" />  
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="8px"
        padding="0px 0px 20px 0px"
        {...getOverrideProps(overrides, "Setting94785")}
      >
        <Flex
          gap="0"
          direction="column"
          width="62px"
          height="62px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "Menu items94786")}
        >
          <View
            width="28px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "settings")}
          >
            <Icon
              width="22.7px"
              height="23.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.69662094116211,
                height: 23.333332061767578,
              }}
              paths={[
                {
                  d: "M20.0192 12.81C20.0659 12.4367 20.1009 12.0633 20.1009 11.6667C20.1009 11.27 20.0659 10.8967 20.0192 10.5233L22.4809 8.59833C22.7026 8.42333 22.7609 8.10833 22.6209 7.85167L20.2876 3.815C20.1826 3.62833 19.9842 3.52333 19.7742 3.52333C19.7042 3.52333 19.6342 3.535 19.5759 3.55833L16.6709 4.725C16.0642 4.25833 15.4109 3.87333 14.6992 3.58167L14.2559 0.49C14.2209 0.21 13.9759 0 13.6842 0L9.01755 0C8.72589 0 8.48089 0.21 8.44589 0.49L8.00255 3.58167C7.29089 3.87333 6.63755 4.27 6.03089 4.725L3.12589 3.55833C3.05589 3.535 2.98589 3.52333 2.91589 3.52333C2.71755 3.52333 2.51922 3.62833 2.41422 3.815L0.0808868 7.85167C-0.0707798 8.10833 -0.000779686 8.42333 0.220887 8.59833L2.68255 10.5233C2.63589 10.8967 2.60089 11.2817 2.60089 11.6667C2.60089 12.0517 2.63589 12.4367 2.68255 12.81L0.220887 14.735C-0.000779686 14.91 -0.0591132 15.225 0.0808868 15.4817L2.41422 19.5183C2.51922 19.705 2.71755 19.81 2.92755 19.81C2.99755 19.81 3.06755 19.7983 3.12589 19.775L6.03089 18.6083C6.63755 19.075 7.29089 19.46 8.00255 19.7517L8.44589 22.8433C8.48089 23.1233 8.72589 23.3333 9.01755 23.3333L13.6842 23.3333C13.9759 23.3333 14.2209 23.1233 14.2559 22.8433L14.6992 19.7517C15.4109 19.46 16.0642 19.0633 16.6709 18.6083L19.5759 19.775C19.6459 19.7983 19.7159 19.81 19.7859 19.81C19.9842 19.81 20.1826 19.705 20.2876 19.5183L22.6209 15.4817C22.7609 15.225 22.7026 14.91 22.4809 14.735L20.0192 12.81ZM17.7092 10.815C17.7559 11.1767 17.7676 11.4217 17.7676 11.6667C17.7676 11.9117 17.7442 12.1683 17.7092 12.5183L17.5459 13.8367L18.5842 14.6533L19.8442 15.6333L19.0276 17.045L17.5459 16.45L16.3326 15.96L15.2826 16.7533C14.7809 17.1267 14.3026 17.4067 13.8242 17.605L12.5876 18.1067L12.4009 19.425L12.1676 21L10.5342 21L10.1259 18.1067L8.88922 17.605C8.38755 17.395 7.92089 17.1267 7.45422 16.7767L6.39255 15.96L5.15589 16.4617L3.67422 17.0567L2.85755 15.645L4.11755 14.665L5.15589 13.8483L4.99255 12.53C4.95755 12.1683 4.93422 11.9 4.93422 11.6667C4.93422 11.4333 4.95755 11.165 4.99255 10.815L5.15589 9.49667L4.11755 8.68L2.85755 7.7L3.67422 6.28833L5.15589 6.88333L6.36922 7.37333L7.41922 6.58C7.92089 6.20667 8.39922 5.92667 8.87755 5.72833L10.1142 5.22667L10.3009 3.90833L10.5342 2.33333L12.1559 2.33333L12.5642 5.22667L13.8009 5.72833C14.3026 5.93833 14.7692 6.20667 15.2359 6.55667L16.2976 7.37333L17.5342 6.87167L19.0159 6.27667L19.8326 7.68833L18.5842 8.68L17.5459 9.49667L17.7092 10.815ZM11.3509 7C8.77255 7 6.68422 9.08833 6.68422 11.6667C6.68422 14.245 8.77255 16.3333 11.3509 16.3333C13.9292 16.3333 16.0176 14.245 16.0176 11.6667C16.0176 9.08833 13.9292 7 11.3509 7ZM11.3509 14C10.0676 14 9.01755 12.95 9.01755 11.6667C9.01755 10.3833 10.0676 9.33333 11.3509 9.33333C12.6342 9.33333 13.6842 10.3833 13.6842 11.6667C13.6842 12.95 12.6342 14 11.3509 14Z",
                  fill: "rgba(142,145,143,1)",
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
              left="9.47%"
              right="9.47%"
              {...getOverrideProps(overrides, "Vector94788")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="11px"
            fontWeight="500"
            color="rgba(116,119,117,1)"
            lineHeight="12px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="22px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Setting"
            {...getOverrideProps(overrides, "Setting94789")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

