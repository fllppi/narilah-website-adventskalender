FROM docker.io/library/node:21.3.0-alpine as build

COPY website /app

WORKDIR /app

RUN npm i && npm run build

FROM docker.io/library/nginx:1.25.3-alpine-slim

COPY --from=build /app/dist /var/www/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
