import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace FormLabel {
    export interface LabelProps extends React.HTMLProps<FormLabel> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
}
declare class FormLabel extends React.Component<FormLabel.LabelProps> { }
export = FormLabel;