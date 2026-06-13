# kunstner

"kunstner", Is someone who's an artsy fartsy, preferably with a mustache.

### Backend
The backend is built with Spring Boot 3 and Java, using Gradle as build tool.
To start the development server locally, run:

```bash
./gradlew bootRun --args='--spring.profiles.active=local'
```
The backend will be available at `http://localhost:8080` as default.

### UI
The UI is built with Vite, Vue 3 and TailwindCSS.
To start the development server, run:
```bash
cd ui
npm run dev
```
The UI will be available at `http://localhost:5173/local` as default.
The production build is performed when running the gradle process `processResources`.
the msw (mock service worker) is only enabled when running in development.

## Useful Aliases

```bash
alias kunst="cd /path/to/kunstner"
alias doc-kunst="sudo docker compose -f /path/to/kunstner/compose.yaml"
alias g-kunst="gradle -p /path/to/kunstner"
alias kunstnpm="npm --prefix /path/to/kunstner/ui"
alias kunstdev="domnpm run build; domnpm run dev"
```
