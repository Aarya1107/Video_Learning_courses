import React from "react"
import HomePage01 from "./Components/LogOutPage/HomePage01"
import ReportAbuse from "./Components/LogOutPage/ReportAbuse/ReportAbuse"
import Page02 from "./Components/CoursePreviewPage/Page02"
import Share from "./Components/CoursePreviewPage/ShareComponent/Share"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Language from "./Components/LogOutPage/Language/Languages"
import LoginPage from "./Components/LogOutPage/LogIn/LoginPage"
import SignUpPage from "./Components/LogOutPage/SignUpPage/SignUpPage"
import AddToCart from "./Components/LogOutPage/AddToCart/AddToCart"
import CartPage from "./Components/LogOutPage/AddToCart/CartPage"
import PageNotFound from "./PageNotFound/PageNotFound"
import CartPage02 from "./Components/LogOutPage/AddToCart/CartPage02"
import GiftACourse from "./Components/CoursePreviewPage/GiftACourse/GiftACourse"
import Checkout from "./Components/CoursePreviewPage/GiftACourse/Checkout"
import PersonalPlane from "./Components/CoursePreviewPage/PersonalPlane"
import MyLearningMain from "./MyLearningMain"
import MainContent from "./Components/VideoCoursePage/BodyContent/MainContent/MainContent"
import MyList from "./Components/VideoCoursePage/BodyContent/MyLearningPage/MyList"
import Wishlist from "./Components/VideoCoursePage/BodyContent/MyLearningPage/WishList"
import Archieve from "./Components/VideoCoursePage/BodyContent/MyLearningPage/Archived"
import PurchaseHistory from "./Components/VideoCoursePage/BodyContent/MyLearningPage/PurchaseHistory/PurchaseHistory"
import Subscriptions from "./Components/VideoPlayerPage/Subscription/Subsription"
import PaymentMethod from "./Components/VideoPlayerPage/PaymentMethod/PaymentMethod"
import PinnacleCredits from "./Components/VideoPlayerPage/Pinnacle Credits/PinnacleCredits"
import AccountSecurity from "./Components/VideoPlayerPage/AccountSecurity/AccountSecurity"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage01 />} />
          <Route path="/page02" element={<Page02 />} />
          <Route path="/share" element={<Share />} />
          <Route path="/language" element={<Language />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sighup" element={<SignUpPage />} />
          <Route path="/reportAbouse" element={<ReportAbuse />} />
          <Route path="/cartHover" element={<AddToCart />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/error" element={<PageNotFound />} />
          <Route path="/testcart" element={<CartPage02 />} />
          <Route path="/gitACourse" element={<GiftACourse />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/personalPlane" element={<PersonalPlane />} />

          <Route path="/mycourses" element={<MyLearningMain />} />
          <Route path="/all-courses" element={<MainContent />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/archived" element={<Archieve />} />
          <Route path="/purchase-history" element={<PurchaseHistory />} />
          <Route path="/pinnacle-credits" element={<PinnacleCredits />} />
          <Route path="/subscription" element={<Subscriptions />} />
          <Route path="/payment-methods" element={<PaymentMethod />} />
          <Route path="/account-security" element={<AccountSecurity />} />
          <Route path="/account-notification" element={<AccNotification />} />
          <Route path="/learning-tools" element={<LearningTools />} />
          <Route path="/account-help" element={<AccountHelp />} />
          <Route path="/public-profile" element={<PinnacleProfile />} />
          <Route path="/language" element={<Language />} />
          <Route path="/mylearning/*" element={<VideoCoursesMain />}>
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="archieved" element={<Archieve />} />
            <Route path="overview" element={<CourseOverview />} />
            <Route path="reviews" element={<Review />} />
            <Route path="search" element={<SearchBar />} />
            <Route path="announcement" element={<Announcements />} />
            <Route path="notes" element={<NotesEditor />} />
            <Route path="q&a" element={<QandA />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
