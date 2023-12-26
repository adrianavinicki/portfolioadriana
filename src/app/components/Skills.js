import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills and Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/3 lg:w-2/3 mx-auto">
            🌟 Why Me?: Versatility: I bring a rich blend of experience from the
            worlds of finance, business, and now technology. Problem-Solver: I
            thrive in complex problem-solving scenarios, whether it is
            optimizing financial operations or developing software solutions.
            Team Player: Collaboration is at the core of my work ethic, and I
            love working with diverse teams to achieve common goals.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
