import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return service metadata', () => {
      expect(appController.getHome()).toMatchObject({
        service: 'nest-blueprint',
        docs: '/docs',
        health: '/health',
      })
    })
  })

  describe('health', () => {
    it('should return ok health status', () => {
      expect(appController.getHealth()).toMatchObject({
        status: 'ok',
      })
    })
  })
})
