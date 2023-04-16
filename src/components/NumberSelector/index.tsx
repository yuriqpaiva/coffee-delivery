import { Minus, Plus } from '@phosphor-icons/react'
import {
  DecrementButton,
  IncrementButton,
  NumberSelectorContainer,
} from './styles'

export function NumberSelector() {
  return (
    <NumberSelectorContainer>
      <IncrementButton type="button">
        <Minus size={14} />
      </IncrementButton>
      <span>1</span>
      <DecrementButton type="button">
        <Plus size={14} />
      </DecrementButton>
    </NumberSelectorContainer>
  )
}
