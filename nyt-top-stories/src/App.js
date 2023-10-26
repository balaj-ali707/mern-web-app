import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/top-stories").then((response) => {
      setStories(response.data);
    });
  }, []);

  function calDate(createdDate) {
    const months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateAndTime = createdDate.split("T");
    const date = dateAndTime[0];
    const splitDate = date.split("-");

    const Date = `${months[splitDate[1] - 1]}, ${splitDate[2]}`;
    return Date;
  }

  return (
    <div className="bg-slate-50 h-full">
      <div className="w-full flex items-center sticky z-50 bg-orange-500 text-white shadow-gray-400 shadow-md">
        <img
          src="./BalajAli.jpeg"
          alt="Balaj Ali"
          className="p-2 ml-10 w-24 h-24 rounded-full object-cover object-bottom"
        />
        <h1 className="ml-5 text-center text-4xl font-semibold">Balaj Ali</h1>
      </div>
      <h2 className="my-10 text-5xl font-bold text-center">
        New York Times Top Stories
      </h2>

      <div className="container mx-auto grid grid-cols-3">
        {stories.map((story) => {
          return (
            <div className="bg-white m-2 shadow-gray-900 hover:shadow-md">
              <div key={story.url}>
                <a href={story.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={story.multimedia[0].url}
                    alt={story.title}
                    className="h-80 w-full my-2 mx-auto object-contain object-center"
                  />
                  <h2 className="text-[10px] font-bold mx-2 mt-2">
                    {story.section.toUpperCase()},{" "}
                    {story.subsection.toUpperCase()}
                  </h2>
                  <h2 className="m-2 text-4xl underline text-orange-800">{`${story.title.slice(
                    0,
                    25
                  )}..`}</h2>
                  <p className="mx-2 my-4">
                    {calDate(story.created_date)} - {story.abstract}
                  </p>
                </a>
                <button className="text-sm text-orange-600">Read more</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-10 flex justify-around items-center bg-orange-500 text-white ">
        <div>
          <h1>----- Demo Only</h1>
        </div>
        <div className="flex items-center">
          <img
            src="./BalajAli.jpeg"
            alt="Balaj Ali"
            className="p-2 ml-10 w-24 h-24 rounded-full object-cover object-bottom"
          />
          <h1 className="ml-5 text-center text-4xl font-semibold">Balaj Ali</h1>
        </div>
        
      </div>
    </div>
  );
}

export default App;
