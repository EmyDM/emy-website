import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const inquiries=sqliteTable('inquiries',{id:text('id').primaryKey(),name:text('name').notNull(),email:text('email').notNull(),organization:text('organization'),message:text('message').notNull(),createdAt:text('created_at').notNull(),status:text('status').notNull().default('new')});
export const content=sqliteTable('content',{key:text('key').primaryKey(),draft:text('draft').notNull(),published:text('published').notNull(),updatedAt:text('updated_at').notNull()});
