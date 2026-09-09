    export function Hero (){
        return (
            <section className="bg-[#060203] text-[#F0EAE4] text-center min-h-screen" >
                <div className="py-32 ">
                   <div className="inline-flex items-center gap-2 rounded-full border border-[#B5A89E]/30 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#B5A89E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E07856]"></span>
                PLATAFORMA DE GESTIÓN DE EVENTOS
                </div>
                    <h1 className="mt-6 text-5xl md:text-7xl  font-serif font-bold">Cada evento,
                        <br />
                        <span className="italic font-normal">perfectamente</span> orquestado

                    </h1>        

                        <p className="mt-6 max-w-5xl mx-auto  text-[#B5A89E]">
                            Crea, organiza y gestiona eventos desde una sola plataforma. Fechas, 
                             <br className="hidden md:block" />
                            aforo, asistentes y mucho más.
                        </p>
                </div>
                
            </section>
        )
    }