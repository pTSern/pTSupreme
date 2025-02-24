import { _pMath } from "./pMath";
import { _pNode } from './pNode';
import { _pEasing } from './pEasing';

const _global = typeof window === 'undefined' ? globalThis : window;

export namespace pTS {
    export import math = _pMath;
    export import node = _pNode;
    export import easing = _pEasing;
}

//@ts-ignore
pTS = {
    math: _pMath,
    node: _pNode,
    easing: _pEasing,
}

!!_global && (_global.pTS = pTS)

