"use client";
import { motion } from "framer-motion";
import { TeamMember, TeamMemberProps } from "./TeamMember";

interface TeamSectionProps {
  teamMembers: TeamMemberProps[];
}

export const TeamSection = ({ teamMembers }: TeamSectionProps) => {
  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet the <span className="text-blue-400">Team</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our team of talented developers and designers working together to
            create exceptional experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
