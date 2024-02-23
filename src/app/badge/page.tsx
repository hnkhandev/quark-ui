import { BadgeShowcase } from "@/components/showcase/badge-showcase";

export default function BadgePage() {
  return (
    <>
      <h1 className="flex items-center w-full py-4 text-2xl font-bold text-primary">
        Badge
      </h1>
      <BadgeShowcase />
    </>
  );
}
