import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async ({ db }) => {
    return await db.query("posts").collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    authorId: v.id("users"),
    createdAt: v.string(),
    likes: v.number(),
  },
  handler: async ({ db }, { title, content, authorId, createdAt, likes }) => {
    const postId = await db.insert("posts", {
      title,
      content,
      authorId,
      createdAt,
      likes,
    });
    return postId;
  },
});

export const getById = query({
  args: { id: v.id("posts") },
  handler: async ({ db }, { id }) => {
    return await db.get(id);
  },
});

export const getByAuthor = query({
  args: { authorId: v.id("users") },
  handler: async ({ db }, { authorId }) => {
    return await db
      .query("posts")
      .withIndex("by_author", (q) => q.eq("authorId", authorId))
      .collect();
  },
});
