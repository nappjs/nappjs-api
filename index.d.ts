import { NappJS, NappJSModule } from 'nappjs';
export default class NappJSApi extends NappJSModule {
    load(napp: NappJS): Promise<void>;
    start(napp: NappJS): Promise<void>;
}
