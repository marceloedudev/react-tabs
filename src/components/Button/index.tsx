import { Default } from '../../utils';
import React from 'react';
import clsx from 'clsx';

type IButtonBase = {
  id: string;
  onClick?: (event: React.MouseEvent<any>) => void;
  disabled?: boolean;
  label?: string;
  textColor?: string;
  checked?: boolean;
  width?: number;
  height?: number;
};

export const Button: React.FC<IButtonBase> = React.forwardRef(
  (
    { onClick, disabled, label, id, checked, width = 150, height = 35 },
    ref
  ) => {
    const defaultRef = React.useRef();
    const resolvedRef: any = ref || defaultRef;

    const defaultClassName = clsx(
      `${Default.CSS_NAMESPACE}__button`,
      checked && `${Default.CSS_NAMESPACE}__button--checked`
    );

    const classNames = clsx(defaultClassName);

    const style: React.CSSProperties = {
      width: `${width}px`,
      height: `${height}px`,
    };

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        data-testid="tab-button"
        type={'button'}
        ref={resolvedRef}
        id={id}
        style={style}
        className={classNames}
      >
        {label}
      </button>
    );
  }
);
