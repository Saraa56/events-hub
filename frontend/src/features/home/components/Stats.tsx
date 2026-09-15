export function Stats() {
    return (
        <section className="border-y border-border bg-[#100605] py-5">
            <dl className="grid grid-cols-2 md:grid-cols-4 px-6 text-center">
                <div>
                     <dt className="text-2xl font-serif font-bold text-[#F0EAE4]">2,400+</dt>
                    <dd className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[#B5A89E]">Eventos gestionados</dd>
                </div>

                <div>
                    <dt className="text-2xl font-serif font-bold text-[#F0EAE4]">180K</dt>
                    <dd className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[#B5A89E]">Asistentes registrados</dd>
                </div>

                <div>
                    <dt className="text-2xl font-serif font-bold text-[#F0EAE4]">340</dt>
                    <dd className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[#B5A89E]">Organizadores</dd>
                </div>

                <div>
                    <dt className="text-2xl font-serif font-bold text-[#F0EAE4]">28</dt>
                    <dd className="mt-1 text-[10px] font-mono uppercase tracking-widest text-[#B5A89E]">Ciudades</dd>
                </div>
            </dl>
        </section>
    );
}