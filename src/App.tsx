import styles from "./components/Site.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { S } from "./components/pages/_styles";
import { PATH } from "./routes/router";
import { Link } from "react-router-dom";
import { Button } from "./components/Button";

function App() {
    const navigate = useNavigate()
    const navigateHandler = () => {
        // console.log({navigate})
        navigate(-1)
    }

  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper>
            <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PUMA}>Puma</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PRICES}>Prices</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PROTECTED}>Protected Page</NavLink>
          </S.NavWrapper>
        </div>
        <div className={styles.content}>
          <div className={styles.HorizontalNavigation}>
            <NavLink className={styles.LinkLikeButton} to={PATH.ADIDAS}>
              Main Page
            </NavLink>
            <button onClick={navigateHandler} className={styles.ButtonLikeLink}>Back</button>
          </div>
          <Outlet />
          {/* <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PAGE4} element={<Prices />}/>

                        <Route path={'/:model/:id'} element={<Model/>}/>

                        <Route path={'/*'} element={<Error404/>}/>

                    </Routes> */}
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
