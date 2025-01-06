import { z } from 'zod';
import { db } from '@/db/drizzle';
import { expenses } from '@/db/schema';
import { baseProcedure, createTRPCRouter } from '@/trpc/init';

export const appRouter = createTRPCRouter({
  getExpenses: baseProcedure.query(async () => {
    return db.select().from(expenses);
  }),
  createExpense: baseProcedure
    .input(
      z.object({
        description: z.string().min(1),
        amount: z.number().positive(),
      })
    )
    .mutation(async ({ input }) => {
      const newExpense = await db
        .insert(expenses)
        .values({
          description: input.description,
          amount: input.amount,
        })
        .returning();
      return newExpense[0];
    }),
});

export type AppRouter = typeof appRouter;
