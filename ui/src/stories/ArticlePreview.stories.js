import ArticlePreview from '@/components/ArticlePreview.vue';

export default {
  title: 'Components/ArticlePreview',
  component: ArticlePreview,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'title for the header',
    },
    subtitle: {
        control: 'text',
        description: 'subtitle for the header',
    },
    text: {
        control: 'text',
        description: 'text for the body',
    },
    link: {
        control: 'text',
        description: 'link for the article',
    }
  }
};

export const Default = {
  args: {
    id: "id",
    title: 'Flott tittel',
    subtitle: "Lengre forklarende teskt om hva dette er for noe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: 'https://vg.no'
  }
};

export const LONGTEXT = {
    args: {
        id: "id",
        title: 'Flott tittel',
        subtitle: "Lengre forklarende teskt om hva dette er for noe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: 'https://vg.no'
    }
};

export const NULLUNDERTITTEL     = {
    args: {
        id: "id",
        title: 'Flott tittel',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: 'https://vg.no'
    }
};

export const NOLINK = {
    args: {
        id: "id",
        title: 'Flott tittel',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
};
