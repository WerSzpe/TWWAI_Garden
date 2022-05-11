import paramDAO from '../DAO/paramDAO';

function create() {
    async function query() {
        //get all
        let result = paramDAO.query();
        if (result) {
            return result;
        }
    }
        //add
    async function add(object) {
      let result = paramDAO.add(object);
      if(result) {
        return result;
      }
    }

    async function getSection(id) {
        let result = await paramDAO.get(id);
        if(result) {
            return result;
        }
    }

    return {
        query: query,
        add: add,
        getSection: getSection
    };
}

export default {
    create: create
};