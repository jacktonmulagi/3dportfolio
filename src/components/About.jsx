import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I'm a skilled software developer with experience in various technologies, including system administration, WordPress development, Laravel development, and full-stack development. In my role as a system administrator at Epitech systems, I was responsible for installing and configuring computer hardware, software, and networking systems, monitoring system performance, managing user accounts and access permissions, and maintaining data backups and disaster recovery plans. As a WordPress developer, I developed custom themes and plugins, customized website appearance and functionality, and implemented security measures to protect WordPress websites from cyber threats. As a Laravel developer at Shantech systems, I developed web applications using Laravel and PHP, created and maintained relational databases, implemented user authentication and authorization systems, and optimized application performance. Most recently, as a frontend developer and full-stack developer at Africom Media Limited, I translated UI/UX designs into high-quality code, developed responsive web pages and user interfaces using modern front-end frameworks, integrated web APIs and external libraries, and built scalable and high-performance web applications using Spring Boot, Java, and Node.js. Throughout my career, I have collaborated with other developers, designers, and project managers to ensure timely project delivery and client satisfaction.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
