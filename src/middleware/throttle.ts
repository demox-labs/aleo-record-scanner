import { redisDb } from './redisDb';
import { RATE_LIMITS }  from './endpoint-throttle-limits';

const maxNumberOfRequests = 200;
const timeWindow = 60; // 1 min

function getRequestLimit(endpointName: string) {
    return RATE_LIMITS[endpointName] ?? maxNumberOfRequests;
}

export async function rateLimitMiddleware(request: any, response: any, next: any) {
    if (request.path != '/' && request.path.indexOf('/aleo') != 0) {
        next();
        return;
    }

    const clientIp = request.headers["x-forwarded-for"] == undefined ? request.ip : request.headers["x-forwarded-for"];
    const key = `rate_limit:${clientIp}:${request.body.method}`;
    const current = await redisDb.get(key);

    const requestLimit = getRequestLimit(request.body.method);
    if (current && Number(current) >= requestLimit) {
        response.status(429).send("Too many requests, please try again later");
    } else {
        await redisDb.incr(key);
        const ttl = await redisDb.ttl(key);
        if (ttl > 0) {
            return next();
        }
        await redisDb.expire(key, timeWindow);
        return next();
    }
}