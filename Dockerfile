FROM node:25-alpine AS build

COPY package.json package-lock.json tsconfig.json tsconfig.dev.json /app/
COPY src/ /app/src/

RUN chown -R node:node /app 

WORKDIR /app

RUN npm ci --no-audit --no-fund --no-color --quiet && npm run build

FROM node:25-alpine

ENV NODE_ENV=production

USER node

WORKDIR /app

COPY --from=build /app/build /app/package.json /app/package-lock.json /app/

RUN npm i --no-audit --no-fund --no-color --quiet && rm -rf package*.json

CMD ["node", "."]