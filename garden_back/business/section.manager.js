import sectionDAO from '../DAO/sectionDAO';
import paramDAO from '../DAO/paramDAO';
import res from 'express/lib/response';
import { param } from 'express/lib/request';

function create() {
    //get all
    async function queryData() {
        let result = await sectionDAO.query();
        if(result) {
            for(const section of result) {
                section.lastData = await paramDAO.getLast(section.id);
            }
            return result;
        }
    }
    //get all
    async function query() {
        let result = await sectionDAO.query();
        if(result) {
            return result;
        }
    }
    //add
    async function add(obj) {
        let result = await sectionDAO.add(obj);
        if(result) {
            return result;
        }
    }
    //remove
    async function remove(id) {
        await paramDAO.removeSection(id);
        let result = await sectionDAO.remove(id);
        if(result) {
            return result;
        }
    }

    return {
        query: query,
        queryData: queryData,
        add: add,
        remove: remove
    };
}

export default {
    create: create
};