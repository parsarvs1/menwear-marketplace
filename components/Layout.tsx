  import React from "react";
  import Navbar from "./Navbar";
  interface layoutprops {
    children: React.ReactNode;
  }
  function Layout({ children }: layoutprops) {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  }
  export default Layout;
