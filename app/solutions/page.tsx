type SolutionCardProps = {
  title: string;
  description: string;
  buttonText: string;
}

const SolutionCard = ({title, description, buttonText}: SolutionCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-8 bg-gray-300 bg-opacity-25 rounded-lg">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg h-32">
        {description}
      </p>
      <button className="w-fit bg-gradient-to-r from-blue-700 to-blue-900 hover:opacity-[0.7] text-lg text-white  mt-8 py-2 px-8 rounded-lg">
        {buttonText}
      </button>
    </div>
  );
}

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
