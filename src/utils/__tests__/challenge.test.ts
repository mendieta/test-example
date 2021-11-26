import { Specialty, isDoctorElegible, reporter, login, loggedIn, logout } from "~/utils/challenge";

const doctorElegible = {
  birthDate: new Date("06/24/1993"),
  name: "Justin",
  lastName: "Bieber",
  cellphone: "+525511223344",
  email: "justin@bieber.com",
  specialty: Specialty.INTERNAL_MEDICINE,
}

const doctorNotElegibleBirthDate = {
  birthDate: new Date("06/24/1955"),
  name: "Freddie",
  lastName: "Mercury",
  cellphone: "+525511223344",
  email: "freddie@queen.com",
  specialty: Specialty.INTERNAL_MEDICINE,
}

const doctorNotElegibleForSpecialty = {
  birthDate: new Date("06/24/1955"),
  name: "James",
  lastName: "Franco",
  cellphone: "+525511223344",
  email: "james@franco.com",
  specialty: Specialty.CARDIOLOGY,
}

describe("challenges", () => {
    beforeAll(() => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date(2021, 11, 26));
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    describe("is doctor elegible challenge", () => {
        it('should accept the doctor', () => {
            expect(isDoctorElegible(doctorElegible)).toEqual(true);
        });
        it('should reject by age', () => {
            expect(isDoctorElegible(doctorNotElegibleBirthDate)).toEqual(false);
        });
        it('should reject by specialty', () => {
            expect(isDoctorElegible(doctorNotElegibleForSpecialty)).toEqual(false);
        });
    });

    describe('reporter challenge', () => {
      test('get reporter value', () => {
        const spy = jest.spyOn(reporter, 'log');
        const isPlaying = reporter.log();
      
        expect(spy).toHaveBeenCalled();
        expect(isPlaying).toBe("Button tapped");
      
        spy.mockRestore();
      });
      test('avoid incorrect value', () => {
        const spy = jest.spyOn(reporter, 'log');
        const isPlaying = reporter.log();
      
        expect(spy).toHaveBeenCalled();
        expect(isPlaying).not.toBe("Button not tapped");
      
        spy.mockRestore();
      });
    });

    describe('auth challenge', () => {
        it('is not logged in', () => {
          expect(loggedIn()).toEqual(null);
        });
        it('cant be logged out because its not logged in', () => {
          expect(logout()).toEqual(null);
        });
        it('login successfully', () => {
          expect(login("test@testing.com", "admin12345")).toEqual("abc123");
        });
        it('is logged in', () => {
          expect(loggedIn()).toEqual("abc123");
        });
        it('is logged out', () => {
          expect(logout()).toEqual(null);
        });
        it(' fails with wrong credentials', () => {
          // It only fails when the credentials are empty
          expect(login("", "")).toEqual(null);
        });
    });
});