# ---------- Build ----------
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# Las variables VITE_* se incrustan en el bundle durante el build.
ARG VITE_API_URL=""
ARG VITE_DEFAULT_TENANT="sgti"
ENV VITE_API_URL=$VITE_API_URL \
    VITE_DEFAULT_TENANT=$VITE_DEFAULT_TENANT

RUN npm run build

# ---------- Runtime ----------
FROM nginx:1.27-alpine AS runtime
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1
