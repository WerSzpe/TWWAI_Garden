import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const paramSchema = new mongoose.Schema({
    date: {type: String},
    id: {type: Number},
    temp: {type: String},
    pressure: {type: String},
    humidity: {type: String},
    section_id:{type: Number}
}, {
    collection: 'Air Sensor'
});
paramSchema.plugin(uniqueValidator);

const ParamModel = mongoose.model('Air Sensor', paramSchema);

async function query() {
    // get all
    const result = await ParamModel.find({});
        if (result) {
            return mongoConverter(result);
        }
}

    // add
async function add(object) {
    
    const result = await ParamModel.create({
                                        date:object.date,
                                        id:object.id,
                                        temp:object.temp,
                                        pressure:object.pressure,
                                        humidity:object.humidity,
                                        section_id:object.section_id
                                            });
    if(result) {
        return mongoConverter(result);
    }
}

async function getSection(id) {
    const result = await ParamModel.findOne({section_id:id});
    if(result) {
        return result;
    }
}

export default {
    query: query,
    add:add,

    model: ParamModel
};