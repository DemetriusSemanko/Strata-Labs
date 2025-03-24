# Use the official Node.js image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire backend app into the container
COPY . .

# Expose port 5000 for the app
EXPOSE 5000

# Command to run the app
CMD ["npm", "start"]
