FROM node:22-bookworm

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# Install font dependencies & LibreOffice & Microsoft fonts
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    fontconfig \
    wget \
    cabextract \
    xfonts-utils \
    libreoffice \
    gnupg \
    software-properties-common && \
    echo "ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true" | debconf-set-selections && \
    apt-get install -y --no-install-recommends ttf-mscorefonts-installer && \
    apt-get clean && rm -rf /var/lib/apt/lists/* && \
    fc-cache -f -v
    
# Tambahkan font custom seperti Calibri, Bernard, Bodoni (harus legal dan disertakan dalam folder fonts/)
COPY src/fonts/ /usr/share/fonts/truetype/custom/
RUN fc-cache -f -v

# Node dependencies
COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
