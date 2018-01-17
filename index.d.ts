import * as core from 'express-serve-static-core';
import { NappJS, NappJSService } from 'nappjs';
export default class NappJSApi extends NappJSService {
    app: core.Express;
    constructor();
    start(napp: NappJS): Promise<void>;
}
