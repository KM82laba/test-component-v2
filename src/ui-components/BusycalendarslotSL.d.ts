/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type BusycalendarslotSLOverridesProps = {
    BusycalendarslotSL?: PrimitiveOverrideProps<FlexProps>;
    "Frame 99"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26080036"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26080035"?: PrimitiveOverrideProps<FlexProps>;
    "\u2116123456"?: PrimitiveOverrideProps<TextProps>;
    "Mille Trevizo"?: PrimitiveOverrideProps<TextProps>;
    "123.1 miles"?: PrimitiveOverrideProps<TextProps>;
    "Job type: Wine(cigar)cooler repair"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "Done pending approval"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BusycalendarslotSLProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BusycalendarslotSLOverridesProps | undefined | null;
}>;
export default function BusycalendarslotSL(props: BusycalendarslotSLProps): React.ReactElement;
