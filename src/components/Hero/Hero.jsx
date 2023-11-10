import React from 'react'
import { Container } from '../../common/Container.styled'
import { HeroSection, HeroSpan, HeroSubs, HeroTextContainer, HeroTitle } from './Hero.styled'
import { StyledLink } from '../../common/Button.styled'

function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroTextContainer>
          <HeroTitle>
            Find, book, and rental car in <HeroSpan>easy</HeroSpan> steps
          </HeroTitle>
          <HeroSubs>
            Choose from a wide range of cars that fit your style and budget. Experience the freedom of the open road with our reliable and efficient rental service.
          </HeroSubs>
        </HeroTextContainer>
        <StyledLink width={150} height={60} href='/catalog'>Find a car</StyledLink>
      </Container>
    </HeroSection>
  )
}

export default Hero