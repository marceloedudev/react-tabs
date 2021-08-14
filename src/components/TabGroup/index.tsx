import React, { Suspense, useEffect, useState } from 'react';

import { Default } from '../../utils';
import { Indicator } from '../Indicator';
import clsx from 'clsx';

export interface ITabs {
  children?: React.ReactChild & any;
  name: string;
  selected?: number;
  onSelect?: (selected: number) => void;
  loadingComponent?: JSX.Element;
  widthTab?: number;
  heightTab?: number;
  colorIndicator?: string;
}

export const TabGroup: React.FC<ITabs> = ({
  children,
  name,
  selected = 0,
  onSelect,
  loadingComponent,
  widthTab,
  heightTab,
  colorIndicator,
}) => {
  const [currentSelected, setCurrentSelected] = useState(selected);

  const handleTabClick = React.useCallback(
    (index) => {
      if (index !== currentSelected) {
        setCurrentSelected(index);
        if (onSelect) {
          onSelect(index);
        }
      }
    },
    [currentSelected, onSelect]
  );

  const RenderTabs = () => {
    return (
      <>
        {children?.map((child: any, index: number) => {
          return (
            <child.type
              key={child.key || `tab_${index}`}
              ref={child.ref}
              id={`tab_${index}`}
              onClick={() => handleTabClick(index)}
              isCurrentSelected={index === currentSelected}
              width={widthTab}
              height={heightTab}
              {...child.props}
            >
              {child.props?.children}
            </child.type>
          );
        })}
      </>
    );
  };

  const RenderContent = () => {
    if (children?.[currentSelected]) {
      return <>{children?.[currentSelected].props?.children}</>;
    }

    return <>{children?.props?.children}</>;
  };

  useEffect(() => {
    if (selected >= 0) {
      setCurrentSelected(selected);
    }
  }, [selected]);

  const defaultClassName = clsx(`${Default.CSS_NAMESPACE}__tabGroup`);

  const classNames = clsx(defaultClassName);

  return (
    <section className={classNames} id={`tab-group-section-${name}`}>
      <Indicator id={currentSelected} name={name} color={colorIndicator}>
        <ul className="tab-label">
          <RenderTabs />
        </ul>
      </Indicator>
      <div className="tab-content">
        <Suspense fallback={<>{loadingComponent || 'Loading'}</>}>
          <RenderContent />
        </Suspense>
      </div>
    </section>
  );
};
