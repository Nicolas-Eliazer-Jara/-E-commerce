export default function footer(){
  const language = navigator.language;
  const year = new Date().getFullYear();

  return (
    <>

        <div className="  text-white sm:w-full  bg-segundo min-w-[400px] sm:text-[13px] text-[9px]">
          <div className=" w-[90%] mx-auto border-b-[1px] border-[#ffffff54]">
            <h1 className=" text-center pt-3  pb-3">Nicolas Eliazer Jara</h1>
          </div>
          <div className="flex justify-center mt-1 ">
          
        </div>

        <div className="flex  p-2 justify-center">
          <p className=" p-2">© 2025 Nicolas Eliazer Jara.  Todos los derechos reservados</p>
          <p className=" p-2">{language}</p>
          <p className=" p-2">{year}</p>
        </div>

        </div>

    </>
  );
}