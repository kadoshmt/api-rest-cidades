import { server } from './server/Server';

server.listen(process.env.PORT || 3333, () => {
  console.info(`✅ App rodando na porta ${process.env.PORT}`);
});
