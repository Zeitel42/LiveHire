const { Coordinator } = require('../models');

const coordinatordata = [
  {
    username: 'alede0lough',
    email: 'nwestnedge0@cbc.ca',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'smonjwilway1',
    email: 'rmebes1@sogou.com',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'am2djir',
    email: 'cstoneman2@last.fm',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'nmer3mspr',
    email: 'ihellier3@goo.ne.jp',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'i4ibodd',
    email: 'gmidgley4@weather.com',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'dstaague5',
    email: 'larnout5@imdb.com',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'tpennigens6',
    email: 'hnapleton6@feedburner.com',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'ell7mper',
    email: 'kperigo7@china.com.cn',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'ns8jmacar',
    email: 'lmongain8@google.ru',
    organization: 'Neal Productions',
    password: 'password123'
  },
  {
    username: 'msabbithur9',
    email: 'bsteen9@epa.gov',
    organization: 'Neal Productions',
    password: 'password123'
  }
];

const seedCoordinators = () => Coordinator.bulkCreate(coordinatordata, {individualHooks: true});

module.exports = seedCoordinators;