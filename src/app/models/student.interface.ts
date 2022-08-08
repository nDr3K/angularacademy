export interface Student {
    name: string;
    surname: string;
    age: number;
    region: StudentRegion;
    city: string;
}

export type StudentRegion =
| "Piemonte"
| "Lombardia"
| "Veneto"
| "Emilia Romagna"
| "Toscana"
| "Campania"
| "Puglia"
| "Sicilia";

export type PartialStudent = Partial<Student>;
export type RequiredStudent = Required<Student>;
export type ReadonlyStudent = Readonly<Student>;
export type NamedStudent = Pick<Student, "name" | "surname">;
export type OmitStudent = Omit<Student, "age" | "city" | "region">;