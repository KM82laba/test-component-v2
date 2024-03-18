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
export default function Wifi(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Wifi: {} }, variantValues: { style: "Filled" } },
    { overrides: { Wifi: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Wifi: {
          paths: [
            {
              d: "M0.420436 5.6025C0.930436 6.1125 1.74044 6.1625 2.29044 5.7025C6.96044 1.8625 13.7404 1.8625 18.4204 5.6925C18.9804 6.1525 19.8004 6.1125 20.3104 5.6025C20.9004 5.0125 20.8604 4.0325 20.2104 3.5025C14.5004 -1.1675 6.24044 -1.1675 0.520436 3.5025C-0.129564 4.0225 -0.179564 5.0025 0.420436 5.6025ZM8.18044 13.3625L9.65044 14.8325C10.0404 15.2225 10.6704 15.2225 11.0604 14.8325L12.5304 13.3625C13.0004 12.8925 12.9004 12.0825 12.3004 11.7725C11.0804 11.1425 9.62044 11.1425 8.39044 11.7725C7.82044 12.0825 7.71044 12.8925 8.18044 13.3625ZM4.45044 9.6325C4.94044 10.1225 5.71044 10.1725 6.28044 9.7625C8.72044 8.0325 12.0004 8.0325 14.4404 9.7625C15.0104 10.1625 15.7804 10.1225 16.2704 9.6325L16.2804 9.6225C16.8804 9.0225 16.8404 8.0025 16.1504 7.5125C12.7104 5.0225 8.02044 5.0225 4.57044 7.5125C3.88044 8.0125 3.84044 9.0225 4.45044 9.6325Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.82%, 18.49%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    { overrides: { Wifi: {} }, variantValues: { style: "Sharp" } },
    {
      overrides: {
        Wifi: {
          paths: [
            {
              d: "M0 4.5525L2 6.5525C6.97 1.5825 15.03 1.5825 20 6.5525L22 4.5525C15.93 -1.5175 6.08 -1.5175 0 4.5525ZM8 12.5525L11 15.5525L14 12.5525C12.35 10.8925 9.66 10.8925 8 12.5525ZM4 8.5525L6 10.5525C8.76 7.7925 13.24 7.7925 16 10.5525L18 8.5525C14.14 4.6925 7.87 4.6925 4 8.5525Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.17%, 18.53%)" },
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
          d: "M0 4.5525L2 6.5525C6.97 1.5825 15.03 1.5825 20 6.5525L22 4.5525C15.93 -1.5175 6.08 -1.5175 0 4.5525ZM8 12.5525L11 15.5525L14 12.5525C12.35 10.8925 9.66 10.8925 8 12.5525ZM4 8.5525L6 10.5525C8.76 7.7925 13.24 7.7925 16 10.5525L18 8.5525C14.14 4.6925 7.87 4.6925 4 8.5525Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 17.6%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Wifi")}
      {...rest}
    ></Icon>
  );
}
