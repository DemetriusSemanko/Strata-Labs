const mongoose = require('mongoose');

const MONGO_USERNAME = 'strata';
const MONGO_PASSWORD = 'labs';
const MONGO_HOSTNAME = 'mongo';
const MONGO_PORT = '27017';
const MONGO_DB = 'sharkinfo';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url);