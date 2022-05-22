import { request } from 'express';
import business from '../business/business.container';
import applicationException from "../service/applicationException";
import auth from "../middleware/auth.js";

const paramEndpoint = (router) => {
    // get
    router.get('/api/params', async (request, response, next) => {
        try {
            let result = await business.getParamManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
    // add
    router.post('/api/params', async (request, response, next) => {
      try {
        let result = await business.getParamManager().add(request.body);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    });
    //get section
    router.get('/api/params/:id',auth, async(request, response, next) => {
      try{
        let result = await business.getParamManager().getSection(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    });
//getlast
    router.get('/api/params/get-last-from-section', auth, async(request, response, next) => {
      try {
        let result = await business.getParamManager().getLast(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      };
    });


};
export default paramEndpoint;