import ArticlePage from '@/components/ArticlePage.vue';
import articles from '@/mocks/articlePage.json' with {type: "json"};

export default {
  title: 'Components/ArticlePage',
  component: ArticlePage,
  tags: ['autodocs'],
  argTypes: {
    _embedded: {
      description: '_embedded elements',
    },
    _links: {
        description: 'links for the page of articles',
    },
    page: {
        description: 'page information',
    },
  }
};

export const Default = {
  args: {
      ...articles
  }
};
