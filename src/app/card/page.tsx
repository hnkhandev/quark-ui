import { CardShowcase } from "@/components/showcase/card-showcase";

export default function CardPage() {
  return (
    <>
      <h1 className="flex items-center w-full py-4 text-2xl font-bold text-primary">
        Card
      </h1>
      <CardShowcase />
    </>
  );
}
