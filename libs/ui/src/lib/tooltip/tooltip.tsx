import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from 'antd';
import React, { PropsWithChildren } from 'react';

const styles = {
  primary: {
    backgroundColor: '#313131',
    padding: 8,
    borderRadius: 6,
  },
  default: {
    backgroundColor: '#ECEDF0',
    color: '#1A1A1A',
    border: '0.5px solid #D0D1D3',
    fontSize: 10,
    boxShadow:
      '0px 1px 4px rgba(0, 0, 0, 0.08), 0px 2px 12px rgba(0, 0, 0, 0.08)',
    minHeight: 12,
    padding: '4px 8px',
    borderRadius: 2,
  },
};

type TooltipProps = {
  type: 'default' | 'primary';
} & AntdTooltipProps;
const Tooltip = ({
  type = 'default',
  overlayInnerStyle = {},
  children,
  ...props
}: PropsWithChildren<TooltipProps>): JSX.Element => {
  return (
    <AntdTooltip
      arrowPointAtCenter
      overlayInnerStyle={{
        ...styles[type],
        ...overlayInnerStyle,
      }}
      showArrow={type === 'primary'}
      {...props}
    >
      {children}
    </AntdTooltip>
  );
};

export default Tooltip;
