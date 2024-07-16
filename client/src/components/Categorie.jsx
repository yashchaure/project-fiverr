import React from "react";
import { Link } from "react-router-dom";

const categorie = [
  {
    id: 1,
    icon: <i class="ri-computer-line"></i>,
    title: "Programming and Tech",
  },
  {
    id: 2,
    icon: <i class="ri-paragraph"></i>,
    title: "Graphics and Design",
  },
  {
    id: 3,
    icon: <i class="ri-smartphone-line"></i>,
    title: "Digital Marketing",
  },
  {
    id: 4,
    icon: <i class="ri-pencil-line"></i>,
    title: "Written and Translation",
  },
  {
    id: 5,
    icon: <i class="ri-organization-chart"></i>,
    title: "AI Services",
  },
  {
    id: 6,
    icon: <i class="ri-music-line"></i>,
    title: "Music and Audio",
  },
  {
    id: 7,
    icon: <i class="ri-group-line"></i>,
    title: "Buissness",
  },
  {
    id: 8,
    icon: <i class="ri-user-heart-line"></i>,
    title: "Consulting",
  },
];
const Categorie = () => {
  return (
    <div className="flex items-center justify-center">
      {categorie.map((cat) => {
        return (
          <Link to="/gigs">
            <div
              key={cat.id}
              className="border shadow-gray-dark shadow-md w-32 h-32 p-4 m-2 rounded-xl border-gray-dark"
            >
              <span className="text-2xl my-2">{cat.icon}</span>
              <h4 className="text-gray-dark text-md font-semibold">
                {cat.title}
              </h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Categorie;
