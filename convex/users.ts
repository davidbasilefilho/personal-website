import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async ({ db }) => {
    return await db.query("users").collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    admin: v.boolean(),
  },
  handler: async ({ db, auth }, { name, admin }) => {
    const userIdentity = await auth.getUserIdentity();
    if (!userIdentity) {
      throw new Error("Not authenticated");
    }

    const userId = await db.insert("users", {
      name,
      tokenIdentifier: userIdentity.tokenIdentifier,
      admin,
    });
    return userId;
  },
});

export const update = mutation({
  args: {
    id: v.id("users"),
    name: v.string(),
    admin: v.boolean(),
  },
  handler: async ({ db }, { id, name, admin }) => {
    await db.patch(id, { name, admin });
    return id;
  },
});

export const remove = mutation({
  args: { id: v.id("users") },
  handler: async ({ db }, { id }) => {
    const user = await db.get(id);
    if (!user) {
      throw new Error("User not found");
    }
    db.delete(id);
  },
});

export const getById = query({
  args: { id: v.id("users") },
  handler: async ({ db }, { id }) => {
    return await db.get(id);
  },
});

export const getByTokenIdentifier = query({
  args: { tokenIdentifier: v.string() },
  handler: async ({ db }, { tokenIdentifier }) => {
    return await db
      .query("users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", tokenIdentifier))
      .unique();
  },
});
