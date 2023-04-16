import { Wrapper } from '@/components/Wrapper'
import {
  ConfirmedOrderContainer,
  ContentWrapper,
  OrderHeader,
  OrderIconWrapper,
  OrderInfoContainer,
  OrderInfoText,
  OrderInfoItem,
  Subtitle,
  Title,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import confirmedOrderImg from '@/assets/confirmed-order.png'

export function ConfirmedOrder() {
  return (
    <Wrapper>
      <ConfirmedOrderContainer>
        <ContentWrapper>
          <OrderHeader>
            <Title>Uhu! Pedido confirmado</Title>
            <Subtitle>
              Agora é só aguardar que logo o café chegará até você
            </Subtitle>
          </OrderHeader>
          <OrderInfoContainer>
            <OrderInfoItem>
              <OrderIconWrapper wrapperColor="purple">
                <MapPin size={16} weight="fill" />
              </OrderIconWrapper>
              <OrderInfoText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                Farrapos - Porto Alegre, RS
              </OrderInfoText>
            </OrderInfoItem>

            <OrderInfoItem>
              <OrderIconWrapper wrapperColor="yellow">
                <Timer size={16} weight="fill" />
              </OrderIconWrapper>
              <OrderInfoText breakLineOnStrong>
                Previsão de entrega
                <strong>20 min - 30 min</strong>
              </OrderInfoText>
            </OrderInfoItem>

            <OrderInfoItem>
              <OrderIconWrapper wrapperColor="yellow-dark">
                <CurrencyDollar size={16} />
              </OrderIconWrapper>
              <OrderInfoText breakLineOnStrong>
                Pagamento na entrega
                <strong>Cartão de Crédito</strong>
              </OrderInfoText>
            </OrderInfoItem>
          </OrderInfoContainer>
        </ContentWrapper>
        <img src={confirmedOrderImg} alt="" />
      </ConfirmedOrderContainer>
    </Wrapper>
  )
}
