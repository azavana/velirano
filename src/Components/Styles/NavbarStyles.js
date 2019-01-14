import styled from 'styled-components';

export const Nav = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0px;
  right: 0px;
  left: 0px;
  max-width: 100vw;
  width: 100%;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 0px;
`
export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 1.5rem;
`

export const NavList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: outside none none;
  position: relative;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  height: 5rem;
  display: flex;
`

export const Title = styled.h1`
  font-size: 1.25em;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 16px;
  color: rgb(102, 102, 102);
`