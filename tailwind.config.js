/**
 * Tailwind CSS configuration file
 * Inspired by Apple Design
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        // Define your Apple-style color palette
        "space-gray": '#4A4A4A',
        "silver": '#C0C0C0',
        "white": '#FFFFFF',
        "black": '#000000',
      },
      spacing: {
        // Define spacing similar to Apple products
        "5": '1.25rem',
        "10": '2.5rem',
      },
      borderRadius: {
        // Smooth rounded corners
        "large": '12px',
        "medium": '8px',
      },
    },
  },
  variants: {},
  plugins: [],
};