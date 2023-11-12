import React from "react";
import { Container } from "../../common/Container.styled";
import works from "../../img/works.png";
import { WorksRect, WorksSection } from "./Works.styled";
import BrandsList from "./BrandsList/BrandsList";
import BenefitsList from "./BenefitsList/BenefitsList";
import { Subs, TextWrapper, Title } from "../../common/TextTitles.styled";

function Works() {
  return (
    <WorksSection>
      <Container>
        <BrandsList />
        <TextWrapper>
          <Title>How it works</Title>
          <Subs>
            Renting a luxury car has never been easier. Our streamlined process
            makes it simple for you to book and confirm your vehicle of choice
            online
          </Subs>
        </TextWrapper>
        <WorksRect>
          <BenefitsList />
          <img height={359} width={545} src={works} alt="Gray jeep" />
        </WorksRect>
      </Container>
    </WorksSection>
  );
}

export default Works;
