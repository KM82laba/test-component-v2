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
export default function Notificationsactive(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Notificationsactive: {
          paths: [
            {
              d: "M5.55 1.58L4.12 0.15C1.72 1.98 0.14 4.8 0 8L2 8C2.15 5.35 3.51 3.03 5.55 1.58ZM17.94 8L19.94 8C19.79 4.8 18.21 1.98 15.82 0.15L14.4 1.58C16.42 3.03 17.79 5.35 17.94 8ZM15.97 8.5C15.97 5.43 14.33 2.86 11.47 2.18L11.47 1.5C11.47 0.67 10.8 0 9.97 0C9.14 0 8.47 0.67 8.47 1.5L8.47 2.18C5.6 2.86 3.97 5.42 3.97 8.5L3.97 13.5L1.97 15.5L1.97 16.5L17.97 16.5L17.97 15.5L15.97 13.5L15.97 8.5ZM9.97 19.5C10.11 19.5 10.24 19.49 10.37 19.46C11.02 19.32 11.55 18.88 11.81 18.28C11.91 18.04 11.96 17.78 11.96 17.5L7.96 17.5C7.97 18.6 8.86 19.5 9.97 19.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.46%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    {
      overrides: { Notificationsactive: {} },
      variantValues: { style: "Outlined" },
    },
    {
      overrides: {
        Notificationsactive: {
          paths: [
            {
              d: "M15.8711 13.5L15.8711 8.5C15.8711 5.43 14.2311 2.86 11.3711 2.18L11.3711 1.5C11.3711 0.67 10.6911 0 9.86107 0C9.03107 0 8.37107 0.67 8.37107 1.5L8.37107 2.18C5.50107 2.86 3.87107 5.42 3.87107 8.5L3.87107 13.5L2.57107 14.79C1.94107 15.42 2.38107 16.5 3.27107 16.5L16.4411 16.5C17.3311 16.5 17.7811 15.42 17.1511 14.79L15.8711 13.5ZM9.86107 19.5C10.9611 19.5 11.8611 18.6 11.8611 17.5L7.86107 17.5C7.86107 18.6 8.75107 19.5 9.86107 19.5ZM4.64107 2.23C5.06107 1.85 5.07107 1.2 4.67107 0.8C4.29107 0.42 3.67107 0.41 3.28107 0.78C1.57107 2.34 0.391071 4.46 0.0110709 6.84C-0.0789291 7.45 0.391071 8 1.01107 8C1.49107 8 1.91107 7.65 1.99107 7.17C2.29107 5.23 3.25107 3.5 4.64107 2.23ZM16.4711 0.78C16.0711 0.41 15.4511 0.42 15.0711 0.8C14.6711 1.2 14.6911 1.84 15.1011 2.22C16.4811 3.49 17.4511 5.22 17.7511 7.16C17.8211 7.64 18.2411 7.99 18.7311 7.99C19.3411 7.99 19.8211 7.44 19.7211 6.83C19.3411 4.46 18.1711 2.35 16.4711 0.78Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.89%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Notificationsactive: {
          paths: [
            {
              d: "M5.55 1.58L4.12 0.15C1.72 1.98 0.14 4.8 0 8L2 8C2.15 5.35 3.51 3.03 5.55 1.58ZM17.94 8L19.94 8C19.79 4.8 18.21 1.98 15.82 0.15L14.4 1.58C16.42 3.03 17.79 5.35 17.94 8ZM15.97 8.5C15.97 5.43 14.33 2.86 11.47 2.18L11.47 0L8.47 0L8.47 2.18C5.6 2.86 3.97 5.42 3.97 8.5L3.97 13.5L1.97 15.5L1.97 16.5L17.97 16.5L17.97 15.5L15.97 13.5L15.97 8.5ZM9.97 19.5C10.11 19.5 10.24 19.49 10.37 19.46C11.02 19.32 11.55 18.88 11.81 18.28C11.91 18.04 11.96 17.78 11.96 17.5L7.96 17.5C7.97 18.6 8.86 19.5 9.97 19.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.46%, 9.38%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Notificationsactive: {
          paths: [
            {
              d: "M4 0C1.51 0 0 2.02 0 4.5L0 10.5L8 10.5L8 4.5C8 2.02 6.49 0 4 0Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 27.08%)" },
            },
            {
              d: "M9.97 19.5C11.07 19.5 11.97 18.6 11.97 17.5L7.97 17.5C7.97 18.6 8.87 19.5 9.97 19.5ZM15.97 8.5C15.97 5.43 14.34 2.86 11.47 2.18L11.47 1.5C11.47 0.67 10.8 0 9.97 0C9.14 0 8.47 0.67 8.47 1.5L8.47 2.18C5.61 2.86 3.97 5.42 3.97 8.5L3.97 13.5L1.97 15.5L1.97 16.5L17.97 16.5L17.97 15.5L15.97 13.5L15.97 8.5ZM13.97 14.5L5.97 14.5L5.97 8.5C5.97 6.02 7.48 4 9.97 4C12.46 4 13.97 6.02 13.97 8.5L13.97 14.5ZM5.55 1.58L4.12 0.15C1.72 1.98 0.14 4.8 0 8L2 8C2.15 5.35 3.51 3.03 5.55 1.58ZM17.94 8L19.94 8C19.79 4.8 18.21 1.98 15.82 0.15L14.4 1.58C16.42 3.03 17.79 5.35 17.94 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.46%, 10.42%)" },
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
          d: "M9.97 19.5C11.07 19.5 11.97 18.6 11.97 17.5L7.97 17.5C7.97 18.6 8.87 19.5 9.97 19.5ZM15.97 13.5L15.97 8.5C15.97 5.43 14.34 2.86 11.47 2.18L11.47 1.5C11.47 0.67 10.8 0 9.97 0C9.14 0 8.47 0.67 8.47 1.5L8.47 2.18C5.61 2.86 3.97 5.42 3.97 8.5L3.97 13.5L1.97 15.5L1.97 16.5L17.97 16.5L17.97 15.5L15.97 13.5ZM13.97 14.5L5.97 14.5L5.97 8.5C5.97 6.02 7.48 4 9.97 4C12.46 4 13.97 6.02 13.97 8.5L13.97 14.5ZM5.55 1.58L4.12 0.15C1.72 1.98 0.14 4.8 0 8L2 8C2.15 5.35 3.51 3.03 5.55 1.58ZM17.94 8L19.94 8C19.79 4.8 18.21 1.98 15.82 0.15L14.4 1.58C16.42 3.03 17.79 5.35 17.94 8Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(8.46%, 9.38%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Notificationsactive")}
      {...rest}
    ></Icon>
  );
}
