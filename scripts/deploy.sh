#!/bin/bash

# This script is intended for deploying the SaaScript application.

# Define variables
APP_NAME="saascript"
BUILD_DIR="./frontend/build"
DEPLOY_DIR="/var/www/html/$APP_NAME"

# Build the frontend application
echo "Building the frontend application..."
cd frontend
npm install
npm run build

# Deploy the build to the specified directory
echo "Deploying to $DEPLOY_DIR..."
if [ -d "$DEPLOY_DIR" ]; then
    rm -rf "$DEPLOY_DIR/*"
else
    mkdir -p "$DEPLOY_DIR"
fi

cp -r "$BUILD_DIR/"* "$DEPLOY_DIR/"

# Clean up
cd ..
echo "Deployment completed successfully."