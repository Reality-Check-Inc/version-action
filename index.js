// index.js

// https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action
// npm install @actions/core
// npm install @actions/github
// npm install @actions/exec
// ncc build index.js --license licenses.txt
// git commit -m "action update"
// git tag -a -m "action update" v1.2
// git push --follow-tags

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

try {
  const timestamp = Math.floor(Date.now() / 1000);
  const time = (new Date()).toTimeString();
  console.log(`Time is ${time}, the unix time stamp is ${timestamp}`);
  core.setOutput("time", timestamp);

  //const payload = JSON.stringify(github.context.payload, undefined, 2)
  //console.log(`The event payload: ${payload}`);
  //const context = JSON.stringify(github.context, undefined, 2)
  //console.log(`The context payload: ${context}`);
  //console.log(`github event is ${github.context.eventName}`);
  //"ref": "refs/tags/v1.12",
  console.log(`github ref is ${github.context.ref}`);
  const str = github.context.ref;
  var lastPart = "0.0.0"
  if (str.indexOf("tags") !== -1)
  {
    const parts = str.split("/");
    lastPart = parts.pop();
    if (lastPart.startsWith("v"))
      lastPart = lastPart.substring(1);
  }
  core.setOutput("version", lastPart);

  // this won't work
  // failed to run git: fatal: not a git repository (or any of the parent directories): .git
  // gh variable set LOGMINDS_NUGET_VERSION --body "${{ env.nug_version }}"
  /*
  const vartime = core.getInput('vartime');
  const varversion = core.getInput('varversion');
  async function run() {
    try {
      if (vartime.length > 0)
      {
        // gh variable set nuget_timestamp --body "${{ env.nuget_timestamp }}"
        // /usr/bin/gh variable set vartime --body nuget_timestamp
        // failed to run git: fatal: not a git repository (or any of the parent directories): .git
        await exec.exec('gh', ['variable', 'set', vartime, '--body', timestamp ], options);
      }
      if (varversion.length > 0)
      {
        await exec.exec('gh', ['variable', 'set', varversion, '--body', lastPart ], options);
      }
    } catch (error) {
      core.setFailed(error.message);
    }
  }
  run();
  */

} catch (error) {
  core.setFailed(error.message);
}
