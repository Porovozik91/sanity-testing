"use client";
import { useRouter } from "next/navigation";

type Seksjon = "introduksjon" | "prosjekter" | "eventer";

const SubHeader: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (seksjon: Seksjon) => {
    router.push(`/home/${seksjon}`, { scroll: false });
  };

  return (
    <nav className="flex justify-center gap-5">
      {(["introduksjon", "prosjekter", "eventer"] as Seksjon[]).map((seksjon) => (
        <button
          key={seksjon}
          className="text-white px-10 py-2 border rounded"
          onClick={() => handleNavigation(seksjon)}
        >
          {seksjon.charAt(0).toUpperCase() + seksjon.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default SubHeader;



