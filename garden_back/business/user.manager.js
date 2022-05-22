import userDAO from '../DAO/userDAO';
import sha1 from "sha1";
import config from "../config.js"
import jwt from "jsonwebtoken";

import applicationException from "../service/applicationException";

function create() {
    async function auth(object) {
      const user = await userDAO.findByName(object.name);
      if(user && user.password === sha1(object.password)){

        const token = jwt.sign(
            {name: user.name},
            config.JwtSecret,
            {
              expiresIn: '3h'
            });

        return {token: token};
      }

      throw applicationException.new(applicationException.BAD_REQUEST, "Username or password incorrect")

    }


    return {
        auth: auth
    };
}

export default {
    create: create
};
