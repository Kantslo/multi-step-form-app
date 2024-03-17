import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  );
}
