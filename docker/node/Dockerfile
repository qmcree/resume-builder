FROM node:6.10

RUN npm install --global yarn

# Install packages using Yarn
COPY package.json yarn.lock /tmp/
RUN cd /tmp && \
    yarn install

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

CMD if [ ! -d "./node_modules/" ]; then \
        echo 'Copying node_modules...' && \
        cp -R /tmp/node_modules/ . \
    fi && \
    echo 'Copying package.json and yarn.lock...' && \
    cp /tmp/package.json . && \
    cp /tmp/yarn.lock . && \
    echo 'Running start script...' && \
    yarn start