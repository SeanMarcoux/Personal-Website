require('path');

require('express');
require('nconf');

require('./base-manager');

const ROOT = '../';

const assetsManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        const staticFolders = nconf.get('staticFolders');
        const adjustedFolders = this.adjustStaticFolders(staticFolders, app.get('root'));

        adjustedFolders.forEach(function(folder) {
            app.use(nconf.get('staticFolderMount'), express.static(folder, {
                maxAge: nconf.get('maxAge')
            }));
        });        
    },

    adjustStaticFolders(folders, root) {
        const adjustedFolders = folders.map(function(folder) {
            return PATH.resolve(__dirname, ROOT, folder);
        });

        return adjustedFolders;
    }
});
