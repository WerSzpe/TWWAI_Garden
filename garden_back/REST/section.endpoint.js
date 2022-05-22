import { request } from 'express';
import business from '../business/business.container';
import applicationException from "../service/applicationException";
import auth from "../middleware/auth.js";

const sectionEndpoint = (router) => {
    //get
    router.get('/api/sections',auth, async (request, response, next) => {
        try {
            let result = await business.getSectionManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
    router.get('/api/sections/data',auth, async (request, response, next) => {
        try {
            let result = await business.getSectionManager().queryData();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
    //add
    router.post('/api/sections',auth, async (request, response, next) => {
        try {
            let result = await business.getSectionManager().add(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
    //delete
    router.delete('/api/sections/:id',auth, async(request, response, next) => {
        try {
            let result = await business.getSectionManager().remove(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};

export default sectionEndpoint;