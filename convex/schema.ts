import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    admin: v.boolean(),
    tokenIdentifier: v.string(),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_name", ["name"])
    .index("by_admin", ["admin"]),

  posts: defineTable({
    title: v.string(),
    content: v.string(),
    authorId: v.id("users"),
    createdAt: v.string(), // ISO 8601 date string
    likes: v.number(),
  })
    .index("by_author", ["authorId"])
    .index("by_date", ["createdAt"])
    .index("by_likes", ["likes"]),

  comments: defineTable({
    postId: v.id("posts"),
    authorId: v.id("users"),
    content: v.string(),
    createdAt: v.string(),
    likes: v.number(),
  })
    .index("by_post", ["postId"])
    .index("by_author", ["authorId"])
    .index("by_date", ["createdAt"])
    .index("by_likes", ["likes"]),

  replies: defineTable({
    commentId: v.id("comments"),
    authorId: v.id("users"),
    content: v.string(),
    createdAt: v.string(),
    likes: v.number(),
  })
    .index("by_comment", ["commentId"])
    .index("by_author", ["authorId"])
    .index("by_date", ["createdAt"])
    .index("by_likes", ["likes"]),
});
