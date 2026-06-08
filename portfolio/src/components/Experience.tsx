import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Professional experience and accomplishments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {portfolioData.experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ x: 10 }}
            >
              {/* Timeline connector */}
              <div className="absolute left-6 top-10 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="flex gap-4">
                  {/* Timeline dot */}
                  <motion.div
                    className="relative pt-1 flex-shrink-0"
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 ring-4 ring-slate-900 shadow-lg"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <motion.span
                        className="flex items-center gap-1 text-slate-400 text-sm mt-2 sm:mt-0"
                        whileHover={{ gap: 6 }}
                      >
                        <Calendar size={16} />
                        {exp.date} • {exp.duration}
                      </motion.span>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-4">
                      {exp.description.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex gap-2 text-slate-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ChevronRight size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          <div className="space-y-6">
            {[
              {
                degree: portfolioData.about.education.degree,
                institution: portfolioData.about.education.institution,
                year: portfolioData.about.education.years,
                cgpa: portfolioData.about.education.cgpa,
              },
              {
                degree: portfolioData.about.preUniversity.degree,
                institution: portfolioData.about.preUniversity.institution,
                year: portfolioData.about.preUniversity.years,
                cgpa: portfolioData.about.preUniversity.grade,
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-cyan-400">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm">{edu.year}</p>
                    <p className="text-cyan-400 font-semibold">{edu.cgpa}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
