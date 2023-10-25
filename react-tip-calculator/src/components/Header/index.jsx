import logo from "../../assets/logo.svg"

export default function header() {
 return(
    <div className="h-[15vh] py-10 flex justify-center">
        <img src={logo} alt="" />
      </div>
 );
}