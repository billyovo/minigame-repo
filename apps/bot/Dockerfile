FROM ghcr.io/pnpm/pnpm:12 AS base
WORKDIR /app

RUN pnpm runtime set node 26 --global

FROM base AS build

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
COPY src /app/src
COPY tsconfig.json /app/

RUN pnpm fetch && pnpm install --frozen-lockfile --offline --force
RUN ["pnpm", "run", "build"]
RUN ["pnpm", "prune", "--prod"]

# Runtime stage
FROM base

COPY --from=build /app/dist /app
COPY --from=build /app/src/assets/images /app/assets/images
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules

CMD ["node", "index.js"]
