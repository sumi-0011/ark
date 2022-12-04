import type { Assign } from '@polymorphic-factory/solid'
import * as rangeSlider from '@zag-js/range-slider'
import { normalizeProps, useMachine } from '@zag-js/solid'
import { createMemo, createUniqueId, mergeProps } from 'solid-js'
import type { Optional } from '../types'

export type UseRangeSliderProps = Assign<
  Omit<Optional<rangeSlider.Context, 'id'>, 'values'>,
  {
    value: rangeSlider.Context['values']
  }
>

export type UseRangeSliderReturn = ReturnType<typeof useRangeSlider>

export const useRangeSlider = (props: UseRangeSliderProps) => {
  const context = mergeProps({ id: createUniqueId(), values: props.value }, props)

  const [state, send] = useMachine(rangeSlider.machine(context), {
    context,
  })

  return createMemo(() => rangeSlider.connect(state, send, normalizeProps))
}