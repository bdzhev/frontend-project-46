#!/usr/bin/env node
import { Command } from 'commander';
// import calcDiff from '../src/index.js'

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.');

program.parse();