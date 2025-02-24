
/**
 * @description A flexible type for data, key, handler, constructor, and recorder.
 * @namespace _pTFlex
 * @alias pFz
 */
declare namespace _pTFlex {
    type TFlexData<TData> = TData | TData[];
    type TFlexKey = string | number | symbol;

    type TAnyHandler<TArgs = any, TReturn = any> = (...args: TArgs[]) => TReturn;
    type TNewConstructor<TArgs = any, TReturn = any> = new (...args: TArgs[]) => TReturn;
    type TAbstractConstructor<TArgs = any, TReturn = any> = abstract new (...args: TArgs[]) => TReturn;

    type TFlexRecorder<TKey extends TFlexKey, TValue> = Partial<Record<TKey, TValue>>;

    type TFlexConstructor<TArgs = any, TReturn = any> = TNewConstructor<TArgs, TReturn> | TAbstractConstructor<TArgs, TReturn>;
}

import pFz = _pTFlex;
