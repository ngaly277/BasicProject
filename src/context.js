import React, { useState, useContext, useReducer, useEffect } from "react";
import sublinks from "./dataStripe";
import cartItems from "./dataCart";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  // SIDEBAR PROJECT
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openSidebar = () => {
  //     setIsSidebarOpen(true);
  // }
  // const closeSidebar = () => {
  //     setIsSidebarOpen(false);
  // }

  // const openModal = () => {
  //     setIsModalOpen(true);
  // }
  // const closeModal = () => {
  //     setIsModalOpen(false);
  // }

  // return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, openSidebar, closeModal, closeSidebar}}>{children}</AppContext.Provider>

  // STRIPE PROJECT
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  //   const [location, setLocation] = useState({});
  //   const [page, setPage] = useState({ page: '', links: [] });

  // const openSidebar = () => {
  //     setIsSidebarOpen(true);
  // }
  // const closeSidebar = () => {
  //     setIsSidebarOpen(false);
  // }

  //   const openSubmenu = (text, coordinates) => {
  //       const page = sublinks.find((link) => link.page === text);
  //       setPage(page);
  //       setLocation(coordinates);
  //     setIsSubmenuOpen(true);
  // }
  // const closeSubmenu = () => {
  //     setIsSubmenuOpen(false);
  // }

  // return (
  //   <AppContext.Provider
  //     value={{
  //       isSubmenuOpen,
  //       isSidebarOpen,
  //       openSubmenu,
  //       openSidebar,
  //       closeSubmenu,
  //       closeSidebar,
  //       location,
  //       page
  //     }}
  //   >
  //     {children}
  //   </AppContext.Provider>
  // );



  // CART PROJECT
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART' })
  }

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id})
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id})
  }
  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id})
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: 'DISPLAY_ITEMS', payload: cart})
  }

  const toggleAmount = (id, type) => {
     dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}})
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider}