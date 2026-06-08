import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { MapPin, Calendar, BookOpen, Target } from 'lucide-react';

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-center text-slate-400 mb-12">AI/ML Engineer | Problem Solver | Technology Enthusiast</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Career Objective */}
            <motion.div
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Career Objective</h3>
              <p className="text-slate-300 leading-relaxed">{portfolioData.about.careerObjective}</p>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <Target size={20} />
                Current Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.currentFocus.map((focus, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm border border-cyan-500/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    {focus}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education */}
            <motion.div
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white">{portfolioData.about.education.degree}</p>
                  <p className="text-sm text-slate-400">{portfolioData.about.education.institution}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-slate-500">{portfolioData.about.education.years}</span>
                    <span className="text-sm text-cyan-400">CGPA: {portfolioData.about.education.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <MapPin size={20} />
                Location
              </h3>
              <p className="text-slate-300">{portfolioData.location}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              year: '2021',
              title: 'Pre-University',
              description: 'Started academic journey with excellence',
            },
            {
              year: '2023',
              title: 'B.Tech Enrollment',
              description: 'Began AI/ML Engineering degree',
            },
            {
              year: '2024-Present',
              title: 'Active Development',
              description: 'Building AI projects & gaining experience',
            },
          ].map((milestone, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/50"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{milestone.title}</h4>
              <p className="text-sm text-slate-400">{milestone.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
