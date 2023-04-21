import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DropdownComponent> = {
  title: 'Example/Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Empty: Story = {
  args: {},
};

export const List: Story = {
  args: {
    options: ['Volvo', 'Mercedes', 'Audi', 'Saab'],
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const { options } = args;
    const [val1, val2, val3, val4] = options;

    await step('Select dropdown options', async () => {
      const dropdown = canvas.getByTestId('dropdown') as HTMLSelectElement;
      const option1 = canvas.getByText(val1) as HTMLOptionElement;
      const option3 = canvas.getByText(val3) as HTMLOptionElement;

      await expect(option1.selected).toBe(true);
      await expect(option3.selected).toBe(false);

      await userEvent.click(dropdown);
      await userEvent.selectOptions(dropdown, val2);
      await userEvent.selectOptions(dropdown, val1);
      await userEvent.selectOptions(dropdown, val4);
      await userEvent.selectOptions(dropdown, val3);

      await expect(option1.selected).toBe(false);
      await expect(option3.selected).toBe(true);
      await expect(dropdown.selectedIndex).toBe(2);
      await expect(dropdown.value).toBe('Audi');
    });
  },
};
