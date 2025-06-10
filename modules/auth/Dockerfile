# Stage 1: Build the TypeScript application
FROM node:20-slim AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json from the local module directory
COPY package.json ./

# Install all dependencies (both regular and dev dependencies)
RUN yarn install --frozen-lockfile --production=false

# Copy TypeScript source code and tsconfig.json
COPY src ./src
COPY tsconfig.json .

# Build the TypeScript application
RUN yarn build

# Stage 2: Create the final production image
FROM node:20-slim

WORKDIR /app

# Copy only the compiled application and production node_modules from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV JWT_SECRET_KEY="super_secret_key_change_me_in_prod"
ENV ACCESS_TOKEN_EXPIRE_SECONDS="1800"

# Command to run the compiled application in production
CMD ["node", "dist/app.js"]
