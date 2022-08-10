import React from "react";
import changeColor from "./images/changeColor.png";
import emojiSmile from "./images/emoji-smile.svg";

import "./Main.css";

export default function Main()
{
  var today = new Date();

  if ((today.getMonth() + 1) === 1) {
      var date = `${today.getDate()} Janvier ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 2) {
      date = `${today.getDate()} Février ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 3) {
      date = `${today.getDate()} Mars ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 4) {
      date = `${today.getDate()} Avril ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 5) {
      date = `${today.getDate()} Mai ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 6) {
      date = `${today.getDate()} Juin ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 7) {
      date = `${today.getDate()} Juillet ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 8) {
      date = `${today.getDate()} Août ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 9) {
      date = `${today.getDate()} Septembre ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 10) {
      date = `${today.getDate()} Octobre ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 11) {
      date = `${today.getDate()} Novembre ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 12) {
      date = `${today.getDate()} Décembre ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  return (
    <div className="Main">
      <div className="section">
        <div className="row">
            <form>
              <div className="col-5">
                <label for="nickname">Entrez vos identifiants: </label>
                <input type="text" className="form-control mb-1" id="nickname" />
              </div>
              <div className="col-8">
                <textarea cols="7" rows="8" className="mb-1 form-control" placeholder="Exprimez-vous, Jammie"></textarea>
                <img src={changeColor} alt="" className="icon me-3" />
                <img src={emojiSmile} alt="" className="icon" />
                
              </div>
              
              <input type="submit" className="btn btn-primary" value="Envoyer" />
            </form>
            <footer>
              {date}
            </footer>
        </div>
      </div>
    </div>
  );
}