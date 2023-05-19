import "../styles/mainPage.css";
import resim from "../assets/baydırman.jpeg";
export default function MainPage() {
  return (
    <>
      <div className="mainPage">
        <h1>Ana Sayfa</h1>
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={resim} alt="baydrıman"/></div>
              <div className="card_content">
                <h2 className="card_title">Baydırman 1</h2>
                <p className="card_text">Baydırman Baydırman Baydırman Baydırman Baydırman</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={resim} alt="baydrıman"/></div>
              <div className="card_content">
                <h2 className="card_title">Baydırman 2</h2>
                <p className="card_text">Baydırman Baydırman Baydırman Baydırman Baydırman</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={resim} alt="baydrıman"/></div>
              <div className="card_content">
                <h2 className="card_title">Baydırman 3</h2>
                <p className="card_text">Baydırman Baydırman Baydırman Baydırman Baydırman</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={resim} alt="baydrıman"/></div>
              <div className="card_content">
                <h2 className="card_title">Baydırman 4</h2>
                <p className="card_text">Baydırman Baydırman Baydırman Baydırman Baydırman</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={resim} alt="baydrıman"/></div>
              <div className="card_content">
                <h2 className="card_title">Baydırman 5</h2>
                <p className="card_text">Baydırman Baydırman Baydırman Baydırman Baydırman</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={resim} alt="baydrıman"/></div>
              <div className="card_content">
                <h2 className="card_title">Baydırman 6</h2>
                <p className="card_text">Baydırman Baydırman Baydırman Baydırman Baydırman</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
)
}
