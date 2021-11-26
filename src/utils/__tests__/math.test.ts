import {lerp, round, sum, toRadians} from "~/utils/math";

describe("math", () => {
    describe("sum", () => {
        it('should sum correctly 1 +2', () => {
            expect(sum(1, 2)).toEqual(3);
        });
    });

    describe("round", () => {
        it('should round correctly 1.2 to 1', () => {
            expect(round(1.2)).toEqual(1);
        });
        it('should round correctly 1.4 to 1', () => {
            expect(round(1.4)).toEqual(1);
        });
        it('should round correctly 1.5 to 2', () => {
            expect(round(1.5)).toEqual(2);
        });
        it('should round correctly 1.8 to 2', () => {
            expect(round(1.8)).toEqual(2);
        });
    });

    describe('toRadians', () => {
        it('should convert 360 degrees to radians', () => {
            expect(toRadians(360)).toEqual(6.283185307179586);
        });
        it('should convert 0 degrees to radians', () => {
            expect(toRadians(0)).toEqual(0);
        });
        it('should convert 180 degrees to radians', () => {
            expect(toRadians(180)).toEqual(3.141592653589793);
        });
    });

    describe('lerp', () => {
        it('should lerp correctly 0,10 at 0.1', () => {
            expect(lerp(0, 10, 0.1)).toEqual(1);
        });
        it('should lerp correctly 10,20 at 0.2', () => {
            expect(lerp(10, 20, 0.2)).toEqual(12);
        });
    });
});
