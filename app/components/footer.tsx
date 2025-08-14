export default function footer(){
  const language = navigator.language;
  const year = new Date().getFullYear();

  return (
    <>

        <div className="  text-white w-full  bg-segundo">
          <div className=" w-[90%] mx-auto border-b-[1px] border-[#ffffff54]">
            <h1 className="text-[13px] text-center pt-3  pb-3">Nicolas Eliazer Jara</h1>
          </div>
          <div className="flex justify-center mt-1 ">
          
        </div>

        <div className="flex text-[13px] p-2 justify-center">
          <p className=" p-2">© 2025 Nicolas Eliazer Jara. Todos los derechos reservados</p>
          <p className=" p-2">{language}</p>
          <p className=" p-2">{year}</p>
        </div>

        </div>

    </>
  );
}