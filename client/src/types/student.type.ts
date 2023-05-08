interface ContactInfo {
    email: string;
    phone: string;
    address?: string;
}

interface GuardianInfo {
    name: string;
    relationship: string;
    contactInfo: ContactInfo;
}

interface AcademicPerformance {
    subject: string;
    grade: string;
}

export interface Student {
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
}

export interface StudentState {
    students: Student[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | undefined;
}
