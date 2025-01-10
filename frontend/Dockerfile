# Stage 1: Build the React app
FROM node:18 as build

WORKDIR /app

# Install dependencies and build the app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Serve the built React app
FROM node:18

WORKDIR /app

# Install `serve` to serve the static files
RUN npm install -g serve

# Copy the built files from the build stage
COPY --from=build /app/dist /app

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
