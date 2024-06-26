import Service from "./service.js";
import usersManager from "../data/mongo/manager/UsersManager.mongo.js";

const usersService = new Service(usersManager);
export const { createService, readService, readOneService, updateService, destroyService } = usersService;