import { server } from "./server/Server"

server.listen(3333, () => {
    console.info("✅ App rodando");
});