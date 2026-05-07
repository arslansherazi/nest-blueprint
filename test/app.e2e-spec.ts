import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import request from 'supertest'
import { App } from 'supertest/types'
import { AppModule } from './../src/app.module'

// Validates end-to-end behavior of HTTP endpoints.
describe('AppController (e2e)', () => {
  let app: INestApplication<App>

  // Boots a fresh Nest application instance for each test.
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  // Confirms the root endpoint returns expected metadata.
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.body).toMatchObject({
          service: 'nest-blueprint',
          docs: '/docs',
          health: '/health',
        })
      })
  })

  // Confirms the health endpoint returns a healthy status.
  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect((res) => {
        expect(res.body).toMatchObject({
          status: 'ok',
        })
      })
  })

  // Tears down the Nest application after each test.
  afterEach(async () => {
    await app.close()
  })
})
