import { useCoffees } from '../../../../contexts/CoffeesContext'
import { SelectedCoffeeItem } from './SelectedCoffeeItem'
import {
  CoffeesWrapper,
  ContentWrapper,
  PurchaseSummary,
  SelectedCoffeesContainer,
  Title,
  PurchaseSummaryTextWrapper,
  PurchaseText,
  PurchaseTotalText,
  ConfirmButton,
} from './styles'
import { COFFEE_DELIVERY_TAX } from '../../../../constants'

export function SelectedCoffees() {
  const {
    selectedCoffees,
    totalCostWithDeliveryTax,
    totalCostWithoutDeliveryTax,
  } = useCoffees()

  const formattedTotalCostWithDeliveryTax =
    totalCostWithDeliveryTax.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

  const formattedTotalCostWithoutDeliveryTax =
    totalCostWithoutDeliveryTax.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

  const formattedDeliveryTax = COFFEE_DELIVERY_TAX.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <SelectedCoffeesContainer>
      <Title>Cafés selecionados</Title>
      <ContentWrapper>
        <CoffeesWrapper>
          {selectedCoffees.map((selectedCoffee) => (
            <SelectedCoffeeItem
              key={selectedCoffee.id}
              selectedCoffee={selectedCoffee}
            />
          ))}
        </CoffeesWrapper>
        <PurchaseSummary>
          <PurchaseSummaryTextWrapper>
            <PurchaseText>Total de itens</PurchaseText>
            <PurchaseText>{formattedTotalCostWithoutDeliveryTax}</PurchaseText>
          </PurchaseSummaryTextWrapper>
          <PurchaseSummaryTextWrapper>
            <PurchaseText>Entrega</PurchaseText>
            <PurchaseText>{formattedDeliveryTax}</PurchaseText>
          </PurchaseSummaryTextWrapper>
          <PurchaseSummaryTextWrapper>
            <PurchaseTotalText>Total</PurchaseTotalText>
            <PurchaseTotalText>
              {formattedTotalCostWithDeliveryTax}
            </PurchaseTotalText>
          </PurchaseSummaryTextWrapper>
        </PurchaseSummary>
        <ConfirmButton>Confirmar pedido</ConfirmButton>
      </ContentWrapper>
    </SelectedCoffeesContainer>
  )
}
