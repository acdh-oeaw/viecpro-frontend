# syntax=docker/dockerfile:1

# # build
FROM node:18-slim AS build

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node

COPY --chown=node:node .npmrc package.json package-lock.json ./
COPY --chown=node:node env.d.ts index.html tailwind.config.cjs tsconfig.json vite.config.ts ./
COPY --chown=node:node public ./public
COPY --chown=node:node src ./src

ARG VITE_APIS_API_URL
ARG VITE_APIS_API_AUTHORIZATION
ARG VITE_APIS_PROJECT_NAME
ARG VITE_TYPESENSE_API_KEY
ARG VITE_TYPESENSE_PORT
ARG VITE_TYPESENSE_PROTOCOL
ARG VITE_TYPESENSE_HOST
ARG VITE_TYPESENSE_COLLECTION_PREFIX

RUN npm install --ci

ENV NODE_ENV=production

RUN npm run build

#serve
FROM caddy:2-alpine AS serve

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

EXPOSE 3000
