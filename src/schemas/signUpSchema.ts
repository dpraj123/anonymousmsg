import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character"),
  email: z.string().email({ message: "Invalid email address" }),
  Password: z.string().min(6, "Password must be 6 character"),
});
