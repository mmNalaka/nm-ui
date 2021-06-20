import React, { forwardRef, useRef } from 'react'
import classNames from 'classnames'

import { ButtonSizes, ButtonTypes, CommonButtonProps } from './button-types'
import { joinStrings } from '../../utils/helpers'
export interface NativeButtonProps
  extends CommonButtonProps,
    React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type StyleClasses = {
  default: string[]
  size: {
    [key in ButtonSizes]: string
  }
  iconSize: {
    [key in ButtonSizes]: string
  }
  type: {
    [key in ButtonTypes]: string[]
  }
}

const styleClasses: StyleClasses = {
  default: [
    'relative cursor-pointer',
    'inline-flex items-center space-x-2 text-center',
    'transition ease-out duration-200',
    'border border-solid border-transparent outline-none',
  ],
  size: {
    tiny: 'text-xs px-2 py-1 rounded-sm',
    small: 'text-sm px-3 py-2 leading-4 rounded-sm',
    medium: 'text-sm px-4 py-2 rounded-sm',
    large: 'text-base px-4 py-2 rounded-md',
    xlarge: 'text-lg px-6 py-3 rounded-md',
  },
  iconSize: {
    tiny: 'h-3 mr-2 ml-1',
    small: 'h-3.5 mr-3 ml-1',
    medium: 'h-4 mr-3 ml-1',
    large: 'h-5 mr-3 ml-2',
    xlarge: 'h-5 mr-3 ml-2',
  },
  type: {
    default: ['font-medium text-white bg-default-500', 'hover:bg-default-600'],
    primary: ['font-medium text-white bg-primary-500', 'hover:bg-primary-600'],
    secondary: [],
    outline: [
      'font-medium text-primary-500 bg-transparent border-primary-500',
      'hover:bg-primary-600 hover:text-white',
    ],
    link: [],
    text: [],
    dashed: [
      'font-medium border text-gray-500 bg-transparent border-gray-200 border-dashed',
      'hover:text-gray-600 hover:border-gray-600',
    ],
  },
}

export const NativeButton = forwardRef<unknown, NativeButtonProps>(
  (
    {
      block = false,
      className,
      children,
      disabled = false,
      htmlType,
      icon: Icon,
      iconRight: IconRight,
      loading = false,
      size = 'medium',
      type = 'default',
      ...rest
    },
    ref,
  ) => {
    const buttonRef = useRef(ref)

    const buttonClasses: string[] = [joinStrings(styleClasses.default)]

    buttonClasses.push(styleClasses.size[size])
    buttonClasses.push(joinStrings(styleClasses.type[type]))

    if (block) {
      buttonClasses.push('w-full flex items-center justify-center')
    }

    if (disabled) {
      buttonClasses.push('opacity-75 cursor-not-allowed')
    }

    return (
      <button
        className={classNames(className, joinStrings(buttonClasses))}
        ref={buttonRef}
        disabled={disabled}
        {...rest}
      >
        {Icon && <Icon className={styleClasses.iconSize[size]} />}
        {children}
        {IconRight && <IconRight className={styleClasses.iconSize[size]} />}
      </button>
    )
  },
)
