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
export default function Nomeetingroom(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Nomeetingroom: {
          paths: [
            {
              d: "M10 8.73L9 8.73L9 10.73L11 10.73L11 9.73L20.73 19.46L19.46 20.73L13 14.27L13 18.73L2 18.73L2 16.73L4 16.73L4 5.27L0 1.27L1.27 0L10 8.73ZM13 9.22L4.51 0.73L13 0.73L13 1.73L18 1.73L18 14.22L16 12.22L16 3.73L13 3.73L13 9.22Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.81%, 6.81%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Nomeetingroom: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Nomeetingroom: {
          paths: [
            {
              d: "M12.5825 3.4625L15.5825 3.4625L15.5825 11.3425L17.5825 13.3425L17.5825 2.4625C17.5825 1.9125 17.1325 1.4625 16.5825 1.4625L12.5825 1.4625C12.5825 0.9125 12.1325 0.4625 11.5825 0.4625L4.7025 0.4625L12.5825 8.3425L12.5825 3.4625ZM19.7525 18.3425L10.5825 9.1725L10.5825 10.4625L8.5825 10.4625L8.5825 8.4625L9.8725 8.4625L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L3.5825 5.0025L3.5825 16.4625L2.5825 16.4625C2.0325 16.4625 1.5825 16.9125 1.5825 17.4625C1.5825 18.0125 2.0325 18.4625 2.5825 18.4625L11.5825 18.4625C12.1325 18.4625 12.5825 18.0125 12.5825 17.4625L12.5825 14.0025L18.3325 19.7525C18.7225 20.1425 19.3525 20.1425 19.7425 19.7525C20.1425 19.3625 20.1425 18.7325 19.7525 18.3425Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.24%, 8.24%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Nomeetingroom: {
          paths: [
            {
              d: "M13 3.87L16 3.87L16 11.75L18 13.75L18 1.87L13 1.87L13 0.87L5.12 0.87L13 8.75L13 3.87ZM11 9.58L11 10.87L9 10.87L9 8.87L10.29 8.87L1.41 0L0 1.41L4 5.41L4 16.87L2 16.87L2 18.87L13 18.87L13 14.41L19.46 20.87L20.87 19.46L11 9.58Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.52%, 6.52%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Nomeetingroom: {
          paths: [
            {
              d: "M5 0L1.12 0L5 3.88L5 1L5 0ZM0 14L5 14L5 9.54L0 4.54L0 14Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(29.17%, 20.83%)" },
            },
            {
              d: "M11 2.87L11 6.75L13 8.75L13 3.87L16 3.87L16 11.75L18 13.75L18 1.87L13 1.87L13 0.87L5.12 0.87L7.12 2.87L11 2.87ZM1.41 0L0 1.41L4 5.41L4 16.87L2 16.87L2 18.87L13 18.87L13 14.41L19.46 20.87L20.87 19.46L1.41 0ZM11 16.87L6 16.87L6 7.41L11 12.41L11 16.87Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 8.88%)" },
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
          d: "M11 2.87L11 6.75L13 8.75L13 3.87L16 3.87L16 11.75L18 13.75L18 1.87L13 1.87L13 0.87L5.12 0.87L7.12 2.87L11 2.87ZM1.41 0L0 1.41L4 5.41L4 16.87L2 16.87L2 18.87L13 18.87L13 14.41L19.46 20.87L20.87 19.46L1.41 0ZM11 16.87L6 16.87L6 7.41L11 12.41L11 16.87Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(6.52%, 6.52%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Nomeetingroom")}
      {...rest}
    ></Icon>
  );
}
