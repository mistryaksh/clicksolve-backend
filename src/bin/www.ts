import http from "http";
import app from "../index";
import { normalizePort } from "../utils";
import { configDotenv } from "dotenv";

configDotenv();

const port = normalizePort(process.env.PORT || 8080);
app.set("port", port);

const server = http.createServer(app);

const onError = (error: NodeJS.ErrnoException) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.info(`server connected on ${bind}`);
};

server.listen(port, "0.0.0.0" as any);
server.on("error", onError);
server.on("listening", onListening);
