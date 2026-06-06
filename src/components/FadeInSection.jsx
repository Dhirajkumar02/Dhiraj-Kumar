import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
    >
        {children}
    </motion.div>
);

export default FadeInSection;
