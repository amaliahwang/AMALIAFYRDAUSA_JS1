let anggota = "Teahyung";

switch (anggota) {
  case "RM":
    console.log("Leader BTS");
    break;
  case "JHope":
  case "Suga":
    console.log("Raper BTS");
    break;
  case "Teahyung":
  case "Jin":
  case "Jimin":
  case "Jungkook":  
    console.log("Vokal BTS");
    break;
  default:
    console.log("Anggota tidak valid");
}