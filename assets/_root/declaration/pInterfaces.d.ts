
/**
 * @description Interfaces for the whole world
 * @namespace _pInterfaces
 * @alias pIz
 */
declare namespace _pInterfaces {

    namespace NSEvent {
        interface IOption {
            priority?: number;
        }

        interface IManager<TEventType extends pFz.TFlexKey> {
            add(event: TEventType, listener: pFz.TFlexData<pFz.TAnyHandler>, opt?: IOption): void
            remove(event: TEventType, listener: pFz.TFlexData<pFz.TAnyHandler>, ...listeners: pFz.TAnyHandler[]): void
            clear(event: pFz.TFlexData<TEventType>, ...events: TEventType[]): void
            invoke(event: pFz.TFlexData<TEventType>, ...args: any[]): void
        }
    }

}

import pIz = _pInterfaces;
