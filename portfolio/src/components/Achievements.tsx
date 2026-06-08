import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Award, Trophy, Star } from 'lucide-react';

const Achievements: React.FC = () => {
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
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications & Awards
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Professional recognitions and accomplishments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {portfolioData.achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 hover:border-yellow-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Trophy size={24} className="text-white" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-yellow-400 text-sm font-medium mb-2">{achievement.issuer}</p>
                  <p className="text-slate-400 text-sm mb-2">{achievement.description}</p>
                  <span className="text-xs text-slate-500">{achievement.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <Star size={24} />
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(portfolioData.languages).map(([language, proficiency]) => (
              <motion.div
                key={language}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-white font-semibold capitalize mb-2">{language}</p>
                <p className="text-cyan-400 text-sm">{proficiency}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Award size={24} className="text-cyan-400" />
            Key Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Deep Learning Expertise',
                description: 'Proficient in TensorFlow, PyTorch, and advanced neural network architectures',
              },
              {
                title: 'Computer Vision Mastery',
                description: 'Expert in YOLOv8, segmentation models, and real-time detection systems',
              },
              {
                title: 'NLP & Transformers',
                description: 'Strong foundation in T5, BERT, and multilingual NLP applications',
              },
              {
                title: 'Data Engineering',
                description: 'Data preprocessing, feature engineering, and pipeline development',
              },
            ].map((strength, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">{strength.title}</h4>
                <p className="text-slate-400 text-sm">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
