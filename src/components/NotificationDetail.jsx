import React from 'react';
import notificationData from '../data/notifications.json';

const NotificationDetail = ({ seleted }) => {
	const data = notificationData.find(({ id }) => id === seleted);

	return (
		<div className="h-full p-6">
			<div className="border-2 border-black h-full bg-white rounded-lg">
				<h1 className="font-bold text-3xl pl-4 py-5">{data.title}</h1>
				<p className="px-4 text-lg">{data.message}</p>
			</div>
		</div>
	);
};

export default NotificationDetail;
