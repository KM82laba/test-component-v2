/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps } from "@aws-amplify/ui-react";
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
export declare type ExpandcircledownOverridesProps = {
    Expandcircledown?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ExpandcircledownProps = React.PropsWithChildren<Partial<IconProps> & {
    style?: "Filled" | "Outlined" | "Round" | "Sharp" | "Two Tone";
} & {
    overrides?: ExpandcircledownOverridesProps | undefined | null;
}>;
export default function Expandcircledown(props: ExpandcircledownProps): React.ReactElement;
