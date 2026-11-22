// [PILAR 3: POLYMORPHISM] - Union Type
export type UserRole = 'peternak' | 'umum';

// [PILAR 4: ABSTRACTION] - Interface
export interface User {
  id: string;
  nama: string;
  email: string;
  password?: string; 
  namaKandang: string;
  role: UserRole;
}