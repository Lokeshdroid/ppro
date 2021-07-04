import React, { useState } from "react";
import HomeHeader from "../components/home/HomeHeader";
import LoginModal from "../components/LoginModal";
import HeaderBanner from "../components/HeaderBanner";
import HomeBanner from "../components/home/HomeBanner";
import "../styles/components/home.scss";
import HomeList from "../components/home/HomeList";
import SportsList from "../components/home/SportsList";
import WinnerList from "../components/home/WinnerList";
import Footer from "../components/Footer";
import { userService } from '../services/userService';
import { eventService } from "../services/eventService";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  eventService.inPlayAndPopular();
  const initialState = {
    username: "",
    password: "",
    loginError: "",
    terms : false,
    user: '',
    error: ''
  };
  const [inputs, setInputs] = useState(initialState);
  /*
    React.useEffect(() => {
      window.addEventListener('storage', () => {
        const theme = localStorage.getItem('user')
        console.log(theme);
        setInputs(inputs => ({ ...inputs, "user": theme }));
      })
    }, [inputs]);

    useEffect(() => {
      if('error' in localStorage){
        setInputs(inputs => ({ ...inputs, "error": localStorage.getItem("error") }));
      }
    }, [inputs.error]);*/


  const clearState = () => {
    setInputs({...initialState});
    localStorage.clear();
  };

  const openModal = () => {
    clearState();
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const ourCasinoList = {
    title: "OUR LIVE CASINOS",
    list: [],
  };

  for (let i = 0; i < 35; i++) {
    ourCasinoList.list.push({ id: i, title: "game 1", image: "" },)
  }

  const liveCasinoList = {
    title: "LIVE CASINOS",
    list: [
      { id: 0, title: "game 1", image: "" },
      { id: 1, title: "game 2", image: "" },
      { id: 2, title: "game 3", image: "" },
      { id: 3, title: "game 4", image: "" },
      { id: 4, title: "game 5", image: "" },
    ],
  };

  const fantasyGamesList = {
    title: "Fantasy Games",
    list: [
      { id: 0, title: "game 1", image: "" },
      { id: 1, title: "game 2", image: "" },
      { id: 2, title: "game 3", image: "" },
    ],
  };

  const sportsList = {
    title: "sports",
    list: [],
  };

  for (let i = 0; i < 32; i++) {
    sportsList.list.push({ id: i, title: "cricket", icon: "cricket-spade" })
  }

  const winnerList = {
    title: "top winner",
    list: [],
  };

  for (let i = 0; i < 40; i++) {
    winnerList.list.push({ id: i, player: "Aaron Dove", time: "01/06/2021 10:43", amount: '48,00,000' })
  }

  function handleChange(e){
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setInputs(inputs => ({ ...inputs, [e.target.name]: value }));
  }

  function onLogin(e){
    e.preventDefault();
    if (inputs.username && inputs.password && inputs.terms) {
      const { from } = { from: { pathname: "/sport" } };
      // var user = userService.login(inputs.username, inputs.password, from);
      // setInputs(inputs => ({ ...inputs, 'user': user }));
      const response = userService.login(inputs.username, inputs.password, from);
      response.then(data => {
        if(data.response && data.response.status !== "200"){
          // alert('eerr');
          var error = JSON.parse(localStorage.getItem('error'));
          setInputs(inputs => ({ ...inputs, 'loginError': error.error }));
          setModalOpen(true);
        }else{
          setInputs(inputs => ({ ...inputs, 'user': data.result }));
          setModalOpen(false);
        }
      });
    }else{
      if(!inputs.terms){
        setInputs(inputs => ({ ...inputs, 'loginError': 'Please read and accept the terms and conditions' }));
      }else{
        setInputs(inputs => ({ ...inputs, 'loginError': 'Please enter valid login credentials' }));
      }
      setModalOpen(true);
    }
  }

  const onLogout = () => {
    setInputs(inputs => ({ ...inputs, 'user': null }));
    userService.logout();
  };

  return (
    <div className="home-new">
      <HeaderBanner />
      <HomeHeader openModal={openModal} onLogout={onLogout} user={inputs.user}/>
      <HomeBanner />
      <div className="full-list width-100">
        <HomeList data={ourCasinoList} openModal={openModal}/>
      </div>
      <div className="w-100">
        <div className="container-fluid container-fluid-5">
          <div className="row row5">
            <div className="col-12 col-md-6 small-list">
              <HomeList data={liveCasinoList} openModal={openModal}/>
            </div>
            <div className="col-12 col-md-6 small-list">
            <HomeList data={fantasyGamesList} openModal={openModal}/>
            </div>
          </div>
        </div>
      </div>
      <div className="full-list">
        <SportsList data={sportsList} />
      </div>
      <div className="full-list">
        <WinnerList data={winnerList} />
      </div>
      <Footer />
      <LoginModal isModalOpen={isModalOpen} handleClose={handleClose} inputs={inputs} onLogin={onLogin} handleChange={handleChange}/>
    </div>
  );
}
