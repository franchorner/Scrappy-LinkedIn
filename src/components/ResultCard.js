import truncateStr from "../util/truncateStr";
function ResultCard({
  profileImage = "https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok=",
  name = "Usuário do Linkedin",
  role = "",
  city = "",
  profileInfo = {
    infoName: "",
    info: "",
  },
  profileLink = "#",
}) {
  const infoName = `${profileInfo.infoName}: `;

  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box shadow">
        <img
          className="rounded-circle profile-img"
          src={profileImage}
          alt="perfil"
        />
        <h3 className="name">{name}</h3>
        <h6 className="city">{city}</h6>
        <p className="title">{role}</p>
        <p className="description">
          <span>{profileImage.infoName ? infoName : ""}</span>
          {profileInfo.info ? truncateStr(profileInfo.info, 140) : ""}
        </p>
        <div className="social">
          <button className="btn btn-primary mr-2" type="submit">
            <a href={profileLink} target="">
              Ver Perfil
            </a>
          </button>
          <button type="button" className="btn btn-outline-warning">
            Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
