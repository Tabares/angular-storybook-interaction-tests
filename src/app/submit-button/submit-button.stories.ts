import type { Meta, StoryObj } from '@storybook/angular';
import { SubmitButtonComponent } from './submit-button.component';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SubmitButtonComponent> = {
  title: 'Example/SubmitButton',
  component: SubmitButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SubmitButtonComponent>;


export const Disabled: Story = {
  args: {
    buttonName: 'Disabled',
    isDisabled: true,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click submit button', async () => {
      const submitButton = canvas.getByTestId('standalone-submit-button');

      await expect(submitButton).toHaveProperty('disabled');
    });
  },
};

export const Sample: Story = {
  args: {
    buttonName: 'Sample',
    isDisabled: false,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click submit button', async () => {
      const submitButton = canvas.getByTestId('standalone-submit-button') as HTMLButtonElement;

      await expect(submitButton.disabled).toBe(false);
      await expect(submitButton.textContent).toBe('Sample');

      await userEvent.click(submitButton);

      await expect(submitButton.disabled).toBe(true);
    });
  },
};
