FROM alpine

RUN apk add --update nodejs npm

COPY ./js .

RUN npm install --no-save

ENTRYPOINT ["node", "http.js"]
