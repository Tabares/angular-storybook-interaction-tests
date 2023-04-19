import type { Meta, StoryObj } from '@storybook/angular';
import { NoticeComponent } from '../app/notice/notice.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
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

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Notice',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
