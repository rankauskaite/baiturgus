import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../trpc/index";

type ValidateAppRouter<T> = T extends Record<string, unknown>
  ? AppRouter
  : never;

export const trpc = createTRPCReact<ValidateAppRouter<AppRouter>>({});
