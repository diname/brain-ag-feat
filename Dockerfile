FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000

RUN npm run build

ENV TZ='America/Sao_Paulo'

RUN ls -l dist || echo "dist não existe"

CMD ["npm", "run", "start:prod"]