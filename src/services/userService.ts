import config from "config";
import { DeepPartial } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../utils/data-source";
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { string } from "zod";

const userRepository = AppDataSource.getRepository(User);
export const createUser = async (input: DeepPartial<User>) => {
  return userRepository.save(userRepository.create(input));
};
export const findUserByEmail = async ({ email }: { email: string }) => {
  return await userRepository.findOneBy({ email });
};

export const findUserById = async (userId: string) => {
  return await userRepository.findOneBy({ id: userId });
};

export const findUser = async (query: Object) => {
  return await userRepository.findOneBy(query);
};
export const updateUser = async (userId: string,role:string) => {

  const user = await userRepository.findOneBy({id:userId});

  if (!user) {
    throw new Error('User not found');
  }

  // Update the name
  user.name = role;
  // Save the updated user
  await userRepository.save(user);
  
};


export const signTokens = async (user: User) => {
  // 1. Create Session
  redisClient.set(user.id, JSON.stringify(user), {
    EX: config.get<number>('redisCacheExpiresIn') * 60,
  });

  // 2. Create Access and Refresh tokens
  const access_token = signJwt({ sub: user.id }, 'accessTokenPrivateKey', {
    expiresIn: `${config.get<number>('accessTokenExpiresIn')}m`,
  });

  const refresh_token = signJwt({ sub: user.id }, 'refreshTokenPrivateKey', {
    expiresIn: `${config.get<number>('refreshTokenExpiresIn')}m`,
  });

  return { access_token, refresh_token };
};