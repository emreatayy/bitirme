import "../styles/calendar.css"
import React from "react";


export default function lessons() {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  const date = new Date();
  const formatedDate = date.toDateString();
  function selected(month) {
    let month2number = 0;
    switch (month) {
      case "JAN":
        month2number = 0;
        break;
      case "FEB":
        month2number = 1;
        break;
      case "MAR":
        month2number = 2;
        break;
      case "APR":
        month2number = 3;
        break;
      case "MAY":
        month2number = 4;
        break;
      case "JUN":
        month2number = 5;
        break;
      case "JUL":
        month2number = 6;
        break;
      case "AUG":
        month2number = 7;
        break;
      case "SEP":
        month2number = 8;
        break;
      case "OCT":
        month2number = 9;
        break;
      case "NOV":
        month2number = 10;
        break;
      case "DEC":
        month2number = 11;
        break;
    }
    if (month2number === date.getMonth()) {
      return "selected";
    }
  }

  const showMonth = months.map((list) =>
    <li><a href="#" id={list} title={list} className={selected(list)}>{list}</a></li>
  );

  const showDay = days.map((list) =>

    <li><a className="">{list}</a></li>
  );

  function x(){
    for(let _i = 1; _i <= 31; _i += 1 ){
      let _addClass = '';
      if( _i === 12 ){ _addClass = ' class="selected"'; }

      switch( _i ){
        case 8:
        case 10:
        case 27:
          _addClass = ' class="event"';
          break;
      }
    }
  }
  console.log(date)
  console.log(formatedDate)
  return (
    <>

      <div className="calendar">

        <div className="col leftCol">
          <div className="content">
            <h1 className="date">{formatedDate}</h1>
            <div className="notes">
              <p>
                <input type="text" value="" placeholder="new note"/>
                <a href="#" title="Add note" className="addNote animate">+</a>
              </p>
              <ul className="noteList">
                <li>Headbutt a lion<a href="#" title="Remove note" className="removeNote animate">x</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col rightCol">
          <div className="content">
            <h2 className="year">{date.getFullYear()}</h2>
            <ul className="months">
              {showMonth}
            </ul>
            <div className="clearfix"></div>
            <ul className="weekday">
              <li><a href="#" title="Mon" data-value="1">Mon</a></li>
              <li><a href="#" title="Tue" data-value="2">Tue</a></li>
              <li><a href="#" title="Wed" data-value="3">Wed</a></li>
              <li><a href="#" title="Thu" data-value="4">Thu</a></li>
              <li><a href="#" title="Fri" data-value="5">Fri</a></li>
              <li><a href="#" title="Say" data-value="6">Sat</a></li>
              <li><a href="#" title="Sun" data-value="7">Sun</a></li>
            </ul>
            <div className="clearfix"></div>
            <ul className="days">
              {showDay}
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="clearfix"></div>

      </div>
    </>
  )
}

