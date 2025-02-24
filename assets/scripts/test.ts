import { Component, Node, TweenEasing, _decorator } from "cc";
import {pTS} from "../_root/pTSModule";

const { ccclass, property } = _decorator

@ccclass('Test')
export class Test extends Component {
    @property( { type: pTS.easing.CCEnum } )
    easing: TweenEasing = 'fade';

    @property(Node)
    xnode: Node = null;

    move() {
    }
}
