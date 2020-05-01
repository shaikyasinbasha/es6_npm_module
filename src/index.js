import * as platform from './platform';
import * as api from './api';

const methods = {
	...platform,
	...api
};

export default {...methods};
