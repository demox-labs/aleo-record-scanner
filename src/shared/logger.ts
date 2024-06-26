import { createLogger, transports, format } from "winston";
import WinstonCloudwatch from "winston-cloudwatch";

const consoleTransport = new transports.Console({
  format: format.combine(
    format.errors({ stack: true }),
    format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
    format.timestamp(),
    format.printf((info) => {
      const { timestamp, level, message } = info;
      if (info.metadata && Object.keys(info.metadata).length !== 0) {
        return `[${timestamp}] ${level}: ${message} ${JSON.stringify(info.metadata)}`;
      }
      return `[${timestamp}] ${level}: ${message}`;
    })
  )
});

const logger = createLogger({
  transports: [consoleTransport]
});

// Don't use cloudwatch transport locally
if (!process.env.LOG_GROUP_NAME.startsWith("local")) {
  const winstonCW = new WinstonCloudwatch({
    awsOptions: {
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY
      },
      region: process.env.AWS_REGION
    },
    logGroupName: process.env.LOG_GROUP_NAME,
    logStreamName: process.env.LOG_STREAM_NAME,
    messageFormatter: (logObject) => {
      return {
        ...logObject,
        ...logObject.meta
      }
    },
    jsonMessage: true,
    name: "cloudwatch-sync",
    uploadRate: 200
  });
  logger.add(winstonCW);
}

export default logger;
