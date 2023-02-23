const CLI = require('./lib/cli.js');
const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes, Circle, Triangle, Square} = require('./lib/shapes.js')

const cli = new CLI();

cli.run();