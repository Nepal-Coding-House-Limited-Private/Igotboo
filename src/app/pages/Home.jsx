import { motion } from 'framer-motion';
import Stories from '../components/Culture';
import PostCreator from '../components/Recomended';

const Home = () => {
  return (
    <div className="min-h-screen from-rose-50 to-pink-50">
      <main className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Stories />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PostCreator />
          </motion.div>

        
        </div>
      </main>
    </div>
  );
};

export default Home;
