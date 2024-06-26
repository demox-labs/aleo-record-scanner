import { redisDb } from '../middleware/redisDb';
import { getHeight, getLastRecordId } from './db-queries';

export const getHeightCached = async (): Promise<number> => { 
  const key = `query:getHeight`;
  const timeout = 15; // 15 seconds
  const current = await redisDb.get(key);

  if (current) {
    return Number(current);
  } else {
    const height = await getHeight();
    await redisDb.set(key, height);
    await redisDb.expire(key, timeout);
    return height;
  }
}

export const getLastIdCached = async (): Promise<number> => { 
  const key = `query:getLastRecordId`;
  const timeout = 15; // 15 seconds
  const current = await redisDb.get(key);

  if (current) {
    return Number(current);
  } else {
    const id = await getLastRecordId();
    await redisDb.set(key, id);
    await redisDb.expire(key, timeout);
    return id;
  }
}