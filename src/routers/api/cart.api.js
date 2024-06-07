import CustomRouter from "../CustomRouter.js";
//import cartsManager from "../../data/mongo/manager/CartsManager.mongo.js";
import { create, read, readOne, update, destroy, destroyAll } from "../../controllers/carts.controller.js";

class CartsRouter extends CustomRouter {
    init() {
        this.create("/", ["USER"], create);
        this.read("/", ["USER"], read);
        this.read("/:uid", ["USER"], readOne);
        this.update("/:uid", ["USER"], update);
        this.destroy("/:uid", ["USER"], destroy);
        this.destroy("/all/:user_id", ["USER"], destroyAll);
    }
}

const cartsRouter = new CartsRouter();
export default cartsRouter.getRouter();


