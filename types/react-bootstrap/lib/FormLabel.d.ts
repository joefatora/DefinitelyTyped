import * as React from 'react';

declare namespace FormLabel {
    export interface LabelProps extends React.HTMLProps<FormLabel> {
        bsPrefix?: string;
        srOnly?: boolean;
        htmlFor?: string;
        column?: boolean;
        innerRef?: React.Ref<HTMLElement>
    }
}
declare class FormLabel extends React.Component<FormLabel.LabelProps> { }
export = FormLabel;