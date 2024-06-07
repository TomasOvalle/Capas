import Service from "./service.js";
import productsManager from "../data/mongo/manager/ProductsManager.mongo.js";

const productsService = new Service(productsManager);
const { createService, readService, paginateService, readOneService, updateService, destroyService } = productsService;
export { createService, readService, paginateService, readOneService, updateService, destroyService };