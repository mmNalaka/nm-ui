import React, { forwardRef, useRef } from 'react'
import { ButtonTypes } from './types'

export interface NativeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonTypes
  ref?: any
}

export const NativeButton = forwardRef<unknown, NativeButtonProps>(
  ({ children, type, ...rest }, ref) => {
    const buttonRef = useRef(ref)

    return (
      <button ref={buttonRef} {...rest}>
        {children}
      </button>
    )
  },
)
