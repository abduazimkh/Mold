import React from "react";
import c from './Loader.module.css';
import { BiLoaderAlt } from "react-icons/bi";

const Loader = () => {
  return <BiLoaderAlt className={c.loader} />;
};

const MainLoader = () => {
  return (
    <div className={c.main_container}>
       <div className={c.container}>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
      <div className={c.block}></div>
    </div>
    <p>Yuklanmoqda...</p>
    </div>
   
  );
};

export { Loader, MainLoader };
