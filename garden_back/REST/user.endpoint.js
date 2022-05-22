import business from '../business/business.container.js';
import applicationException from "../service/applicationException";

const userEndpoint = (router) => {
    router.post('/api/login', async (request, response, next) => {
        try {
            const result = await business.getUserManager().auth(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};
export default userEndpoint;