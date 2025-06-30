import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  handler: async ({ db }) => {
    return await db.query("comments").collect();
  },
});

export const create = mutation({
  args: {
    postId: v.id("posts"),
    authorId: v.id("users"),
    content: v.string(),
    createdAt: v.string(),
    likes: v.number(),
  },
  handler: async ({ db }, { postId, authorId, content, createdAt, likes }) => {
    const commentId = await db.insert("comments", {
      postId,
      authorId,
      content,
      createdAt,
      likes,
    });
    return commentId;
  },
});

export const getById = query({
  args: { id: v.id("comments") },
  handler: async ({ db }, { id }) => {
    return await db.get(id);
  },
});

export const getByPost = query({
  args: { postId: v.id("posts") },
  handler: async ({ db }, { postId }) => {
    return await db
      .query("comments")
      .withIndex("by_post", (q) => q.eq("postId", postId))
      .collect();
  },
});
