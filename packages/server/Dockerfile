FROM node:18 as base
WORKDIR /app

# corepack is an experimental feature in Node.js v20 which allows
# installing and managing versions of pnpm, npm, yarn
RUN corepack enable
RUN pnpm config --global set store-dir /pnpm-store

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#RUN npm i nodemon -g
COPY package*.json ./
RUN pnpm i 
RUN pnpm i nodemon 
# Bundle app source
#COPY . .

# Conditionally choose the startup command based on NODE_ENV
#CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run dev; else npm start; fi" ]
FROM base AS start
ENTRYPOINT [ "pnpm", "run", "start" ]

FROM base AS dev
ENTRYPOINT [ "pnpm", "run", "dev" ]
