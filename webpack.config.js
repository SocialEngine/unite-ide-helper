
const fs = require('fs');
const path = require('path');

const componentDir = path.join(__dirname, '/src/components');
const alias = {
    'app': path.join(__dirname, '/src/server/app.js')
};

for (const dir of fs.readdirSync(componentDir)) {
    alias['@SE/' + dir] = path.join(componentDir, dir);
}

module.exports = {
    resolve: {
        alias: alias
    }
};
