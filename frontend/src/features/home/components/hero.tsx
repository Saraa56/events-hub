import { IoSearch } from "react-icons/io5";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

    export function Hero (){
        return (
            <section className="relative bg-[url(./assets/fondo_hero.png)] bg-cover bg-center text-[#F0EAE4] text-center min-h-screen" >
                
             <div className="absolute inset-0 bg-[#060203]/90"></div>
                
                <div className="relative z-10">
                    <div className="py-32 ">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#B5A89E]/30 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#B5A89E]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#E07856]"></span>
                            PLATAFORMA DE GESTIÓN DE EVENTOS
                        </div>

                        <h1 className="mt-6 text-5xl md:text-7xl  font-serif font-bold">
                            Cada evento, <br />
                            <span className="italic font-normal">perfectamente </span>
                            orquestado
                        </h1>

                        <p className="mt-6 max-w-5xl mx-auto  text-[#B5A89E]">
                            Crea, organiza y gestiona eventos desde una sola plataforma. Fechas, 
                            <br className="hidden md:block" />
                            aforo, asistentes y mucho más.
                        </p>
                    </div>

                    <form action="submit" method="get" className="flex flex-grow max-w-2xl mx-auto gap-4">
                        <Input  
                        type="search"
                        id="home_search"
                        placeholder="Buscar eventos, organizadores, ciudades..."
                        icon={IoSearch}
                        className=""
                        />
                        <Button 
                        id={"button_search"}
                        >Buscar</Button>
                    </form>
                </div>
            </section>


        )
    }