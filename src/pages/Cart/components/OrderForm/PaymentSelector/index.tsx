import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentSelectorContainer, SelectorButton } from './styles'

interface Props {
  value?: 'credit' | 'debit' | 'cash' | null
  onChange?: (value: 'credit' | 'debit' | 'cash') => void
}

export function PaymentSelector({ value, onChange }: Props) {
  function handleChange(value: 'credit' | 'debit' | 'cash') {
    onChange && onChange(value)
  }

  return (
    <PaymentSelectorContainer>
      <SelectorButton
        type="button"
        isSelected={value === 'credit'}
        onClick={() => handleChange('credit')}
      >
        <CreditCard size={16} />
        <span>Cartão de crédito</span>
      </SelectorButton>
      <SelectorButton
        type="button"
        isSelected={value === 'debit'}
        onClick={() => handleChange('debit')}
      >
        <Bank size={16} />
        <span>Cartão de débito</span>
      </SelectorButton>
      <SelectorButton
        type="button"
        isSelected={value === 'cash'}
        onClick={() => handleChange('cash')}
      >
        <Money size={16} />
        <span>Dinheiro</span>
      </SelectorButton>
    </PaymentSelectorContainer>
  )
}
