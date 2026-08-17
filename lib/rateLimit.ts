type RateLimitRecord = {
  count: number;
  resetTime: number;
};

const tracker = new Map<string, RateLimitRecord>();

/**
 * Basic rate limiting helper (in-memory)
 * Default: Max 5 requests per 1 hour window per IP
 */
export function checkRateLimit(ip: string, limit = 5, windowMs = 60 * 60 * 1000): { isAllowed: boolean; remaining: number } {
  const now = Date.now();
  const record = tracker.get(ip);

  if (!record || now > record.resetTime) {
    tracker.set(ip, { count: 1, resetTime: now + windowMs });
    return { isAllowed: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { isAllowed: false, remaining: 0 };
  }

  record.count += 1;
  tracker.set(ip, record);
  return { isAllowed: true, remaining: limit - record.count };
}
