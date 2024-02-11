import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
//import { projects } from "../data/projects";

export const projects = [
  {
    title: "SNCF Hours with React",
    url: "https://sncf.deroonicolas.eu/",
    image: "projects/sncf.png",
    description: "Check your train's departures and arrivals",
  },
  {
    title: "Image Gallery with Angular",
    url: "https://galerie-images.deroonicolas.eu/",
    image: "projects/galerie.png",
    description: "Share your images with your friends and family",
  },
  {
    title: "Garage site with Symfony",
    url: "https://garage.deroonicolas.eu/",
    image: "projects/garage.png",
    description: "Garage site for hours, services, testimonials and cars management",
  },
  {
    title: "My CV with Javascript",
    url: "https://curriculum.deroonicolas.eu/",
    image: "projects/curriculum.png",
    description: "My Curriculum Vitae : Presentation, skills and education",
  },
  {
    title: "CyberInfo-Connect with BS",
    url: "https://cyberinfo-connect.deroonicolas.eu/",
    image: "projects/cyberinfo.png",
    description: "Showcase site for a freelance friend",
  },
];

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 3]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.8}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, 0, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-1, -0.5, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};


export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 -0.9}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 3,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
