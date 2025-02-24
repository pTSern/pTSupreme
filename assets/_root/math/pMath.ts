import { Color, IColorLike, IQuatLike, IRectLike, ISizeLike, IVec2Like, IVec3Like, Quat, Rect, Size, Vec2, Vec3 } from "cc";

namespace _pMath {
    export type TValueType = 'Vec2' | 'Vec3' | 'Size' | 'Rect' | 'Quat' | 'Color';

    export function vec2(other: IVec2Like): Vec2;
    export function vec2(x: number, y: number): Vec2;
    export function vec2(other: IVec2Like | number = 0, y: number = 0): Vec2 {
        if(typeof other === "number") return new Vec2(other, y);
        return new Vec2(other.x, other.y);
    }

    export function vec3(x?: number, y?: number, z?: number): Vec3;
    export function vec3(other: IVec3Like): Vec3;
    export function vec3(other: IVec3Like | number = 0, y: number = 0, z: number = 0): Vec3 {
        if(typeof other === "number") return new Vec3(other, y, z);
        return new Vec3(other.x, other.y, other.z);
    }

    export function size(width?: number, height?: number): Size;
    export function size(other: ISizeLike): Size;
    export function size(other: ISizeLike | number = 0, height: number = 0): Size {
        if(typeof other === "number") return new Size(other, height);
        return new Size(other.width, other.height);
    }

    export function rect(x?: number, y?: number, width?: number, height?: number): Rect;
    export function rect(coord: IVec2Like, size: ISizeLike): Rect;
    export function rect(other: IRectLike): Rect;
    export function rect(_other: IRectLike | IVec2Like | number = 0, _y: ISizeLike | number = 0, _width: number = 0, _height: number = 0): Rect {
        if(typeof _other === "number") {
            if(typeof _y === "number") return new Rect(_other, _y, _width, _height);
            return new Rect(0, 0, 0, 0);
        } else {
            const { x, y } = _other;

            const width = 'width' in _other ? _other.width : ( typeof _y === "number" ? _y : _y.width );
            const height = 'height' in _other ? _other.height : ( typeof _y === "number" ? _y :  _y.height );

            return new Rect(x, y, width, height);
        }
    }

    export function quat(x?: number, y?: number, z?: number, w?: number): Quat;
    export function quat(other: IQuatLike): Quat;
    export function quat(other: IQuatLike | number = 0, y: number = 0, z: number = 0, w: number = 0): Quat {
        if(typeof other === "number") return new Quat(other, y, z, w);
        return new Quat(other.x, other.y, other.z, other.w);
    }

    export function color(r?: number, g?: number, b?: number, a?: number): Color;
    export function color(other: IColorLike): Color;
    export function color(other: number | IColorLike = 0, g: number = 0, b: number = 0, a: number = 0): Color {
        if(typeof other === "number") return new Color(other, g, b, a);
        return new Color(other.r, other.g, other.b, other.a);
    }

    export function create(type: 'Vec2', data: IVec2Like): Vec2
    export function create(type: 'Vec3', data: IVec3Like): Vec3
    export function create(type: 'Size', data: ISizeLike): Size
    export function create(type: 'Rect', data: IRectLike): Rect
    export function create(type: 'Quat', data: IQuatLike): Quat
    export function create(type: 'Color', data: IColorLike): Color
    export function create(type: TValueType, data: IVec2Like | IVec3Like | ISizeLike | IRectLike | IColorLike) {
        switch(type) {
            case "Vec2": return vec2(data as IVec2Like);
            case "Vec3": return vec3(data as IVec3Like);
            case "Size": return size(data as ISizeLike);
            case "Rect": return rect(data as IRectLike);
            case "Quat": return quat(data as IQuatLike);
            case "Color": return color(data as IColorLike);
        }
    }

