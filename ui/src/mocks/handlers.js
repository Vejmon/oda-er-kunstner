import {http, HttpResponse} from 'msw'


export const handlers = [
  // Intercepts requests to the backend
  http.post('/', async ({request}) => {
    return HttpResponse.json({status: "hello"});
  }),
  http.get('/actuator/health', () => {
    return HttpResponse.json({
      status: 'UP'
    })
  })
]