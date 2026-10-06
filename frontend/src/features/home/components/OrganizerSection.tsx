import Button from "../../../components/ui/Button";
import type { Event } from "../../events/types/event.types";


interface EventCardProps {
    event: Event;
}


export function OrganizerSection({ event }: EventCardProps) {
    const percentage = (event.participants / event.capacity) * 100;
    return (
        <section className="grid border-y border-border bg-[#100605]  py-5">
            <div className="text-[#F0EAE4] ">
            <header>
                <p>Para organizadores</p>
                <h1>Control total desde un solo panel</h1>
            </header>

            <p>
            Administra fechas, horarios, ubicaciones, capacidades y listas de asistentes. Visualiza métricas en tiempo real y gestiona cada detalle.
            </p>

            <div>
                <ul>
                    <li>Registro y control de asistentes</li>
                    <li>Gestión de capacidad y afor</li>
                    <li>Reportes y análisis avanzados</li>
                    <li>Búsqueda y filtrado inteligente</li>
                </ul>
            </div>

            <Button 
            id={"home_inicio"}
            rounded="xs">Empezar gratis</Button>
           </div>

           <div className="flex justify-end items-center">
            <article className="overflow-hidden rounded-md border border-[#B5A89E]/20 bg-[#100605] text-[#F0EAE4]">

            <img
                src="/src/assets/organizadores1.png"
                alt={event.title}
                className="w-100 h-100"
            />

            <div className="p-6">

                <div className="flex justify-between">
                    <span>{event.category}</span>
                    <span>{event.status}</span>
                </div>

                <h3 className="mt-4 text-2xl font-serif font-bold">
                    {event.title}
                </h3>

                <time className="mt-3 block">
                    {event.date}
                </time>

                <p className="mt-2">
                    {event.location}
                </p>

                <div className="mt-6">
                    <div className="flex justify-between">
                        <span>Participantes</span>

                        <span>
                            {event.participants} / {event.capacity}
                        </span>
                    </div>

                    <div className="mt-2 h-2 w-full rounded-full bg-[#351C1D]">
                        <div
                            className="h-full rounded-full bg-[#E07856]"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>

                    <p className="mt-1 text-right text-sm">
                        {percentage.toFixed(0)}%
                    </p>
                </div>

            </div>
         </article>
      </div>
    </section>
    );
}