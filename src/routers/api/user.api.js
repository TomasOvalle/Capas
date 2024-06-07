import CustomRouter from "../CustomRouter.js";
//import usersManager from "../../data/mongo/manager/UsersManager.mongo.js"
import { create, read, readOne, update, destroy } from "../../controllers/users.controller.js";

class UsersRouter extends CustomRouter {
    init() {
        this.create("/", ["USER"], create);
        this.read("/", ["USER"], read);
        this.read("/:uid", ["USER"], readOne);
        this.update("/:uid", ["USER"], update);
        this.destroy("/:uid", ["USER"], destroy);
    }
}

const usersRouter = new UsersRouter();
export default usersRouter.getRouter();

