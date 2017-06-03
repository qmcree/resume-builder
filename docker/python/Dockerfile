FROM python:3.6

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get update && \
    apt-get install -y \
        postgresql-client \
        vim

COPY . .

CMD [ "python", "./manage.py", "runserver", "0.0.0.0:80" ]
