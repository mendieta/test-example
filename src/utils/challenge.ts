export enum Specialty {
  INTERNAL_MEDICINE = "INTERNAL_MEDICINE",
  CARDIOLOGY = "CARDIOLOGY",
}

interface Doctor {
  birthDate: Date;
  name: string;
  lastName: string;
  cellphone: string;
  email: string;
  specialty: Specialty;
}

let token: string | null = null;

export function isDoctorElegible(doctor: Doctor): boolean {
  const age =  Math.abs(new Date(Date.now() - doctor?.birthDate.getTime()).getUTCFullYear() - 1970);
  if (age < 60 && doctor?.specialty === Specialty.INTERNAL_MEDICINE) {
    return true;
  }
  return false;
}

export const reporter = {
  log() {
    return "Button tapped";
  },
};

export function loggedIn(): string | null {
  if (token) {
    return token;
  }
  return null;
}

export function login(email: string, password: string) {
  // Here you can make a call to your backend to check if the user is valid
  // and then gives a token
  // For now we just validate if both are not empty
  if (email !== "" && password !== "") {
    token = "abc123";
  }

  return token;
}

export function logout(): string | null {
  if (loggedIn()) {
    token = null;
  }
  return token;
}