import React from 'react'
import { Address, Wrapper, ContactsWrapper, FooterContainer, FooterWrap, Link, LinksWrap, SocialIcon, SocialWrapper, FooterTitle, Copyright, CopyrightLink } from './Footer.styled'
import { Logo } from '../../common/Logo.styled'
import sprite from '../../img/sprite.svg'
function Footer() {
  return (
    <FooterWrap>
      <FooterContainer>
        <Wrapper>
          <Logo to='/'>DriveEase</Logo>
          <Address>
            <ContactsWrapper>
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-email`} />
              </svg>
              <Link href="mLinkilto:driveLinkse@gmail.com">drivease@gmail.com</Link>
            </ContactsWrapper>
            <ContactsWrapper>
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-phone`} />
              </svg>
              <Link href="tel:+380985674355">+38 (098) 567 43 55</Link>
            </ContactsWrapper>
          </Address>
        </Wrapper>
        <Wrapper>
          <FooterTitle>Quick Links</FooterTitle>
          <LinksWrap>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/catalog">Catalog</Link></li>
            <li><Link href="/favorites">Favorites</Link></li>
          </LinksWrap>
        </Wrapper>
        <Wrapper>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialWrapper>
            <SocialIcon  target="_blank" href="https://twitter.com/?lang=uk">
              <svg width={32} height={32}>
                <use href={`${sprite}#icon-twitter`} />
              </svg>
            </SocialIcon>
            <SocialIcon  target="_blank" href="https://www.instagram.com/">
              <svg width={32} height={32}>
                <use href={`${sprite}#icon-instagram`} />
              </svg>
            </SocialIcon>
            <SocialIcon  target="_blank" href="https://www.youtube.com/">
              <svg width={32} height={32}>
                <use href={`${sprite}#icon-youtube`} />
              </svg>
            </SocialIcon>
          </SocialWrapper>
        </Wrapper>
      </FooterContainer>
      <Copyright>
        <p>&copy; 2023 Car Rental Service. All rights reserved. Developed by <CopyrightLink target="_blank" href="https://www.linkedin.com/in/roksolana-protsiv/">Roksolana Protsiv</CopyrightLink></p>
      </Copyright>
    </FooterWrap>
  )
}

export default Footer