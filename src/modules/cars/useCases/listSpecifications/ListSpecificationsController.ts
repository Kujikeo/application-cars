import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";


class ListSpecificationsController {

    
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

    handle(request: Request, response: Response): Response {
       return response.status(200).json(this.listSpecificationsUseCase.execute());   
    }

}

export {ListSpecificationsController}