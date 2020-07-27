import React, { useEffect } from "react";
import MainAreaBase from "../MainAreaBase";

//TODO: Put this in a server layer;
const characters: Character[] = [
  {
    name: "Ryan Giordano",
    jobTitle: "Software Engineer, Quora",
    email: "rgiordano@gmail.com",
    level: 6,
    links: [
      {
        iconUrl: "www.fake.com",
        description: "Linkedin",
        url: "www.also.com",
      },
    ],
    phoneNumber: "404-234-3366",
    skills: [],
  },
  {
    name: "Lo Yang",
    jobTitle: "Data Engineer, Facebook",
    email: "loxgio@gmail.com",
    level: 8,
    links: [
      {
        iconUrl: "www.fake.com",
        description: "Linkedin",
        url: "www.also.com",
      },
    ],
    phoneNumber: "404-234-3366",
    skills: [],
  },
];

const Stats = ({ setInfoText }: { setInfoText: (t: string) => void }) => {
  useEffect(() => {
    setInfoText("Stats");
  }, []);
  return (
    <MainAreaBase>
      {characters.map((c) => {
        return <div key={c.name}>{c.name}</div>;
      })}
    </MainAreaBase>
  );
};

export default Stats;
