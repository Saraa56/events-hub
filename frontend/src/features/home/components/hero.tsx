import { IoSearch } from "react-icons/io5";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { Link } from "react-router-dom";

    export function Hero (){
        const categories = [
            "Corporativo",
            "Música",
            "Arte & Cultura",
            "Moda",
            "Beneficencia",
        ]

        return (
            <section className="relative bg-[url(./assets/fondo_hero.png)] bg-cover bg-center text-[#F0EAE4] text-center min-h-screen pb-50" >
                
             <div className="absolute inset-0 bg-[#060203]/90"></div>
                
                <div className="relative z-10 w-full">
                    <div className="pt-32">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-[#B5A89E]/20 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#B5A89E]/80">
                            <span className="h-1 w-1 rounded-full bg-[#E07856] "></span>
                            PLATAFORMA DE GESTIÓN DE EVENTOS
                        </div>

                        <h1 className="mt-6 text-5xl md:text-6xl  font-serif font-bold">
                            Cada evento, <br />
                            <span className="italic font-normal">perfectamente </span>
                            orquestado
                        </h1>

                        <p className="mt-6 max-w-5xl mx-auto text-sm  text-[#B5A89E]">
                            Crea, organiza y gestiona eventos desde una sola plataforma. Fechas, 
                            <br className="hidden md:block" />
                            aforo, asistentes y mucho más.
                        </p>
                    </div>

                   <form
                        action="submit"
                        method="get"
                        className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-2xl mx-auto gap-2 mt-8 px-4 sm:px-0"
                    >
                        <Input
                            type="search"
                            id="home_search"
                            placeholder="Buscar eventos, organizadores, ciudades..."
                            icon={IoSearch}
                            className="h-11 text-sm"
                        />

                        <Button
                            id="button_search"
                            type="submit"
                             className="h-11 w-full sm:w-auto px-6 py-0 whitespace-nowrap"
                            rounded="md"
                        >
                            Buscar →
                        </Button>
                    </form>
                    <nav className="flex justify-center flex-wrap mt-6 gap-3">
                        {categories.map((category) => (
                            <Link 
                            key={category} 
                            to="/explore"
                            className="inline-flex items-center border rounded-full px-2.5 py-1.5 text-xs text-[#B5A89E]/80 transition-all duration-200 hover:text-white hover:border-[#351C1D]">
                                {category}
                            </Link>
                        ))}
                    </nav>
                </div>
            </section>


        )
    }