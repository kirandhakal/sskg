import { BedDouble, ConciergeBell } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background/95 backdrop-blur-sm" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-28 w-32 items-end justify-center rounded-t-[2rem] border-2 border-brand bg-card px-4 pb-4 shadow-xl shadow-brand/15">
          <div className="absolute -top-3 h-3 w-20 rounded-t-full border-x-2 border-t-2 border-accent bg-muted" />
          <div className="grid w-full grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((room) => (
              <span key={room} className="h-4 rounded-sm bg-accent/25 animate-[hotel-room_1.2s_ease-in-out_infinite]" style={{ animationDelay: `${room * 100}ms` }} />
            ))}
          </div>
          <div className="absolute -bottom-5 grid h-11 w-11 place-items-center rounded-full border-2 border-accent bg-brand text-primary-foreground shadow-lg shadow-brand/20">
            <BedDouble className="h-5 w-5" aria-hidden="true" />
          </div>
          <ConciergeBell className="absolute -right-8 -top-4 h-7 w-7 text-accent animate-[hotel-bell_1.1s_ease-in-out_infinite]" aria-hidden="true" />
        </div>
        <div className="mt-4 h-1 w-24 overflow-hidden rounded-full bg-brand/10">
          <div className="h-full w-1/2 rounded-full bg-accent animate-[loading-bar_0.8s_ease-in-out_infinite]" />
        </div>
        <span className="sr-only">Loading Syangja Khaja Ghar</span>
      </div>
    </div>
  );
}
