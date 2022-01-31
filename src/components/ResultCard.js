function ResultCard({
  profileImage = "https://media-exp1.licdn.com/dms/image/C4D03AQH7M-wunPlj8A/profile-displayphoto-shrink_100_100/0/1542371921673?e=1648684800&v=beta&t=yIDH1rnAsGrozkavHVSjeBalQ9eyWbf1SvGrKW-SeuI",
  name = "Rômulo Machado",
  role = "Full Stack Developer | Node | React",
  city = "Parobé, RS",
  profileInfo = {
    infoName: "Atual",
    info: "Software Developer na Meta - ...stack, utilizando JavaScript, TypeScript com react e node.js.",
  },
  profileLink = "https://www.linkedin.com/in/machadoromulo?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABDpx7AB0Ndy0wGLv4I2KLd5yZPZLw8tG30",
}) {
  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <img className="rounded-circle" src={profileImage} />
        <h3 className="name">{name}</h3>
        <h6 className="city">{city}</h6>
        <p className="title">{role}</p>
        <p className="description">
          <span>{profileInfo.infoName}: </span>
          {profileInfo.info}
        </p>
        <div className="social">
          <button className="btn btn-primary" type="submit">
            <a href={profileLink} target="">
              Ver Perfil
            </a>
          </button>
          <button type="button" className="btn btn-outline-danger">
            Não Verificado
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
