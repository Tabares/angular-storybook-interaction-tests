import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FormComponent } from './form.component';
import { userEvent, within } from '@storybook/testing-library';
import { ReactiveFormsModule } from '@angular/forms';
import { expect } from '@storybook/jest';
import { HtmlHTMLAttributes } from 'react';

const meta: Meta<FormComponent> = {
  title: 'Example/Form',
  component: FormComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
  render: (args: FormComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<FormComponent>;

export const Enable: Story = {
  args: {
    showLog: true,
  },
};

export const Disable: Story = {
  args: {
    showLog: false,
  },
};

export const Submitted: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId('submit') as HTMLButtonElement;
    const firstNameInput = canvas.getByTestId('first-name') as HTMLInputElement;

    await step('Enter user and address information', async () => {
      await expect(submitButton).toHaveProperty('type', 'submit');
      await expect(submitButton.disabled).toBe(true);

      await userEvent.click(canvas.getByTestId('first-name'));
      await userEvent.type(canvas.getByTestId('first-name'), 'John');
      await userEvent.type(canvas.getByTestId('last-name'), 'Wick');
      await userEvent.type(canvas.getByTestId('street'), '121 Mill Neck');
      await userEvent.type(canvas.getByTestId('city'), 'Long Island');
      await userEvent.type(canvas.getByTestId('state'), 'NY');
      await userEvent.type(canvas.getByTestId('zip'), '11765');

      await expect(submitButton.disabled).toBe(false);
    });

    await step('Add two aliases', async () => {
      await userEvent.type(canvas.getByTestId('alias'), 'Baba Yaga');
      await userEvent.click(canvas.getByTestId('add-alias'));

      const [alias1, alias2] = canvas.getAllByTestId('alias') as Array<HTMLInputElement>;

      await userEvent.type(alias2, 'Jonathan');

      await expect(alias1.value).toBe('Baba Yaga');
      await expect(alias2.value).toBe('Jonathan');
    });

    await step('Submit form', async () => {
      await expect(firstNameInput.value).toBe('John');

      await userEvent.click(submitButton);

      await expect(submitButton.disabled).toBe(false);
    });

    await step('Auto populate and submit', async () => {
      await expect(firstNameInput.value).toBe('John');

      await userEvent.click(canvas.getByTestId('auto-populate'));
      await userEvent.click(submitButton);

      await expect(firstNameInput.value).toBe('User');
    });
  },
  args: {
    showLog: true,
  },
};
