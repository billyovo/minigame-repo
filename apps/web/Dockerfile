FROM node:22-alpine AS build
WORKDIR /app

COPY . /app/

RUN corepack enable
RUN corepack use pnpm@latest-10
RUN pnpm fetch && pnpm install --frozen-lockfile --offline --force

RUN ["pnpm", "run", "generate"]

FROM nginx/nginx-unprivileged:alpine-perl AS runtime

COPY --from=build /app/.output/public /usr/share/nginx/html
COPY --from=build /app/src/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
