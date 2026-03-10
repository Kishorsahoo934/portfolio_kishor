# Portfolio Docker Deployment Guide

## Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

## Building the Docker Image

### Option 1: Using Docker Compose (Recommended)
```bash
docker-compose up --build
```
This will build and run the application on `http://localhost:3000`

To stop the container:
```bash
docker-compose down
```

### Option 2: Using Docker CLI
```bash
# Build the image
docker build -t portfolio:latest .

# Run the container
docker run -p 3000:3000 --name portfolio-app portfolio:latest
```

To stop the container:
```bash
docker stop portfolio-app
docker rm portfolio-app
```

## Project Details

- **Framework**: React + Vite + TypeScript
- **Port**: 3000 (configurable)
- **Node Version**: 20 Alpine (lightweight)
- **Build Strategy**: Multi-stage build for optimized image size

## Image Layers

1. **Builder Stage**: Installs dependencies and builds the React app
2. **Production Stage**: Only copies the built dist folder, uses `serve` to run the app

## Deployment Options

### Vercel (Recommended for this project)
```bash
npm install -g vercel
vercel
```

### Azure App Service
```bash
az containerapp up --name portfolio-app --source .
```

### AWS ECS
Push to ECR and deploy using AWS ECS/Fargate

### Docker Hub
```bash
docker tag portfolio:latest yourusername/portfolio:latest
docker push yourusername/portfolio:latest
```

## Environment Variables
Currently, no environment variables are required. If needed, add them to the `docker-compose.yml` file.

## Health Check
The container includes a health check that runs every 30 seconds to ensure the application is responding correctly.

## Optimization Notes
- Uses Alpine Linux for a minimal image size (~150MB)
- Multi-stage build reduces final image size
- The `.dockerignore` file excludes unnecessary files during build
- Production uses `serve` to efficiently serve static files

## Troubleshooting

**Port already in use:**
```bash
docker run -p 3001:3000 portfolio:latest
```

**View container logs:**
```bash
docker logs portfolio-app
```

**Interactive shell in container:**
```bash
docker exec -it portfolio-app sh
```
