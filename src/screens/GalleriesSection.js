import React, { useState, useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listGalleries } from "../actions/galleryActions";

export default function GalleriesSection() {
  const dispatch = useDispatch();
  const galleryList = useSelector((state) => state.galleryList);
  const { loading, error, galleries } = galleryList;
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");
  useEffect(() => {
    dispatch(listGalleries());
  }, [dispatch]);

  const getImg = (imgurl) => {
    setTempimgSrc(imgurl);
    setModel(true);
  };
  return (
    <div className="maingallery">
      <h1 className="text-center text-[50px] titleof">Gallery</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} alt="img" />
            <div className="closebtn" onClick={() => setModel(false)}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="gallery">
            {galleries.map((item) => {
              return (
                <div className="pics">
                  <img
                    src={item.image}
                    alt="img"
                    onClick={() => getImg(item.image)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
