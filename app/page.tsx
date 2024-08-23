export default function Home() {
  return (
    <div className="sm:p-10 p-5">
      <div className="w-full border bg-muted flex flex-col justify-center items-center gap-5 py-14">
        <p className="inline-flex text-sm justify-start items-center gap-2 bg-green-200 dark:bg-green-950/50 border border-green-500 py-2 px-3 rounded-2xl">
          Welcome to Net Builder
        </p>
        <p className="text-5xl font-semibold text-center">
          Easily create your network configurations with <span className="text-primary">Net</span>Builder
        </p>
        <p className="text-center text-muted-foreground sm:px-32 px-10">
          Get the exact commands you need for your routers, switches, and Layer 2 and 3 protocols. Save time and
          avoid mistakes—start building your network today!
        </p>
      </div>
    </div>
  );
}
