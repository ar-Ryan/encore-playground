FROM node:22-bullseye-slim 
  
WORKDIR /usr/src/app  

COPY . .

CMD ["tail", "-f", "/dev/null"]