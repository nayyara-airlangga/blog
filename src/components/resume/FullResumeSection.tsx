import React from 'react';
import { ResumeList } from './ResumeList';

export function FullResumeSection(): JSX.Element {
  return (
    <section
      id="resume"
      className="hero dark:bg-dark bg-white lg:py-16 py-8 lg:px-0 px-5"
    >
      <div className="container">
        <div className="flex flex-wrap lg:flex-row flex-col gap-16 items-center place-content-around">
          <div className="lg:w-1/2 w-full">
            <h1 className="lg:text-4xl text-3xl text-left">Resume</h1>
          </div>
          <div className="lg:w-2/5 lg:block hidden"></div>
        </div>
        <div className="flex flex-wrap lg:flex-row flex-col gap-16 items-center place-content-around">
          <div className="w-full lg:ml-5 ml-0">
            <ResumeList />
          </div>
        </div>
      </div>
    </section>
  );
}
