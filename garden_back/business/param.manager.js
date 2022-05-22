import paramDAO from '../DAO/paramDAO';

function create() {
    async function query() {
        //get all
        let result = await paramDAO.query();
        if (result) {
            return result;
        }
    }
        //add
    async function add(object) {
      let result = await paramDAO.add(object);
      if(result) {
        return result;
      }
    }

    async function getSection(id) {
        let result = await paramDAO.getSection(id);
        if(result) {
            return result;
        }
    }

    async function getLast(id) {
        let result = await paramDAO.getLast(id);
        if (result) {
            return result;
        }
    }

    return {
        query: query,
        add: add,
        getSection: getSection,
        getLast: getLast
    };
}

export default {
    create: create
};