import { motion } from "framer-motion";
import { useState } from "react";

export default function SpringStiffnessDemo() {
  const [toggle, setToggle] = useState(false);

  const commonProps = {
    animate: { x: toggle ? 300 : 0 },
    initial: false,
    transition: { type: "spring", damping: 20 },
    style: {
      width: 50,
      height: 50,
      marginBottom: 20,
      background: "#4f46e5",
      borderRadius: 10,
    },
  };

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => setToggle((prev) => !prev)}
        style={{ marginBottom: 40, padding: '8px 16px' }}
      >
        Toggle
      </button>

      <motion.div {...commonProps} transition={{ ...commonProps.transition, stiffness: 50 }}>
        <p style={{ color: "white", textAlign: "center", margin: 0 }}>50</p>
      </motion.div>
      <motion.div {...commonProps} transition={{ ...commonProps.transition, stiffness: 150 }}>
        <p style={{ color: "white", textAlign: "center", margin: 0 }}>150</p>
      </motion.div>
      <motion.div {...commonProps} transition={{ ...commonProps.transition, stiffness: 300 }}>
        <p style={{ color: "white", textAlign: "center", margin: 0 }}>300</p>
      </motion.div>
      <motion.div {...commonProps} transition={{ ...commonProps.transition, stiffness: 700 }}>
        <p style={{ color: "white", textAlign: "center", margin: 0 }}>700</p>
      </motion.div>
    </div>
  );
}
