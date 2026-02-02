//set up yargs command line parsing
var argv = require('yargs')
  .usage('Usage: $0 [options]')
  .example('$0', '')
  .option('v', {
    alias: 'verbose',
    description: 'Sets the script to run in verbose mode',
    boolean: true
  })
  .option('u', {
    alias: 'url',
    description: 'URL to use to initially retrieve project data',
    default: "https://projects.eclipse.org/api/projects"
  })
  .option('l', {
    alias: 'location',
    description: 'File path to location to save data',
    default: "data"
  })
  .help('h')
  .alias('h', 'help')
  .version('0.1')
  .alias('v', 'version')
  .epilog('Copyright 2019 Eclipse Foundation inc.')
  .argv;

const axios = require('axios');
const fs = require('fs');
const parse = require('parse-link-header');
const yaml = require('json2yaml');

run();

async function run() {
	// create location folder if its missing
	if (!fs.existsSync(argv.l)){
	    fs.mkdirSync(argv.l);
	}
	var projData = await getProjectData();

	// write yaml file to disk in the given location
	fs.writeFileSync(`${argv.l}/eclipsefdn_projects.yaml`, yaml.stringify(projData));
}  
  
async function getProjectData() {
  var hasMore = true;
  var result = [];
  var data = [];
  console.log(`Loading data using '${argv.u}' as initial URL`);
  var url = argv.u;
  // loop through all available users, and add them to a list to be returned
  while (hasMore) {
    // get the current page of results, incrementing page count after call
    result = await axios.get(url).then(result => {
      // return the data to the user
      var links = parse(result.headers.link);
      if (links.self.url == links.last.url) {
        hasMore = false;
      } else {
        url = links.next.url;
        console.log(`Loading additional data using '${url}' as next URL`);
      }
      return result.data;
    }).catch(err => console.log(`Error fetching data for URL '${url}': ${err}`));
    
    // collect the results
    if (result != null && result.length > 0) {
      for (var i = 0; i < result.length; i++) {
        data.push(result[i]);
      }
    }
  }
  return data;
}