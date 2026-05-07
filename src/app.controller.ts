import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

// Exposes HTTP endpoints backed by the application service.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Maps the root route to service metadata.
  @Get()
  getHome() {
    return this.appService.getHome()
  }

  // Maps the health route to liveness details.
  @Get('health')
  getHealth() {
    return this.appService.getHealth()
  }
}
