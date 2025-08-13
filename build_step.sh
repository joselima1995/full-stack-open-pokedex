#!/bin/bash
echo "Running custom build step..."

# Install dependencies for client and build it
cd client
npm install
npm run build
cd ..

# Install dependencies for server
cd server
npm install
cd ..
