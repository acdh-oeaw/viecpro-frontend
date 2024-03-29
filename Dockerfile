# syntax=docker/dockerfile:1
# # build
# FROM node:18-slim AS build

# RUN mkdir /app && chown -R node:node /app
# WORKDIR /app

# USER node


# COPY --chown=node:node . .
# # COPY --chown=node:node package.json package-lock.json .npmrc ./
# # COPY --chown=node:node tsconfig.json tailwind.config.cjs ./
# # COPY --chown=node:node vite.config.ts ./
# # COPY --chown=node:node index.html ./

# # #COPY --chown=node:node scripts ./scripts
# # #COPY --chown=node:node config ./config
# # #COPY --chown=node:node public ./public
# # COPY --chown=node:node src ./src

# RUN npm install --ci --no-audit --no-fund

# ENV NODE_ENV=production

# ARG VITE_APP_API_BASE_URL
# ARG VITE_APP_BASE_URL
# #ARG VITE_APP_MATOMO_BASE_URL
# #ARG VITE_APP_MATOMO_ID
# #ARG VITE_APP_REDMINE_ID

# #COPY --chown=node:node  . .
# RUN npm run build-only

# #serve
# # FROM node:18-slim AS serve

# # RUN mkdir /app && chown -R node:node /app
# # WORKDIR /app

# # USER node

# # COPY --from=build --chown=node:node /app/.dir  ./

# # ENV NODE_ENV=production


# EXPOSE 3000

# CMD ["npm", "run", "preview"]

# Use an official Node.js runtime as a parent image
FROM node:18

# default node 16 verwenden
# ARG APIS_API_KEY
# ARG TYPESENSE_API_KEY
# Set the working directory to /app
WORKDIR /app/

# SHELL ["/bin/bash", "-c"]

# Copy the package.json and package-lock.json files to the container
COPY package*.json /app

# Install dependencies
RUN npm install 
# RUN npm install  --ci --no-audit --no-fund

# Copy the rest of the application files to the container
COPY . /app



# TODO: exclude .env file here and construct it from build env args, if they start with "VITE_" and create the .env file from there
# Build the application with Vite
RUN npm run build-only
# npm run build-only
ENV NODE_ENV=production
# Expose port 3000 for the server to listen on
EXPOSE 3000

# Set the command to run when the container starts
CMD ["npm", "run", "preview"]