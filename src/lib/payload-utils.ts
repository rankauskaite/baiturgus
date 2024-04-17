// Import necessary types and libraries
import { User } from "../payload-types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextRequest } from "next/server";

// Function to parse a token from a 'Bearer <token>' format
export const parseToken = (header: string): string => {
  return header.split(' ')[1];
};

// Function to format a user object into a 'name#id' format and validate presence of required properties
export const formatUser = (user: User): string => {
  if (!user.name || !user.id) {
    throw new Error("Invalid user data");
  }
  return `${user.name}#${user.id}`;
};

// Function to retrieve user data server-side based on a cookie token
export const getServerSideUser = async (
  cookies: NextRequest["cookies"] | ReadonlyRequestCookies
): Promise<{ user: User | null }> => {
  const token = cookies.get("payload-token")?.value;

  const meRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`
    }
  });

  const { user } = (await meRes.json()) as { user: User | null };
  return { user };
};
