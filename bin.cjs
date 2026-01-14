#!/usr/bin/env node
'use strict';

const api = require('./dist/index.cjs');
const locateLibreWolf = api.default || api;
const getLibreWolfVersion = api.getLibreWolfVersion;
const getInstallGuidance = api.getInstallGuidance;

const argv = process.argv.slice(2);
const allowFallback = argv.includes('--fallback') || argv.includes('-f');
const printBrowserVersion =
  argv.includes('--librewolf-version') || argv.includes('--browser-version');
const allowExec = argv.includes('--allow-exec');

try {
  const librewolfPath =
    (typeof locateLibreWolf === 'function' && locateLibreWolf(allowFallback)) ||
    (typeof locateLibreWolf === 'function' && locateLibreWolf(true)) ||
    null;

  if (!librewolfPath) {
    const guidance =
      (typeof getInstallGuidance === 'function' && getInstallGuidance()) ||
      'LibreWolf not found.';
    console.error(guidance);
    process.exit(1);
  }

  if (printBrowserVersion && typeof getLibreWolfVersion === 'function') {
    const v = getLibreWolfVersion(librewolfPath, { allowExec });
    if (!v) {
      console.log('');
      process.exit(2);
    }
    console.log(String(v));
    process.exit(0);
  }

  console.log(String(librewolfPath));
} catch (e) {
  console.error(String(e?.message ? e.message : e));
  process.exit(1);
}

