import { http, HttpResponse } from 'msw'
import {faker} from '@faker-js/faker/locale/zh_CN'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://example.com/user', () => {
    console.log('https://example.com/user get request')

    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    })
  }),
]