import Logger from "./logger";

interface MessageParams {
  id: string;
  msg: string;
}

const logger = new Logger();

logger.on("message", ({ id, msg }) => {
  console.log(id, msg);
});

logger.log("Test the message");
