import SubHeader from "@/components/SubHeader";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10"> 
      <SubHeader /> 
      <main className="mt-11">{children}</main> 
    </div>
  );
}

