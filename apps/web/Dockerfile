FROM node:21-alpine AS build
WORKDIR /app

COPY . /app/

RUN corepack enable
RUN pnpm fetch && pnpm install --frozen-lockfile --offline

RUN ["pnpm", "run", "generate"]

FROM nginxinc/nginx-unprivileged:stable-alpine-slim AS runtime

COPY --from=build /app/.output/public /usr/share/nginx/html
COPY --from=build /app/src/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
