#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const boxen = require('boxen');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const gradient = require('gradient-string');
const me = require('./../me.json');

const stallion = console;
const cardOptions = {
  padding: 1,
  margin: 3,
  borderStyle: 'round',
  borderColor: 'cyan',
};

const loader = chalkAnimation
  .rainbow(`\tBusiness card for ${me.name} is loading...`)
  .stop();

const data = {
  name: gradient('cyan', 'pink')(me.name),
  handle: gradient.summer(me.handle),
  npx: gradient.summer(me.npx),
  work: chalk.white(me.work),
  twitter: chalk.cyan(me.twitter),
  github: chalk.cyan(me.github),
  linkedIn: chalk.cyan(me.linkedIn),
  web: chalk.cyan(me.web),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.yellow.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedIn = `${data.labelLinkedIn}  ${data.linkedIn}`;
const web = `${data.labelWeb}  ${data.web}`;
const card = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twitter +
  newline +
  github +
  newline +
  linkedIn +
  newline +
  web +
  newline +
  newline +
  card;

const cardMessage = boxen(output, cardOptions);

stallion.log(newline);
loader.start();

setTimeout(() => {
  loader.stop();
  console.clear();
  stallion.log(cardMessage);
}, 1000);

module.exports = cardMessage;
