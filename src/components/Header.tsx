import React from 'react';
import { Section, Title } from 'rbx';

import { useTypedSelector } from '../selectors';
import { getName } from '../selectors/auth';

function Header() {
  const username = useTypedSelector((state) => getName(state));

  return (
    <Section>
      <Title size={1}>Get Things Done</Title>
      {username && (
        <Title size={5} subtitle>
          Welcome, {username}.
        </Title>
      )}
    </Section>
  );
}

export default Header;