    export function add(type: 'Vec2', first: IVec2Like, second: IVec2Like, out?: IVec2Like): Vec2
    export function add(type: 'Vec3', first: IVec3Like, second: IVec3Like, out?: IVec3Like): Vec3
    export function add(type: 'Size', first: ISizeLike, second: ISizeLike, out?: ISizeLike): Size
    export function add(type: 'Rect', first: IRectLike, second: IRectLike, out?: IRectLike): Rect
    export function add(type: 'Quat', first: IQuatLike, second: IQuatLike, out?: IQuatLike): Quat
    export function add(type: 'Color', first: IColorLike, second: IColorLike, out?: IColorLike): Color
    export function add(type: TValueType, first: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike, second: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike, out?: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike) {
        switch(type) {
            case "Vec2": {
                const x = (first as IVec2Like).x + (second as IVec2Like).x;
                const y = (first as IVec2Like).y + (second as IVec2Like).y;
                out = vec2(x, y);
                return out;
            }
            case "Vec3": {
                const x = (first as IVec3Like).x + (second as IVec3Like).x;
                const y = (first as IVec3Like).y + (second as IVec3Like).y;
                const z = (first as IVec3Like).z + (second as IVec3Like).z;

                out = vec3(x, y, z);
                return out;
            }
            case "Size": {
                const width = (first as ISizeLike).width + (second as ISizeLike).width;
                const height = (first as ISizeLike).width + (second as ISizeLike).width;

                out = size(width, height);
                return out;
            }
            case "Rect": {
                const x = (first as IVec2Like).x + (second as IVec2Like).x;
                const y = (first as IVec2Like).y + (second as IVec2Like).y;
                const width = (first as ISizeLike).width + (second as ISizeLike).width;
                const height = (first as ISizeLike).width + (second as ISizeLike).width;

                out = rect(x, y, width, height);
                return out as Rect;
            }
            case "Quat": {
                const x = (first as IQuatLike).x + (second as IQuatLike).x;
                const y = (first as IQuatLike).y + (second as IQuatLike).y;
                const z = (first as IQuatLike).z + (second as IQuatLike).z;
                const w = (first as IQuatLike).z + (second as IQuatLike).z;

                out = quat(x, y, z, w);
                return out as Quat;
            }
            case "Color": {
                const r = (first as IColorLike).r + (second as IColorLike).r;
                const g = (first as IColorLike).g + (second as IColorLike).g;
                const b = (first as IColorLike).b + (second as IColorLike).b;
                const a = (first as IColorLike).a + (second as IColorLike).a;

                out = color(r, g, b, a);
                return out as Color;
            }
        }
    }

    export function sub(type: 'Vec2', first: IVec2Like, second: IVec2Like, out?: IVec2Like): Vec2
    export function sub(type: 'Vec3', first: IVec3Like, second: IVec3Like, out?: IVec3Like): Vec3
    export function sub(type: 'Size', first: ISizeLike, second: ISizeLike, out?: ISizeLike): Size
    export function sub(type: 'Rect', first: IRectLike, second: IRectLike, out?: IRectLike): Rect
    export function sub(type: 'Quat', first: IQuatLike, second: IQuatLike, out?: IQuatLike): Quat
    export function sub(type: 'Color', first: IColorLike, second: IColorLike, out?: IColorLike): Color
    export function sub(type: TValueType, first: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike, second: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike, out?: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike) {
        switch(type) {
            case "Vec2": {
                const x = (first as IVec2Like).x - (second as IVec2Like).x;
                const y = (first as IVec2Like).y - (second as IVec2Like).y;
                out = vec2(x, y);
                return out;
            }
            case "Vec3": {
                const x = (first as IVec3Like).x - (second as IVec3Like).x;
                const y = (first as IVec3Like).y - (second as IVec3Like).y;
                const z = (first as IVec3Like).z - (second as IVec3Like).z;

                out = vec3(x, y, z);
                return out;
            }
            case "Size": {
                const width = (first as ISizeLike).width - (second as ISizeLike).width;
                const height = (first as ISizeLike).width - (second as ISizeLike).width;

                out = size(width, height);
                return out;
            }
            case "Rect": {
                const x = (first as IVec2Like).x - (second as IVec2Like).x;
                const y = (first as IVec2Like).y - (second as IVec2Like).y;
                const width = (first as ISizeLike).width - (second as ISizeLike).width;
                const height = (first as ISizeLike).width - (second as ISizeLike).width;

                out = rect(x, y, width, height);
                return out as Rect;
            }
            case "Quat": {
                const x = (first as IQuatLike).x - (second as IQuatLike).x;
                const y = (first as IQuatLike).y - (second as IQuatLike).y;
                const z = (first as IQuatLike).z - (second as IQuatLike).z;
                const w = (first as IQuatLike).z - (second as IQuatLike).z;

                out = quat(x, y, z, w);
                return out as Quat;
            }
            case "Color": {
                const r = (first as IColorLike).r - (second as IColorLike).r;
                const g = (first as IColorLike).g - (second as IColorLike).g;
                const b = (first as IColorLike).b - (second as IColorLike).b;
                const a = (first as IColorLike).a - (second as IColorLike).a;

                out = color(r, g, b, a);
                return out as Color;
            }
        }
    }

