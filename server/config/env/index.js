'use strict';

import nconf from 'nconf';
import fs from 'fs';
import path from 'path'

var env = process.env.NODE_ENV || 'development';

/**
 * Initialize Configurations
 */
export function init() {
  //get NODE_ENV

  /**
   * Loading config from environment
   */
  nconf.env();

  /**
   * Verify Config file exist
   */
  const configFilePath = path.join(__dirname, env + '.json');
  try {
    fs.accessSync(configFilePath, fs.F_OK);
  }
  catch (err) {
    console.log("Configuration file does not exist for current environment");
    process.exit(1);
  }
  console.log("env = "+env);
  /**
   * Loading default and environment specific config
   */
   if(env == 'development'){
     console.log("Project currently in development stage.");
     nconf.file({file:configFilePath}).defaults(require('./development.json'));
    // nconf.file({file:configFilePath}).defaults(require('./development.json'));
   }
   else if (env == 'production')
   {
     console.log("Project currently in production stage.");
         nconf.file({file:configFilePath}).defaults(require('./production.json'));
  //   nconf.file({file:configFilePath}).defaults(require('./production.json'));
   }
   else {
     console.log("Project currently in default stage");
         nconf.file({file:configFilePath}).defaults(require('./default.json'));
//  nconf.file({file: configFilePath}).defaults(require('./default.json'));
  }
}
