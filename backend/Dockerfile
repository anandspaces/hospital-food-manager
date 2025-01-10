# Backend Dockerfile

# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Expose the backend port (default for Express is 5000)
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
