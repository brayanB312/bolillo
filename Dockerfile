# --- ETAPA 1: Construcción (Build) ---
# Usamos una imagen ligera de Node.js
FROM node:18-alpine as builder

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo los archivos de dependencias primero (para aprovechar el caché de Docker)
COPY package.json package-lock.json* ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código de tu proyecto
COPY . .

# Compilamos la aplicación de React con Vite (esto generará la carpeta 'dist')
RUN npm run build


# --- ETAPA 2: Producción (Servidor Web) ---
# Usamos Nginx, un servidor web extremadamente rápido y ligero
FROM nginx:alpine

# Copiamos los archivos estáticos compilados de la Etapa 1 a la carpeta pública de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opcional pero recomendado) Configuramos Nginx para que soporte React Router
# Esto evita el error 404 al recargar páginas que no sean el inicio (/)
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

# Exponemos el puerto 80 (el puerto web estándar)
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]