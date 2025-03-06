# Prime Framework Website

[![Deploy to GitHub Pages](https://github.com/yourusername/prime-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/prime-website/actions/workflows/deploy.yml)

A modern, interactive website for the Universal Object References (UOR) Framework, showcasing mathematical concepts, theorems, and applications across various domains.

## 📋 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Development Environment Setup](#development-environment-setup)
    - [Option 1: Using VS Code and Dev Containers (Recommended)](#option-1-using-vs-code-and-dev-containers-recommended)
    - [Option 2: Local Development Setup](#option-2-local-development-setup)
- [Development Workflow](#development-workflow)
  - [Running the Website Locally](#running-the-website-locally)
  - [Making Changes](#making-changes)
  - [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Documentation Guidelines](#documentation-guidelines)
- [Technical Details](#technical-details)
- [License](#license)

## Overview

The Prime Framework website presents the Universal Object References (UOR) theory, which aims to unify mathematics, physics, AI, and computation. The site features interactive visualizations, explanations at various complexity levels, and explorations of applications across different domains.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/downloads) for version control
- One of the following setups:
  - [VS Code](https://code.visualstudio.com/) with [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension (recommended)
  - [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for dev container usage)
  - [Node.js](https://nodejs.org/) (v16 or later) and npm (for local development)

### Development Environment Setup

#### Option 1: Using VS Code and Dev Containers (Recommended)

This method provides a consistent development environment for all contributors, regardless of their local setup.

1. **Install Required Software**:
   - Install [VS Code](https://code.visualstudio.com/)
   - Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
   - Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/prime-website.git
   cd prime-website
   ```

3. **Open in VS Code**:
   ```bash
   code .
   ```

4. **Start Dev Container**:
   - If you don't have the Dev Containers extension installed yet:
     1. Click on the Extensions icon in the left sidebar (or press `Ctrl+Shift+X`)
     2. Search for "Remote - Containers"
     3. Click "Install" on the "Remote - Containers" extension by Microsoft
     4. You may need to reload VS Code after installation

   - To open the project in a container:
     1. When VS Code prompts to "Reopen in Container", click "Reopen in Container"
     2. Alternatively, click on the green icon in the bottom-left corner of VS Code, or press `F1`
     3. Type "Remote-Containers: Reopen in Container" and press Enter
     4. The first launch may take a few minutes as Docker builds the container

   - If you need to rebuild the container at any time:
     1. Press `F1` to open the command palette
     2. Type "Remote-Containers: Rebuild Container" and press Enter
     3. This is useful if you modify the devcontainer configuration or need a fresh environment

5. **You're Ready!** The container includes all necessary dependencies and tools.

#### Option 2: Local Development Setup

If you prefer not to use containers or are unable to:

1. **Install Node.js and npm**:
   - Download and install from [nodejs.org](https://nodejs.org/) (v16 or later recommended)

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/prime-website.git
   cd prime-website
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Development Workflow

### Running the Website Locally

Start the development server:

```bash
npm start
```

This will:
- Start a local server at http://localhost:3000
- Serve files from the `src` directory
- Automatically reload the page when you make changes

### Making Changes

1. **File Structure**: All source files are in the `src` directory
2. **HTML**: Edit `src/index.html` or create new pages in `src/pages/`
3. **CSS**: Modify styles in `src/assets/css/`
4. **JavaScript**: Update scripts in `src/assets/javascript/`
5. **Assets**: Add images, icons, etc. to their respective folders in `src/assets/`

### Project Structure

```
prime-website/
├── src/                  # Source files (edit these)
│   ├── assets/           # Static assets
│   │   ├── css/          # Stylesheets
│   │   ├── javascript/   # JavaScript files
│   │   ├── images/       # Images
│   │   └── icons/        # Icons and SVGs
│   ├── index.html        # Main HTML file
│   └── pages/            # Additional pages
├── dist/                 # Built files (generated, don't edit)
├── .github/              # GitHub configuration
│   └── workflows/        # GitHub Actions workflows
├── .devcontainer/        # Dev container configuration
├── .vscode/              # VS Code settings
└── package.json          # Project configuration
```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment process:

1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the site (copies files from `src` to `dist`)
5. Deploys to GitHub Pages

To manually trigger a deployment, go to the Actions tab in the GitHub repository and run the "Deploy to GitHub Pages" workflow.

## Contributing

1. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**: Edit files in the `src` directory

3. **Test Locally**:
   ```bash
   npm start
   ```

4. **Commit Changes**:
   ```bash
   git add .
   git commit -m "Add your meaningful commit message"
   ```

5. **Push to GitHub**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**: Go to the repository on GitHub and create a pull request

## Documentation Guidelines

When adding content to the website:

- **Mathematical Content**: Ensure accuracy and provide explanations at multiple complexity levels
- **Interactive Elements**: Include clear instructions for user interaction
- **Images and Diagrams**: Use descriptive alt text for accessibility
- **Code Comments**: Document complex JavaScript functions, especially for visualizations

## Technical Details

- **Framework**: Pure HTML, CSS, and JavaScript
- **Libraries**:
  - Bootstrap 5.3.3 for responsive layout
  - Three.js for 3D visualizations
  - jQuery for DOM manipulation
- **Styling**: Custom CSS with Bootstrap components
- **Visualizations**: Custom Three.js implementations for galaxy effects

## License

[MIT License](LICENSE)