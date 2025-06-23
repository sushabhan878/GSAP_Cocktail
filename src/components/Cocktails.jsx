import React from "react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";

const Cocktails = () => {
  useGSAP(() => {
    const parallexTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallexTimeline
      .from("#c-left-leaf", { x: -100, y: 100 })
      .from("#c-right-leaf", { x: 100, y: 100 });
  }, []);
  return (
    <section id="cocktails" className="noisy">
      <img id="c-left-leaf" src="/images/cocktail-left-leaf.png" alt="Leaf" />
      <img id="c-right-leaf" src="/images/cocktail-right-leaf.png" alt="Leaf" />
      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
