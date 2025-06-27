import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async ({ db }) => {
    return await db.query("replies").collect();
  },
});

export const create = mutation({
  args: {
    commentId: v.id("comments"),
    authorId: v.id("users"),
    content: v.string(),
    createdAt: v.string(),
    likes: v.number(),
  },
  handler: async (
    { db },
    { commentId, authorId, content, createdAt, likes },
  ) => {
    const replyId = await db.insert("replies", {
      commentId,
      authorId,
      content,
      createdAt,
      likes,
    });
    return replyId;
  },
});

export const getById = query({
  args: { id: v.id("replies") },
  handler: async ({ db }, { id }) => {
    return await db.get(id);
  },
});

export const getByComment = query({
  args: { commentId: v.id("comments") },
  handler: async ({ db }, { commentId }) => {
    return await db
      .query("replies")
      .withIndex("by_comment", (q) => q.eq("commentId", commentId))
      .collect();
  },
});
