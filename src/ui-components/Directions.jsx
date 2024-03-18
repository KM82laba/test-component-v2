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
export default function Directions(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Directions: {
          paths: [
            {
              d: "M19.415 8.585L11.425 0.585C10.645 -0.195 9.375 -0.195 8.595 0.585L0.585 8.585C-0.195 9.365 -0.195 10.635 0.585 11.415L8.595 19.415C9.375 20.195 10.645 20.195 11.425 19.415L19.415 11.415C20.205 10.625 20.205 9.365 19.415 8.585ZM11.505 12.495L11.505 9.995L8.005 9.995L8.005 12.995L6.005 12.995L6.005 8.995C6.005 8.445 6.455 7.995 7.005 7.995L11.505 7.995L11.505 5.495L15.005 8.995L11.505 12.495Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.32%, 8.33%)" },
            },
          ],
        },
      },
      variantValues: { style: "Filled" },
    },
    { overrides: { Directions: {} }, variantValues: { style: "Outlined" } },
    {
      overrides: {
        Directions: {
          paths: [
            {
              d: "M19.7024 9.29244L10.7024 0.292444C10.6099 0.19974 10.5 0.126193 10.3791 0.0760114C10.2581 0.02583 10.1284 0 9.99744 0C9.86648 0 9.73679 0.02583 9.61582 0.0760114C9.49485 0.126193 9.38496 0.19974 9.29244 0.292444L0.292444 9.29244C0.19974 9.38496 0.126193 9.49485 0.0760114 9.61582C0.02583 9.73679 0 9.86648 0 9.99744C0 10.1284 0.02583 10.2581 0.0760114 10.3791C0.126193 10.5 0.19974 10.6099 0.292444 10.7024L9.29244 19.7024C9.68244 20.0924 10.3124 20.0924 10.7024 19.7024L19.7024 10.7024C19.7951 10.6099 19.8687 10.5 19.9189 10.3791C19.9691 10.2581 19.9949 10.1284 19.9949 9.99744C19.9949 9.86648 19.9691 9.73679 19.9189 9.61582C19.8687 9.49485 19.7951 9.38496 19.7024 9.29244ZM11.9924 12.5024L11.9924 10.0024L7.99244 10.0024L7.99244 12.0024C7.99244 12.5524 7.54244 13.0024 6.99244 13.0024C6.44244 13.0024 5.99244 12.5524 5.99244 12.0024L5.99244 9.00244C5.99244 8.45244 6.44244 8.00244 6.99244 8.00244L11.9924 8.00244L11.9924 5.50244L15.1424 8.65244C15.3424 8.85244 15.3424 9.16244 15.1424 9.36244L11.9924 12.5024Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(8.34%, 8.34%)" },
            },
          ],
        },
      },
      variantValues: { style: "Round" },
    },
    {
      overrides: {
        Directions: {
          paths: [
            {
              d: "M20.82 10.41L10.41 0L0 10.4L10.41 20.82L20.82 10.41ZM12.41 12.91L12.41 10.41L8.41 10.41L8.41 13.41L6.41 13.41L6.41 8.41L12.41 8.41L12.41 5.91L15.91 9.41L12.41 12.91Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6.63%, 6.63%)" },
            },
          ],
        },
      },
      variantValues: { style: "Sharp" },
    },
    {
      overrides: {
        Directions: {
          paths: [
            {
              d: "M0 9L9 18L17.99 9L8.99 0L0 9ZM10.99 4.5L14.49 8L10.99 11.5L10.99 9L6.99 9L6.99 12L4.99 12L4.99 8C4.99 7.45 5.44 7 5.99 7L10.99 7L10.99 4.5Z",
              fill: "rgba(0,0,0,0.3)",
              fillRule: "nonzero",
              style: { transform: "translate(12.54%, 12.5%)" },
            },
            {
              d: "M12.415 0.566256C11.665 -0.183744 10.345 -0.193744 9.585 0.566256L0.585 9.56626C-0.195 10.3463 -0.195 11.6063 0.585 12.3863L9.585 21.3863C9.975 21.7763 10.485 21.9663 10.995 21.9663C11.505 21.9663 12.015 21.7763 12.405 21.3863L21.395 12.3963C22.175 11.6363 22.185 10.3663 21.415 9.57626L12.415 0.566256ZM11.005 19.9763L2.005 10.9763L11.005 1.97626L20.005 10.9763L11.005 19.9763ZM6.995 9.98626L6.995 13.9863L8.995 13.9863L8.995 10.9863L12.995 10.9863L12.995 13.4863L16.495 9.98626L12.995 6.48626L12.995 8.98626L7.995 8.98626C7.445 8.98626 6.995 9.43626 6.995 9.98626Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(4.19%, 4.22%)" },
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
          d: "M21.425 9.57626L12.415 0.566256C11.665 -0.183744 10.345 -0.193744 9.585 0.566256L0.585 9.56626C-0.195 10.3463 -0.195 11.6063 0.585 12.3863L9.585 21.3863C9.975 21.7763 10.485 21.9663 10.995 21.9663C11.505 21.9663 12.015 21.7763 12.405 21.3863L21.395 12.3963C22.185 11.6363 22.195 10.3763 21.425 9.57626ZM11.005 19.9763L2.005 10.9763L11.005 1.97626L20.005 10.9763L11.005 19.9763ZM6.995 9.98626L6.995 13.9863L8.995 13.9863L8.995 10.9863L12.995 10.9863L12.995 13.4863L16.495 9.98626L12.995 6.48626L12.995 8.98626L7.995 8.98626C7.445 8.98626 6.995 9.43626 6.995 9.98626Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.18%, 4.24%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Directions")}
      {...rest}
    ></Icon>
  );
}
