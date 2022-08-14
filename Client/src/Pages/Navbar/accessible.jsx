import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
<<<<<<< HEAD
	display: flex;
=======
  display: flex;
>>>>>>> 4a7985bcc73314c24474988272411a0ad032244c
`;

const RegisterButton = styled.button`
	border: 0;
	outline: 0;
	padding: 8px 1em;
	color: #fff;
	font-size: 13px;
	font-weight: 600;
	border-radius: 20px;
	background-color: #6adf76;
	background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
	transition: all 240ms ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: #00c9ff;
	}

	&:not(:last-of-type) {
		margin-right: 7px;
	}
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #ff275e;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  

  &:hover {
    color: #fff27e
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
	const logoutHandler = () => {
		localStorage.setItem("user", null);
		window.location.href = "/";
	};
	return (
		<AccessibilityContainer>
			{localStorage.getItem("user") !== "null" &&
			localStorage.getItem("user") !== null ? (
				<LoginButton onClick={logoutHandler}>LogOut</LoginButton>
			) : (
				""
			)}
		</AccessibilityContainer>
	);
}
