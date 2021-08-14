import '@testing-library/jest-dom';

import * as React from 'react';

import { Tab } from '../../src';
import { render } from '@testing-library/react';

describe('Tab Component', () => {
  it('Should render text/button', () => {
    const label = 'Home';

    const { container } = render(<Tab label={label} />);

    const { innerHTML } = container;

    expect(innerHTML).toEqual(expect.stringContaining(`${label}`));
  });

  it('Should have disabled attribute', () => {
    const label = 'Home';

    render(<Tab label={label} disabled />);

    expect(document.querySelector(`#tabitem-${label}`)).toHaveAttribute(
      'disabled'
    );
  });

  it('Should not have disabled attribute', () => {
    const label = 'Home';

    render(<Tab label={label} />);

    expect(document.querySelector(`#tabitem-${label}`)).not.toHaveAttribute(
      'disabled'
    );
  });
});
