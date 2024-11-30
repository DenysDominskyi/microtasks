import { Outlet } from "react-router-dom";

export const Croses = () => {
  return (
    <div>
      <div>HEADER</div>
      <Outlet />
      <div>FOOTER</div>
    </div>
  );
};
//----------------------

// import { lazy, Suspense } from "react";

// const Adidas = lazy(() => import("./Adidas"));
// const Puma = lazy(() => import("./Puma"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "adidas",
//         element: (
//           <Suspense fallback={<div>Loading...</div>}>
//             <Adidas />
//           </Suspense>
//         ),
//       },
//       {
//         path: "puma",
//         element: (
//           <Suspense fallback={<div>Loading...</div>}>
//             <Puma />
//           </Suspense>
//         ),
//       },
//     ],
//   },
// ]);

// useNavigation, useMatches, useRouterError