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
  useContainer,
} from "routing-controllers";
import { Request, Response } from "express";
import responseHandler from "../utils/responsehandler";
import { UserService } from "../service/user.services";
import Container, { Inject, Service } from "typedi";

@JsonController("/users")
@Service()
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(@Req() request: Request, @Res() response: Response) {
    const users = await this.userService.getAllUsers();
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

    const users = await this.userService.getOneUser(id);
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
    const users = await this.userService.CreateUser(user);
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
  async editUser(
    @Param("id") id: number,
    @Body() user: any,
    @Req() request: Request,
    @Res() response: Response
  ) {
    try {
      const result = await this.userService.updateUser(id, user);
      if (result.success) {
        return response
          .status(200)
          .json(
            responseHandler.success(result.data, result.message, result.code)
          );
      } else {
        return response
          .status(400)
          .json(responseHandler.error(result.code, result.message));
      }
    } catch (error) {
      return response
        .status(500)
        .json(responseHandler.error(500, "Internal server error"));
    }
  }

  @Delete("/:id")
  async removeUser(
    @Param("id") id: number,
    @Req() request: Request,
    @Res() response: Response
  ) {
    const user = await this.userService.deleteUser(id);
    console.log(user);
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
