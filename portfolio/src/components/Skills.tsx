import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Code2, Cpu, Package, Database, HardDrive, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: portfolioData.skills.programming,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'AI/ML Specialization',
      icon: Cpu,
      skills: portfolioData.skills.aiml,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Package,
      skills: portfolioData.skills.frameworks,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Development Tools',
      icon: Zap,
      skills: portfolioData.skills.tools,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      skills: portfolioData.skills.databases,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Core CS Concepts',
      icon: HardDrive,
      skills: portfolioData.skills.coreCS,
      color: 'from-pink-500 to-pink-600',
    },
  ];

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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Proficiency across multiple domains and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={20} className="text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioData.softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-center text-sm text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { label: 'Expert', color: 'from-green-500 to-green-600', width: 'w-full' },
            { label: 'Advanced', color: 'from-blue-500 to-cyan-500', width: 'w-5/6' },
            { label: 'Intermediate', color: 'from-yellow-500 to-orange-500', width: 'w-2/3' },
            { label: 'Learning', color: 'from-purple-500 to-pink-500', width: 'w-1/2' },
          ].map((proficiency, index) => (
            <motion.div key={index} className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-300">{proficiency.label}</span>
                <span className="text-xs text-slate-500">
                  {[100, 85, 70, 50][index]}%
                </span>
              </div>
              <motion.div
                className="h-2 bg-white/5 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${proficiency.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: proficiency.width }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
