FROM node:16.11.1-buster-slim

WORKDIR /app

RUN apt-get update && \
    apt-get install -y git