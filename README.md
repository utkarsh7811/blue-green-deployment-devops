# 🚀 Blue-Green Deployment using Docker & Nginx

## 📌 Overview

This project demonstrates zero-downtime deployment using the Blue-Green strategy. Two versions of an application run in separate Docker containers, and traffic is switched between them using Nginx without interrupting users.

## 🧠 Key Idea
- **Blue** → Current live version
- **Green** → New version
- Only one receives traffic at a time
- Instant switch + rollback supported

## 🏗️ Architecture
```
User → Nginx → Blue (v1)
               Green (v2)
```

## ⚙️ Tech Stack
- Docker
- Nginx
- Node.js
- Git & GitHub

## 🚀 How to Run

### Step 1: Build Docker Images
```bash
docker build -t app:v1 ./v1
docker build -t app:v2 ./v2
```

### Step 2: Create Network
```bash
docker network create bg-network
```

### Step 3: Run Containers
```bash
docker run -d --name blue --network bg-network app:v1
docker run -d --name green --network bg-network app:v2
```

### Step 4: Run Nginx
```bash
docker run -d --name nginx -p 9090:80 \
-v $(pwd)/nginx/nginx.conf:/etc/nginx/nginx.conf \
--network bg-network nginx
```

## 🔄 Switch Deployment

To switch traffic from one version to another:

### Edit the Nginx Configuration
Edit: `nginx/nginx.conf`

Change:
```nginx
server blue:8080;
```

➡️ to:

```nginx
server green:8080;
```

### Reload Nginx
```bash
docker exec nginx nginx -s reload
```

## 🔁 Rollback

Simply switch back to:
```nginx
server blue:8080;
```

## 📸 Output

- **Blue** → Hello from Version 1 (BLUE)
- **Green** → Hello from Version 2 (GREEN)

## 💡 Features

- ✅ Zero downtime deployment
- ✅ Instant rollback
- ✅ Container-based architecture
- ✅ No user interruption during updates

## 🎯 Real-World Use

Used by companies like Amazon, Netflix for safe deployments.

---

**Happy Deploying! 🎉**
