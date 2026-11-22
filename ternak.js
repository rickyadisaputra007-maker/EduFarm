var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Sapi_beratBadan;
// [PILAR 4: ABSTRACTION]
export class HewanTernak {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }
}
// [PILAR 2: INHERITANCE (PEWARISAN)]
export class Sapi extends HewanTernak {
    constructor(nama, beratBadan) {
        super(nama, 'Sapi');
        // [Encapsulation]
        _Sapi_beratBadan.set(this, void 0);
        __classPrivateFieldSet(this, _Sapi_beratBadan, beratBadan, "f");
    }
    // [Modul 2: Getter] Mengambil nilai private
    get berat() {
        return __classPrivateFieldGet(this, _Sapi_beratBadan, "f");
    }
    // [Modul 5: Setter & Validasi] Memastikan data tidak negatif
    set berat(nilaiBaru) {
        if (nilaiBaru <= 0) {
            throw new Error('Berat tidak boleh negatif atau nol!');
        }
        __classPrivateFieldSet(this, _Sapi_beratBadan, nilaiBaru, "f");
    }
    // [Modul 3: Method Overriding]
    hitungPakanHarian() {
        return __classPrivateFieldGet(this, _Sapi_beratBadan, "f") * 0.03; // 3% dari berat
    }
}
_Sapi_beratBadan = new WeakMap();
