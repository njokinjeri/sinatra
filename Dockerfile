# Use Official Nginx image
FROM nginx:alpine

# Copy static files to Nginx default public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

