import React from "react";
import { ServicesSection } from "./Services.styled";
import { Subs, TextWrapper, Title } from "../../common/TextTitles.styled";
import ServicesList from "./ServicesList/ServicesList";
import { Container } from "../../common/Container.styled";

function Services() {
  return (
    <ServicesSection>
      <Container>
        <TextWrapper>
          <Title>Our services</Title>
          <Subs>
            To make renting easy and hassle-free, we provide a variety of
            services and advantages. We have you covered with a variety of
            vehicles and flexible rental terms.
          </Subs>
        </TextWrapper>
        <ServicesList />
      </Container>
    </ServicesSection>
  );
}

export default Services;
