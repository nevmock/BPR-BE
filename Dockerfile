FROM node:22

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# Install font dependencies dan LibreOffice
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    software-properties-common \
    fontconfig \
    wget \
    cabextract \
    xfonts-utils \
    libreoffice \
    && apt-add-repository multiverse && \
    apt-get update && \
    echo "ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true" | debconf-set-selections && \
    apt-get install -y ttf-mscorefonts-installer && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Tambahkan font custom seperti Calibri, Bernard, Bodoni (harus legal dan disertakan dalam folder fonts/)
COPY fonts/ /usr/share/fonts/truetype/custom/

# Update font cache
RUN fc-cache -f -v

# Node dependencies
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
