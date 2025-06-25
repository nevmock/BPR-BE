# Gunakan Node.js versi 22 berbasis Debian
FROM node:22

# Set working directory di dalam container
WORKDIR /app

# Install dependencies yang dibutuhkan
RUN apt-get update && apt-get install -y \
    wget \
    tar \
    libglib2.0-0 \
    libxinerama1 \
    libgl1 \
    libxrandr2 \
    libxrender1 \
    libfontconfig1 \
    libfreetype6 \
    libsm6 \
    libice6 \
    libxext6 \
    libx11-6 \
    libxau6 \
    libxdmcp6 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxft2 \
    libxi6 \
    libxt6 \
    libxmu6 \
    libxpm4 \
    && apt-get clean

# Unduh dan instal LibreOffice 25.2.4.3 (Fresh)
RUN wget https://download.documentfoundation.org/libreoffice/stable/25.2.4/deb/x86_64/LibreOffice_25.2.4_Linux_x86-64_deb.tar.gz && \
    tar -xvzf LibreOffice_25.2.4_Linux_x86-64_deb.tar.gz && \
    dpkg -i LibreOffice_25.2.4.3_Linux_x86-64_deb/DEBS/*.deb && \
    rm -rf LibreOffice_25.2.4*

# Copy file dependency dan install
COPY package*.json ./
RUN npm install

# Salin seluruh source code
COPY . .

# Build aplikasi
RUN npm run build

# Ubah port ke 5XXX untuk lingkungan development
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start"]