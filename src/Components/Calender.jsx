import * as React from "react";
import calender from "../assets/images/calender1.png";

function Calender() {
  const [showModal, setShowModal] = React.useState(false);

  var modal = document.getElementById("id01");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <>
      <button
        className=" calender"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img src={calender}></img>
      </button>
      {showModal ? (
        <>
          <div
            id="id01"
            className="modal justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed   z-50 outline-none focus:outline-none"
          >
            <div className="model-container relative  my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-end ">
                  <h5 className="cross" onClick={() => setShowModal(false)}>
                    X
                  </h5>
                </div>
                {/*body*/}
                <div className="relative w-full">
                  <iframe
                    className="iframe"
                    src="https://u-smart.dayschedule.com/connect-with"
                    width="100%"
                    height="100%"
                    allowFullScreen="allowfullscreen"
                  ></iframe>
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      X
                    </button>
                  
                  </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Calender;
