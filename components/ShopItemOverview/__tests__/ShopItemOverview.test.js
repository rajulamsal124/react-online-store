/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

/**
 * Local Components
 */
import ShopItemOverview from '..';

const renderComponent = ({ ...rest } = {}) =>
  render(<ShopItemOverview {...rest} />);

describe('<ShopItemOverview/>', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
