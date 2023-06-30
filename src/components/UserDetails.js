import { Link } from "react-router-dom";
import "./search.css";

const UserDetails = ({ userList, onDelete }) => {
    return (
        <>
            {userList.length !== 0 && (
                <div className="notification">
                    Click on a user for more information.
                </div>
            )}
            <div>
                <ul className="userList">
                    {userList.map(({ data }) => (
                        <li className="userList__card" key={data.id}>
                            <div className="userList__card-avatar-container">
                                <Link to={`/user/${data.login}`}>
                                    <img
                                        src={data.avatar_url}
                                        className="userList__card-avatar"
                                        alt={data.login}
                                    ></img>
                                </Link>
                            </div>

                            <div className="userList__card-info">
                                <div className="userList__card-name">
                                    <Link
                                        to={`/user/${data.login}`}
                                        className="Userlink"
                                    >
                                        {data.login}
                                    </Link>
                                </div>

                                <div className="userList_card-info-2">
                                    <div>
                                        Followers: <b>{data.followers}</b>
                                    </div>
                                    <div>
                                        Following: <b>{data.following}</b>
                                    </div>
                                    <div>
                                        Repositories: <b>{data.public_repos}</b>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="userList__button"
                                onClick={(id) => onDelete(data.id)}
                            >
                                {" "}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default UserDetails;
