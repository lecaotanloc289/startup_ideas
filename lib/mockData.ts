const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Adrian" },
      _id: 1,
      description:
        "Exploring the future of robotics and automation in daily life.",
      image:
        "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=1200&auto=format&fit=crop",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 120,
      author: { _id: 2, name: "Lilianna" },
      _id: 2,
      description:
        "A deep dive into the world of artificial intelligence and its impact.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      category: "AI",
      title: "AI Revolution",
    },
    {
      _createdAt: new Date(),
      views: 200,
      author: { _id: 3 },
      _id: 3,
      description: "How startups are transforming the fintech industry.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop",
      category: "Finance",
      title: "Fintech Startups",
    },
    {
      _createdAt: new Date(),
      views: 89,
      author: { _id: 4 },
      _id: 4,
      description: "Clean energy solutions shaping the sustainable future.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
      category: "Energy",
      title: "Green Energy",
    },
    {
      _createdAt: new Date(),
      views: 42,
      author: { _id: 5 },
      _id: 5,
      description:
        "The role of space exploration in advancing human knowledge.",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
      category: "Space",
      title: "Journey to Mars",
    },
    {
      _createdAt: new Date(),
      views: 310,
      author: { _id: 6 },
      _id: 6,
      description:
        "Innovations in healthcare powered by digital transformation.",
      image:
        "https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Health",
      title: "Digital Health",
    },
    {
      _createdAt: new Date(),
      views: 450,
      author: { _id: 7 },
      _id: 7,
      description: "The rise of blockchain beyond cryptocurrency applications.",
      image:
        "https://plus.unsplash.com/premium_photo-1714618942735-5f1585da8b88?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Blockchain",
      title: "Blockchain Beyond Crypto",
    },
    {
      _createdAt: new Date(),
      views: 75,
      author: { _id: 8 },
      _id: 8,
      description:
        "Building a career in the fast-growing world of data science.",
      image:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1200&auto=format&fit=crop",
      category: "Data Science",
      title: "Career in Data Science",
    },
    {
      _createdAt: new Date(),
      views: 66,
      author: { _id: 9 },
      _id: 9,
      description: "Smart cities and how IoT is changing urban living.",
      image:
        "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1200&auto=format&fit=crop",
      category: "IoT",
      title: "Smart Cities",
    },
    {
      _createdAt: new Date(),
      views: 150,
      author: { _id: 10 },
      _id: 10,
      description: "The impact of VR and AR in education and training.",
      image:
        "https://plus.unsplash.com/premium_photo-1682124646455-be09fb54efea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW1tZXJzaXZlJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
      category: "VR/AR",
      title: "Immersive Learning",
    },
  ];