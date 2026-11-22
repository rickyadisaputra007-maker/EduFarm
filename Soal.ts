// [Modul 4: Union Type & Polymorphism]
export type Soal = 
  | { id: number; tipe: 'pg'; pertanyaan: string; pilihan: string[]; jawabanBenar: number; }
  | { id: number; tipe: 'bs'; pertanyaan: string; jawabanBenar: boolean; };