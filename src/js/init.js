import { defaults } from "./modules/defaults";
import { animate } from "./modules/animate";
import { config } from "./config";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	animate.init();

	config.log('app init')
	
};

export { App };