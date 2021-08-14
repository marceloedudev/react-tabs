import * as React from 'react';

import { TabGroup } from '../../src';
import { render } from '@testing-library/react';

describe('TabGroup Component', () => {
  it('Should render container', () => {
    const name = 'teste';

    render(<TabGroup name={name} />);

    expect(document.querySelector(`#tab-group-section-${name}`)).not.toBe(null);
  });
});
