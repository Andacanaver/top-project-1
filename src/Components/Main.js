import React from "react";

const Main = () => {

  return (
    <section className="h-96 pt-10">
      <h2 className="text-4xl text-center font-bold">Some random information</h2>
      <div className="content-wrapper w-full flex justify-center">
        <div className="article-wrapper w-1/2 flex flex-row">
          <article className="w-1/4 flex flex-col p-5">
            <div className="flex justify-center p-2">
              <p className="border-light-blue border-4 h-32 w-32 rounded-lg">

              </p>
            </div>
            <p className="text-center p-2">
              this is some subtext under an illustration or image
            </p>
          </article>
          <article className="w-1/4 flex flex-col p-5">
            <div className="flex justify-center p-2">
              <p className="border-light-blue border-4 h-32 w-32 rounded-lg">

              </p>
            </div>
            <p className="text-center p-2">
              this is some subtext under an illustration or image
            </p>
          </article>
          <article className="w-1/4 flex flex-col p-5">
            <div className="flex justify-center p-2">
              <p className="border-light-blue border-4 h-32 w-32 rounded-lg">

              </p>
            </div>
            <p className="text-center p-2">
              this is some subtext under an illustration or image
            </p>
          </article>
          <article className="w-1/4 flex flex-col p-5">
            <div className="flex justify-center p-2">
              <p className="border-light-blue border-4 h-32 w-32 rounded-lg">

              </p>
            </div>
            <p className="text-center p-2">
              this is some subtext under an illustration or image
            </p>
          </article>
        </div>
      </div>
    </section>
  )

}

export default Main