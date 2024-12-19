export default function NotFound() {
  return (
    <div className="w-full p-12 h-[calc(100dvh-80px)] flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl font-bold">404 Not Found</h1>

      <p className="mt-1 text-md">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
