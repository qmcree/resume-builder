FROM node:6.10

RUN npm install --global yarn

# Install packages using Yarn
COPY package.json yarn.lock /tmp/
RUN cd /tmp && \
    yarn install

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

CMD cp -R /tmp/node_modules/ . && \
    cp /tmp/package.json . && \
    yarn start