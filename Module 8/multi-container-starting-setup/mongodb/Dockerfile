# Use the official MongoDB Docker image from Docker Hub
FROM mongo:latest

# Copy the initialization script into the container
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Make the initialization script executable (if needed)
RUN chmod +x /docker-entrypoint-initdb.d/init-mongo.js