import Service from "./service.js";
import cartsManager from "../data/mongo/manager/CartsManager.mongo.js";

const cartsService = new Service(cartsManager);
const { createService, readService, readOneService, updateService, destroyService, destroyAllService } = cartsService;
export { createService, readService, readOneService, updateService, destroyService, destroyAllService };