/**
 * Absolute imports
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Global Components
 */
import HeaderNavigation from '../HeaderNavigation';

const Root = styled.header`
  flex: 0 0 auto;
`;

const Header = () => (
  <Root>
    <HeaderNavigation />
  </Root>
);

export default Header;
