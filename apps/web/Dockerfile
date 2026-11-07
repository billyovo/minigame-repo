FROM ghcr.io/pnpm/pnpm:12 AS build
WORKDIR /app

RUN pnpm runtime set node 26 --global

COPY . /app/

RUN pnpm fetch && pnpm install --frozen-lockfile --offline --force

RUN ["pnpm", "run", "generate"]

FROM nginx/nginx-unprivileged:alpine AS runtime

COPY --from=build /app/.output/public /usr/share/nginx/html
COPY --from=build /app/src/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
