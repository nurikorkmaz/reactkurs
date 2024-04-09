import Image from "next/image";

interface Props {
  baslik: string;
  altBaslik: string;
  resimSrc: string;
  resimAlt: string;
  cta: string;
}

export const Hero = ({ altBaslik, baslik, resimSrc, resimAlt, cta }: Props) => {
  return (
    <div>
      <div>{baslik}</div>
      <div>{altBaslik}</div>
      <Image src={resimSrc} alt={resimAlt} width={250} height={250} />
      <button>{cta}</button>
    </div>
  );
};
