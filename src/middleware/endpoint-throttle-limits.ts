// A dictionary for setting endpoint specific rate limits
export const RATE_LIMITS: { [endpoint: string]: number } = {
  ['program']: 1000
};