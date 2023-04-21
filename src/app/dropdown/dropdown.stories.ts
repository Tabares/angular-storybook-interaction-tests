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
      const dropdown = canvas.getByTestId('dropdown');
      const option1 = canvas.getByText(val1);

      await userEvent.click(dropdown);
      await userEvent.selectOptions(dropdown, val2);
      await userEvent.selectOptions(dropdown, val1);
      await userEvent.selectOptions(dropdown, val4);
      await userEvent.selectOptions(dropdown, val3);

      await expect(dropdown.textContent).toBe(' Volvo  Mercedes  Audi  Saab ');
      // expect(option1.select).toBe(true);
     // expect(canvas.getByRole('option', { name: val1 })).toHaveValue('');
    });
  },
};
