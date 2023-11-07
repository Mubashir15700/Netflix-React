import { useEffect, useState } from "react";
import axios from "../../axios-instance";
import { apiKey, imageUrl } from "../../constants/constants"; // to fix
import "./Banner.css";

const Banner = () => {
  const [data, setData] = useState({
    title: "",
    overview: "",
    backdrop_path: "",
  });

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${apiKey}&language=en-US`)
      .then((response: any) => {
        const randomNumber = Math.floor(Math.random() * 20);
        // console.log(response.data.results[randomNumber]);
        setData(response.data.results[randomNumber]);
      })
      .catch((error: any) => {
        alert(error);
      });
  }, []);

  const maxLength = 400;
  const overview = data && data.overview;

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${data && imageUrl + data.backdrop_path})`,
      }}
    >
      <div className="content">
        {data && <h1 className="title">{data.title}</h1>}
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {overview && overview.length > maxLength
            ? `${overview.slice(0, maxLength)}...`
            : overview}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
