FROM node:21-alpine AS base
WORKDIR /app

FROM base AS build

RUN addgroup -S app && adduser -S app -G app
RUN chown -R app:app /app

COPY package.json pnpm-lock.yaml /app/
COPY src /app/src
COPY tsconfig.json /app/

RUN corepack enable
RUN pnpm fetch && pnpm install --frozen-lockfile --offline

RUN ["pnpm", "run", "build"]
RUN ["pnpm", "prune", "--prod"]

USER app
# Runtime stage
FROM base

COPY --from=build /app/dist /app
COPY --from=build /app/src/public /app/public
COPY --from=build /app/src/shared/assets /app/shared/assets
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules

CMD ["npm", "run", "start:prod"]