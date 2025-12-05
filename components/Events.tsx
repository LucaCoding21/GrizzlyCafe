import React from 'react';
import { Calendar, Mic, Film, Music, Users, ArrowRight } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Poetry Night",
    description: "Share your words or just listen. Open mic for poets of all levels in a cozy, supportive space.",
    date: "Every Friday",
    time: "7:00 PM",
    icon: <Mic className="w-6 h-6" />,
    spots: "Limited seating"
  },
  {
    id: 2,
    title: "Cinema Club",
    description: "Indie film screenings followed by coffee and conversation. A perfect evening with fellow film lovers.",
    date: "2nd Saturday",
    time: "6:30 PM",
    icon: <Film className="w-6 h-6" />,
    spots: "20 spots"
  },
  {
    id: 3,
    title: "Live Acoustic",
    description: "Local musicians share their sound. Enjoy your favorite drink with live, intimate performances.",
    date: "Select Sundays",
    time: "4:00 PM",
    icon: <Music className="w-6 h-6" />,
    spots: "Open seating"
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-16 sm:py-24 bg-grizzly-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-grizzly-red/10 text-grizzly-red">
            <Calendar size={18} />
            <span className="font-bold text-sm uppercase tracking-wider">Community Events</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-grizzly-dark mb-4">
            Gather, Create, Connect.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            More than coffee. We host events that bring our community together. From poetry readings to film nights, there's always something happening at Grizzly.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-grizzly-red/10 flex items-center justify-center text-grizzly-red group-hover:bg-grizzly-red group-hover:text-white transition-colors">
                  {event.icon}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{event.spots}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-grizzly-dark mb-2 group-hover:text-grizzly-red transition-colors">
                {event.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm">
                  <p className="font-bold text-grizzly-dark">{event.date}</p>
                  <p className="text-gray-500">{event.time}</p>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-grizzly-red hover:gap-3 transition-all">
                  RSVP <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-grizzly-dark rounded-2xl p-8 sm:p-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-grizzly-red">
            <Users size={24} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Want to Host an Event?
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Have an idea for a community gathering? We love collaborating with local artists, groups, and creators. Let's make it happen.
          </p>
          <a
            href="mailto:events@grizzlycafe.ca"
            className="inline-flex items-center gap-2 px-6 py-3 bg-grizzly-red text-white font-bold rounded-full hover:bg-red-700 transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
