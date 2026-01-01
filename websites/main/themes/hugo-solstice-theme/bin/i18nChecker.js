var argv = require('yargs')
  .usage('Usage: $0 [options]')
  .example('$0', '')
  .option('p', {
    alias: 'path',
  })
  .help('h')
  .alias('h', 'help')
  .version('0.1')
  .alias('v', 'version')
  .epilog('Copyright 2019 Eclipse Foundation inc.').argv;
var toml = require('toml');
const fs = require('fs');
const baseConfig = {
  root: '/run/secrets/',
  encoding: 'utf-8',
  baseLang: 'en',
};

class I18nChecker {
  #config;
  constructor(config) {
    // check that our config exists or isn't unset. Deep cloning not needed
    if (config !== undefined && config !== null) {
      this.#config = Object.assign({}, baseConfig, config);
    } else {
      this.#config = Object.assign({}, baseConfig);
    }
    fs.accessSync(this.#config.root, fs.constants.R_OK);
  }

  checkFiles = function () {
    let out = {};
    try {
      fs.readdirSync(this.#config.root).forEach(file => {
        let name = file.substring(0, file.lastIndexOf('.'));
        let d = this.readFile(file);
        out[name] = toml.parse(d);
      });
    } catch (e) {
      console.log(e);
    }
    let totalIss = 0;
    for (let idx in out) {
      let langData = out[idx];
      console.log(`Language '${idx}' had ${Object.keys(langData).length} keys`);
      // don't process the base lang
      if (idx === this.#config.baseLang) {
        console.log(
          `Skipping processing of '${idx}' as it is the configured base lang.\n`
        );
        continue;
      }
      let issues = [];
      let goodKeys = [];
      for (let key in langData) {
        let tObject = langData[key];
        let baseTranslationObject = out[this.#config.baseLang][key];
        if (baseTranslationObject === undefined) {
          issues.push(
            `ERR1: Key '${key}' does not exist in base '${
              this.#config.baseLang
            }' file (but exists in '${idx}')`
          );
        } else if (tObject === undefined) {
          issues.push(`ERR2: Key '${key}' does not exist in base '${idx}' file`);
        } else if (tObject.other === baseTranslationObject.other) {
          issues.push(
            `WARN: Key '${key}' has the same value in '${idx}' as base ${
              this.#config.baseLang
            }`
          );
        } else if (
          baseTranslationObject.other.indexOf('Eclipse Foundation') !== -1 &&
          tObject.other.indexOf('Eclipse Foundation') === -1
        ) {
          issues.push(
            `ERR3: Key '${key}' value contains 'Eclipse Foundation' in '${
              this.#config.baseLang
            }' but not in '${idx}'`
          );
        } else {
          goodKeys.push(key);
        }
      }
      console.log(`Good keys for ${idx}: ${goodKeys.length}`);
      if (issues.length > 0) {
        console.log(`Issues:`);
        issues.forEach(iss => {
          console.log(`\t- ${iss}`);
        });
        totalIss += issues.length;
      }
      console.log('\n');
    }
    console.log(`Issues discovered: ${totalIss}`);
  };

  readFile = function (name, encoding = this.#config.encoding) {
    var filepath = `${this.#config.root}/${name}`;
    try {
      var data = fs.readFileSync(filepath, { encoding: encoding });
      if (data !== undefined && (data = data.trim()) !== '') {
        return data;
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.log(`File at path ${filepath} does not exist`);
      } else if (err.code === 'EACCES') {
        console.log(`File at path ${filepath} cannot be read`);
      } else {
        console.log('An unknown error occurred while reading the secret');
      }
    }
    return null;
  };
}

let check = new I18nChecker({ root: argv.p });
check.checkFiles();

/**
 * Get modifiable deep copy of the base configuration for this class.
 */
function getBaseConfig() {
  return JSON.parse(JSON.stringify(baseConfig));
}
