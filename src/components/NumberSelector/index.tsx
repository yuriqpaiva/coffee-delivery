import { Minus, Plus } from '@phosphor-icons/react'
import {
  DecrementButton,
  IncrementButton,
  NumberSelectorContainer,
} from './styles'

interface Props {
  counter: number
  onChange: (type: 'increment' | 'decrement') => void
}

export function NumberSelector({ counter, onChange }: Props) {
  function handleChange(type: 'increment' | 'decrement') {
    onChange(type)
  }

  return (
    <NumberSelectorContainer>
      <IncrementButton type="button" onClick={() => handleChange('decrement')}>
        <Minus size={14} />
      </IncrementButton>
      <span>{counter}</span>
      <DecrementButton type="button" onClick={() => handleChange('increment')}>
        <Plus size={14} />
      </DecrementButton>
    </NumberSelectorContainer>
  )
}
