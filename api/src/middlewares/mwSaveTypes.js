const axios = require('axios');
const { Type } = require('../db');
let flag = false;

module.exports = async (req, res, next) => {
  if (flag) return next();
  try {
    const response = (await axios('https://pokeapi.co/api/v2/type')).data.results;
    await Type.bulkCreate(response);
    flag = true;
    next();
  } catch (error) {
    throw new Error(error.message);
  }
};
