# Gunakan Node.js versi 22 berbasis Debian
FROM node:22

# Non-interaktif untuk instalasi
ENV DEBIAN_FRONTEND=noninteractive

# Set working directory di dalam container
WORKDIR /app

# Install LibreOffice, font dependencies, dan Microsoft Core Fonts
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    software-properties-common \
    fontconfig \
    wget \
    cabextract \
    xfonts-utils \
    libreoffice \
    && apt-add-repository multiverse \
    && apt-get update && \
    echo "ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true" | debconf-set-selections && \
    apt-get install -y ttf-mscorefonts-installer && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Tambahkan font custom dari folder lokal ke image
# Pastikan kamu punya folder fonts/ dengan .ttf seperti Bernard, Calibri, Bodoni
COPY fonts/ /usr/share/fonts/truetype/custom/

# Update font cache agar dikenali sistem
RUN fc-cache -f -v

# Copy file dependency dan install
COPY package*.json ./
RUN npm install

# Salin seluruh source code
COPY . .

# Build aplikasi
RUN npm run build

# Expose port 3000 (ubah jika perlu)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start"]
