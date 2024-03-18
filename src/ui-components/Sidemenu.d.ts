/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SidemenuOverridesProps = {
    Sidemenu?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26080096"?: PrimitiveOverrideProps<ViewProps>;
    "image 15"?: PrimitiveOverrideProps<ImageProps>;
    "menu items"?: PrimitiveOverrideProps<FlexProps>;
    "Menu items94753"?: PrimitiveOverrideProps<FlexProps>;
    handyman?: PrimitiveOverrideProps<ViewProps>;
    Vector94755?: PrimitiveOverrideProps<IconProps>;
    Jobs?: PrimitiveOverrideProps<TextProps>;
    "Menu items94757"?: PrimitiveOverrideProps<FlexProps>;
    calendar_month?: PrimitiveOverrideProps<ViewProps>;
    Vector94759?: PrimitiveOverrideProps<IconProps>;
    Schedule?: PrimitiveOverrideProps<TextProps>;
    "Menu items94761"?: PrimitiveOverrideProps<FlexProps>;
    map?: PrimitiveOverrideProps<ViewProps>;
    Vector94763?: PrimitiveOverrideProps<IconProps>;
    Map?: PrimitiveOverrideProps<TextProps>;
    "Menu items94765"?: PrimitiveOverrideProps<FlexProps>;
    group?: PrimitiveOverrideProps<ViewProps>;
    Vector94767?: PrimitiveOverrideProps<IconProps>;
    Clients?: PrimitiveOverrideProps<TextProps>;
    "Menu items94769"?: PrimitiveOverrideProps<FlexProps>;
    calculate?: PrimitiveOverrideProps<ViewProps>;
    Vector94771?: PrimitiveOverrideProps<IconProps>;
    Estimates?: PrimitiveOverrideProps<TextProps>;
    "Menu items94773"?: PrimitiveOverrideProps<FlexProps>;
    inventory?: PrimitiveOverrideProps<ViewProps>;
    Vector94775?: PrimitiveOverrideProps<IconProps>;
    "Service plans"?: PrimitiveOverrideProps<TextProps>;
    "Menu items94777"?: PrimitiveOverrideProps<FlexProps>;
    analytics?: PrimitiveOverrideProps<ViewProps>;
    Vector94779?: PrimitiveOverrideProps<IconProps>;
    Reports?: PrimitiveOverrideProps<TextProps>;
    "Menu items94781"?: PrimitiveOverrideProps<FlexProps>;
    payment?: PrimitiveOverrideProps<ViewProps>;
    Vector94783?: PrimitiveOverrideProps<IconProps>;
    Payment?: PrimitiveOverrideProps<TextProps>;
    Setting94785?: PrimitiveOverrideProps<FlexProps>;
    "Menu items94786"?: PrimitiveOverrideProps<FlexProps>;
    settings?: PrimitiveOverrideProps<ViewProps>;
    Vector94788?: PrimitiveOverrideProps<IconProps>;
    Setting94789?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SidemenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SidemenuOverridesProps | undefined | null;
}>;
export default function Sidemenu(props: SidemenuProps): React.ReactElement;
