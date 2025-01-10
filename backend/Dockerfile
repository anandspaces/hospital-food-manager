# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY backend/package*.json ./

# Install backend dependencies (Use npm ci for reproducible builds)
RUN npm install

# Copy all the backend source code to the container
COPY . .

# Expose the backend port (default for Express is 5000)
EXPOSE 5000

# Set the correct entry point to app.js
CMD ["node", "src/app.js"]
