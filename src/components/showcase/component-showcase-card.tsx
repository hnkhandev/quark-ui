export function ComponentShowcaseCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex border justify-center items-center min-h-[300px] rounded-lg border-zinc-200 dark:border-zinc-800">
      {children}
    </div>
  );
}
