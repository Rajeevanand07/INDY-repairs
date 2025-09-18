import {
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.01 }
};

// Data for the stats to make the component clean and reusable
const statsData = [
  {
    icon: WrenchScrewdriverIcon,
    value: '3+',
    label: 'Years of experience',
  },
  {
    icon: ClipboardDocumentListIcon,
    value: '12+',
    label: 'Ready expert team',
  },
  {
    icon: CogIcon,
    value: '24/7',
    label: 'Offline support',
  },
];

const StatsSection = () => {
  return (
    <motion.section className="bg-white py-16 sm:py-20" initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={fadeUp.viewport}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-1 gap-y-16 text-center md:grid-cols-3 md:gap-x-12 md:text-left">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={fadeUp.initial}
                whileInView={fadeUp.whileInView}
                viewport={fadeUp.viewport}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-red-gradient shadow-lg"
                  initial={fadeUp.initial}
                  whileInView={fadeUp.whileInView}
                  viewport={fadeUp.viewport}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                >
                  <IconComponent className="h-9 w-9 text-white" aria-hidden="true" />
                </motion.div>

                {/* Text Content */}
                <div className='flex flex-col items-center gap-y-3'>
                  {/* Value */}
                  <p className="text-5xl font-bold tracking-tight text-gray-900">
                    {stat.value}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-32 bg-gray-200" />

                  {/* Label */}
                  <p className="text-base leading-7 text-gray-500">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;