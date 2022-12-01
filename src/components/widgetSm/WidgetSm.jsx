import React from "react";
import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kamal Gunawardena</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widhetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://toppng.com/uploads/preview/avatar-png-11554021661asazhxmdnu.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kamal Gunawardena</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widhetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kamal Gunawardena</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widhetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kamal Gunawardena</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widhetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kamal Gunawardena</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widhetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
