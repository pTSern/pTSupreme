import _pEasing from "./easing/pEasing";
import _pMath from "./math/pMath";
import _pNode from "./node/pNode";
import _pComponent from "./component/pComponent";

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

