type ContactInfo = {
    email: string;
    phone: string;
    address?: string;
};

type GuardianInfo = {
    name: string;
    relationship: string;
    contactInfo: ContactInfo;
};

type AcademicPerformance = {
    subject: string;
    grade: string;
};

export type Student = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    class: string;
    enrollmentDate: string;
    contactInfo: ContactInfo;
    guardianInfo: GuardianInfo;
    academicPerformance: AcademicPerformance[];
};