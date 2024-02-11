import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "../../data/skills";
import { languages } from "../../data/languages";

export const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl font-bold text-blue-600">Skills</h2>
        <div className="mt-2 space-y-2">
          {skills.map((skill, index) => (
            <>
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
              </div>
              <div className="w-full md:w-64" key={index + 1}>
                <motion.h2
                  className="ms-3 italic text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.subtitle}
                </motion.h2>
              </div>
            </>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-600 font-bold mt-1 text-blue-600">Languages</h2>
          <div className="mt-2 space-y-2">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2.3 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};