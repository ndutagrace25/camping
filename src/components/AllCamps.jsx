import React, { useState } from "react";
import { camp1 } from "../images";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const AllCamps = () => {
  const [titleColor, setTitleColor] = useState("text-black");
  const [activeId, setActiveId] = useState(0);

  const allCamps = [
    {
      name: "Kiboko Luxury Camp",
      id: 1,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 2",
      id: 2,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 3",
      id: 3,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 4",
      id: 4,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 5",
      id: 5,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 6",
      id: 6,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 7",
      id: 7,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 8",
      id: 8,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 9",
      id: 9,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 10",
      id: 10,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 11",
      id: 11,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 12",
      id: 12,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 13",
      id: 13,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 14",
      id: 14,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 15",
      id: 15,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 16",
      id: 16,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 17",
      id: 17,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 18",
      id: 18,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 19",
      id: 19,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 20",
      id: 20,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
    {
      name: "Camp 21",
      id: 21,
      image: camp1,
      titleDelay: 300,
      detailDelay: 500,
      details:
        "Kiboko is a luxury camp located on the shores of Lake Naivasha. There are eight luxury tents in Kiboko Luxury Camp, with four facing the lake, offering you an incredible view of Lake Naivasha. The best thing about this campsite is you get close to nature. Giraffes, waterbucks, and zebras are frequent visitors to the campsite. Kiboko has lots of hippos too, with most of them staying just a few yards away from the tents. You can hear them throughout the night, and you get a chance to watch them during the day from your private veranda. Boat rides are also available and I recommend you take them. The food is also extremely good.",
    },
  ];

  const displayCamps = allCamps.map((item, index) => {
    return (
      <div>
        <div className="d-flex justify-content-center py-5">
          <Fade delay={item.titleDelay} bottom>
            <Link to="/camp-details">
              <h5
                style={{ fontFamily: "Carviar Dreams Bold", cursor: "pointer" }}
                className={item.id === activeId ? titleColor : ""}
                onMouseEnter={() => {
                  setTitleColor("text-info");
                  setActiveId(item.id);
                }}
                onMouseLeave={() => setTitleColor("text-black")}
              >
                <span>{item.id}. </span>
                {item.name}
              </h5>
            </Link>
          </Fade>
        </div>
        <div className="d-flex justify-content-between camp-card">
          <Fade left delay={400}>
            <img
              alt={item.name}
              src={item.image}
              className="img-fluid col-md-5 rounded"
            />
          </Fade>

          <Fade delay={item.detailDelay} bottom>
            <div className="col-md-6 pt-2">
              <div>{item.details}</div>
              <div className="mt-3 d-flex justify-content-center">
                <Link
                  className="btn-info btn fw-bold shadow"
                  to="/camp-details"
                >
                  View Activites and Locations at {item.name}
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  });
  return (
    <section style={{ fontFamily: "Carviar Dreams" }}>
      <div>{displayCamps}</div>
    </section>
  );
};

export default AllCamps;
