"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Full Stack Online Grocery Store App",
    description: "React, Nextjs, Strapi Headless CMS,...",
    image:
      "https://cdn.buymeacoffee.com/uploads/rewards/2024-06-30/1/125807_banner.jpg@1200w_0e.jpg",
    price: 3,
    memberPrice: 2,
    category: "e-commerce",
  },
  {
    id: 2,
    title: "Full Stack E-Commerce Store",
    description: "React.js, Strapi Headless CMS & Stripe...",
    image:
      "https://cdn.buymeacoffee.com/uploads/rewards/2024-03-12/1/095030_main2.jpg@1200w_0e.jpg",
    price: 3,
    memberPrice: 2,
    category: "e-commerce",
  },
  {
    id: 3,
    title: "Responsive Restaurant Food Delivery Website",
    description: "React JS | HTML CSS &...",
    image:
      "https://cdn.buymeacoffee.com/uploads/rewards/2024-01-11/1/174129_kdn3xih9m711eydl0m340xmlnm6g.png@1200w_0e.png",
    price: 2,
    memberPrice: 1,
    category: "food",
  },
  {
    id: 4,
    title: "Modern Online Course Website",
    description: "React, Next.js & Tailwind CSS (Shaden...",
    image:
      "https://cdn.buymeacoffee.com/uploads/rewards/2024-05-08/1/102348_Untitled_design.jpg@1200w_0e.jpg",
    price: 2,
    memberPrice: 1,
    category: "education",
  },
  {
    id: 5,
    title: "Fully Responsive Modern Gym & Fitness Website",
    description: "React.js, Bootstrap,...",
    image:
      "https://cdn.buymeacoffee.com/uploads/rewards/2024-01-12/1/121554_gym_banner.jpg@1200w_0e.jpg",
    price: 2,
    memberPrice: 1,
    category: "fitness",
  },
  {
    id: 6,
    title: "The Best Responsive Navigation Bar",
    description: "Websites and Multiple E-Commerce...",
    image:
      "https://cdn.buymeacoffee.com/uploads/rewards/2024-04-17/1/073609_Cover.jpg@1200w_0e.jpg",
    price: 1,
    memberPrice: 1,
    category: "component",
  },
];

const DevPortfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      {/* ************************** */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Extras</h1>

        <div className="mb-6 text-center pb-16">
          <select
            className="bg-white border border-gray-300 rounded-md px-4 py-2"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="all">All Categories</option>
            <option value="e-commerce">E-Commerce</option>
            <option value="food">Food</option>
            <option value="education">Education</option>
            <option value="fitness">Fitness</option>
            <option value="component">Components</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer w-3/4 mx-auto">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${project.price}</span>
                  <span className="text-sm text-purple-600">
                    ${project.memberPrice} for members
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DevPortfolio;
