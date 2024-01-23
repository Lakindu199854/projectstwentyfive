import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
//Here we import the icons to slide images
import "./styles.css";

//Here we get the link of the url and the limit of the images we want to show
export default function ImageSlider({ url, limit }) {
  const [imageArray, setImageArray] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isloading, setIsLoading] = useState(false);



  const getImage = async () => {
    try{
      setIsLoading(true);
      const response = await axios.get("https://picsum.photos/v2/list");
      setIsLoading(false);
      setImageArray(response.data);
    }catch(e){
      console.log(e);
    }
    
  };

  useEffect(()=>{
    getImage();
  },[])

  if (isloading) {
    return <h1>Loading Please Wait...</h1>;
  }

  const onClickLeft = () => {
    setCurrentSlide(
      currentSlide === 0 ? imageArray.length - 1 : currentSlide - 1
    );
  };


  const onClickRight = () => {
    setCurrentSlide(
      currentSlide === imageArray.length - 1 ? 0 : currentSlide + 1
    );
  };

 
  return (
    <div className="container">
     
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={onClickLeft}
      />
      {imageArray &&
        imageArray.length > 0 &&
        imageArray.map((element, index) => {
          return (
            <img
              className={
                currentSlide === index ? "current-image" : "Inactive-image"
              }
              key={index}
              src={element.download_url}
            />
          );
        })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={onClickRight}
      />
      <span className="circle-indicators">
        {imageArray && imageArray.length
          ? imageArray.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index ? "Active-Indicator" : "Inactive"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
