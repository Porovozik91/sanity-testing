import { client } from "@/sanity/lib/client";  // Bruk riktig importsti
import Introduksjon from "@/components/Introduksjon";
import Prosjekter from "@/components/Prosjekter";
import Eventer from "@/components/Eventer";

interface Props {
  seksjon: string;
}

export default async function SeksjonPage({ params }: { params: { seksjon: string } }) {
  const query = `*[_type == "${params.seksjon}"]{ title, content, slug }`; // Dynamisk spørring
  const data = await client.fetch(query);

  switch (params.seksjon) {
    case 'introduksjon':
      return <Introduksjon data={data} />;
    case 'prosjekter':
      return <Prosjekter data={data} />;
    case 'eventer':
      return <Eventer data={data} />;
    default:
      return <h1>404 - Seksjon ikke funnet</h1>;
  }
}




