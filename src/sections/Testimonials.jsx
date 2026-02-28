import { Brain, Rocket, Cloud, Code } from "lucide-react";

const learningItems = [
  {
    title: "Next.js & Server Components",
    description: "Building modern full-stack React applications.",
    icon: Rocket,
  },
  {
    title: "Advanced React Patterns",
    description: "Improving performance and scalability in large apps.",
    icon: Code,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Strengthening problem-solving for technical interviews.",
    icon: Brain,
  },
  {
    title: "AWS & Cloud Deployment",
    description: "Learning to deploy and scale production apps.",
    icon: Cloud,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-secondary-foreground
            text-sm font-medium tracking-wider
            uppercase animate-fade-in"
          >
            What I'm Learning
          </span>

          <h2
            className="text-4xl md:text-5xl
            font-bold mt-4 mb-6 animate-fade-in
            animation-delay-100 text-secondary-foreground"
          >
            Currently improving my{" "}
            <span className="font-algerian font-normal text-white">
              skills.
            </span>
          </h2>
        </div>

        {/* Learning Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass p-6 rounded-2xl glow-border
                hover:-translate-y-1 transition-all duration-300
                animate-fade-in"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};