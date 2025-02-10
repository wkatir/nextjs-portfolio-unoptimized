import Image from "next/image";
import { companies, education } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Education = () => {
  return (
    <div className="py-20" id="education">
      <h1 className="heading">
        An overview of <span className="text-purple">my academic journey</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards
          items={education}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image src={img} alt={name} width={40} height={40} className="md:w-10 w-5" />
              <Image src={nameImg} alt={name} width={96} height={40} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
