import Header from '@/components/Header.vue';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    to: {
      control: 'text',
      description: 'Link destination for the logo',
      table: {
        defaultValue: { summary: '/' }
      }
    }
  }
};

export const Default = {
  args: {
    to: '/'
  }
};

export const CustomLink = {
  args: {
    to: '/gallery'
  }
};