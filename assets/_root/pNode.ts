import { Component, IVec3Like, Node } from "cc";

export namespace _pNode {
    export interface INodeHolder {
        node: Node
    }

    export type TFlexTarget = INodeHolder | Node;


    /**
     * @description - Get the given Component from the target object. If the Component does not exist, add it to the target object.
     *
     * @param _target - The target object to get the node from.
     * @param _component - the name of the component to get from the target object.
     *
     * @returns The component from the target object.
     *
     */
    export function get_safe_component(_target: TFlexTarget, _component: string): Component

    /**
     * @description - Get the given Component from the target object. If the Component does not exist, add it to the target object.
     *
     * @param _target - The target object to get the node from.
     * @param _constructor - The type of component to get from the target object.
     *
     * @returns The component from the target object.
     *
     */
    export function get_safe_component<TComponent extends Component>(_target: TFlexTarget, _constructor: pTFlex.TNewConstructor<any, TComponent>): TComponent
    export function get_safe_component<TComponent extends Component>(_target: TFlexTarget, _constructor: string | pTFlex.TNewConstructor<any, TComponent>): TComponent | Component {
        const node = _target instanceof Node ? _target : _target.node;

        // @ts-ignore
        return node.getComponent(_constructor) || node.addComponent(_constructor);
    }


    export function set_position(_self: TFlexTarget, _target: TFlexTarget): void
    export function set_position(_self: TFlexTarget, _position: IVec3Like): void
    export function set_position(_self: TFlexTarget, _x?: number, _y?: number, _z?: number): void;
    export function set_position(_self: TFlexTarget, _position: TFlexTarget | IVec3Like | number = 0, _y: number = 0, _z: number = 0): void {
        const node = _self instanceof Node ? _self : _self.node;

        if (typeof _position === 'number') {
            node.setPosition(_position, _y, _z);
        } else if (_position instanceof Node) {
            node.setWorldPosition(_position.getWorldPosition());
        } else if ('node' in _position) {
            node.setWorldPosition(_position.node.getWorldPosition());
        } else {
            node.setPosition(_position.x, _position.y, _position.z);
        }
    }
}
