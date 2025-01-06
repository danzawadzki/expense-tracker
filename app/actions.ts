'use server';

import { appRouter } from '@/server/routers';
import { createCallerFactory } from '@/trpc/init';

export async function getServerExpenses() {
  const caller = createCallerFactory(appRouter)({});
  return await caller.getExpenses();
}
