"use client";
import { motion } from "framer-motion";
import { GitHubIcon } from "./Icons";
import { LinkedInIcon } from "./Icons";

export interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const TeamMember = ({
  name,
  role,
  bio,
  image,
}: TeamMemberProps) => (
  <motion.div
    className="relative group perspective-1000"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative preserve-3d group-hover:rotate-y-180 transition-transform duration-700 h-96">
      <div className="absolute inset-0 backface-hidden bg-gray-900 rounded-2xl p-6 border border-blue-400/20">
        <div className="relative overflow-hidden rounded-xl mb-6 h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-blue-400 text-sm mb-3">{role}</p>
      </div>

      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 rounded-2xl p-6 border border-blue-400/20">
        <div className="h-full flex flex-col justify-between">
          <p className="text-gray-300 text-sm mb-4">{bio}</p>
          <div className="flex justify-center space-x-4">
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              <GitHubIcon className="w-6 h-6" />
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              <LinkedInIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
