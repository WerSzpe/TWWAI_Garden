import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const sectionSchema = new mongoose.Schema({
    name: {type: String},
    type: {type: String}
}, {
    collection: 'Section'
});
sectionSchema.plugin(uniqueValidator);

const SectionModel = mongoose.model('Section', sectionSchema);

//get all
async function query() {
    const result = await SectionModel.find({});
    if (result) {
        return mongoConverter(result);
    }
}

//add
async function add(obj) {
    const result = await SectionModel.create({
                                    name: obj.name,
                                    type: obj.type
                                    });
    if (result) {
        return mongoConverter(result);
    }
}

//remove
async function remove(id) {
    const result = await SectionModel.findByIdAndDelete(id);
    if (result) {
        return mongoConverter(result);
    }
}

export default {
    query: query,
    add: add,
    remove: remove,

    model: SectionModel
};