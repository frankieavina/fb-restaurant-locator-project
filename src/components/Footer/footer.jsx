import React from 'react';
import styled from 'styled-components';
// adding material icon 
import AppleIcon from '@material-ui/icons/Apple';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fefefe;
  padding: 1rem 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Betelihem A Hayle and Frankie Avina © 2022
      <AppleIcon/>
    </FooterWrapper>
  );
};

export default Footer;