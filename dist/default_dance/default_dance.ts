import {IPlugin, IModLoaderAPI} from 'modloader64_api/IModLoaderAPI';
import {IOOTCore} from 'modloader64_api/OOT/OOTAPI';
import {InjectCore} from 'modloader64_api/CoreInjection';
import { bus } from 'modloader64_api/EventHandler';
import { OotOnlineEvents, OotOnline_Emote } from './OotoAPI/OotoAPI';
import fs from 'fs';
import path from 'path';

interface Emote{
    name: string;
    anim: string;
    sound: string;
}

class default_dance implements IPlugin{

    ModLoader!: IModLoaderAPI;
    pluginName?: string | undefined;
    @InjectCore()
    core!: IOOTCore;

    preinit(): void {
    }
    init(): void {
        let zz: Emote = (this as any)['metadata']['emote'];
        let e = {name: zz.name, buf: fs.readFileSync(path.resolve(__dirname, zz.anim))} as OotOnline_Emote;
        if (zz.sound !== ''){
            e.sound = fs.readFileSync(path.resolve(__dirname, zz.sound));
        }
        bus.emit(OotOnlineEvents.ON_REGISTER_EMOTE, e);
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
    }

}

module.exports = default_dance;