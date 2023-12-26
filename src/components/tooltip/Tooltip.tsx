function Message({
	placement,
	children,
}: {
	placement: string;
	children: React.ReactNode;
}) {
	let placementStyles;

	switch (placement) {
		case "top-start":
			placementStyles = " bottom-10 left-0";
			break;

		case "top-end":
			placementStyles = " bottom-10 right-0";
			break;

		case "right-start":
			placementStyles = " top-0 left-[calc(100%_+_1rem)]";
			break;

		case "right-end":
			placementStyles = " bottom-0 left-[calc(100%_+_1rem)]";
			break;

		case "bottom-start":
			placementStyles = " top-10 left-0";
			break;

		case "bottom-end":
			placementStyles = " top-10 right-0";
			break;

		case "left-start":
			placementStyles = " top-0 right-[calc(100%_+_1rem)]";
			break;

		case "left-end":
			placementStyles = " bottom-0 right-[calc(100%_+_1rem)]";
			break;

		case "bottom":
		default:
			placementStyles = " top-10";
			break;
	}

	return (
		<div
			className={`absolute bg-white rounded-md scale-0 transition-all group-hover:scale-100 shadow-lg ring-1 ring-black ring-opacity-5 z-20${placementStyles}`}
		>
			{children}
		</div>
	);
}

export default function Tooltip({ children }: { children: React.ReactNode }) {
	return <div className="group relative flex">{children}</div>;
}

Tooltip.Message = Message;
