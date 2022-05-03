import React, { useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listRecords } from "../actions/recordActions";
import Record from "../components/Record";
export default function RecordsSection() {
  const dispatch = useDispatch();
  const recordList = useSelector((state) => state.recordList);
  const { loading, error, records } = recordList;

  useEffect(() => {
    dispatch(listRecords());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-center items-center bg-[#C4C4C4] text-center text-5xl font-bold p-[10px]">
        <p className="text-center">Records</p>
      </div>
      <div className="w-[90%] h-[100%] m-[auto] flex justify-center mt-[20px] ">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="recordcontainer">
            {records.map((record) => (
              <Record key={record._id} record={record} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
