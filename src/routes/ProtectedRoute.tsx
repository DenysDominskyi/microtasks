import { Children, ReactElement, ReactNode } from "react";
import { Error404 } from "../components/pages/Error404";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const logged = false;
  return <>{logged ? children : <Navigate to={"/login"} />}</>;
};
