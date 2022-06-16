import { useState } from 'react';
import NotificationDetail from './components/NotificationDetail';
import Notifications from './components/Notifications';
import notificationData from './data/notifications.json';

function App() {
	const [notificationData, setNotificationData] = useState(1);
	const onSelect = (id) => {
		setNotificationData(id);
	};

	return (
		<div className="flex p-6 gap-6 w-screen min-h-screen justify-center bg-green-100">
			<div className="w-1/6">
				<Notifications seleted={notificationData} onSelect={onSelect} />
			</div>
			<div className="bg-yellow-100 border-2 border-yellow-200 w-4/6">
				<NotificationDetail seleted={notificationData} />
			</div>
		</div>
	);
}

export default App;
