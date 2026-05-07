import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHome() {
    return {
      service: 'nest-blueprint',
      version: process.env.npm_package_version ?? '0.0.1',
      environment: process.env.NODE_ENV ?? 'development',
      docs: '/docs',
      health: '/health',
    }
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    }
  }
}
