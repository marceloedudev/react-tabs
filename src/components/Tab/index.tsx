import { Button } from '../Button';
import { Default } from '../../utils';
import React from 'react';
import clsx from 'clsx';

export interface ITab {
  label: string;
  isCurrentSelected?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void;
  disabled?: boolean;
  width?: number;
  height?: number;
}

export const Tab: React.FC<ITab> = ({
  label,
  isCurrentSelected,
  onClick,
  disabled = false,
  width,
  height,
}) => {
  const defaultClassName = clsx(`${Default.CSS_NAMESPACE}__tab`);

  const classNames = clsx(defaultClassName);

  return (
    <li className={classNames} id={`tab-${label}`}>
      <Button
        disabled={disabled}
        onClick={onClick}
        label={label}
        checked={!!isCurrentSelected}
        width={width}
        height={height}
      />
    </li>
  );
};
