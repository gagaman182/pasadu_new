//const API_URL = 'http://192.168.5.187/0161/student/screen/api/';
// const API_URL = "http://localhost/pasadu/template/backend/";

// const API_URL = "http://localhost/pasaduweb/backend/";
// const API_URL = "http://192.168.5.187/pasaduweb/backend/";
const API_URL = "http://192.168.4.3/webapp/tee/pasaduweb/backend/";
// const API_URL = "http://192.168.5.1/pasaduweb/backend/";

// const API_URL = "http://localhost/tee/pasaduweb/backend/";

export class APIPath {
    constructor() {}

    getBaseUrl() {
        return API_URL;
    }
}