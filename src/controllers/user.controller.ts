import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
} from "routing-controllers";
import { Request, Response } from "express";
import responseHandler from "../utils/responsehandler";
import userService from "../service/user.services";


@JsonController("/users")
export class UserController {

  @Get()
  async getAll(@Req() request: Request, @Res() response: Response) {
    const users = await userService.getAllUsers();
    if (users.success) {
      return response
        .json(responseHandler.success(users.data, users.message, users.code))
        .status(200);
    } else {
      return response
        .json(responseHandler.error(users.code, users.message))
        .status(500);
    }
  }

  @Get("/:id")
  async getOne(
    @Param("id") id: number,
    @Req() request: Request,
    @Res() response: Response
  ) {
    console.log(id);

    const users = await userService.getOneUser(id);
    if (users.success) {
      return response
        .json(responseHandler.success(users.data, users.message, users.code))
        .status(200);
    } else {
      return response
        .json(responseHandler.error(users.code, users.message))
        .status(500);
    }
  }

  @Post()
  async postUser(
    @Body() user: any,
    @Req() request: Request,
    @Res() response: Response
  ) {
    const users = await userService.CreateUser(user);
    if (users.success) {
      return response
        .json(responseHandler.success(users.data, users.message, users.code))
        .status(200);
    } else {
      return response
        .json(responseHandler.error(users.code, users.message))
        .status(500);
    }
  }

  @Put("/:id")
  editUser(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/:id")
  async removeUser(
    @Param("id") id: number,
    @Req() request: Request,
    @Res() response: Response
  ) {
    const user = await userService.deleteUser(id);
    console.log(user)
    if (user.success) {
        return response
          .json(responseHandler.success(user.data, user.message, user.code))
          .status(200);
      } else {
        return response
          .json(responseHandler.error(user.code, user.message))
          .status(500);
      }
  }
}
