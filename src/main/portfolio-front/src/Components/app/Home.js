import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mt-5">
            <div
                className="jumbotron p-5 text-center"
                style={{
                    background: "rgba(0, 0, 0, 0.9)", // 검은색 반투명 배경
                    color: "white",
                    borderRadius: "15px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
                }}
            >
                <h1
                    className="display-4"
                    style={{
                        fontWeight: "bold",
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"
                    }}
                >
                    당신의 포트폴리오를 관리하세요.
                </h1>
                <p className="lead mt-3" style={{ fontSize: "1.3rem" }}>
                    포트폴리오를 간편하게 관리하고 더 많은 사람들에게 알리세요.
                </p>
                <hr className="my-4" style={{ borderColor: "rgba(255, 255, 255, 0.6)" }} />
                <p
                    style={{
                        fontSize: "1.1rem",
                        fontStyle: "italic",
                        marginBottom: "20px"
                    }}
                >
                    다른 이용자들이 올린 포트폴리오 확인하러가기
                </p>
                <Link to="/bbslist">
                    <button
                        className="btn btn-light btn-lg"
                        style={{
                            padding: "10px 25px",
                            fontSize: "1.2rem",
                            borderRadius: "25px",
                            background: "white",
                            color: "#4e54c8",
                            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.3s ease"
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.transform = "scale(1)")
                        }
                    >
                        <i className="fas fa-list-ul"></i> Go to Board List
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;

