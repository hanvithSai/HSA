"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Research() {
  return (
    <section
      id="research"
      className="py-20 bg-surface-light dark:bg-surface-dark"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-text-light dark:text-text-dark"
        >
          Research Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background-light dark:bg-background-dark rounded-lg p-8 shadow-lg max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full text-primary-light dark:text-primary-dark flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                Efficient Decision-Making: Deep Q-Networks for Reinforcement
                Learning
              </h3>
              <p className="text-primary-light dark:text-primary-dark mt-2">
                Presented at the International Conference on Computational
                Mathematics and Applications (ICCMA 2025)
              </p>
              <p className="text-text-light/80 dark:text-text-dark/80 mt-1">
                NIT Silchar - January 16 - 18, 2025
              </p>
              <p className="text-text-light dark:text-text-dark mt-4">
                The paper explores the application of Deep Q-Networks in
                reinforcement learning, comparing their performance with Monte
                Carlo methods in both simple and complex environments using
                Gazebo simulations. This experience gave me hands-on exposure in
                machine learning and empirical evaluation in AI research.
              </p>
            </div>
          </div>
        </motion.div>

        {/* New survey entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-background-light dark:bg-background-dark rounded-lg p-8 shadow-lg max-w-3xl mx-auto mt-8"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full text-primary-light dark:text-primary-dark flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                Wildfire Detection Using AI-Enabled Drones: A Comprehensive
                Survey
              </h3>
              <p className="text-primary-light dark:text-primary-dark mt-2">
                Survey — Consolidating AI/ML models, edge compute strategies, and
                hardware for real-world deployment
              </p>
              <p className="text-text-light/80 dark:text-text-dark/80 mt-1">
                2025
              </p>
              <p className="text-text-light dark:text-text-dark mt-4">
                A comprehensive survey paper covering advances in AI models for
                wildfire detection, onboard inference and edge compute
                optimizations, sensor and hardware selections for drones,
                networking and latency concerns, datasets and evaluation
                metrics, and practical deployment challenges and best practices
                for monitoring and early warning systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
