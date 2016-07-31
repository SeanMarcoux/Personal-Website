require('express');
require('nconf');

require('./infra/config-manager');
require('./infra/middleware-manager');
require('./infra/route-manager');
require('./infra/assets-manager');

const app = express();

configManager.handle(app);
middlewareManager.handle(app);
assetsManager.handle(app);
routeManager.handle(app);

app.listen(nconf.get('port'), () => {
    console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));    
});
