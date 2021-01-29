'use strict';
const engineerService = {
  getAllWalkers(db){
    return db
      .select('*')
      .from('engineers');
        
  },
  getById(knex,id){
    return knex
      .from('engineers')
      .first('*')
      .where('id',id);
  },
};

module.exports = engineerService;