FROM node:22

WORKDIR /app

# Tambahkan repo non-free dan contrib agar bisa install font Microsoft
RUN sed -i 's/main/main contrib non-free non-free-firmware/' /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y \
    software-properties-common \
    fontconfig \
    libreoffice \
    ttf-mscorefonts-installer \
    && fc-cache -f -v

# Copy file dependency dan install
COPY package*.json ./
RUN npm install

# Salin seluruh source code
COPY . .

# Build aplikasi
RUN npm run build

# Ubah port ke 5XXX untuk lingkungan development
EXPOSE 3000

CMD ["npm", "run", "start"]