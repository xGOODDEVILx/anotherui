
import {  Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
title:"Button"  

};
export default meta

export const Primary: Story = {
  
    decorators: [
      () => (
            <Button/>
      ),
    ],
  };