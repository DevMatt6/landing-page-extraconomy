# ===== BUILD =====
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ===== PRODUÇÃO =====
FROM nginx:alpine

# Remove config default
RUN rm /etc/nginx/conf.d/default.conf

# Copia config SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia arquivos buildados
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
