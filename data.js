/**
 * Graph Nodes & Relationships Definition
 * Easily extend or customize this data for your own projects and skills!
 */
const portfolioGraphData = {
  nodes: [
    // --- Projects ---
    {
      id: "proj-1",
      label: "CodeGraph Visualizer",
      group: "project",
      shape: "dot",
      size: 26,
      title: "Interactive Code & Architecture Graph",
      description: "An interactive dependency graph application to map codebases, services, and software architecture with interactive filtering and node exploration.",
      highlights: [
        "Dynamic force-directed graph rendering with Vis.js",
        "Bi-directional linking between UI gallery and graph network",
        "Categorized node clustering and search filtering"
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "proj-2",
      label: "Cloud Microservices Engine",
      group: "project",
      shape: "dot",
      size: 26,
      title: "Distributed Microservices Architecture",
      description: "A resilient distributed backend designed for scale, featuring real-time stream processing, message queues, and container orchestration.",
      highlights: [
        "Event-driven architecture with Kafka messaging",
        "Auto-scaling container services managed with Kubernetes",
        "gRPC high-speed internal service communications"
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "proj-3",
      label: "AI Semantic Search API",
      group: "project",
      shape: "dot",
      size: 26,
      title: "Vector Embeddings & Semantic Search",
      description: "Fast semantic document indexing and query engine powered by vector embeddings and high-performance ANN indexing.",
      highlights: [
        "Sub-15ms vector queries across 500k+ documents",
        "RAG (Retrieval Augmented Generation) pipeline integration",
        "Continuous indexing worker pipeline"
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "proj-4",
      label: "Realtime Collaboration Canvas",
      group: "project",
      shape: "dot",
      size: 26,
      title: "Multiplayer Web Canvas & Whiteboard",
      description: "Ultra-low-latency shared workspace using WebSockets and CRDTs for conflict-free concurrent editing.",
      highlights: [
        "Conflict-free replicated data types (CRDTs)",
        "Binary WebSocket protocols for ultra-low latency updates",
        "Optimistic UI rendering and state reconciliation"
      ],
      github: "https://github.com",
      demo: "#"
    },

    // --- Skills / Languages / Frameworks ---
    { id: "skill-ts", label: "TypeScript", group: "skill", shape: "dot", size: 18, description: "Strongly typed superset of JavaScript used across frontend and backend services." },
    { id: "skill-react", label: "React / Next.js", group: "skill", shape: "dot", size: 18, description: "Modern reactive frontends, SSR, component design systems, and state handling." },
    { id: "skill-python", label: "Python", group: "skill", shape: "dot", size: 18, description: "Backend development, vector embeddings, ML pipelines, and API services." },
    { id: "skill-go", label: "Golang", group: "skill", shape: "dot", size: 18, description: "High-throughput concurrent backend systems, microservices, and network tooling." },
    { id: "skill-node", label: "Node.js", group: "skill", shape: "dot", size: 18, description: "Event-driven asynchronous server runtimes and REST/WebSocket APIs." },
    { id: "skill-docker", label: "Docker & K8s", group: "skill", shape: "dot", size: 18, description: "Containerization, service meshes, helm charts, and Kubernetes orchestration." },
    { id: "skill-postgres", label: "PostgreSQL", group: "skill", shape: "dot", size: 18, description: "Relational database modeling, complex indexing, JSONB storage, and optimization." },
    { id: "skill-redis", label: "Redis", group: "skill", shape: "dot", size: 18, description: "In-memory caching, pub/sub queues, and distributed session storage." },

    // --- Architecture & Concepts ---
    { id: "concept-crdt", label: "CRDTs & WebSockets", group: "concept", shape: "dot", size: 14, description: "Realtime synchronization algorithms and bidirectional communications." },
    { id: "concept-rag", label: "Vector DB & RAG", group: "concept", shape: "dot", size: 14, description: "Vector similarity search, embeddings, and context-augmented retrieval." },
    { id: "concept-grpc", label: "gRPC & Protocol Buffers", group: "concept", shape: "dot", size: 14, description: "Contract-first schema definition and binary RPC serialization." },
    { id: "concept-graph", label: "Graph Theory & ASTs", group: "concept", shape: "dot", size: 14, description: "Code intelligence, graph traversals, and abstract syntax trees." },
    { id: "concept-kafka", label: "Kafka & Event Streaming", group: "concept", shape: "dot", size: 14, description: "Log-centric event broker architectures and replayable event pipelines." }
  ],
  edges: [
    // Proj 1: CodeGraph Visualizer connections
    { from: "proj-1", to: "skill-ts", label: "built with" },
    { from: "proj-1", to: "skill-react", label: "uses" },
    { from: "proj-1", to: "concept-graph", label: "implements" },

    // Proj 2: Cloud Microservices Engine connections
    { from: "proj-2", to: "skill-go", label: "core" },
    { from: "proj-2", to: "skill-docker", label: "deployed on" },
    { from: "proj-2", to: "concept-grpc", label: "protocols" },
    { from: "proj-2", to: "concept-kafka", label: "streaming" },
    { from: "proj-2", to: "skill-postgres", label: "stores data in" },

    // Proj 3: AI Semantic Search API connections
    { from: "proj-3", to: "skill-python", label: "core" },
    { from: "proj-3", to: "concept-rag", label: "engine" },
    { from: "proj-3", to: "skill-redis", label: "caching" },
    { from: "proj-3", to: "skill-docker", label: "containerized" },

    // Proj 4: Realtime Collaboration Canvas connections
    { from: "proj-4", to: "skill-ts", label: "frontend & backend" },
    { from: "proj-4", to: "skill-node", label: "server runtime" },
    { from: "proj-4", to: "concept-crdt", label: "sync protocol" },
    { from: "proj-4", to: "skill-redis", label: "pub/sub presence" },

    // Cross-concept / Skill relations
    { from: "skill-react", to: "skill-ts", dashes: true },
    { from: "skill-node", to: "skill-ts", dashes: true },
    { from: "concept-kafka", to: "concept-grpc", dashes: true },
    { from: "concept-rag", to: "skill-postgres", dashes: true }
  ]
};

