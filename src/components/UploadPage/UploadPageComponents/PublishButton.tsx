import React from 'react'
import './PublishButton.scss'
import { motion } from "framer-motion";

const PublishButton = () => {
  return (
    <motion.div className="PublishButton" whileTap={{ scale: 0.95 }}>
      Publish to Drafts
    </motion.div>
  );
}

export default PublishButton
