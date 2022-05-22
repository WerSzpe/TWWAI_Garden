import paramEndpoint from './param.endpoint';
import sectionEndpoint from './section.endpoint';
import userEndpoint from './user.endpoint';

const routes = function (app) {
    paramEndpoint(app);
    sectionEndpoint(app);
    userEndpoint(app);
};

export default routes;