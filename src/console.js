
const repl = require('repl');
const fs = require('fs');
const User = require('./models/user.js');
const connection = require('./database/index.js');
const Transaction = require('./models/transaction.js')


const replServer = repl.start({
  prompt: 'app > ',
});

replServer.context.User = User;
replServer.context.sequelize = connection;
replServer.context.fs = fs;
replServer.context.Transaction = Transaction
