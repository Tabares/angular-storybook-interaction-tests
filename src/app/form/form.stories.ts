import type { Meta, StoryObj } from '@storybook/angular';
import { FormComponent } from './form.component';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<FormComponent> = {
  title: 'Example/Form',
  component: FormComponent,
  tags: ['autodocs'],
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

    await step('Enter user and address', async () => {
      await userEvent.click(canvas.getByTestId('first-name'));
      await userEvent.type(canvas.getByTestId('first-name'), 'John');
      await userEvent.type(canvas.getByTestId('last-name'), 'Wick');
      await userEvent.type(canvas.getByTestId('street'), '121 Mill Neck');
      await userEvent.type(canvas.getByTestId('city'), 'Long Island');
      await userEvent.type(canvas.getByTestId('state'), 'NY');
      await userEvent.type(canvas.getByTestId('zip'), '11765');
    });

    await step('Enter two alias', async () => {
      await userEvent.type(canvas.getByTestId('alias'), 'Baba Yaga');
      await userEvent.click(canvas.getByTestId('add-alias'));

      const [, alias2] = canvas.getAllByTestId('alias');

      await userEvent.type(alias2, 'Jonathan');
    });

    await step('Submit form', async () => {
      await userEvent.click(canvas.getByTestId('submit'));
    });

    // await step('Auto populate and submit', async () => {
    //   await userEvent.click(canvas.getByTestId('auto-populate'));
    //  // await userEvent.click(canvas.getByTestId('submit'));
    // });
  },
  args: {
    showLog: true,
  },
};
