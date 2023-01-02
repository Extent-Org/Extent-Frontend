import React from 'react'
import './PublishButton.scss'
import { motion } from "framer-motion";

type Props = {
  uploadHandler: any
}

const PublishButton = ({ uploadHandler }: Props) => {
  return (
    <motion.div className="PublishButton" whileTap={{ scale: 0.95 }} onClick={() => uploadHandler()}>
      Publish to Drafts
    </motion.div>
  );
}

export default PublishButton
