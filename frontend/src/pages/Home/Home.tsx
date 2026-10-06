
import { EventCard } from "../../features/events/components/EventCard";
import { Hero } from "../../features/home/components/Hero";
import { Stats } from "../../features/home/components/Stats";
import { events } from "../../features/events/data/events.mock";
import  { OrganizerSection} from "../../features/home/components/OrganizerSection";

export default function Home() {
    const MAX_CARDS = 3;
    return (
        <>
            <Hero />
            <Stats />
            <section className="px-6 py-16 bg-[#060203] text-[#F0EAE4]">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {events.slice(0, MAX_CARDS).map((event) => (
                        <EventCard
                            key={event.title}
                            event={event}
                        />
                    ))}
                </div>
            </section>
            <OrganizerSection event={events[0]} />
        </>
    )
}
