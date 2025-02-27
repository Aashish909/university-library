import redis from "@/database/redis";
import { Ratelimit } from "@upstash/ratelimit"; 



const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1 m"),
  analytics: true,
 
  prefix: "@upstash/ratelimit",
});

export default ratelimit;

// const identifier = "api";
// const { success } = await ratelimit.limit(identifier);

// if (!success) {
//   return "Unable to process at this time";
// }
// doExpensiveCalculation();
// return "Here you go!";
