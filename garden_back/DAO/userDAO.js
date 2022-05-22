import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const userSchema = new mongoose.Schema({
    name: {type: String},
    password: {type: String}
}, {
    collection: 'User'
});
userSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('User', userSchema);

//find user
async function findByName(name) {
    const result = await UserModel.findOne({name:name});
    if (result) {
        return mongoConverter(result);
    }
}

export default {
    findByName: findByName,

    model: UserModel
}