    export function mul(type: 'Vec2', first: IVec2Like, second: IVec2Like, out?: IVec2Like): Vec2
    export function mul(type: 'Vec3', first: IVec3Like, second: IVec3Like, out?: IVec3Like): Vec3
    export function mul(type: 'Size', first: ISizeLike, second: ISizeLike, out?: ISizeLike): Size
    export function mul(type: 'Rect', first: IRectLike, second: IRectLike, out?: IRectLike): Rect
    export function mul(type: 'Quat', first: IQuatLike, second: IQuatLike, out?: IQuatLike): Quat
    export function mul(type: 'Color', first: IColorLike, second: IColorLike, out?: IColorLike): Color
    export function mul(type: TValueType, first: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike, second: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike, out?: IVec2Like | IVec3Like | ISizeLike | IRectLike | IQuatLike | IColorLike) {
        switch(type) {
            case "Vec2": {
                const x = (first as IVec2Like).x * (second as IVec2Like).x;
                const y = (first as IVec2Like).y * (second as IVec2Like).y;
                out = vec2(x, y);
                return out;
            }
            case "Vec3": {
                const x = (first as IVec3Like).x * (second as IVec3Like).x;
                const y = (first as IVec3Like).y * (second as IVec3Like).y;
                const z = (first as IVec3Like).z * (second as IVec3Like).z;

                out = vec3(x, y, z);
                return out;
            }
            case "Size": {
                const width = (first as ISizeLike).width * (second as ISizeLike).width;
                const height = (first as ISizeLike).width * (second as ISizeLike).width;

                out = size(width, height);
                return out;
            }
            case "Rect": {
                const x = (first as IVec2Like).x * (second as IVec2Like).x;
                const y = (first as IVec2Like).y * (second as IVec2Like).y;
                const width = (first as ISizeLike).width * (second as ISizeLike).width;
                const height = (first as ISizeLike).width * (second as ISizeLike).width;

                out = rect(x, y, width, height);
                return out as Rect;
            }
            case "Quat": {
                const x = (first as IQuatLike).x * (second as IQuatLike).x;
                const y = (first as IQuatLike).y * (second as IQuatLike).y;
                const z = (first as IQuatLike).z * (second as IQuatLike).z;
                const w = (first as IQuatLike).z * (second as IQuatLike).z;

                out = quat(x, y, z, w);
                return out as Quat;
            }
            case "Color": {
                const r = (first as IColorLike).r * (second as IColorLike).r;
                const g = (first as IColorLike).g * (second as IColorLike).g;
                const b = (first as IColorLike).b * (second as IColorLike).b;
                const a = (first as IColorLike).a * (second as IColorLike).a;

                out = color(r, g, b, a);
                return out as Color;
            }
        }
    }

    export function addF(type: "Vec2", first: IVec2Like, x: number, y: number, out?: IVec2Like): Vec2
    export function addF(type: "Vec3", first: IVec3Like, x: number, y: number, z: number, out?: IVec3Like): Vec3
    export function addF(type: "Size", first: ISizeLike, width: number, height: number, out?: ISizeLike): Size
    export function addF(type: "Rect", first: IRectLike, x: number, y: number, width: number, height: number, out?: IRectLike): Rect
    export function addF(type: "Quat", first: IQuatLike, x: number, y: number, z: number, w: number, out?: IQuatLike): Quat
    export function addF(type: "Color", first: IColorLike, r: number, g: number, b: number, a: number, out?: IColorLike): Color
    export function addF(type: TValueType, first: IColorLike | IQuatLike | IRectLike | ISizeLike | IVec2Like | IVec3Like, ...args: any[]) {
        switch (type) {
            case "Vec2": {
                const x = args[0] + (first as IVec2Like).x;
                const y = args[1] + (first as IVec2Like).y;

                args[2] = vec2(x, y);

                return args[2];
            }
            case "Vec3": {
                const x = args[0] + (first as IVec3Like).x;
                const y = args[1] + (first as IVec3Like).y;
                const z = args[2] + (first as IVec3Like).z;

                args[3] = vec3(x, y, z);

                return args[3];
            }
            case "Size": {
                const width = args[0] + (first as ISizeLike).width;
                const height = args[1] + (first as ISizeLike).height;

                args[2] = size(width, height);

                return args[2];
            }
            case "Rect": {
                const x = args[0] + (first as IVec2Like).x;
                const y = args[1] + (first as IVec2Like).y;

                const width = args[2] + (first as ISizeLike).width;
                const height = args[3] + (first as ISizeLike).height;

                args[4] = rect(x, y, width, height);

                return args[4]
            }
            case "Color": {
                const r = args[0] + (first as IColorLike).r;
                const g = args[1] + (first as IColorLike).g;
                const b = args[2] + (first as IColorLike).b;
                const a = args[3] + (first as IColorLike).a;

                args[4] = color(r, g, b, a);

                return args[4];
            }
            case "Quat": {
                const x = args[0] + (first as IQuatLike).x;
                const y = args[1] + (first as IQuatLike).y;
                const z = args[2] + (first as IQuatLike).z;
                const w = args[3] + (first as IQuatLike).w;

                args[4] = quat(x, y, z, w);

                return args[4];
            }
        }
    }

