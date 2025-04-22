export function useProducts() {
  const products = [
    {
      id: 1,
      title: "Smart Analytics Platform",
      description: "Advanced analytics solution with real-time data processing and visualization capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/products/smart-analytics"
    },
    {
      id: 2,
      title: "Cloud Security Suite",
      description: "Comprehensive security solution for protecting your cloud infrastructure and applications.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/products/cloud-security"
    },
    {
      id: 3,
      title: "AI Development Kit",
      description: "Tools and frameworks for building and deploying artificial intelligence solutions.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/products/ai-development"
    },
    {
      id: 4,
      title: "Enterprise IoT Platform",
      description: "Connect, monitor, and manage all your IoT devices from a single, unified platform.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/products/iot-platform"
    }
  ];

  return {
    products
  };
}
