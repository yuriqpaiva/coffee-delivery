import { Coffee, Cube, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  Benefit,
  BenefitIconWrapper,
  Benefits,
  ContentWrapper,
  IntroContainer,
  IntroTextWrapper,
} from './styles'
import coffeeBannerImg from '../../../../assets/coffee-banner.png'

export function Intro() {
  return (
    <IntroContainer>
      <ContentWrapper>
        <div>
          <IntroTextWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </IntroTextWrapper>
          <Benefits>
            <Benefit>
              <BenefitIconWrapper color="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </BenefitIconWrapper>
              <span>Compra simples e segura</span>
            </Benefit>
            <Benefit>
              <BenefitIconWrapper color="gray">
                <Cube size={16} weight="fill" />
              </BenefitIconWrapper>
              <span>Embalagem mantém o café intacto</span>
            </Benefit>
            <Benefit>
              <BenefitIconWrapper color="yellow">
                <Timer size={16} weight="fill" />
              </BenefitIconWrapper>
              <span>Entrega rápida e rastreada</span>
            </Benefit>
            <Benefit>
              <BenefitIconWrapper color="purple">
                <Coffee size={16} weight="fill" />
              </BenefitIconWrapper>
              <span>O café chega fresquinho até você</span>
            </Benefit>
          </Benefits>
        </div>

        <img src={coffeeBannerImg} alt="" />
      </ContentWrapper>
    </IntroContainer>
  )
}
