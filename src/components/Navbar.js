import React from 'react';
import { Link } from 'rimble-ui';
import { Nav, Container, NavList, Title } from './styles/NavbarStyles';

const Navbar = props => (
  <Nav>
    <Container>
      <NavList>
        <li>
          <Title>Todo List hoan'i Madagasikara</Title>
        </li>
        <div>
          <div>
            <li>
              <Link href='https://github.com/azavana/velirano' target="_blank" style={{ fontSize: 16, fontWeight: 'bold' }}>Github</Link>
            </li>
          </div>
        </div>
      </NavList>
    </Container>
  </Nav>
);

export default Navbar;