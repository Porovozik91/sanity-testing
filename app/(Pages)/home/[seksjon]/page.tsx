'use client';  

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Introduksjon from "@/components/Introduksjon";
import Prosjekter from "@/components/Prosjekter";
import Eventer from "@/components/Eventer";
import { useParams } from "next/navigation"; 


interface IntroduksjonData {
  _id: string;
  title: string;
  content: string;
  slug?: { current: string };
}

export default function SeksjonPage() {
  const params = useParams();
  const seksjon = params?.seksjon ? decodeURIComponent(params.seksjon as string) : null;

  const [data, setData] = useState<IntroduksjonData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!seksjon) return;

    const query = `*[_type == "${seksjon}"]{ title, content, slug, _id }`;

   
    client.fetch<IntroduksjonData[]>(query).then((result) => {
      setData(Array.isArray(result) ? result : [result]);
      setLoading(false);
    });

    const subscription = client.listen(query).subscribe((update) => {
      if (update.result) {
        const resultData = Array.isArray(update.result) ? update.result : [update.result];
    
        setData(resultData as IntroduksjonData[]);
      }
    });
    

    return () => subscription.unsubscribe();
  }, [seksjon]);

  if (!seksjon) return <h1>404 - Seksjon ikke funnet</h1>;
  if (loading) return <p>Laster innhold...</p>;

  switch (seksjon) {
    case "introduksjon":
      return <Introduksjon data={data} />;
    case "prosjekter":
      return <Prosjekter data={data} />;
    case "eventer":
      return <Eventer data={data} />;
    default:
      return <h1>404 - Seksjon ikke funnet</h1>;
  }
}



