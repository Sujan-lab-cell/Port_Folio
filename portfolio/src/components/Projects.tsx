import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Cutting-edge AI/ML projects built with modern technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              <div className="h-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all">
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                  {/* Long Description */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      height: hoveredProject === project.id ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-300 text-sm mb-4 overflow-hidden"
                  >
                    {project.longDescription}
                  </motion.div>
                </div>

                {/* Technologies */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-slate-500/10 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                {Object.keys(project.metrics).length > 0 && (
                  <div className="px-6 pb-4 border-t border-white/5 pt-4">
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-cyan-400 font-semibold text-lg">{value}</div>
                          <div className="text-xs text-slate-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer with Links */}
                <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 hover:text-cyan-400 transition-all"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 hover:text-cyan-400 transition-all"
                        whileHover={{ scale: 1.2 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                  <motion.button
                    className="flex items-center gap-1 text-cyan-400 text-sm font-medium group/btn"
                    whileHover={{ gap: 8 }}
                  >
                    View Details
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
