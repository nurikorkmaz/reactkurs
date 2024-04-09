interface Props {
  tarihceBaslik: string;
  tarihceAciklama: string;
  referanslarBaslik: string;
  referanslar: string;
}

export const Bizkimiz = ({
  referanslar,
  referanslarBaslik,
  tarihceAciklama,
  tarihceBaslik,
}: Props) => {
  return (
    <div>
      <div>{tarihceBaslik}</div>
      <br />
      <div>{tarihceAciklama}</div>
      <br />
      <div>{referanslarBaslik}</div>
      <br />
      <div>{referanslar}</div>
    </div>
  );
};
