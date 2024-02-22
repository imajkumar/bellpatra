import { NextFunction, Request, Response } from "express";
import { updateUser } from "../../services/userService";
export const getMeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    res.status(200).status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateUserHandler = async (
  req: Request<{}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { role } = req.body;
    const user = res.locals.user;
    const userS = await updateUser(user.id,role);

    res.status(202).json({
      status: "success",
      data: {
        userS,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
