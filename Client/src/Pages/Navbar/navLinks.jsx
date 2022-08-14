import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

const LinksWrapper = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	height: 100%;
	list-style: none;
`;

const LinkItem = styled.li`
	height: 100%;
	padding: 0 1.1em;
	color: #222;
	font-weight: 500;
	font-size: 14px;
	align-items: center;
	justify-content: center;
	display: flex;
	border-top: 2px solid transparent;
	transition: all 220ms ease-in-out;

	&:hover {
		border-bottom: 2px solid #ff725e;
	}
`;

const Link = styled.a`
	text-decoration: none;
	color: inherit;
	font-size: inherit;
`;

export function NavLinks(props) {
	return (
		<NavLinksContainer>
			<LinksWrapper>
				<LinkItem>
					<Link
						onClick={() => {
							localStorage.setItem("menu", "STARTUP");
							window.location.reload();
						}}
					>
						Start Up
					</Link>
				</LinkItem>
				<LinkItem>
					<Link
						onClick={() => {
							localStorage.setItem("menu", "INVESTOR");
							window.location.reload();
						}}
					>
						Investors
					</Link>
				</LinkItem>
				<LinkItem>
					<Link
						onClick={() => {
							localStorage.setItem("menu", "MENTOR");
							window.location.reload();
						}}
					>
						Mentors
					</Link>
				</LinkItem>
				<LinkItem>
					<Link
						onClick={() => {
							localStorage.setItem("menu", "INCUBATOR");
							window.location.reload();
						}}
					>
						Incubators
					</Link>
				</LinkItem>
				<LinkItem>
					<Link
						onClick={() => {
							localStorage.setItem("menu", "ACCELERATOR");
							window.location.reload();
						}}
					>
						Accelerators
					</Link>
				</LinkItem>
				<LinkItem>
					<Link
						onClick={() => {
							localStorage.setItem("menu", "CORPORATE");
							window.location.reload();
						}}
					>
						Corporate
					</Link>
				</LinkItem>
			</LinksWrapper>
		</NavLinksContainer>
	);
}
