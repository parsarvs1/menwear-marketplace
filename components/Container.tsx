import React from "react";
interface containerprops {
  children: React.ReactNode;
}
function Container({ children }: containerprops) {
  return <div className="container mx-auto p-2">{children}</div>;
}
export default Container;
