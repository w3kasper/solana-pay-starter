import React from "react";
import Image from "next/image";
import aboutTitle1 from "../public/images/about/title.png";
import aboutTitle2 from "../public/images/about/title2.png";
import aboutTitle3 from "../public/images/about/title3.png";
import aboutAttackGif from "../public/images/about/attack.gif";
import aboutKissGif from "../public/images/about/kissing.gif";

const About = () => {
  return (
    <>
      <div className="text-white font-sans p-4 space-y-4 font-normal">
        <h1 className="text-center">
          <Image src={aboutTitle3} className="" alt="/" />
        </h1>
        <div classname="">
          <div className="font-semibold pt-4">KISS EM UP!!!!</div>

          <div className="pt-3">
            The worlds first Kiss 'Em Up! Take the classic beat 'em up formula,
            add some bullet-hell dodging and mix it up with awkward kissing. You
            got yourself a dang good game!
          </div>

          <div className="pt-3">
            Minigames, fighting, characters, love, war. It's all here in{" "}
            <b>Cops Kissing Each Other</b>.
          </div>
          <div className="pt-3">
            <ul>
              <li>- Crazy awesome levels</li>
              <li>- Fall in love</li>
              <li>- Giant bosses</li>
              <li>- Permadeath gameplay</li>
              <li>- Minigames about, you know, kissing</li>
              <li>- Sweet kissing movez</li>
            </ul>
          </div>
        </div>
        <div class="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 w-auto h-auto">
          <div class="box">
            <Image src={aboutAttackGif} className="" alt="/" />
          </div>
          <div class="box">
            <Image src={aboutKissGif} className="" alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
