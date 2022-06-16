import React from 'react';
import NotificationDetail from './NotificationDetail';
import notficationData from '../data/notifications.json';

const Notifications = ({ seleted, onSelect }) => {
	return (
		<div className="h-full bg-gray-100 border-2 border-black">
			<ul className="flex flex-col items-center ">
				{notficationData.map(({ id, title }) => (
					<li
						className={
							seleted === id && 'bg-blue-200 border-2 border-blue-700 '
						}
						onClick={() => onSelect(id)}
						key={id}
					>
						{title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Notifications;
