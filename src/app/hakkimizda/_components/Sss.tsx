interface Props {
  sorular: string;
  cevaplar: string;
}

export const Sss = ({ sorular, cevaplar }: Props) => {
  return (
    <div>
      <div>{sorular}</div>
      <br />

      <div>{cevaplar}</div>
    </div>
  );
};
