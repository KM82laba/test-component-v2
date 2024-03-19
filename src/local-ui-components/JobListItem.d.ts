/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobListItemOverridesProps = {
    "123456"?: PrimitiveOverrideProps<TextProps>;
    JobListItem?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    Checkbox?: PrimitiveOverrideProps<FlexProps>;
    "Frame 60"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 21"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Ronald Richards"?: PrimitiveOverrideProps<TextProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    Tag302702?: PrimitiveOverrideProps<FlexProps>;
    "Accept order302703"?: PrimitiveOverrideProps<TextProps>;
    Tag302705?: PrimitiveOverrideProps<FlexProps>;
    "Accept order302706"?: PrimitiveOverrideProps<TextProps>;
    Tag302708?: PrimitiveOverrideProps<FlexProps>;
    "Accept order302709"?: PrimitiveOverrideProps<TextProps>;
    Tag302711?: PrimitiveOverrideProps<FlexProps>;
    "Accept order302712"?: PrimitiveOverrideProps<TextProps>;
    "Frame 36"?: PrimitiveOverrideProps<FlexProps>;
    more_horiz?: PrimitiveOverrideProps<ViewProps>;
    Vector302716?: PrimitiveOverrideProps<IconProps>;
    "Frame 8"?: PrimitiveOverrideProps<FlexProps>;
    "Wine(cigar)cooler repair"?: PrimitiveOverrideProps<TextProps>;
    "Frame 9"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 63"?: PrimitiveOverrideProps<FlexProps>;
    event?: PrimitiveOverrideProps<ViewProps>;
    Vector302722?: PrimitiveOverrideProps<IconProps>;
    "Fri, Jul 17, 2024"?: PrimitiveOverrideProps<TextProps>;
    "Frame 64"?: PrimitiveOverrideProps<FlexProps>;
    access_time?: PrimitiveOverrideProps<ViewProps>;
    Vector302726?: PrimitiveOverrideProps<IconProps>;
    "8:00\u00A0AM"?: PrimitiveOverrideProps<TextProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    "(808) 555-0111"?: PrimitiveOverrideProps<TextProps>;
    "Frame 11"?: PrimitiveOverrideProps<FlexProps>;
    "curtis.weaver@example.com"?: PrimitiveOverrideProps<TextProps>;
    "Frame 12"?: PrimitiveOverrideProps<FlexProps>;
    "Alex Fazylkhatov"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13"?: PrimitiveOverrideProps<FlexProps>;
    "Cameron Williamson"?: PrimitiveOverrideProps<TextProps>;
    "Frame 14"?: PrimitiveOverrideProps<FlexProps>;
    "2464 Royal Ln. Mesa, New Jersey 45463"?: PrimitiveOverrideProps<TextProps>;
    "Frame 15"?: PrimitiveOverrideProps<FlexProps>;
    "New Jersey"?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    Sourse?: PrimitiveOverrideProps<TextProps>;
    "Frame 17"?: PrimitiveOverrideProps<FlexProps>;
    "Time in status"?: PrimitiveOverrideProps<TextProps>;
    "Frame 20"?: PrimitiveOverrideProps<FlexProps>;
    Location?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type JobListItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: JobListItemOverridesProps | undefined | null;
}>;
export default function JobListItem(props: JobListItemProps): React.ReactElement;
