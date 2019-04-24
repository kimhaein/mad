import Link from "next/link";
import { Modal, notification } from "antd";
const confirm = Modal.confirm;
import { AuthConsumer } from "../../../contexts/authContext";
import "./header.css";

// confirm
const showConfirm = (content: string, onOk: any) => {
  confirm({
    title: "mad-blog",
    content: content,
    onOk() {
      onOk();
    }
  });
};

const Login = ({ onModal }) => {
  return (
    <div className="login" onClick={onModal}>
      login
    </div>
  );
};

const Logout = ({ onLogOut }) => {
  return (
    <div
      className="login"
      onClick={() => {
        showConfirm("로그아웃 하시겠습니까?", onLogOut);
      }}
    >
      logout
    </div>
  );
};

const PostBtn = () => {
  const alertEvt = () => {
    notification["info"]({
      message: "mad-blog",
      description: "로그인 후 이용해 주세요",
      duration: 0
    });
  };
  return (
    <div className="postBtn" onClick={alertEvt}>
      Post
    </div>
  );
};

const MainHeader = () => {
  return (
    <AuthConsumer>
      {({ state, actions }: any) => (
        <header>
          <div className="LeftBtn">
            {state.isLogin ? (
              <Logout onLogOut={actions.onLogOut} />
            ) : (
              <Login onModal={actions.onModal} />
            )}
          </div>
          <div className="logo">
            <Link href="/">
              <a>MAD;</a>
            </Link>
          </div>
          <div className="postBtn">
            {state.isLogin ? (
              <Link href="/write">
                <a>Post</a>
              </Link>
            ) : (
              <PostBtn />
            )}
          </div>
        </header>
      )}
    </AuthConsumer>
  );
};

export default MainHeader;
