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
  }),
  http.get('/nyheter', () => {
    return HttpResponse.json(
      [
        {
          id: "id1",
          title: 'Lang tekst',
          subtitle: "Lengre forklarende teskt om hva dette er for noe",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: 'https://vg.no'
        },
        {
          id: "id2",
          title: 'Kort tekst',
          subtitle: "Lengre forklarende teskt om hva dette er for noe",
          text: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
          link: 'https://vg.no'
        },
        {
          id: "id3",
          title: 'uten lenke og subtittel',
          text: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        }

      ])
  })
]