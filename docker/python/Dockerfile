FROM python:3.6

WORKDIR /usr/src/app

# Add keyboard configuration, so that xorg can be installed non-interactively.
COPY ./keyboard /etc/default/
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt-get install -y \
        postgresql-client \
        vim \
        # Required for wkhtmltox
        openssl \
        build-essential \
        xorg \
        libssl-dev && \
    # Remove caches to keep image size low
    rm -rf /var/lib/apt/lists/*

# Download and install wkhtmltox
RUN wget https://downloads.wkhtmltopdf.org/0.12/0.12.4/wkhtmltox-0.12.4_linux-generic-amd64.tar.xz && \
    tar -xJf wkhtmltox-0.12.4_linux-generic-amd64.tar.xz && \
    rm wkhtmltox-0.12.4_linux-generic-amd64.tar.xz && \
    chown root:root wkhtmltox/bin/wkhtmltopdf && \
    cp -r wkhtmltox/* /usr/

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 80
CMD [ "python", "./manage.py", "runserver", "0.0.0.0:80" ]
