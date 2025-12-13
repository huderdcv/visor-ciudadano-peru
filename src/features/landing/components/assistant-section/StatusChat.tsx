import { ChatStatus } from 'ai';

interface Status {
  status: ChatStatus;
}

export const StatusChat = ({ status }: Status) => {
  if (status === 'ready') {
    return (
      <p className="flex items-center gap-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-blue-500 font-semibold">Listo</span>
      </p>
    );
  } else if (status === 'submitted') {
    return (
      <p className="flex items-center gap-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
        </span>
        <span className="text-yellow-500 font-semibold">Pensando</span>
      </p>
    );
  } else if (status === 'streaming') {
    return (
      <p className="flex items-center gap-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-emerald-500 font-semibold">Respondiendo</span>
      </p>
    );
  } else if (status === 'error') {
    return (
      <p className="flex items-center gap-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="text-red-500 font-semibold">Error</span>
      </p>
    );
  }
};
