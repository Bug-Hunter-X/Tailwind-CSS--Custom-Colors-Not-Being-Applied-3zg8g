# Tailwind CSS Custom Colors Not Applied

This repository demonstrates a common issue when working with custom colors in Tailwind CSS.  Despite correctly defining a color in `tailwind.config.js`, the color isn't applied in the compiled CSS.

The `bug.js` file contains the incorrect configuration. The `bugSolution.js` file shows the correct way to fix it.

## Steps to Reproduce

1.  Clone the repository.
2.  Run `npm install` to install the necessary dependencies.
3.  Observe that the custom color `theme-color` is not applied correctly in the generated CSS.
4.  Review the corrected configuration in `bugSolution.js` to see how the issue is resolved.

## Solution

The solution involves ensuring your `tailwind.config.js` file is correctly configured and that Tailwind is processing your content files.  See `bugSolution.js` for a working example. 