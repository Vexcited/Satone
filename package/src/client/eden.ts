import { treaty } from "@elysiajs/eden";

const origin: string =
  // @ts-expect-error
  typeof window !== "undefined" ? window.location.origin : undefined;

// @ts-expect-error : only defined in user's project, thanks to tsconfig.json
//                    and generated `.satone` files
export const client = (origin ? treaty<SatoneServerRoutes>(origin) : void 0)!;
