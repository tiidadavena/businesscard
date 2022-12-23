#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("Juliana Barros Lima"),
  handle: chalk.magenta("Jules"),
  labelWork: chalk.white.bold("      Work:"),
  work: chalk.white("Software developer in progress"),
  labelMastodon: chalk.white.bold("   Mastodon:"),
  mastodon: chalk.magenta("@jules@notacult.social"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  twitter: chalk.magenta("https://twitter.com/tiidadavena"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  github: chalk.magenta("https://github.com/tiidadavena"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  linkedin: chalk.magenta("https://linkedin.com/in/julianabarroslima"),
  labelWeb: chalk.white.bold("       Web:"),
  web: chalk.magenta("https://tiidadavena.github.io"),
  labelCard: chalk.white.bold("      Card:"),
  npx: chalk.cyan("npx tiidadavena"),
};

console.log(data.name);
// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  mastodoning +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.yellowBright(boxen(output, options)));
