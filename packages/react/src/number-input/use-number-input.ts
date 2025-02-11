import * as numberInput from '@zag-js/number-input'
import { normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'

export type UseNumberInputProps = Optional<numberInput.Context, 'id'> & {
  defaultValue?: numberInput.Context['value']
}

export const useNumberInput = (props: UseNumberInputProps) => {
  const getRootNode = useEnvironmentContext()
  const initialContext = {
    id: useId(),
    getRootNode,
    ...props,
    value: props.defaultValue,
  }

  const context = {
    ...initialContext,
    value: props.value,
  }

  const [state, send] = useMachine(numberInput.machine(initialContext), { context })
  return numberInput.connect(state, send, normalizeProps)
}

export type UseNumberInputReturn = ReturnType<typeof useNumberInput>
