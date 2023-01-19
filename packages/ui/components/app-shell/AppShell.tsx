import {
	AppShell as MantimeAppShell,
	MantineProvider,
	Header,
	Title,
	Navbar,
	UnstyledButton,
	Group,
	Text,
} from '@mantine/core';

import { BrowserRouter, Outlet, Route, Routes, Link } from 'react-router-dom';
import React from 'react';

export type Route = {
	path: string;
	element: React.FunctionComponent;
};

export type NavLink = {
	label: string;
	path: string;
};

function MainLink({ label, path }: NavLink) {
	return (
		<Link to={path}>
			<UnstyledButton
				sx={(theme) => ({
					display: 'block',
					width: '100%',
					padding: theme.spacing.xs,
					borderRadius: theme.radius.sm,
					color:
						theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
					'&:hover': {
						backgroundColor:
							theme.colorScheme === 'dark'
								? theme.colors.dark[6]
								: theme.colors.gray[0],
					},
				})}
			>
				<Group>
					<Text size='sm'>{label}</Text>
				</Group>
			</UnstyledButton>
		</Link>
	);
}

export const AppShell: React.FunctionComponent<{
	title: string;
	colorScheme?: 'light' | 'dark';
	routes: Route[];
	navLinks: NavLink[];
}> = ({ title, colorScheme, routes, navLinks }) => (
	<BrowserRouter>
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				colorScheme,
			}}
		>
			<MantimeAppShell
				header={
					<Header
						height={60}
						p='xs'
						sx={{
							display: 'flex',
						}}
						styles={(theme) => ({
							main: {
								backgroundColor:
									theme.colorScheme === 'dark'
										? theme.colors.dark[8]
										: theme.colors.gray[0],
							},
						})}
					>
						<Title>{title}</Title>
					</Header>
				}
				navbar={
					<Navbar width={{ base: 300 }} height={500} p='xs'>
						{navLinks.map((link) => (
							<MainLink {...link} key={link.path} />
						))}
					</Navbar>
				}
			>
				<Routes>
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.element />}
						/>
					))}
				</Routes>
				<Outlet></Outlet>
			</MantimeAppShell>
		</MantineProvider>
	</BrowserRouter>
);
