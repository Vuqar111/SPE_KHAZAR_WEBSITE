import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { detailsGallery, updateGallery } from "../actions/galleryActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { GALLERY_UPDATE_RESET } from "../constants/galleryConstants";

export default function GalleryEditScreen(props) {
  const galleryId = props.match.params.id;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const galleryDetails = useSelector((state) => state.galleryDetails);
  const { loading, error, gallery } = galleryDetails;

  const galleryUpdate = useSelector((state) => state.galleryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = galleryUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/gallerylist");
    }
    if (!gallery || gallery._id !== galleryId || successUpdate) {
      dispatch({ type: GALLERY_UPDATE_RESET });
      dispatch(detailsGallery(galleryId));
    } else {
      setTitle(gallery.title);
      setImage(gallery.image);
    }
  }, [gallery, dispatch, galleryId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateGallery({
        _id: galleryId,
        title,
        image,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("https://mernspeapplicaton.herokuapp.com/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create / Edit Gallery {galleryId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
              <div className="editmainform">


            <div>
              <label htmlFor="name">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Enter name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update/Create Gallery
              </button>
            </div>
              </div>
          </>
        )}
      </form>
    </div>
  );
}
