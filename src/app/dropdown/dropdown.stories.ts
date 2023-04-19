import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Example/Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Enable: Story = {
  args: {},
};
