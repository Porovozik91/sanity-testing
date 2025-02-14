import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home/introduksjon"); 
  return null;
}

