
declare namespace pTFlex {
    type TFlexData<TData> = TData | TData[];

    type TAnyHandler<TArgs = any, TReturn = any> = (...args: TArgs[]) => TReturn;
    type TNewConstructor<TArgs = any, TReturn = any> = new (...args: TArgs[]) => TReturn;
    type TAbstractConstructor<TArgs = any, TReturn = any> = abstract new (...args: TArgs[]) => TReturn;

    type TFlexConstructor<TArgs = any, TReturn = any> = TNewConstructor<TArgs, TReturn> | TAbstractConstructor<TArgs, TReturn>;
}
