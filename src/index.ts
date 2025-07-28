import { Elysia } from 'elysia'

const app = new Elysia().post('/webhook', async ({ body }) => {
  console.log('Mensagem recebida!')
  console.log(JSON.stringify(body, null, 2))
  return { status: 'ok' }
})

app.listen({
  hostname: '0.0.0.0',
  port: 3000,
})
