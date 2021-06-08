export type ButtonTypes =
  | 'primary'
  | 'default'
  | 'secondary'
  | 'outline'
  | 'dashed'
  | 'link'
  | 'text'

export type ButtonSizes = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'

export type CommonButtonProps = {
  block?: boolean
  className?: string
  icon: React.ElementType<any>
  iconRight?: React.ReactNode
  loading?: boolean
  ref?: any
  size?: ButtonSizes
  style?: React.CSSProperties
  shadow?: boolean
  type?: ButtonTypes
}
