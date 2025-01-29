import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../../../components/Common/AuthButton";
import heart from "../../../assets/Images/heart_icon.png";

const interests = [
  { id: 1, name: "Music", icon: "🎵" },
  { id: 2, name: "Fashion", icon: "👗" },
  { id: 3, name: "Travel", icon: "✈️" },
  { id: 4, name: "Politics", icon: "🏛️" },
  { id: 5, name: "Game", icon: "🎮" },
  { id: 6, name: "Pets", icon: "🐾" },
  { id: 7, name: "Art", icon: "🎨" },
  { id: 8, name: "Photography", icon: "📸" },
  { id: 9, name: "Charity", icon: "🤝" },
  { id: 10, name: "Sports", icon: "🏅" },
  { id: 11, name: "Reading", icon: "📚" },
  { id: 12, name: "Cooking", icon: "🍳" },
  { id: 13, name: "Other", icon: "➕" },
];

const SixthStep = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      interests: [],
    },
  });

  const selectedInterests = watch("interests");

  const toggleInterest = (id) => {
    const updatedInterests = selectedInterests.includes(id)
      ? selectedInterests.filter((interest) => interest !== id)
      : [...selectedInterests, id];

    if (updatedInterests.length <= 3) {
      setValue("interests", updatedInterests);
    }
  };

  const onSubmit = (data) => {
    console.log("Selected Interests:", data.interests);
    setStep(7);
  };

  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
        Select up to 3 interests
      </h1>
      <p className="text-center text-sm font-Inter text-primaryYellow py-5">
        Tell us what piques your curiosity and passions
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
        <div className="bg-gradient-to-b flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
            {interests.map((interest) => (
              <button
                key={interest.id}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                  selectedInterests.includes(interest.id)
                    ? "bg-[#B27409] text-white"
                    : "bg-[#f7f1e4] text-[#B27409] border border-[#B27409]"
                } shadow-md hover:shadow-lg transition`}
                onClick={() => toggleInterest(interest.id)}
              >
                <span className="text-lg">{interest.icon}</span>
                {interest.name}
              </button>
            ))}
          </div>
        </div>
        {errors.interests && (
          <p className="mt-2 text-sm text-red-600">{errors.interests.message}</p>
        )}
        <div className="relative mt-5">
          <AuthButton type="submit" text="Continue" />
          <span className="absolute bottom-1.5 -right-5">
            <img src={heart} alt="" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SixthStep;
