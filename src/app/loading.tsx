export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background/95 backdrop-blur-sm" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-5">
        <div className="relative grid h-24 w-24 place-items-center rounded-full border-2 border-accent/35 bg-card p-2 shadow-xl shadow-brand/15">
          <div className="absolute inset-[-7px] rounded-full border-2 border-transparent border-t-accent animate-spin" />
          <img src="/logo.png" alt="" className="h-full w-full rounded-full object-cover" />
        </div>
        <div className="h-1 w-20 overflow-hidden rounded-full bg-brand/10">
          <div className="h-full w-1/2 rounded-full bg-accent animate-[loading-bar_0.8s_ease-in-out_infinite]" />
        </div>
        <span className="sr-only">Loading Syangja Khaja Ghar</span>
      </div>
    </div>
  );
}
