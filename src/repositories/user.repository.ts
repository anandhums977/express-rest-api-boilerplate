import { myDataSource } from "../app-data-source";
import { User } from "../entity/user.entity";

export const UserRepository = myDataSource.getRepository(User)