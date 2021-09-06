import React from "react";
import "./App.css";

function App() {
  const names = [
    {
      name: "John",
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      age: 24,
    },
    {
      name: "James",
      src: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      age: 28,
    },
    {
      name: "Kruskal",
      src: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      age: 31,
    },
    {
      name: "Pascal",
      src: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
      age: 17,
    },
    {
      name: "Newton",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU",
      age: 29,
    },
  ];

  return (
    <>
      <div className="div">
        <h2>5 Birthdays Today</h2>

        {names.map(({ name, src, age }) => {
          return (
            <section className="bar">
              <img src={src} alt={name} />
              <div class="lift">
                {name}
                <br />
                {age} years
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default App;
