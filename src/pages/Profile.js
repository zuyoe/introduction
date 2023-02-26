import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile scroll">
      <div className="inner">
        {/* 자기소개(인사팀) : 약력, 학력, 업무, 교육, 성격, MBTI */}
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          Profile
        </h2>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="profile-box">
            
            <img src={`${path}/images/profile_1.png`} alt="로고"></img>
          </div>
          <div className="profile-box">
            <img src={`${path}/images/profile_2.png`} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
