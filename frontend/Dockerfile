# Stage 1: Build the React app using Vite
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY frontend/ ./

# Build the React app
RUN npm run build

# Stage 2: Serve the built React app using Node.js
FROM node:18

# Set working directory
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app/dist /app/dist

# Install Express to serve static files
RUN npm install express

# Create a simple server to serve the Vite static files
COPY frontend/server.js /app/server.js

# Expose the port the app will run on
EXPOSE 3000

# Run the Express server
CMD ["node", "server.js"]
