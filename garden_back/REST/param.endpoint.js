import business from '../business/business.container';
import applicationException from "../service/applicationException";

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
    router.get('/api/params/:id', async(request, response, next) => {
      try{
        let result = await business.getParamManager().get(request.params.id);
        response.status(200).send(result);
      } catch (error) {
        applicationException.errorHandler(error, response);
      }
    })

};
export default paramEndpoint;