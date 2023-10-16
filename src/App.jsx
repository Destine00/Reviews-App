import { useState } from "react";
import users from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa6";
// import Users from "./Users";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = users[index];

  const checkNumber = (number) => {
    if (number < 0) {
      return users.length - 1;
    }

    if (number > users.length - 1) {
      return 0;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * users.length);
    if (randomIndex === index) {
      randomIndex = randomIndex + 1;
    }
    return setIndex(checkNumber(randomIndex));
  };

  return (
    <main>
      <section className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h2 className="author">{name}</h2>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="prev-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          suprise me
        </button>
      </section>
    </main>
  );
};
export default App;
