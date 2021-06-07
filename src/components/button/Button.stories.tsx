import React from 'react'
import { Story, Meta } from '@storybook/react'

import { NativeButton, NativeButtonProps } from './NativeButton'

export default {
  title: 'Example/Button',
  component: NativeButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<NativeButtonProps> = (args) => <NativeButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Default Button',
  type: 'default',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Primary Button',
  type: 'primary',
}
