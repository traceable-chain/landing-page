import { SolutionCard } from "../components/Solutions/SolutionCard";

const SOLUTIONS = [
  {
    title: "Traceability",
    description: "Complete traceability of your processes and products. Take control of your supply chain. Track and trace your products from the source to the consumer. Ensure the quality and authenticity of your products.",
    buttonText: "Learn More"
  },
  {
    title: "Blockchain and IoT",
    description: "Taking advantage of the latest technologies to provide you with the best solutions. Blockchain and IoT combined to provide you with the best traceability and security.",
    buttonText: "Learn More"
  },
  {
    title: "Analytics",
    description: "Get insights from your data. Understand your processes and products. Improve your operations and make data-driven decisions.",
    buttonText: "Learn More"
  }
]

export default function Solutions(){
  return (
    <div className="h-full flex flex-col justify-center items-center -mt-32">
      <h1 className="text-5xl font-bold p-4 py-12 text-center">Providing Unstoppable Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-12 py-10">
        {SOLUTIONS.map((solution, index) => (
          <SolutionCard key={index} title={solution.title} description={solution.description} buttonText={solution.buttonText} />
        ))}
      </div>
    </div>
  );
}
