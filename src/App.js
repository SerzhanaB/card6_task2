import "./App.css";
import React, { Fragment } from "react";

const App = ({ value }) => {
  /*
if (value===1){

return( <div className="season">
  <img className='season_img' src="/img/win.jpg" alt=""/> 
  <div className="season_name"> Зима </div>

  </div> )

}else if (value===2){

  return( <div className="season">
    <img className='season_img' src="/img/spr.jpg" alt=""/> 
    <div className="season_name"> Весна </div>
  
    </div> )
}

else if (value===3){

  return( <div className="season">
    <img className='season_img' src="/img/sum.jpg" alt=""/> 
    <div className="season_name"> Лето </div>
  
    </div> )}
else if (value===4){

  return( <div className="season">
    <img className='season_img' src="/img/aut.jpg" alt=""/> 
    <div className="season_name"> Осень </div>
  
    </div> )}

    */

  /*
  switch (value) {
    case 1:
    return (
      <div className="season">
        <img className="season_img" src="/img/win.jpg" alt="" />
        <div className="season_name"> Зима </div>
      </div>
    );
  case 2:
    return (
      <div className="season">
        <img className="season_img" src="/img/spr.jpg" alt="" />
        <div className="season_name"> Весна </div>
      </div>
    );
    case 3:
    return (
      <div className="season">
        <img className="season_img" src="/img/sum.jpg" alt="" />
        <div className="season_name"> Лето </div>
      </div>
    );
    default:
    return (
      <div className="season">
        <img className="season_img" src="/img/aut.jpg" alt="" />
        <div className="season_name"> Осень </div>
      </div>
    );
   
  }
*/
  /*
  return value === 1 ? (
    <div className="season">
      <img className="season_img" src="/img/win.jpg" alt="" />
      <div className="season_name"> Зима </div>
    </div>
  ) : value === 2 ? (
    <div className="season">
      <img className="season_img" src="/img/spr.jpg" alt="" />
      <div className="season_name"> Весна </div>
    </div>
  ) : value === 3 ? (
    <div className="season">
      <img className="season_img" src="/img/sum.jpg" alt="" />
      <div className="season_name"> Лето </div>
    </div>
  ) : (
    <div className="season">
      <img className="season_img" src="/img/aut.jpg" alt="" />
      <div className="season_name"> Осень </div>
    </div>
  );

*/
  /*
  return (
    <div className="season">
      {value === 1 ? (
        <Fragment>
          <img className="season_img" src="/img/win.jpg" alt="" />
          <div className="season_name"> Зима </div>
        </Fragment>
      ) : value === 2 ? (
        <Fragment>
          <img className="season_img" src="/img/spr.jpg" alt="" />
          <div className="season_name"> Весна </div>
        </Fragment>
      ) : value === 3 ? (
        <Fragment>
          <img className="season_img" src="/img/sum.jpg" alt="" />
          <div className="season_name"> Лето </div>
        </Fragment>
      ) : (
        <Fragment>
          <img className="season_img" src="/img/aut.jpg" alt="" />
          <div className="season_name"> Осень </div>
        </Fragment>
      )}
    </div>
  );

*/

/*
  return (
    <div className="season">
      <img
        className="season_img"
        src={
          value === 1
            ? "/img/win.jpg"
            : value === 2
            ? "/img/spr.jpg"
            : value === 3
            ? "/img/sum.jpg"
            : "/img/aut.jpg"
        }
        alt=""
      />
      <div className="season_name">
        {value === 1
          ? "Зима"
          : value === 2
          ? "Весна"
          : value === 3
          ? "Лето"
          : "Осень"}{" "}
      </div>
    </div>
  );

  */
 
  return (
    <div className="season">
      {value === 1 && (
        <Fragment>
          <img className="season_img" src="/img/win.jpg" alt="" />
          <div className="season_name"> Зима </div>
        </Fragment>)}

      { value === 2 && (
        <Fragment>
          <img className="season_img" src="/img/spr.jpg" alt="" />
          <div className="season_name"> Весна </div>
        </Fragment>)}

      { value === 3 && (
        <Fragment>
          <img className="season_img" src="/img/sum.jpg" alt="" />
          <div className="season_name"> Лето </div>
        </Fragment>)}


  { value === 4 && (
        <Fragment>
          <img className="season_img" src="/img/aut.jpg" alt="" />
          <div className="season_name"> Осень </div>
        </Fragment>
      )}
    </div>
  );


};

export default App;
