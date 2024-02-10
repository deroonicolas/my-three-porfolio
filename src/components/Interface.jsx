import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useForm, ValidationError } from '@formspree/react';

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-3xl md:text-4xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <p className="bg-white px-1 mt-1 italic">Nicolas Deroo</p>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I am a software engineer since 2010
        <br />
        I design, develop, and test software applications
        <br />
        and computer systems
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Java / J2EE",
    subtitle: "Struts, Spring",
  },
  {
    title: "Html5 / Css3, Bootstrap",
  },
  {
    title: "Php / Mysql",
  },
  {
    title: "Javascript / jQuery",
  },
  {
    title: "Continuous Integration",
    subtitle: "Maven, Jenkins, Git, CI/CD",
  },
  {
    title: "React",
  },
  {
    title: "Symfony",
  }
];
const languages = [
  {
    title: "🇫🇷 French",
  },
  {
    title: "🇺🇸 English",
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Skills</h2>
        <div className="mt-5 space-y-2">
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
          <h2 className="text-lg md:text-3xl md:text-4xl font-bold mt-5 text-blue-600">Languages</h2>
          <div className="mt-5 space-y-2">
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

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex mt-24 w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mleqjqgn");
  return (
    <Section>
      <h2 className="text-3xl font-bold">Contact me</h2>
      <div className="mt-8 p-4 rounded-md bg-white bg-opacity-50 md:bg-opacity-100 w-96 max-w-full">
          {state.succeeded ? (
            <p className="text-gray-900 text-center">Thanks for your message !</p>
          ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-3"
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              prefix="Email" 
              field="email"
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-3"
            >
              Message *
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
              <ValidationError
                className="mt-1 text-red-500"
                errors={state.errors}
            />
            <button  disabled={state.submitting} className="bg-indigo-600 text-white py-2 px-8 rounded-lg font-bold text-lg mt-6 ">
              Submit
            </button>
          </form>
        )}   
      </div>
    </Section>
  );
};
