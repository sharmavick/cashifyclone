import React from "react";
import { IoClose } from "react-icons/io5";
function Login() {
  return (
    <>
      <div className="fixed inset-0">
        <div className="flex min-h-full flex-col items-center justify-end  sm:items-center sm:justify-center">
          <div className="w-full h-screen sm:h-full sm:w-full sm:max-w-3xl sm:rounded-xl sell-theme transform overflow-y-auto transition-all bg-primary-bg translate-y-0 sm:translate-x-0 sm:translate-y-0 sm:opacity-100 sm:scale-100">
            <section className="flex flex-col sm:flex-row bg-cta h-full">
              {/* one side */}
              <div className="flex flex-col relative justify-between w-full p-4 sm:w-72 sm:p-6">
                <div className="flex justify-between items-center sm:justify-start">
                  <div className="text-primary-contrast-text h1">
                    Login/Signup
                  </div>
                  <div
                    className="hidden sm:block"
                    style={{ height: "33vh" }}
                  ></div>
                  <img
                    className="hidden sm:block w-56 h-56"
                    src="https://s3n.cashify.in/cashify/web/images/login/LoginImage.svg"
                  />
                </div>
              </div>
              {/* second side */}
              <div className="flex flex-col flex-1 relative rounded-t-xl sm:rounded-none overflow-y-scroll bg-cta-bg">
<div className="absolute top-2.5 right-2.5 cursor-pointer hidden sm:block">
<IoClose  className="h-6 w-6" fill="currentColor"/>
</div>
<div className="flex flex-col flex-1 justify-start py-0 px-4 sm:justify-between sm:overflow-auto sm:pt-4 sm:px-7 sm:pb-8">
    <div className="mt-8 flex flex-col gap-3">
        
    </div>
</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
