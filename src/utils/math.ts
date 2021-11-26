export function sum(value1: number, value2: number): number {
    return value1 + value2;
}

export function lerp(min: number, max: number, t: number): number {
    return min * (1 - t) + max * t;
}

export function toRadians(angle: number): number {
    return angle * (Math.PI / 180);
}

export function round(value: number): number {
    return Math.round(value);
}
