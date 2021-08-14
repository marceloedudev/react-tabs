import { Default } from '../../utils';
import React from 'react';
import clsx from 'clsx';

type IIndicator = {
  id: number;
  color?: string;
  name: string;
};

export const Indicator: React.FC<IIndicator> = ({
  children,
  id,
  color = '#427bf5',
  name,
}) => {
  const refIndicator: React.MutableRefObject<any> = React.useRef(null);

  const refContent: React.MutableRefObject<any> = React.useRef(null);

  const defaultClassName = clsx(`${Default.CSS_NAMESPACE}__indicator`);

  const classNames = clsx(defaultClassName);

  const style: React.CSSProperties = {
    border: `2px solid ${color}`,
  };

  React.useEffect(() => {
    if (refIndicator.current && refContent.current && id >= 0) {
      const tabElement = refContent.current.querySelectorAll(`li`) as any;

      const targetElement = tabElement[id];

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        refIndicator.current.style.width = `${rect.width}px`;
        refIndicator.current.style.left = `${targetElement.offsetLeft}px`;
      }
    }
  }, [id, name, refContent]);

  return (
    <>
      {React.Children.map(children, (child: any, index) => {
        return React.cloneElement(child, {
          key: `tabgroup-${name}${index}`,
          id: `tabgroup-${name}${id}`,
          ref: refContent,
        });
      })}
      <div ref={refIndicator} style={style} className={classNames} />
    </>
  );
};
