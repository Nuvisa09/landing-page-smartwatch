import TestimonialCard from "./testimonial-card";

export function TestimonialSection() {
  return (
    <section className="mb-20 py-30 bg-[#FFCB61] px-8 lg:px-0 ">
      <h2 className="text-3xl font-bold text-center mb-20 text-slate-800 lg:text-5xl">
        What They Say
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TestimonialCard
          imageSrc="/images/avatar-1.png"
          name="Sarah L."
          role="Fitness Enthuasiast"
          quote="This watch the way I work out. The data is incredibly accurate andhelps me push my limits safely. Plus, it looks so stylish!"
          color="bg-[#EFE4D2]"
        />
        <TestimonialCard
          imageSrc="/images/avatar-2.png"
          name="Mike R."
          role="Tech Blogger"
          quote="I've reviewed dozens of smartwatches, and this one stands out. The build quality is premium, the software is snappy, and the battery is beast."
          color="bg-[#EFE4D2]"
        />
      </div>
    </section>
  );
}
