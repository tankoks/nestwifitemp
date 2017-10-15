const { exec } = require('child_process');

var userMap = new Map();
var whiteList = new Map();
var users = 0;

//TODO take in text file of MAC addresses and add to witelist hashmap

function generate_whiteList() {

};

function fetchUsers() {
  exec("sudo arp-scan -l | awk '/..:..:..:..:..:../ {print $2}'",
    (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    var outArray = stdout.split('\n');
    for (var entry in outArray) {
      if (!userMap.has(entry) && !whiteList.has(entry)) {
        userMap.set([entry, 1]);
        users++;
      } else if (userMap.has(entry) && !whiteList.has(entry)) {
        userMap.set([entry, userMap.get(entry)++]);
        users++;
      }
    }
  });
};

function update_whiteList() {
  for (var key of userMap.keys()) {
    if (userMap.get(key) > (1440/refreshTime/2)) {
      whiteList.set([key, 0]);
    }
  }
};

//TODO add autoUpdate

fetchUsers();
