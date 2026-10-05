import {http, HttpResponse} from 'msw'
import articles from '@/mocks/articlePage.json' with {type: "json"};

export const handlers = [
  // Intercepts requests to the backend
  http.post('/', async ({request}) => {
    return HttpResponse.json({status: "hello"});
  }),
  http.get('/actuator/health', () => {
    return HttpResponse.json({
      status: 'UP'
    })
  }),
  http.get("/articles", async ({request}) => {
    const page = new URL(request.url).searchParams.get("page");
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (page > 5) {
      return HttpResponse.error()
    }
    articles.page.number = page;
    return HttpResponse.json(articles)
  }),
]