import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

// Verifies controller behavior against the app service contract.
describe('AppController', () => {
  let appController: AppController

  // Creates a fresh testing module before each test case.
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  // Groups tests for the root endpoint behavior.
  describe('root', () => {
    it('should return service metadata', () => {
      expect(appController.getHome()).toMatchObject({
        service: 'nest-blueprint',
        docs: '/docs',
        health: '/health',
      })
    })
  })

  // Groups tests for health endpoint behavior.
  describe('health', () => {
    it('should return ok health status', () => {
      expect(appController.getHealth()).toMatchObject({
        status: 'ok',
      })
    })
  })
})
