# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (assuming your app listens on port 3000)
EXPOSE 3000

# Command to run the app
CMD ["node", "app.mjs"]


