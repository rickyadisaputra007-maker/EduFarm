// [PILAR 4: ABSTRACTION]
export abstract class HewanTernak {
  constructor(public nama: string, public jenis: string) {}
  abstract hitungPakanHarian(): number; 
}

// [PILAR 2: INHERITANCE]
export class Sapi extends HewanTernak {
  // [PILAR 1: ENCAPSULATION] PRIVED FIELD
  #beratBadan: number; 

  constructor(nama: string, beratBadan: number) {
    super(nama, 'Sapi');
    this.#beratBadan = beratBadan;
  }
// GET
  get berat(): number { return this.#beratBadan; }
// SETTER
  set berat(nilaiBaru: number) {
    if (nilaiBaru <= 0) throw new Error('Berat tidak boleh negatif!');
    this.#beratBadan = nilaiBaru;
  }

  // [PILAR 3: POLYMORPHISM]
  hitungPakanHarian(): number {
    return this.#beratBadan * 0.03;
  }
}