    export function subF(type: "Vec2", first: IVec2Like, x: number, y: number, out?: IVec2Like): Vec2
    export function subF(type: "Vec3", first: IVec3Like, x: number, y: number, z: number, out?: IVec3Like): Vec3
    export function subF(type: "Size", first: ISizeLike, width: number, height: number, out?: ISizeLike): Size
    export function subF(type: "Rect", first: IRectLike, x: number, y: number, width: number, height: number, out?: IRectLike): Rect
    export function subF(type: "Quat", first: IQuatLike, x: number, y: number, z: number, w: number, out?: IQuatLike): Quat
    export function subF(type: "Color", first: IColorLike, r: number, g: number, b: number, a: number, out?: IColorLike): Color
    export function subF(type: TValueType, first: IColorLike | IQuatLike | IRectLike | ISizeLike | IVec2Like | IVec3Like, ...args: any[]) {
        switch (type) {
            case "Vec2": {
                const x = args[0] - (first as IVec2Like).x;
                const y = args[1] - (first as IVec2Like).y;

                args[2] = vec2(x, y);

                return args[2];
            }
            case "Vec3": {
                const x = args[0] - (first as IVec3Like).x;
                const y = args[1] - (first as IVec3Like).y;
                const z = args[2] - (first as IVec3Like).z;

                args[3] = vec3(x, y, z);

                return args[3];
            }
            case "Size": {
                const width = args[0] - (first as ISizeLike).width;
                const height = args[1] - (first as ISizeLike).height;

                args[2] = size(width, height);

                return args[2];
            }
            case "Rect": {
                const x = args[0] - (first as IVec2Like).x;
                const y = args[1] - (first as IVec2Like).y;

                const width = args[2] - (first as ISizeLike).width;
                const height = args[3] - (first as ISizeLike).height;

                args[4] = rect(x, y, width, height);

                return args[4]
            }
            case "Color": {
                const r = args[0] - (first as IColorLike).r;
                const g = args[1] - (first as IColorLike).g;
                const b = args[2] - (first as IColorLike).b;
                const a = args[3] - (first as IColorLike).a;

                args[4] = color(r, g, b, a);

                return args[4];
            }
            case "Quat": {
                const x = args[0] - (first as IQuatLike).x;
                const y = args[1] - (first as IQuatLike).y;
                const z = args[2] - (first as IQuatLike).z;
                const w = args[3] - (first as IQuatLike).w;

                args[4] = quat(x, y, z, w);

                return args[4];
            }
        }
    }

    export function mulF(type: "Vec2", first: IVec2Like, x: number, y: number, out?: IVec2Like): Vec2
    export function mulF(type: "Vec3", first: IVec3Like, x: number, y: number, z: number, out?: IVec3Like): Vec3
    export function mulF(type: "Size", first: ISizeLike, width: number, height: number, out?: ISizeLike): Size
    export function mulF(type: "Rect", first: IRectLike, x: number, y: number, width: number, height: number, out?: IRectLike): Rect
    export function mulF(type: "Quat", first: IQuatLike, x: number, y: number, z: number, w: number, out?: IQuatLike): Quat
    export function mulF(type: "Color", first: IColorLike, r: number, g: number, b: number, a: number, out?: IColorLike): Color
    export function mulF(type: TValueType, first: IColorLike | IQuatLike | IRectLike | ISizeLike | IVec2Like | IVec3Like, ...args: any[]) {
        switch (type) {
            case "Vec2": {
                const x = args[0] * (first as IVec2Like).x;
                const y = args[1] * (first as IVec2Like).y;

                args[2] = vec2(x, y);

                return args[2];
            }
            case "Vec3": {
                const x = args[0] * (first as IVec3Like).x;
                const y = args[1] * (first as IVec3Like).y;
                const z = args[2] * (first as IVec3Like).z;

                args[3] = vec3(x, y, z);

                return args[3];
            }
            case "Size": {
                const width = args[0] * (first as ISizeLike).width;
                const height = args[1] * (first as ISizeLike).height;

                args[2] = size(width, height);

                return args[2];
            }
            case "Rect": {
                const x = args[0] * (first as IVec2Like).x;
                const y = args[1] * (first as IVec2Like).y;

                const width = args[2] * (first as ISizeLike).width;
                const height = args[3] * (first as ISizeLike).height;

                args[4] = rect(x, y, width, height);

                return args[4]
            }
            case "Color": {
                const r = args[0] * (first as IColorLike).r;
                const g = args[1] * (first as IColorLike).g;
                const b = args[2] * (first as IColorLike).b;
                const a = args[3] * (first as IColorLike).a;

                args[4] = color(r, g, b, a);

                return args[4];
            }
            case "Quat": {
                const x = args[0] * (first as IQuatLike).x;
                const y = args[1] * (first as IQuatLike).y;
                const z = args[2] * (first as IQuatLike).z;
                const w = args[3] * (first as IQuatLike).w;

                args[4] = quat(x, y, z, w);

                return args[4];
            }
        }
    }
}

export default _pMath
