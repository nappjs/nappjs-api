import * as core from 'express-serve-static-core';
import { NappJS, NappJSService } from 'nappjs';
export default class NappJSApi extends NappJSService {
    app: core.Express;
    constructor();
    load(napp: NappJS): Promise<void>;
    start(napp: NappJS): Promise<void>;
}
