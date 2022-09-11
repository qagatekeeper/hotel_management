import {
  AdminHomePage,
  HomePage,
  LoginPage,
  ReservationPage,
  UserInformation,
  UserSettings,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NewsLetters,
  Payment,
  Profit,
  RoomBooking,
} from "./components/adminCom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="admin">
              <Route index element={<LoginPage />} />
              <Route path="home" element={<AdminHomePage />} />
              <Route path="room/:id" element={<RoomBooking />} />
              <Route path="userinformation" element={<UserInformation />} />
              <Route path="usersettings" element={<UserSettings />} />
              {/* <Route path="messages" element={<NewsLetters />} />
              <Route path="payment" element={<Payment />} />
              <Route path="profit" element={<Profit />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
