import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MailIcon, ChevronRightIcon } from '@heroicons/react/outline'

import { NativeButton, NativeButtonProps } from './index'

export default {
  title: 'Example/Button',
  component: NativeButton,
} as Meta

const Template: Story<NativeButtonProps> = (args) => <NativeButton {...args} />

const AllSizeTemplate: Story<{ type: string }> = ({ type }) => (
  <>
    <br />
    <NativeButton size="tiny" type={type as any} className="mr-2">
      Tiny Button
    </NativeButton>
    <NativeButton size="small" type={type as any} className="mr-2">
      Small Button
    </NativeButton>
    <NativeButton size="medium" type={type as any} className="mr-2">
      Medium Button
    </NativeButton>
    <NativeButton size="large" type={type as any} className="mr-2">
      Large Button
    </NativeButton>
    <NativeButton size="xlarge" type={type as any} className="mr-2">
      Extra Large Button
    </NativeButton>
    <br />
  </>
)

export const All = () => (
  <>
    <AllSizeTemplate type="default" />
    <AllSizeTemplate type="primary" />
    <AllSizeTemplate type="dashed" />
    <AllSizeTemplate type="outline" />
  </>
)

export const Default = AllSizeTemplate.bind({})
Default.args = {
  type: 'default',
}

export const Primary = AllSizeTemplate.bind({})
Primary.args = {
  type: 'primary',
}

export const Dashed = AllSizeTemplate.bind({})
Dashed.args = {
  type: 'dashed',
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
