# Base image for Node.js development using Debian Bookworm
FROM node:22-bookworm

# Build args for versioning
ARG CLAUDE_CODE_VERSION=latest

# Install system dependencies
# Using Bookworm (Debian 12) means 'gh' is in the default repositories
RUN apt-get update && apt-get install -y --no-install-recommends \
    gh \
    git \
    curl \
    wget \
    vim \
    nano \
    less \
    procps \
    fzf \
    zsh \
    man-db \
    unzip \
    gnupg2 \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Install Bun (as root, then make available for node user)
RUN curl -fsSL https://bun.sh/install | bash \
    && mv /root/.bun/bin/bun /usr/local/bin/bun \
    && chmod +x /usr/local/bin/bun

# Install Playwright dependencies
RUN npx playwright install-deps

# Ensure default node user has access to npm global directory
RUN mkdir -p /usr/local/share/npm-global && \
    chown -R node:node /usr/local/share

# Persist bash history for Claude Code
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && mkdir /commandhistory \
    && touch /commandhistory/.bash_history \
    && chown -R node /commandhistory

# Create workspace and Claude config directories
RUN mkdir -p /home/node/.claude && \
    chown -R node:node /home/node/.claude

# Set up sudo permissions for node user
RUN mkdir -p /etc/sudoers.d \
    && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node \
    && chmod 0440 /etc/sudoers.d/node

# Set `DEVCONTAINER` environment variable
ENV DEVCONTAINER=true

# Switch to node user for user-specific installations
USER node

# Set up npm global path
ENV NPM_CONFIG_PREFIX=/usr/local/share/npm-global
ENV PATH=$PATH:/usr/local/share/npm-global/bin

# Set up shell environment
ENV SHELL=/bin/zsh
ENV EDITOR=nano
ENV VISUAL=nano

# Install Claude Code as node user
RUN npm install -g @anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}

# Install Gemini CLI as node user
RUN npm install -g @google/gemini-cli

# Install OpenAI Codex CLI as node user
RUN npm install -g @openai/codex

# Set working directory
WORKDIR /workspaces/personal_webpage

# Expose port for Astro dev server
EXPOSE 4321