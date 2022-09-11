import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  NewsLetters,
  Payment,
  Profit,
  Status,
} from "../../components/adminCom";

const NavPage = ({ activeTab }) => {
  console.log(activeTab);
  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<Status />} />
          <Route path="/admin/messages" element={<NewsLetters />} />
          <Route path="/admin/payment" element={<Payment />} />
          <Route path="/admin/profit" element={<Profit />} />
        </Routes>
      </section>
    </>
  );
};

export default NavPage;
