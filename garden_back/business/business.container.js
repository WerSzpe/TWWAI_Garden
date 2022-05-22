'use strict';

import paramManager from './param.manager';
import sectionManager from './section.manager';
import userManager from './user.manager';


function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getParamManager: getter(paramManager),
    getSectionManager: getter(sectionManager),
    getUserManager: getter(userManager),
};