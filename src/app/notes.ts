export class Notes {
  private judulNote : String;
  private isiNote : String;
  private tglDibuat : Date;

  constructor(judul : String, isi : String, tgl : Date) {
    this.judulNote = judul
    this.isiNote = isi
    this.tglDibuat = tgl
  }
}