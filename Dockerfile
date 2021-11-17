FROM node:14 as builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build:prod

FROM nginx:latest
COPY --from=builder /app/dist/todoKMS /usr/share/nginx/html