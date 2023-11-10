import React from 'react'
import { Container } from "../../common/Container.styled"
import works from '../../img/works.png'
import { WorksRect, WorksSection, WorksSubs, WorksTextWrapper, WorksTitle } from './Works.styled'
import BrandsList from './BrandsList/BrandsList'
import BenefitsList from './BenefitsList/BenefitsList'

function Works() {
    return (
        <WorksSection>
            <Container>
                <BrandsList />
                <WorksTextWrapper>
                    <WorksTitle>How it works</WorksTitle>
                    <WorksSubs>Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</WorksSubs>
                </WorksTextWrapper>
                <WorksRect>
                <BenefitsList/>
                    <img height={359} width={545} src={ works} alt="Gray jeep"/>
                </WorksRect>
            </Container>
        </WorksSection>
    )
}

export default Works