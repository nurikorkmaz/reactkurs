interface Props {
  urunBasligi: string;
  aciklama: string;
  stok: number;
}

export const Urun = ({ aciklama, stok, urunBasligi }: Props) => {
  console.log(aciklama);

  return (
    <div>
      <div>{urunBasligi}</div>
      <div>{aciklama}</div>
      <div>stok :{stok}</div>
      <button>sepete ekle</button>
      <br />
      <br />
    </div>
  );
};
