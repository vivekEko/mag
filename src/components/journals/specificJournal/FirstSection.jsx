import React from "react";
import texture from "../../../assets/journal/texture.png";
import paperBg from "../../../assets/journal/paperBg.png";

const FirstSection = () => {
  return (
    <section className="my-32    ">
      <div className="custom_border  md:w-[60%] mx-auto">
        <div
          style={{ backgroundImage: `url(${texture?.src})` }}
          className="bg-center bg-cover sm:p-5"
        >
          <p className=" p-5">
            Western designs merged magically with Indian grace at Roshini and
            Nicholson&apos;s wedding. A scintillating dress and power suit spoke
            volumes on the couple&apos;s behalf. Family and florals set the tone
            as the bride walked the aisle toward her groom, and together they
            said “I do.” Our cameras found so many candid shots to capture. It
            was a romantic day in several regards, and we enjoyed
            memory-crafting every moment for posterity. The way Nicholson and
            Roshini made love to the camera made us all want to find such
            happiness in our own lives.
          </p>
          <p className=" p-5">
            Our cameras found so many candid shots to capture. It was a romantic
            day in several regards, and we enjoyed memory-crafting every moment
            for posterity. The way Nicholson and Roshini made love to the camera
            made us all want to find such happiness in our own lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
