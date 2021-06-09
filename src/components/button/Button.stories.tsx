import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MailIcon, ChevronRightIcon } from '@heroicons/react/outline'

import { NativeButton, NativeButtonProps } from './NativeButton'

export default {
  title: 'Example/Button',
  component: NativeButton,
} as Meta

const Template: Story<NativeButtonProps> = (args) => <NativeButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button',
  type: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  type: 'primary',
}

export const Block = Template.bind({})
Block.args = {
  children: 'Primary Button',
  type: 'primary',
  block: true,
}

export const Icon = Template.bind({})
Icon.args = {
  children: 'Primary Button',
  type: 'primary',
  icon: MailIcon,
  iconRight: ChevronRightIcon,
}
