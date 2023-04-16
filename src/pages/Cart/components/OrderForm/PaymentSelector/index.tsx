import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentSelectorContainer, SelectorButton } from './styles'

interface Props {
  value?: 'credit' | 'debit' | 'money' | null
  onChange?: (value: 'credit' | 'debit' | 'money') => void
}

export function PaymentSelector({ value, onChange }: Props) {
  function handleChange(value: 'credit' | 'debit' | 'money') {
    onChange && onChange(value)
  }

  return (
    <PaymentSelectorContainer>
      <SelectorButton
        isSelected={value === 'credit'}
        onClick={() => handleChange('credit')}
      >
        <CreditCard size={16} />
        <span>Cartão de crédito</span>
      </SelectorButton>
      <SelectorButton
        isSelected={value === 'debit'}
        onClick={() => handleChange('debit')}
      >
        <Bank size={16} />
        <span>Cartão de débito</span>
      </SelectorButton>
      <SelectorButton
        isSelected={value === 'money'}
        onClick={() => handleChange('money')}
      >
        <Money size={16} />
        <span>Cartão de dinheiro</span>
      </SelectorButton>
    </PaymentSelectorContainer>
  )
}
