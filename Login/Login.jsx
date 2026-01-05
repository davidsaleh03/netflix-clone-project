import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";
import SignIn from "../../components/SignInUp/SignUp";
import SignUp from "../../components/SignInUp/SignIn";
import SignUpBtn from "../../components/SignInUp/SignUpBtn";
import SignInBtn from "../../components/SignInUp/SignInBtn";
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import FAQ from "../../components/FAQ/FAQ";

const Login = () => {
  const [log, setLog] = useState(false);

  function logIn() {
    setLog((prevLog) => !prevLog);
  }

  return (
    <div className="login">
      <div className="login__area">
        <div className="login__area--top">
          <div className="login__top">
            <img src={Logo} alt="" className="login__img" />
            <div className="top__right">
              <select name="LanguageSelector" className="top__selector">
                <option>English</option>
              </select>
              {log ? (
                <SignUpBtn onClick={logIn} />
              ) : (
                <SignInBtn onClick={logIn} />
              )}
            </div>
          </div>
        </div>
        {log ? <SignUp onClick={logIn} /> : <SignIn onClick={logIn} />}
      </div>
      <div className="login__more">
        <h1 className="login__text">Frequently Asked Questions</h1>
        <FAQ
          title="What is Netflix?"
          p="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want – all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!"
        />
        <FAQ
          title="How much does Netflix cost?"
          p="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $7.99 to $24.99/month (pre-tax)."
        />
        <FAQ
          title="Where can I watch?"
          p="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <FAQ
          title="How do I cancel?"
          p="Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <FAQ
          title="What can I watch on Netflix?"
          p="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        />
        <FAQ
          title="Is Netflix good for kids?"
          p="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you do not want kids to see."
        />
      </div>
     <div className='footer'>
          <div className="footer__icons">
            <img src={facebook_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={youtube_icon} alt="" />
          </div>
          <ul className="footer__links">
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </ul>
          <p className="copyright__text">@2025 Netflix, Inc</p>
        </div>
    </div>
    
  );
};

export default Login;
