require("dotenv").config();
import jwt, { SignOptions } from "jsonwebtoken";
import config from "config";

export const signJwt = (
  payload: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options: SignOptions
) => {
  return jwt.sign(payload, 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZ3d0RRWUpLb1pJaHZjTkFRRUJCUUFEU3dBd1NBSkJBSjdVblpyNUxpUGJxbDRENlo3VHVKK2NFMkI0Y3Fzbgp1M3lCWlB6NjZramQ4SU9URXY5TUpEdmhMQ05PczYyWHBZcmFZYU5HS3UrN3Q4YVVjcWNoRzJNQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==');
};

export const verifyJwt = <T>(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
): T | null => {
  try {
    
    const decoded = jwt.verify(
      token,
      'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZ3d0RRWUpLb1pJaHZjTkFRRUJCUUFEU3dBd1NBSkJBSjdVblpyNUxpUGJxbDRENlo3VHVKK2NFMkI0Y3Fzbgp1M3lCWlB6NjZramQ4SU9URXY5TUpEdmhMQ05PczYyWHBZcmFZYU5HS3UrN3Q4YVVjcWNoRzJNQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ=='
    ) as T;

    return decoded;
  } catch (error) {
    // console.log(error);
    return null;
  }
};