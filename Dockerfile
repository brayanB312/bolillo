# --- ETAPA 1: Construcción (Build) ---
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# --- ETAPA 2: Producción (Servidor Web) ---
FROM nginx:alpine

# 1. Copiamos los archivos de React
COPY --from=builder /app/dist /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]