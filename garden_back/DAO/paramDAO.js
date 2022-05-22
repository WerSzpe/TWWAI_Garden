import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const paramSchema = new mongoose.Schema({
    date: {type: Date},
    temp: {type: Number},
    pressure: {type: Number},
    humidity: {type: Number},
    section_id:{type: mongoose.Schema.ObjectId, ref: 'Section'}
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
                                        date:Date.now(),
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
    const result = await ParamModel.find({section_id:id});
    if(result) {
        return result;
    }
}

async function removeSection(id) {
    const result = await ParamModel.deleteMany({section_id:id});
    if(result) {
        return result;
    }
}

async function getLast(sec_id) {
    const result = await ParamModel.findOne({section_id: sec_id}).sort({'date': -1}).limit(1);
    if(result){
        return mongoConverter(result);
    }
}

export default {
    query: query,
    add:add,
    getSection: getSection,
    getLast:getLast,
    removeSection: removeSection,

    model: ParamModel
};