type SolutionCardProps = {
  title: string;
  description: string;
  buttonText: string;
}

export const SolutionCard = ({title, description, buttonText}: SolutionCardProps) => {
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

