import { pgTable, serial, text, numeric, integer } from 'drizzle-orm/pg-core';

export const expenses = pgTable('expenses', {
  id: serial('id').primaryKey(),
  description: text('description').notNull(),
  amount: numeric('amount', { precision: 10, scale: 2 })
    .notNull()
    .$type<number>(),
  categoryId: integer('category_id')
    .references(() => categories.id)
    .notNull(),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
});
