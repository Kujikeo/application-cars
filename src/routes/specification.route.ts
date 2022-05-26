import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRoute = Router();


specificationRoute.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationRoute.get("/", (request, response) => {
    const listSpecifications = listSpecificationsController.handle(request, response);
    return response.status(201).json(listSpecifications);
});

export { specificationRoute}