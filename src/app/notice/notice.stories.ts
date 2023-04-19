import type { Meta, StoryObj } from '@storybook/angular';
import { NoticeComponent } from './notice.component';

const meta: Meta<NoticeComponent> = {
  title: 'Example/Notice',
  component: NoticeComponent,
  tags: ['autodocs'],
  render: (args: NoticeComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<NoticeComponent>;

export const Enable: Story = {
  args: {
    primary: true,
  },
};

export const Disable: Story = {
  args: {
    primary: false,
  },
};
