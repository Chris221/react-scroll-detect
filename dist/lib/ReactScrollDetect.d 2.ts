import React, { FC } from 'react';
import { TriggerPoint } from './context';
export interface ReactScrollDetectProps {
    onChange?: (index: number) => void;
    index?: number;
    offset?: number;
    triggerPoint?: TriggerPoint;
    children?: React.ReactNode;
}
export interface ScrollProps {
    children?: React.ReactNode;
}
declare const ReactScrollDetect: FC<ReactScrollDetectProps>;
export default ReactScrollDetect;
