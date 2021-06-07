import React, { forwardRef, useRef } from 'react'
import { CommonButtonProps } from './button-types'
import 'tailwindcss/tailwind.css'
export interface NativeButtonProps
  extends CommonButtonProps,
    React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const NativeButton = forwardRef<unknown, NativeButtonProps>(
  (
    {
      className,
      children,
      disabled = false,
      htmlType,
      icon,
      iconRight,
      loading = false,
      style,
      size = 'medium',
      type = 'default',
      ...rest
    },
    ref,
  ) => {
    const buttonRef = useRef(ref)

    return (
      <button
        className="bg-indigo-500"
        ref={buttonRef}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    )
  },
)
