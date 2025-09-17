# ---------- build stage ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build   # creates /app/dist

# ---------- run stage ----------
FROM node:20-alpine
WORKDIR /app

# Install a tiny static server that supports SPA fallback
RUN npm i -g serve

# Copy built files
COPY --from=build /app/dist ./dist

# Northflank typically sets PORT; default to 8080 if not present
ENV PORT=8080
EXPOSE 8080

# -s = single-page app fallback (React Router won't 404)
CMD ["serve", "-s", "dist", "-l", "8080"]
