import Image from "next/image";
import Link
 from "next/link";
export default function Prodotti() {
  return (
    <>
    <h1>Ciao a tutti, da pagina prodotti</h1>
    <Link href={"/"} className="bg-red-800 p-5 border-1 rounded-3xl block mt-4 ml-10 w-30 text-center">Home Page</Link>
</>
  );
}