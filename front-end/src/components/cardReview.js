import React, {useEffect, useState} from 'react';
import axios from 'axios'

import './cardReview.css';
import Placeholder from '../assets/placeholder.PNG';

const Cardreview = (props) => {
  return (
    <div className={`cardreview ${props.className || ""}`}>
      <div className="rectangle-1">
        <img className="mask-group-3" src={Placeholder} alt="Placeholder" />
        <div className="flex-container-11">
          <span className="zack-sn">
            {props.zackSn || "Zack Snyder’s Justice League 2021"}
          </span>
          <div className="flex-container-12">
            <span className="review-by-audrey">
              {props.reviewByAudrey || "Review by Audrey"}
            </span>
            <img className="stars-1" src={Placeholder} alt="Placeholder" />
            <img className="vector-2" src={Placeholder} alt="Placeholder" />
            <span className="num-2">{props.num || "2"}</span>
          </div>
          <span className="the-interesting-thing-about-snyd">
            {props.theInterestingThingAboutSnyd ||
              "the interesting thing about snyder is that he always swings big: whether it results in a colossal whiff or a home run just depends on the particular project, amount of creative control, and audience reception. but he always puts his unique style into it, and for that reason i’ve really grown fond of his stuff. his involvement in the dceu has kept me interested, and i still have fun with both their best content or biggest flops..."}
          </span>
          <div className="flex-container-13">
            <span className="read-more">{props.readMore || "Read more"}</span>
            <img className="vector-3" src={Placeholder} alt="Placeholder" />
          </div>
        </div>
        <img className="mask-group-2" src={Placeholder} alt="Placeholder" />
      </div>
    </div>
  );
};

export default Cardreview;