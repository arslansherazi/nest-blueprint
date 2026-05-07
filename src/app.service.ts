import { Injectable } from '@nestjs/common'

// Registers the service for dependency injection across the app.
@Injectable()
export class AppService {
  // Builds the root payload with service-level metadata.
  getHome() {
    return {
      service: 'nest-blueprint',
      version: process.env.npm_package_version ?? '1.0.0',
      environment: process.env.NODE_ENV ?? 'development',
      docs: '/docs',
      health: '/health',
    }
  }

  // Produces a lightweight health status response.
  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    }
  }
}
