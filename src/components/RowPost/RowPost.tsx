import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../axios-instance";
import { apiKey, imageUrl } from "../../constants/constants";
import "./RowPost.css";

interface Props {
  url: string;
  title: string;
  sizeClass: string;
}

interface Movie {
  backdrop_path: string;
  id: string;
}

const RowPost: React.FC<Props> = ({ url, title, sizeClass }) => {
  const [data, setData] = useState<Movie[]>([]);
  const [videoKey, setVideoKey] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response: any) => {
        console.log(response);
        setData(response.data.results);
      })
      .catch((error: any) => {
        alert(error);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const MovieClick = (id: string) => {
    axios
      .get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`)
      .then((response: any) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setVideoKey(response.data.results[0].key);
        } else {
          alert("no trailers available");
        }
      });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {data.map((movie, index) => (
          <img
            onClick={() => MovieClick(movie.id)}
            key={index}
            className={sizeClass}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {videoKey && <YouTube videoId={videoKey} opts={opts} />}
    </div>
  );
};

export default RowPost;
