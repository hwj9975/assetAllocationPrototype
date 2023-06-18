import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <div className="personelcon">
        <h2>이름: 이석준 </h2>
        <h2>작업 분야: BACK-END, AI 개발</h2>
        <h2>연락처: </h2>
      </div>
      <hr />
      <div className="personelcon">
        <h2>이름: 임준혁</h2>
        <h2>작업 분야: BACK-END, AI 개발</h2>
        <h2>연락처: </h2>
      </div>
      <hr />
      <div className="personelcon">
        <h2>이름: 지현우</h2>
        <h2>작업 분야: FRONT-END</h2>
        <h2>연락처: </h2>
      </div>
    </div>
  );
};

export default Contact;
